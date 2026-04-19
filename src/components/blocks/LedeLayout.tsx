interface LedeLayoutProps {
  text: string
  margin_note?: string
  pull_quote?: string
}

export function LedeLayout({ text, margin_note, pull_quote }: LedeLayoutProps) {
  return (
    <section className="lede-layout">
      {margin_note ? (
        <aside className="margin-note">
          <span className="margin-note-kicker">Field note</span>
          <p>{margin_note}</p>
        </aside>
      ) : <div />}

      <div className="article-prose">
        <p className="drop-cap">{text}</p>
      </div>

      {pull_quote ? (
        <aside className="quote-island">
          <span className="quote-island-kicker">Observed pattern</span>
          <p className="pull-quote">{pull_quote}</p>
        </aside>
      ) : <div />}
    </section>
  )
}
