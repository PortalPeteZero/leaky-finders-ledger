import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface CentreSpreadProps {
  text: string[]
  images: { src: string; caption: string; alt: string }[]
}

export function CentreSpread({ text, images }: CentreSpreadProps) {
  const [left, right] = images

  return (
    <section className="centre-spread">
      {left ? (
        <figure className="editorial-figure" style={{ margin: 0 }}>
          <div className="figure-shell">
            <Image src={getImageUrl(left.src)} alt={left.alt} width={400} height={500} style={{ width: '100%', height: 'auto' }} />
          </div>
          <figcaption className="figure-caption">{left.caption}</figcaption>
        </figure>
      ) : <div />}

      <div className="centre-copy">
        {text.map((para, i) => <p key={i} className={i === 0 ? 'drop-cap' : ''}>{para}</p>)}
      </div>

      {right ? (
        <figure className="editorial-figure" style={{ margin: 0 }}>
          <div className="figure-shell">
            <Image src={getImageUrl(right.src)} alt={right.alt} width={400} height={500} style={{ width: '100%', height: 'auto' }} />
          </div>
          <figcaption className="figure-caption">{right.caption}</figcaption>
        </figure>
      ) : <div />}
    </section>
  )
}
