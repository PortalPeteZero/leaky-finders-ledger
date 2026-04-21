import Link from 'next/link'
import Image from 'next/image'
import { Masthead } from '@/components/layout/Masthead'
import { Footer } from '@/components/layout/Footer'
import { CategoryFilter } from '@/components/layout/CategoryFilter'
import { getPublishedArticles, getFeaturedArticle } from '@/lib/articles'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

const categoryLabels: Record<string, string> = {
  'field-report': 'Field Report',
  'commentary': 'Commentary',
  'insurance': 'Insurance & Advice',
  'tech': 'Tech & Trades',
  'local-feature': 'Local Feature',
}

export const revalidate = 3600

export default async function HomePage() {
  const [featured, allArticles] = await Promise.all([
    getFeaturedArticle(),
    getPublishedArticles(),
  ])

  const gridArticles = allArticles.filter(a => !(a.is_featured && a.id === featured?.id))

  return (
    <>
      <Masthead />
      <main>
        {featured && (
          <section className="hero-section">
            <div className="hero-inner">
              <div className="hero-copy">
                <span className="hero-category">{categoryLabels[featured.category] || featured.category}</span>
                <Link href={`/articles/${featured.slug}`} className="hero-title">
                  {featured.title}
                </Link>
                <p className="hero-excerpt">{featured.excerpt}</p>
                <Link href={`/articles/${featured.slug}`} className="hero-read-btn">
                  Read the full piece →
                </Link>
              </div>
              <div className="hero-image">
                <Image
                  src={getImageUrl(featured.hero_image)}
                  alt={featured.title}
                  width={800}
                  height={600}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>
        )}

        <div className="container" style={{ paddingTop: '2.5rem' }}>
          <div style={{ textAlign: 'center', paddingBottom: '2.5rem' }}>
            <div style={{ height: 1, background: 'var(--gold)', opacity: 0.4, maxWidth: 400, margin: '0 auto 0.6rem' }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>
              By Order of the Leaky Finders
            </span>
            <div style={{ height: 1, background: 'var(--gold)', opacity: 0.4, maxWidth: 400, margin: '0.6rem auto 0' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            fontWeight: 700,
            color: 'var(--ink)',
            borderBottom: '2px solid var(--gold)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem',
            display: 'inline-block',
          }}>
            All Dispatches
          </h2>

          {gridArticles.length > 0 ? (
            <CategoryFilter articles={gridArticles} />
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--ink-mid)' }}>
                The next dispatch is being prepared. By Order of the Leaky Finders.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
