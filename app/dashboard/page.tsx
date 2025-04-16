import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Answer Sheets</CardTitle>
          <CardDescription>Manage answer key sheets</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Total sheets uploaded</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Student Sheets</CardTitle>
          <CardDescription>Manage student answer sheets</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Total sheets processed</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Results</CardTitle>
          <CardDescription>View analysis and scores</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Total results generated</p>
        </CardContent>
      </Card>
    </div>
  )
}
