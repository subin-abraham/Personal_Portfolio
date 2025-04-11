'use client'
export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project cards will go here */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Project Title</h2>
          <p>Project description goes here</p>
        </div>
      </div>
    </div>
  )
}
