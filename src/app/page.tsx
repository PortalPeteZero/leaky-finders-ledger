export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8F5F0' }}>
      <div className="text-center">
        <p className="text-sm tracking-[0.24em] uppercase text-gray-500 mb-4" style={{ fontFamily: 'sans-serif' }}>
          Coming Soon
        </p>
        <h1 className="text-6xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#1A1A1A' }}>
          The Leaky Finders
        </h1>
        <p className="text-2xl mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#2A2A2A' }}>
          Ledger
        </p>
        <div className="w-24 h-px mx-auto mb-6" style={{ backgroundColor: 'hsl(43, 35%, 45%)' }} />
        <p className="text-lg" style={{ fontFamily: 'Crimson Text, Georgia, serif', color: '#453729' }}>
          By Order of the Leaky Finders
        </p>
      </div>
    </main>
  )
}
