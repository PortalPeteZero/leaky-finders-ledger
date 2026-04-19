// Content block types for article JSONB
export type ContentBlock =
  | { type: 'by-order' }
  | { type: 'cover'; headline: string; standfirst: string; details: { label: string; value: string }[]; image: string; image_caption: string; image_alt: string; image_tone?: 'paper' | 'ink' }
  | { type: 'lede'; text: string; margin_note?: string; pull_quote?: string }
  | { type: 'divider'; number: string; label: string; title: string }
  | { type: 'editorial-spread'; text: string[]; image: string; image_caption: string; image_alt: string; reverse?: boolean; narrow_gap?: boolean; inline_quote?: string; inline_quote_accent?: boolean }
  | { type: 'wide-interruption'; image: string; image_caption: string; image_alt: string; compressed?: boolean }
  | { type: 'gallery-strip'; images: { src: string; caption: string; alt: string }[] }
  | { type: 'quote-break'; quote: string }
  | { type: 'centre-spread'; text: string[]; images: { src: string; caption: string; alt: string }[] }
  | { type: 'closing'; title: string; text: string[]; canary_note: string; image?: string; image_caption?: string; image_alt?: string }
  | { type: 'aside'; title: string; text: string; icon?: string }
  | { type: 'checklist'; title: string; items: string[] }
  | { type: 'stats-bar'; stats: { value: string; label: string }[] }
  | { type: 'photo-grid'; images: { src: string; caption: string; alt: string }[]; columns?: 2 | 3 }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip'; title: string; text: string }

export interface Article {
  id: string
  slug: string
  title: string
  subtitle: string | null
  excerpt: string
  category: 'field-report' | 'commentary' | 'insurance' | 'tech' | 'local-feature'
  content: ContentBlock[]
  hero_image: string
  og_image: string | null
  sign_off: string
  author: string
  reading_time: number
  is_featured: boolean
  is_published: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}
