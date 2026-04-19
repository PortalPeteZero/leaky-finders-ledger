import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Masthead } from '@/components/layout/Masthead'
import { Footer } from '@/components/layout/Footer'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { ShareBar } from '@/components/layout/ShareBar'
import { ArticleCard } from '@/components/layout/ArticleCard'
import { ReadingProgress } from '@/components/layout/ReadingProgress'
import { BackToTop } from '@/components/layout/BackToTop'
import { getArticle, getRelatedArticles, getAllArticleSlugs } from '@/lib/articles'

const DOMAIN = 'https://leaky-ledger.com'
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug)
  if (!article) return { title: 'Article not found' }

  const url = `${DOMAIN}/articles/${article.slug}`
  const ogImage = getImageUrl(article.hero_image)

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url,
      publishedTime: article.published_at || undefined,
      authors: [article.author],
      siteName: 'The Leaky Finders Ledger',
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
    alternates: { canonical: url },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle(params.slug)
  if (!article) notFound()

  const related = await getRelatedArticles(article.slug, article.category)
  const url = `${DOMAIN}/articles/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: getImageUrl(article.hero_image),
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'The Leaky Finders Ledger',
      logo: { '@type': 'ImageObject', url: `${DOMAIN}/favicon.svg` },
    },
    datePublished: article.published_at || undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <Masthead />
      <main className="article-shell container" id="top">
        <BlockRenderer blocks={article.content} />
        <ShareBar url={url} title={article.title} />
        {related.length > 0 && (
          <div className="related-strip">
            <p className="related-heading">More from the Ledger</p>
            <div className="related-grid">
              {related.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
