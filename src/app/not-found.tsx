import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8F5F0' }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#1A1A1A' }}>
          The investigation came up empty
        </h1>
        <p className="text-lg mb-8" style={{ fontFamily: 'Crimson Text, Georgia, serif', color: '#453729' }}>
          Whatever you were looking for, it is not here. Possibly it never was.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm tracking-widest uppercase"
          style={{ border: '1px solid hsl(43, 35%, 45%)', color: 'hsl(43, 35%, 45%)' }}
        >
          Back to the Ledger
        </Link>
      </div>
    </main>
  )
}
