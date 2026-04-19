import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/types'

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

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const href = `/articles/${article.slug}`
  const imageUrl = getImageUrl(article.hero_image)
  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <Link href={href} className="article-card">
      <div className="article-card-image">
        <Image
          src={imageUrl}
          alt={article.title}
          width={600}
          height={337}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="article-card-body">
        <span className="article-card-category">{categoryLabels[article.category] || article.category}</span>
        <span className="article-card-title">{article.title}</span>
        <p className="article-card-excerpt">{article.excerpt}</p>
        <p className="article-card-meta">
          {date && <span>{date} &middot; </span>}
          {article.reading_time} min read
        </p>
      </div>
    </Link>
  )
}
