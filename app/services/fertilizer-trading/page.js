import Link from 'next/link'
import { FileText, Package, MapPinned, Layers, Boxes, ScrollText } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Fertilizer Trading',
  description:
    'FertiTrade Africa supports agricultural growth through reliable fertilizer sourcing and trading, connecting suppliers with agricultural markets across Africa.',
}

const PLACEHOLDER_AREAS = [
  { icon: Layers, title: 'Product Categories', description: 'To be added as supplier information is confirmed.' },
  { icon: FileText, title: 'Fertilizer Specifications', description: 'To be added as supplier information is confirmed.' },
  { icon: MapPinned, title: 'Origin', description: 'To be added as supplier information is confirmed.' },
  { icon: Boxes, title: 'Packaging', description: 'To be added as supplier information is confirmed.' },
  { icon: Package, title: 'Available Volumes', description: 'To be added as supplier information is confirmed.' },
  { icon: ScrollText, title: 'Technical Documentation', description: 'To be added as supplier information is confirmed.' },
]

export default function FertilizerTradingPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Service 01</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Fertilizer Trading</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Supporting Agricultural Growth Through Reliable Fertilizer Supply
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70">
            FertiTrade Africa sources and trades fertilizer products, connecting suppliers
            with agricultural markets and customers across Africa. Our role is to bring
            reliable supply relationships to farmers, distributors and agricultural
            businesses that depend on consistent access to fertilizer.
          </p>
          <div className="mt-8">
            <Link href="/request-a-quote" className="btn-primary">
              Request Fertilizer Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow mb-3">Coming Soon</p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-navy md:text-4xl">
            Product Information
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            The sections below are reserved for detailed product information as it becomes
            available. Get in touch for current fertilizer sourcing enquiries.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        title="Have a Fertilizer Requirement?"
        description="Tell us what you need and our team will follow up on sourcing and availability."
      />
    </>
  )
}
