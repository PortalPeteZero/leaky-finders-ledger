import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface ClosingLayoutProps {
  title: string
  text: string[]
  canary_note: string
  image?: string
  image_caption?: string
  image_alt?: string
}

export function ClosingLayout({ title, text, canary_note, image, image_caption, image_alt }: ClosingLayoutProps) {
  return (
    <section className="closing-layout">
      <div>
        <span className="closing-kicker">Final Word</span>
        <h3 className="closing-headline">{title}</h3>
        <div className="closing-prose">
          {text.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="canary-note">
          <span className="canary-note-kicker">From Canary Detect</span>
          <p>{canary_note}</p>
        </div>
      </div>
      {image && (
        <figure className="editorial-figure tone-ink" style={{ margin: 0 }}>
          <div className="figure-shell">
            <Image
              src={getImageUrl(image)}
              alt={image_alt || ''}
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
