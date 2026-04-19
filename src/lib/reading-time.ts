import type { ContentBlock } from './types'

const WORDS_PER_MINUTE = 200

function extractText(blocks: ContentBlock[]): string {
  return blocks.map(block => {
    switch (block.type) {
      case 'lede':
        return [block.text, block.margin_note, block.pull_quote].filter(Boolean).join(' ')
      case 'editorial-spread':
        return [...block.text, block.inline_quote].filter(Boolean).join(' ')
      case 'centre-spread':
      case 'closing':
        return block.text.join(' ')
      case 'quote-break':
        return block.quote
      case 'cover':
        return [block.headline, block.standfirst].join(' ')
      case 'aside':
      case 'callout':
        return [block.title, block.text].join(' ')
      case 'checklist':
        return [block.title, ...block.items].join(' ')
      default:
        return ''
    }
  }).join(' ')
}

export function calculateReadingTime(blocks: ContentBlock[]): number {
  const text = extractText(blocks)
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
