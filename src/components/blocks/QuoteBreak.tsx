interface QuoteBreakProps {
  quote: string
}

export function QuoteBreak({ quote }: QuoteBreakProps) {
  return (
    <div className="quote-break">
      <span className="quote-break-glyph" aria-hidden="true">&#10077;</span>
      <p className="pull-quote">{quote}</p>
    </div>
  )
}
