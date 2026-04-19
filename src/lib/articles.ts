import { supabase } from './supabase'
import type { Article } from './types'

export async function getArticle(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error || !data) return null
  return data as Article
}

export async function getPublishedArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error || !data) return []
  return data as Article[]
}

export async function getFeaturedArticle(): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .eq('is_featured', true)
    .single()

  if (error || !data) return null
  return data as Article
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .eq('category', category)
    .order('published_at', { ascending: false })

  if (error || !data) return []
  return data as Article[]
}

export async function getRelatedArticles(slug: string, category: string, limit = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .eq('category', category)
    .neq('slug', slug)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error || !data) return []
  if (data.length < limit) {
    // Pad with other articles if not enough in category
    const { data: others } = await supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .neq('slug', slug)
      .neq('category', category)
      .order('published_at', { ascending: false })
      .limit(limit - data.length)
    return [...data, ...(others || [])] as Article[]
  }
  return data as Article[]
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const { data } = await supabase
    .from('articles')
    .select('slug')
    .eq('is_published', true)
  return (data || []).map(d => d.slug)
}
