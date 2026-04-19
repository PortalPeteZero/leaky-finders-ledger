interface AsideBoxProps {
  title: string
  text: string
  icon?: string
}

export function AsideBox({ title, text, icon }: AsideBoxProps) {
  return (
    <div className="aside-box">
      <p className="aside-title">{icon && <span style={{ marginRight: '0.4em' }}>{icon}</span>}{title}</p>
      <p className="aside-body">{text}</p>
    </div>
  )
}
