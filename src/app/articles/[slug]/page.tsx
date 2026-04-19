import { notFound } from 'next/navigation'

// Placeholder - will be built in Phase 2 with full BlockRenderer
export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F8F5F0' }}>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-sm tracking-[0.24em] uppercase text-gray-500 mb-4">Article</p>
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-4 text-gray-600">Article page — Phase 2 build</p>
      </div>
    </main>
  )
}
