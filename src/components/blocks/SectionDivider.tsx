interface SectionDividerProps {
  number: string
  label: string
  title: string
}

export function SectionDivider({ number, label, title }: SectionDividerProps) {
  return (
    <div className="section-divider-block">
      <div className="section-rule" />
      <span className="section-ornament" aria-hidden="true">◆ ◆ ◆</span>
      <div className="section-number">{number}</div>
      <span className="section-kicker">{label}</span>
      <p className="section-title-text">{title}</p>
      <div className="section-rule" style={{ marginTop: '1.25rem', marginBottom: 0 }} />
    </div>
  )
}
