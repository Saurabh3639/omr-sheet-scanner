export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6">
        <nav className="flex items-center space-x-4">
          <a
            href="/dashboard"
            className="text-sm font-medium hover:underline"
          >
            Dashboard
          </a>
          <a
            href="/dashboard/upload"
            className="text-sm font-medium hover:underline"
          >
            Upload Sheet
          </a>
          <a
            href="/dashboard/results"
            className="text-sm font-medium hover:underline"
          >
            Results
          </a>
        </nav>
        {children}
      </div>
    </div>
  )
}
