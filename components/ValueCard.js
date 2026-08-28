export default function ValueCard({ index, title, subtitle, description, icon: Icon }) {
  return (
    <div className="border-t-2 border-green/25 pt-6 transition-colors hover:border-green">
      <div className="mb-5 flex items-center gap-4">
        {Icon && (
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-surface text-navy">
            <Icon size={28} strokeWidth={1.75} />
          </div>
        )}
        {index && <span className="text-sm font-bold tracking-[0.16em] text-green">{index}</span>}
      </div>
      {subtitle && <p className="mb-1 text-lg font-bold text-navy">{subtitle}</p>}
      <p className="text-sm font-semibold text-ink/50">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{description}</p>
    </div>
  )
}
