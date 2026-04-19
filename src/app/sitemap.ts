import type { MetadataRoute } from 'next'
import { getAllArticleSlugs } from '@/lib/articles'

const DOMAIN = 'https://leaky-ledger.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllArticleSlugs()

  const articleUrls = slugs.map(slug => ({
    url: `${DOMAIN}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articleUrls,
  ]
}
