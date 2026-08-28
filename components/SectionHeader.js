export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink/70">{description}</p>}
    </div>
  )
}
