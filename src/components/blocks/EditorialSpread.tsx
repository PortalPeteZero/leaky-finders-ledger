import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface EditorialSpreadProps {
  text: string[]
  image?: string
  image_caption?: string
  image_alt?: string
  reverse?: boolean
  narrow_gap?: boolean
  inline_quote?: string
  inline_quote_accent?: boolean
}

export function EditorialSpread({ text, image, image_caption, image_alt, reverse, narrow_gap, inline_quote, inline_quote_accent }: EditorialSpreadProps) {
  const classes = [
    image ? 'editorial-spread' : 'editorial-spread editorial-spread--text-only',
    reverse ? 'spread-reverse' : '',
    narrow_gap ? 'spread-narrow-gap' : '',
  ].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      <div className="story-copy">
        {text.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {inline_quote && (
          <div className={`inline-quote${inline_quote_accent ? ' inline-quote-accent' : ''}`}>
            <p className="pull-quote">{inline_quote}</p>
          </div>
        )}
      </div>
      {image && (
        <figure className="editorial-figure" style={{ margin: 0 }}>
          <div className="figure-shell">
            <Image
              src={getImageUrl(image)}
              alt={image_alt ?? ''}
              width={700}
              height={520}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          {image_caption && <figcaption className="figure-caption">{image_caption}</figcaption>}
        </figure>
      )}
    </section>
  )
}
