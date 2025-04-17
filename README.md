# OMR Sheet Scanner

A modern web application for Optical Mark Recognition (OMR) that automatically scans and grades multiple-choice answer sheets. Built with Next.js and Python.

## Features

- 🖼️ Upload and process multiple answer sheets simultaneously
- 📊 Automatic bubble detection and answer extraction
- ⚡ Fast processing with GPU acceleration support
- 📱 Responsive web interface
- 🔒 Secure file handling and processing
- 📈 Detailed scoring and analytics

## Tech Stack

- **Frontend**: Next.js 13+, TypeScript, Tailwind CSS
- **Backend**: Python, OpenCV
- **Image Processing**: OpenCV with GPU acceleration
- **API**: Next.js API Routes

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- OpenCV with CUDA support (optional, for GPU acceleration)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/omr-sheet-scanner.git
cd omr-sheet-scanner
```

2. Install Python dependencies:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory:
```env
# Add any environment variables here
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`

3. Upload your answer key and student answer sheets

4. View the processed results and scores

## API Endpoints

- `POST /api/omr-compare`: Process and compare answer sheets
  - Accepts multipart form data with `answerKey` and `studentSheets` fields
  - Returns JSON with scoring results

## Configuration

The OMR processing can be configured through the `OMRConfig` class in `omr_process.py`:

```python
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
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenCV for image processing capabilities
- Next.js team for the amazing framework
- All contributors and users of this project
