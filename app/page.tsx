import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to OMR Scanner</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Upload and analyze OMR sheets with AI-powered accuracy
        </p>
        <div className="space-x-4">
          <a
            href="/dashboard"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="/dashboard/upload"
            className="inline-block rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Upload Sheet
          </a>
        </div>
      </div>
    </div>
  )
}
