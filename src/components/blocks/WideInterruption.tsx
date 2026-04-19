import Image from 'next/image'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

interface WideInterruptionProps {
  image: string
  image_caption: string
  image_alt: string
  compressed?: boolean
}

export function WideInterruption({ image, image_caption, image_alt, compressed }: WideInterruptionProps) {
  return (
    <figure className={`wide-interruption${compressed ? ' interruption-compressed' : ''}`} style={{ margin: 0 }}>
      <div className="figure-shell">
        <Image
          src={getImageUrl(image)}
          alt={image_alt}
          width={1200}
          height={700}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <figcaption className="figure-caption">{image_caption}</figcaption>
    </figure>
  )
}
