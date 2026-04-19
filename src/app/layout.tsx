import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-playfair',
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-crimson',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'The Leaky Finders Ledger',
    template: '%s | The Leaky Finders Ledger',
  },
  description: 'Long-form articles: funny, informative, and investigative. By Order of the Leaky Finders.',
  metadataBase: new URL('https://leaky-ledger.com'),
  openGraph: {
    siteName: 'The Leaky Finders Ledger',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable} ${sourceSans.variable}`}>
      <body style={{
        fontFamily: "var(--font-crimson, 'Crimson Text', Georgia, serif)",
      }}>
        {children}
      </body>
    </html>
  )
}
