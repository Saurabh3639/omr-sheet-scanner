import sys
import json
import cv2
import numpy as np

def process_omr(image_path, num_questions=10, choices_per_question=4):
    """
    Detect marked bubbles in an OMR sheet image.
    Returns a list: selected choice index per question (0-based), or -1 if no mark detected.
    """
    # Load image
    image = cv2.imread(image_path)
    if image is None:
        raise ValueError(f"Could not read image: {image_path}")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    thresh = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours by size (tune these for your sheet)
    bubble_contours = []
    for cnt in contours:
        (x, y, w, h) = cv2.boundingRect(cnt)
        aspect_ratio = w / float(h)
        area = cv2.contourArea(cnt)
        if 20 < w < 60 and 20 < h < 60 and 0.7 < aspect_ratio < 1.3 and area > 200:
            bubble_contours.append(cnt)

    # Sort contours top-to-bottom, then left-to-right within each row
    def sort_contours(cnts, method="top-to-bottom"):
        boundingBoxes = [cv2.boundingRect(c) for c in cnts]
        if method == "top-to-bottom":
            cnts, boundingBoxes = zip(*sorted(zip(cnts, boundingBoxes), key=lambda b: b[1][1]))
        elif method == "left-to-right":
            cnts, boundingBoxes = zip(*sorted(zip(cnts, boundingBoxes), key=lambda b: b[1][0]))
        return cnts, boundingBoxes

    bubble_contours, _ = sort_contours(bubble_contours, method="top-to-bottom")

    # Group bubbles into rows (questions)
    rows = []
    row = []
    last_y = None
    for cnt in bubble_contours:
        x, y, w, h = cv2.boundingRect(cnt)
        if last_y is None or abs(y - last_y) < 20:
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
        # For each bubble in the row, compute the mean pixel value inside the contour
        bubble_values = []
        for cnt in row[:choices_per_question]:
            mask = np.zeros(gray.shape, dtype="uint8")
            cv2.drawContours(mask, [cnt], -1, 255, -1)
            mean = cv2.mean(gray, mask=mask)[0]
            bubble_values.append(mean)
        # The darkest bubble is considered filled (lowest mean value)
        if bubble_values:
            min_val = min(bubble_values)
            if min_val < 200:  # Threshold to detect if any bubble is marked
                filled_idx = bubble_values.index(min_val)
            else:
                filled_idx = -1  # No mark detected
            answers.append(filled_idx)
        else:
            answers.append(-1)
    return answers

def main():
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Usage: omr_process.py <answer_key_image> <student_sheet_image>"}))
        sys.exit(1)
    answer_key_path = sys.argv[1]
    student_sheet_path = sys.argv[2]

    try:
        # Extract answers from both images
        answer_key = process_omr(answer_key_path)
        student_answers = process_omr(student_sheet_path)
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
    # If answer key is longer, count the rest as unanswered
    unanswered += max(0, len(answer_key) - n)

    print(json.dumps({
        "correct": correct,
        "wrong": wrong,
        "unanswered": unanswered
    }))

if __name__ == "__main__":
    main()
