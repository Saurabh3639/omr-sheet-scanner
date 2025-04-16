"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type ResultType = { correct: number; wrong: number; unanswered: number };

export default function UploadPage() {
  const [answerKeyFile, setAnswerKeyFile] = useState<File | null>(null);
  const [studentSheets, setStudentSheets] = useState<FileList | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // File validation helper
  const isValidFile = (file: File) => {
    return (
      file.type === "application/json" ||
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.name.endsWith(".json")
    );
  };

  const handleAnswerKeyUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!isValidFile(file)) {
      toast.error("Invalid file type for Answer Key", { description: "Please upload a PNG, JPEG, or JSON file." });
      return;
    }
    setAnswerKeyFile(file);
  };

  const handleStudentSheetsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const invalidFiles = Array.from(files).filter(f => !isValidFile(f));
    if (invalidFiles.length > 0) {
      toast.error("Invalid file(s) for Student Sheets", { description: "Only PNG, JPEG, or JSON files are allowed." });
      return;
    }
    setStudentSheets(files);
  };

  const handleCompare = async () => {
    if (!answerKeyFile || !studentSheets || studentSheets.length === 0) {
      toast.error("Missing files", { description: "Upload both the answer key and at least one student sheet." });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("answerKey", answerKeyFile);
      Array.from(studentSheets).forEach(file => {
        formData.append("studentSheets", file);
      });
      const res = await fetch("/api/omr-compare", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to compare sheets");
      const data = await res.json();
      setResult(data);
      toast.success("Comparison complete");
    } catch (error: any) {
      toast.error("Comparison failed", { description: error.message || "An error occurred." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>OMR Sheet Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="answerKey">Answer Key Sheet (JSON, PNG, JPEG)</Label>
            <Input
              id="answerKey"
              type="file"
              accept="image/png, image/jpeg, .json"
              onChange={handleAnswerKeyUpload}
              className="mt-2"
              aria-label="Upload answer key file"
            />
            {answerKeyFile && (
              <span className="text-sm text-muted-foreground block mt-1">
                {answerKeyFile.name}
              </span>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="studentSheets">Student Answer Sheet(s) (JSON, PNG, JPEG)</Label>
            <Input
              id="studentSheets"
              type="file"
              accept="image/png, image/jpeg, .json"
              onChange={handleStudentSheetsUpload}
              className="mt-2"
              multiple
              aria-label="Upload student sheet files"
            />
            {studentSheets && (
              <span className="text-sm text-muted-foreground block mt-1">
                {studentSheets.length} file{studentSheets.length > 1 ? "s" : ""} selected
              </span>
            )}
          </div>
          <Button
            className="w-full mt-4"
            onClick={handleCompare}
            disabled={isLoading || !answerKeyFile || !studentSheets || studentSheets.length === 0}
            aria-busy={isLoading}
          >
            {isLoading ? "Comparing..." : "Compare Sheets"}
          </Button>
          {result && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Result:</h3>
              <ul>
                <li>Correct Answers: <span className="font-bold">{result.correct}</span></li>
                <li>Wrong Answers: <span className="font-bold">{result.wrong}</span></li>
                <li>Unanswered: <span className="font-bold">{result.unanswered}</span></li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
