import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface PhotoGridProps {
  images: { src: string; caption: string; alt: string }[]
  columns?: 2 | 3
}

export function PhotoGrid({ images, columns = 2 }: PhotoGridProps) {
  return (
    <div className={`photo-grid${columns === 3 ? ' photo-grid-3' : ''}`}>
      {images.map((img, i) => (
        <figure key={i} className="editorial-figure" style={{ margin: 0 }}>
          <div className="figure-shell">
            <Image src={getImageUrl(img.src)} alt={img.alt} width={500} height={400} style={{ width: '100%', height: 'auto' }} />
          </div>
          <figcaption className="figure-caption">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
