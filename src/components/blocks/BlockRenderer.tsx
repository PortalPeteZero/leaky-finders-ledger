import type { ContentBlock } from '@/lib/types'
import { ByOrderStamp } from './ByOrderStamp'
import { CoverLayout } from './CoverLayout'
import { LedeLayout } from './LedeLayout'
import { SectionDivider } from './SectionDivider'
import { EditorialSpread } from './EditorialSpread'
import { WideInterruption } from './WideInterruption'
import { GalleryStrip } from './GalleryStrip'
import { QuoteBreak } from './QuoteBreak'
import { CentreSpread } from './CentreSpread'
import { ClosingLayout } from './ClosingLayout'
import { AsideBox } from './AsideBox'
import { ChecklistBlock } from './ChecklistBlock'
import { StatsBar } from './StatsBar'
import { PhotoGrid } from './PhotoGrid'
import { CalloutBox } from './CalloutBox'

interface BlockRendererProps {
  blocks: ContentBlock[]
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'by-order':
            return <ByOrderStamp key={index} />
          case 'cover':
            return <CoverLayout key={index} {...block} />
          case 'lede':
            return <LedeLayout key={index} {...block} />
          case 'divider':
            return <SectionDivider key={index} {...block} />
          case 'editorial-spread':
            return <EditorialSpread key={index} {...block} />
          case 'wide-interruption':
            return <WideInterruption key={index} {...block} />
          case 'gallery-strip':
            return <GalleryStrip key={index} {...block} />
          case 'quote-break':
            return <QuoteBreak key={index} {...block} />
          case 'centre-spread':
            return <CentreSpread key={index} {...block} />
          case 'closing':
            return <ClosingLayout key={index} {...block} />
          case 'aside':
            return <AsideBox key={index} {...block} />
          case 'checklist':
            return <ChecklistBlock key={index} {...block} />
          case 'stats-bar':
            return <StatsBar key={index} {...block} />
          case 'photo-grid':
            return <PhotoGrid key={index} {...block} />
          case 'callout':
            return <CalloutBox key={index} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
