export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex gap-4 rounded-sm border border-navy/10 bg-white p-6">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="font-bold text-navy">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
