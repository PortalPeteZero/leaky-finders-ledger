'use client'

import Link from 'next/link'

export function Masthead() {
  return (
    <header className="site-masthead">
      <div className="container">
        <div className="masthead-inner">
          <Link href="/" className="masthead-title">
            THE LEAKY FINDERS LEDGER
            <span className="masthead-subtitle">By Order of the Leaky Finders</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
