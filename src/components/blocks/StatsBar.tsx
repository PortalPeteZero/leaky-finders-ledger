interface StatsBarProps {
  stats: { value: string; label: string }[]
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="stats-item">
          <span className="stats-value">{s.value}</span>
          <span className="stats-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
