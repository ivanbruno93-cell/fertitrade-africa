const REGIONS = [
  { label: 'Zimbabwe', angle: -55 },
  { label: 'Zambia', angle: -20 },
  { label: 'Malawi', angle: 15 },
  { label: 'DRC', angle: 50 },
  { label: 'Southern Africa', angle: -90 },
]

export default function MarketMap({ tone = 'light' }) {
  const isDark = tone === 'dark'
  const cx = 300
  const cy = 220
  const r = 170

  const lineColor = isDark ? '#FFFFFF' : '#092D4F'
  const lineOpacity = isDark ? '0.25' : '0.15'
  const labelClass = isDark ? 'fill-white text-[14px] font-semibold' : 'fill-navy text-[14px] font-semibold'

  return (
    <div className="w-full">
      <svg viewBox="0 0 600 440" className="w-full" role="img" aria-label="Regional connectivity diagram from Beira, Mozambique">
        {REGIONS.map((region) => {
          const rad = (region.angle * Math.PI) / 180
          const x = cx + r * Math.cos(rad)
          const y = cy + r * Math.sin(rad)
          return (
            <g key={region.label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke={lineColor} strokeOpacity={lineOpacity} strokeWidth="1.5" />
              <circle cx={x} cy={y} r="5" fill="#69B83F" />
              <text
                x={x}
                y={y + (region.angle > 90 || region.angle < -90 ? 24 : -16)}
                textAnchor="middle"
                className={labelClass}
              >
                {region.label}
              </text>
            </g>
          )
        })}
        <circle cx={cx} cy={cy} r="46" fill="#3D9B3A" />
        <circle cx={cx} cy={cy} r="46" fill="none" stroke="#F5F7F8" strokeWidth="2" />
        <text x={cx} y={cy - 4} textAnchor="middle" className="fill-white text-[14px] font-bold">
          BEIRA
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="fill-white/80 text-[11px]">
          Mozambique
        </text>
      </svg>
      <p className={`mt-3 text-center text-sm font-bold uppercase tracking-[0.18em] ${isDark ? 'text-green-light' : 'text-green'}`}>
        Regional Connectivity
      </p>
    </div>
  )
}
