interface ChecklistBlockProps {
  title: string
  items: string[]
}

export function ChecklistBlock({ title, items }: ChecklistBlockProps) {
  return (
    <div className="checklist-block">
      <p className="checklist-title">{title}</p>
      <ul className="checklist-items">
        {items.map((item, i) => (
          <li key={i} className="checklist-item">
            <span className="checklist-tick">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
