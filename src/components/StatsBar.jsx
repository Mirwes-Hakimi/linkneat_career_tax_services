const STATS = [
  { num: '2,000+', label: 'Clients Served' },
  { num: '100%', label: 'Client Satisfaction' },
  { num: '5+', label: 'Years in Business' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {STATS.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
