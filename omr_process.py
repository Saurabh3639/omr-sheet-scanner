import sys
import json
import cv2
import numpy as np
import logging
from typing import List, Tuple, Optional
from dataclasses import dataclass

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class OMRConfig:
    min_bubble_size: int = 20
    max_bubble_size: int = 60
    min_aspect_ratio: float = 0.7
    max_aspect_ratio: float = 1.3
    min_bubble_area: int = 200
    row_threshold: int = 20
    fill_threshold: int = 200
    use_gpu: bool = True

def process_omr(image_path: str, num_questions: int = 10, choices_per_question: int = 4, config: Optional[OMRConfig] = None) -> List[int]:
    """
    Detect marked bubbles in an OMR sheet image.
    Returns a list: selected choice index per question (0-based), or -1 if no mark detected.
    """
    if config is None:
        config = OMRConfig()

    try:
        # Load image with GPU acceleration if available
        if config.use_gpu and cv2.cuda.getCudaEnabledDeviceCount() > 0:
            image = cv2.UMat(cv2.imread(image_path))
        else:
            image = cv2.imread(image_path)
        
        if image is None:
            raise ValueError(f"Could not read image: {image_path}")

        # Convert to grayscale
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        blurred = cv2.GaussianBlur(gray, (5, 5), 0)
        thresh = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

        # Find contours
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        # Filter contours by size
        bubble_contours = []
        for cnt in contours:
            (x, y, w, h) = cv2.boundingRect(cnt)
            aspect_ratio = w / float(h)
            area = cv2.contourArea(cnt)
            if (config.min_bubble_size < w < config.max_bubble_size and 
                config.min_bubble_size < h < config.max_bubble_size and 
                config.min_aspect_ratio < aspect_ratio < config.max_aspect_ratio and 
                area > config.min_bubble_area):
                bubble_contours.append(cnt)

        # Sort contours
        def sort_contours(cnts: List[np.ndarray], method: str = "top-to-bottom") -> Tuple[List[np.ndarray], List[Tuple[int, int, int, int]]]:
            boundingBoxes = [cv2.boundingRect(c) for c in cnts]
            if method == "top-to-bottom":
                cnts, boundingBoxes = zip(*sorted(zip(cnts, boundingBoxes), key=lambda b: b[1][1]))
            elif method == "left-to-right":
                cnts, boundingBoxes = zip(*sorted(zip(cnts, boundingBoxes), key=lambda b: b[1][0]))
            return list(cnts), list(boundingBoxes)

        bubble_contours, _ = sort_contours(bubble_contours, method="top-to-bottom")

        # Group bubbles into rows (questions)
        rows = []
        row = []
        last_y = None
        for cnt in bubble_contours:
            x, y, w, h = cv2.boundingRect(cnt)
            if last_y is None or abs(y - last_y) < config.row_threshold:
                row.append(cnt)
                last_y = y
            else:
                if row:
                    row, _ = sort_contours(row, method="left-to-right")
                    rows.append(row)
                row = [cnt]
                last_y = y
        if row:
            row, _ = sort_contours(row, method="left-to-right")
            rows.append(row)

        # Only keep the expected number of rows/questions
        rows = rows[:num_questions]

        answers = []
        for row in rows:
            bubble_values = []
            for cnt in row[:choices_per_question]:
                mask = np.zeros(gray.shape, dtype="uint8")
                cv2.drawContours(mask, [cnt], -1, 255, -1)
                mean = cv2.mean(gray, mask=mask)[0]
                bubble_values.append(mean)
            
            if bubble_values:
                min_val = min(bubble_values)
                if min_val < config.fill_threshold:
                    filled_idx = bubble_values.index(min_val)
                else:
                    filled_idx = -1
                answers.append(filled_idx)
            else:
                answers.append(-1)
        
        return answers

    except Exception as e:
        logger.error(f"Error processing OMR sheet: {str(e)}")
        raise

def main():
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Usage: omr_process.py <answer_key_image> <student_sheet_image>"}))
        sys.exit(1)
    
    answer_key_path = sys.argv[1]
    student_sheet_path = sys.argv[2]

    try:
        config = OMRConfig()
        answer_key = process_omr(answer_key_path, config=config)
        student_answers = process_omr(student_sheet_path, config=config)
    except Exception as e:
        print(json.dumps({"error": f"Image processing failed: {str(e)}"}))
        sys.exit(1)

    # Compare answers
    correct = 0
    wrong = 0
    unanswered = 0
    n = min(len(answer_key), len(student_answers))
    
    for i in range(n):
        if answer_key[i] == -1 or student_answers[i] == -1:
            unanswered += 1
        elif answer_key[i] == student_answers[i]:
            correct += 1
        else:
            wrong += 1
    
    unanswered += max(0, len(answer_key) - n)

    result = {
        "correct": correct,
        "wrong": wrong,
        "unanswered": unanswered,
        "total": len(answer_key),
        "score": (correct / len(answer_key)) * 100 if answer_key else 0
    }
    
    print(json.dumps(result))

if __name__ == "__main__":
    main()
