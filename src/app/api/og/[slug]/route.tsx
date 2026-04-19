import { ImageResponse } from 'next/og'
import { getArticle } from '@/lib/articles'

export const runtime = 'edge'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

function getImageUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${SUPABASE_URL}/storage/v1/object/public/articles/${path}`
}

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    return new Response('Not found', { status: 404 })
  }

  const heroUrl = getImageUrl(article.hero_image)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#2A2A2A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image - right half */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          display: 'flex',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroUrl}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #2A2A2A 0%, transparent 60%)',
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '65%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 56px',
          justifyContent: 'space-between',
        }}>
          {/* Masthead */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'serif',
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'hsl(43, 35%, 55%)',
              marginBottom: '8px',
            }}>
              The Leaky Finders Ledger
            </span>
            <div style={{ height: '1px', background: 'hsl(43, 35%, 45%)', width: '200px' }} />
          </div>

          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{
              fontFamily: 'serif',
              fontSize: '40px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: 0,
              marginBottom: '16px',
            }}>
              {article.title.length > 80 ? article.title.substring(0, 80) + '...' : article.title}
            </p>
            <p style={{
              fontFamily: 'serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.75)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              margin: 0,
            }}>
              {article.excerpt.length > 120 ? article.excerpt.substring(0, 120) + '...' : article.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: 'sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'hsl(43, 35%, 55%)',
            }}>
              By Order of the Leaky Finders
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
