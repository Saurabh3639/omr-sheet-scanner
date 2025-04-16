import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import os from "os";

async function saveBlobToFile(blob: Blob, filename: string): Promise<string> {
  const buffer = Buffer.from(await blob.arrayBuffer());
  const filePath = path.join(os.tmpdir(), filename);
  await writeFile(filePath, buffer);
  return filePath;
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const answerKey = formData.get("answerKey");
  const studentSheets = formData.getAll("studentSheets");

  if (!(answerKey instanceof Blob) || !(studentSheets[0] instanceof Blob)) {
    return NextResponse.json({ error: "Missing files" }, { status: 400 });
  }

  // Save files to temp
  const answerKeyPath = await saveBlobToFile(answerKey, `answer_key_${Date.now()}`);
  const studentSheetPath = await saveBlobToFile(studentSheets[0] as Blob, `student_sheet_${Date.now()}`);

  // Call Python script
  const python = spawn("E:\\Nextjs\\omr-sheet-scanner\\.venv\\Scripts\\python.exe", ["omr_process.py", answerKeyPath, studentSheetPath]);
  // const python = spawn("python", ["omr_process.py", answerKeyPath, studentSheetPath]);
  let output = "";
  for await (const chunk of python.stdout) {
    output += chunk;
  }
  let errorOutput = "";
  for await (const chunk of python.stderr) {
    errorOutput += chunk;
  }
  const exitCode = await new Promise((resolve) => python.on("close", resolve));

  // Clean up temp files
  await unlink(answerKeyPath);
  await unlink(studentSheetPath);

  if (exitCode !== 0) {
    return NextResponse.json({ error: errorOutput || "Python OMR failed" }, { status: 500 });
  }

  try {
    const result = JSON.parse(output);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: "Invalid Python output" }, { status: 500 });
  }
}
