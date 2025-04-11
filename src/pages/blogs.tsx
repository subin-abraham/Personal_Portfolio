'use client'
export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-6">
        {/* Blog posts will go here */}
        <article className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post Title</h2>
          <p className="text-gray-600 mb-2">Published on January 1, 2023</p>
          <p>Blog post excerpt goes here...</p>
        </article>
      </div>
    </div>
  )
}
