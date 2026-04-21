import { Fragment } from 'react'
import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface CoverLayoutProps {
  headline: string
  standfirst: string
  details: { label: string; value: string }[]
  image: string
  image_caption: string
  image_alt: string
  image_tone?: 'paper' | 'ink'
}

export function CoverLayout({ headline, standfirst, details, image, image_caption, image_alt, image_tone = 'paper' }: CoverLayoutProps) {
  return (
    <section className="cover-layout">
      <div>
        <span className="cover-kicker">Canary Detect Feature Desk</span>
        <h1 className="cover-headline">{headline}</h1>
        <p className="cover-standfirst">{standfirst}</p>
        <div className="cover-details">
          {details.map((d, i) => (
            <Fragment key={d.label}>
              {i > 0 && <span className="cover-dateline-sep" aria-hidden="true" />}
              <span className="cover-dateline-item">
                <span className="cover-detail-label">{d.label}</span>
                <span className="cover-detail-value">{d.value}</span>
              </span>
            </Fragment>
          ))}
        </div>
      </div>
      <figure className={`editorial-figure tone-${image_tone}`} style={{ margin: 0 }}>
        <div className="figure-shell">
          <Image
            src={getImageUrl(image)}
            alt={image_alt}
            width={800}
            height={600}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <figcaption className="figure-caption">{image_caption}</figcaption>
      </figure>
    </section>
  )
}
