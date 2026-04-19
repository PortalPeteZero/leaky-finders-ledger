interface QuoteBreakProps {
  quote: string
}

export function QuoteBreak({ quote }: QuoteBreakProps) {
  return (
    <div className="quote-break">
      <p className="pull-quote">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}
