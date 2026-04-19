interface SectionDividerProps {
  number: string
  label: string
  title: string
}

export function SectionDivider({ number, label, title }: SectionDividerProps) {
  return (
    <div className="section-divider-block">
      <div className="section-rule" />
      <div className="section-number">{number}</div>
      <span className="section-kicker">{label}</span>
      <p className="section-title-text">{title}</p>
    </div>
  )
}
