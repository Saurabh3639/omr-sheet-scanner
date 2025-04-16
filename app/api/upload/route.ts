import { NextResponse } from "next/server"
import { PrismaClient } from "@/app/generated/prisma"
import { getSession } from "next-auth/react"

// Create a single instance of PrismaClient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getSession()
    console.log("Session:", session)

    // Fix type issue for session.user
    const userId = (session as any)?.user?.id
    console.log("UserId:", userId)

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get form data
    const formData = await req.formData()
    console.log("Form data received")

    const answerSheet = formData.get("answerSheet") as File
    console.log("Answer sheet:", answerSheet?.name, answerSheet?.size)

    const studentSheets = formData.getAll("studentSheets") as File[]
    console.log("Student sheets:", studentSheets.map(f => ({ name: f.name, size: f.size })))

    if (!answerSheet || studentSheets.length === 0) {
      return NextResponse.json(
        { error: "Missing required files" },
        { status: 400 }
      )
    }

    // TODO: Process files with Tesseract.js
    // For now, just store file metadata in the database
    console.log("Creating database entry...")
    const uploadSession = await prisma.answerSheet.create({
      data: {
        userId,
        fileName: answerSheet.name,
        fileSize: answerSheet.size,
        status: "PROCESSING",
        studentSheets: {
          create: studentSheets.map((file) => ({
            fileName: file.name,
            fileSize: file.size,
            status: "PENDING",
          })),
        },
      },
      include: {
        studentSheets: true,
      },
    })
    console.log("Database entry created:", uploadSession.id)

    return NextResponse.json({
      message: "Upload successful",
      sessionId: uploadSession.id,
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        { error: "Failed to process upload", details: error.message },
        { status: 500 }
      )
    } else {
      console.error('Unknown error', error);
      return NextResponse.json(
        { error: "Unknown error", details: error },
        { status: 500 }
      )
    }
  }
}
