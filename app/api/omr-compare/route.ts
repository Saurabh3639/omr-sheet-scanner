import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import os from "os";
import { v4 as uuidv4 } from "uuid";

interface OMRResult {
  correct: number;
  wrong: number;
  unanswered: number;
  total: number;
  score: number;
}

async function saveBlobToFile(blob: Blob, filename: string): Promise<string> {
  const buffer = Buffer.from(await blob.arrayBuffer());
  const filePath = path.join(os.tmpdir(), filename);
  await writeFile(filePath, buffer);
  return filePath;
}

async function processOMR(answerKeyPath: string, studentSheetPath: string): Promise<OMRResult> {
  return new Promise((resolve, reject) => {
    const python = spawn(
      "E:\\Nextjs\\omr-sheet-scanner\\.venv\\Scripts\\python.exe",
      ["omr_process.py", answerKeyPath, studentSheetPath]
    );

    let output = "";
    let errorOutput = "";

    python.stdout.on("data", (data) => {
      output += data;
    });

    python.stderr.on("data", (data) => {
      errorOutput += data;
    });

    python.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(errorOutput || "Python OMR processing failed"));
        return;
      }

      try {
        const result = JSON.parse(output) as OMRResult;
        resolve(result);
      } catch (e) {
        reject(new Error("Invalid Python output format"));
      }
    });

    python.on("error", (err) => {
      reject(new Error(`Failed to start Python process: ${err.message}`));
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const answerKey = formData.get("answerKey");
    const studentSheets = formData.getAll("studentSheets");

    // Validate input
    if (!(answerKey instanceof Blob) || !studentSheets.length) {
      return NextResponse.json(
        { error: "Missing required files" },
        { status: 400 }
      );
    }

    // Validate file types
    if (!answerKey.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Answer key must be an image file" },
        { status: 400 }
      );
    }

    // Generate unique filenames
    const answerKeyPath = await saveBlobToFile(
      answerKey,
      `answer_key_${uuidv4()}.${answerKey.type.split("/")[1]}`
    );

    // Process each student sheet
    const results = await Promise.all(
      studentSheets.map(async (sheet) => {
        if (!(sheet instanceof Blob)) {
          throw new Error("Invalid student sheet file");
        }

        if (!sheet.type.startsWith("image/")) {
          throw new Error("Student sheet must be an image file");
        }

        const studentSheetPath = await saveBlobToFile(
          sheet,
          `student_sheet_${uuidv4()}.${sheet.type.split("/")[1]}`
        );

        try {
          const result = await processOMR(answerKeyPath, studentSheetPath);
          await unlink(studentSheetPath);
          return result;
        } catch (error) {
          await unlink(studentSheetPath);
          throw error;
        }
      })
    );

    // Clean up answer key
    await unlink(answerKeyPath);

    return NextResponse.json({
      success: true,
      results: results.length === 1 ? results[0] : results,
    });
  } catch (error) {
    console.error("OMR processing error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
