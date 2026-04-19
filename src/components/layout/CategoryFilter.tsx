'use client'

import { useState } from 'react'
import type { Article } from '@/lib/types'
import { ArticleCard } from './ArticleCard'

const CATEGORIES = [
  { slug: 'all', label: 'All' },
  { slug: 'field-report', label: 'Field Reports' },
  { slug: 'commentary', label: 'Commentary' },
  { slug: 'insurance', label: 'Insurance & Advice' },
  { slug: 'tech', label: 'Tech & Trades' },
  { slug: 'local-feature', label: 'Local Features' },
]

interface CategoryFilterProps {
  articles: Article[]
}

export function CategoryFilter({ articles }: CategoryFilterProps) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? articles
    : articles.filter(a => a.category === active)

  return (
    <>
      <div className="category-filter">
        {CATEGORIES.map(cat => (
          <button
            key={cat.slug}
            className="category-chip"
            data-active={active === cat.slug ? 'true' : 'false'}
            onClick={() => setActive(cat.slug)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="article-grid">
        {filtered.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  )
}
