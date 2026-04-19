import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <Link href="/" className="footer-brand">
              The Leaky Finders Ledger
            </Link>
            <span className="footer-canary">A Canary Detect Publication</span>
          </div>
          <nav className="footer-links">
            <a href="https://canary-detect.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Canary Detect
            </a>
            <a href="https://theleakyfinders.es" target="_blank" rel="noopener noreferrer" className="footer-link">
              The Leaky Finders
            </a>
            <a href="https://www.facebook.com/canaryleakdetect" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
          </nav>
        </div>
        <p className="footer-stamp">By Order of the Leaky Finders</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Canary Detect. All rights reserved.</p>
      </div>
    </footer>
  )
}
