import { Search, ClipboardList, Handshake, Route, FileCheck, MapPin } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import FlowChain from '@/components/FlowChain'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Integrated Supply Chain Solutions',
  description:
    'FertiTrade Africa coordinates sourcing, procurement, trade and logistics to support efficient product movement from source to market.',
}

const CARDS = [
  { icon: Search, title: 'Sourcing', description: 'Identifying suitable suppliers and products for the requirement.' },
  { icon: ClipboardList, title: 'Procurement', description: 'Coordinating commercial terms and purchase requirements.' },
  { icon: Handshake, title: 'Trade Coordination', description: 'Aligning suppliers, buyers and commercial terms.' },
  { icon: Route, title: 'Logistics Coordination', description: 'Arranging transport across the supply chain.' },
  { icon: FileCheck, title: 'Documentation', description: 'Preparing and coordinating trade documentation.' },
  { icon: MapPin, title: 'Market Delivery', description: 'Connecting products with their intended market.' },
]

export default function SupplyChainSolutionsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Service 04</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Integrated Supply Chain Solutions
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            We coordinate sourcing, procurement, trade and logistics to support efficient
            product movement from source to market, aiming to increase efficiency,
            visibility and reliability at every step.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Our Ecosystem" title="Source to Market, Coordinated" align="center" />
          <div className="mx-auto mt-12 max-w-4xl">
            <FlowChain steps={['Source', 'Procurement', 'Trade', 'Transport', 'Port', 'Market']} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-sm border border-navy/10 bg-white p-7 shadow-card">
                <Icon size={26} strokeWidth={1.75} className="text-green" />
                <p className="mt-4 font-bold text-navy">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
