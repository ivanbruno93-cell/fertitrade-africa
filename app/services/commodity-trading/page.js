import Link from 'next/link'
import { Wheat, Factory, Boxes, PackageOpen } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Commodity Trading',
  description:
    'FertiTrade Africa connects commodity supply with market demand, acting as an intermediary and trade partner across regional and international markets.',
}

const PLACEHOLDER_AREAS = [
  { icon: Wheat, title: 'Agricultural Commodities', description: 'To be added as trade relationships are confirmed.' },
  { icon: Factory, title: 'Industrial Commodities', description: 'To be added as trade relationships are confirmed.' },
  { icon: Boxes, title: 'Bulk Products', description: 'To be added as trade relationships are confirmed.' },
  { icon: PackageOpen, title: 'Other Traded Products', description: 'To be added as trade relationships are confirmed.' },
]

export default function CommodityTradingPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Service 03</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Commodity Trading</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Connecting Commodity Supply with Market Demand
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70">
            FertiTrade Africa acts as an intermediary and commercial partner, connecting
            producers, suppliers and buyers through practical commodity trading solutions
            across regional and international markets.
          </p>
          <div className="mt-8">
            <Link href="/request-a-quote" className="btn-primary">
              Discuss a Trade Opportunity
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow mb-3">Coming Soon</p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-navy md:text-4xl">
            Traded Commodity Categories
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            The categories below are reserved for confirmed commodities as trade relationships
            develop. Get in touch to discuss a specific opportunity.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLACEHOLDER_AREAS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-sm border border-dashed border-navy/20 bg-white p-6">
                <Icon size={26} strokeWidth={1.75} className="text-green" />
                <p className="mt-4 font-bold text-navy">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Commodity to Trade?"
        description="Whether you supply or need to source a commodity, let's discuss the opportunity."
      />
    </>
  )
}
