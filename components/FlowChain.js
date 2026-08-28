import { Wheat, Handshake, Truck, TrendingUp, Search, ClipboardList, Ship } from 'lucide-react'

const STEP_ICONS = {
  Supply: Wheat,
  Trade: Handshake,
  Logistics: Truck,
  Market: TrendingUp,
  Source: Search,
  Procurement: ClipboardList,
  Transport: Truck,
  Port: Ship,
}

export default function FlowChain({ steps, tone = 'light' }) {
  const isDark = tone === 'dark'

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => {
        const Icon = STEP_ICONS[step]
        return (
          <div
            key={step}
            className={`flex flex-col items-center gap-3 rounded-sm px-4 py-6 text-center transition-colors ${
              isDark
                ? 'border-2 border-green/50 bg-white/[0.08] hover:border-green-light'
                : 'border-2 border-navy/15 bg-white shadow-card hover:border-green'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-base font-extrabold sm:h-12 sm:w-12 sm:text-lg ${
                  isDark ? 'bg-green text-white' : 'bg-navy text-white'
                }`}
              >
                {i + 1}
              </span>
              {Icon && (
                <Icon
                  size={28}
                  strokeWidth={1.75}
                  className={`flex-none ${isDark ? 'text-green-light' : 'text-green'}`}
                />
              )}
            </div>
            <span
              className={`w-full break-words text-base font-extrabold uppercase leading-tight tracking-wide sm:text-lg ${
                isDark ? 'text-white' : 'text-navy'
              }`}
            >
              {step}
            </span>
          </div>
        )
      })}
    </div>
  )
}