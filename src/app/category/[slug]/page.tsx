import type { Metadata } from 'next'
import { Masthead } from '@/components/layout/Masthead'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/layout/ArticleCard'
import { getArticlesByCategory } from '@/lib/articles'

const CATEGORY_LABELS: Record<string, string> = {
  'field-report': 'Field Reports',
  'commentary': 'Commentary',
  'insurance': 'Insurance & Advice',
  'tech': 'Tech & Trades',
  'local-feature': 'Local Features',
}

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = CATEGORY_LABELS[params.slug] || params.slug
  return {
    title: label,
    description: `All ${label} dispatches from The Leaky Finders Ledger.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const articles = await getArticlesByCategory(params.slug)
  const label = CATEGORY_LABELS[params.slug] || params.slug

  return (
    <>
      <Masthead />
      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            display: 'block',
            marginBottom: '0.5rem',
          }}>
            Category
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'var(--ink)',
          }}>
            {label}
          </h1>
        </div>
        <div className="article-grid">
          {articles.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
        {articles.length === 0 && (
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            No dispatches in this category yet.
          </p>
        )}
      </main>
      <Footer />
    </>
  )
}
