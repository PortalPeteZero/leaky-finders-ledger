interface CalloutBoxProps {
  variant: 'info' | 'warning' | 'tip'
  title: string
  text: string
}

export function CalloutBox({ variant, title, text }: CalloutBoxProps) {
  return (
    <div className={`callout-box callout-${variant}`}>
      <span className="callout-title">{title}</span>
      <p className="callout-text">{text}</p>
    </div>
  )
}
