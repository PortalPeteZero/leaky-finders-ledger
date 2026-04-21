interface SectionDividerProps {
  number: string
  label: string
  title: string
}

export function SectionDivider({ number, title }: SectionDividerProps) {
  return (
    <div className="section-divider-block">
      <div className="section-rule" />
      <div className="section-number">{number}</div>
      <p className="section-title-text">{title}</p>
    </div>
  )
}
