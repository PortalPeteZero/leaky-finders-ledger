import Link from 'next/link'
import { Masthead } from '@/components/layout/Masthead'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Masthead />
      <main>
        <div className="not-found-shell">
          <span className="not-found-number">404</span>
          <h1 className="not-found-title">The investigation came up empty</h1>
          <p className="not-found-body">
            Whatever you were looking for, it is not here. Possibly it never was.
            The Leaky Finders have checked the records.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.6rem 1.4rem',
              background: 'var(--gold)',
              color: '#fff',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: 1,
            }}
          >
            Back to the Ledger
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
