import type { ContentBlock } from '@/lib/types'

// Block components will be built in Phase 2
// This is the central renderer that maps JSONB block types to React components

interface BlockRendererProps {
  blocks: ContentBlock[]
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          // Each case will import and render the corresponding component
          // Placeholder until Phase 2 builds the actual components
          default:
            return (
              <div key={index} data-block-type={block.type} className="my-4 p-4 border border-dashed border-gray-300 rounded">
                <p className="text-sm text-gray-500">Block: {block.type}</p>
              </div>
            )
        }
      })}
    </>
  )
}
