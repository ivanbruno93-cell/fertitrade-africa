import Link from 'next/link'
import { MapPin } from 'lucide-react'
import HeroCarousel from './HeroCarousel'
import FlowChain from './FlowChain'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="relative min-h-[560px] w-full md:min-h-[640px] lg:min-h-[720px]">
        <HeroCarousel className="absolute inset-0 h-full w-full" />

        {/* Readability scrim: strong on the left where the text sits, fading toward the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(9,45,79,0.92) 0%, rgba(9,45,79,0.78) 32%, rgba(9,45,79,0.42) 58%, rgba(9,45,79,0.15) 78%, rgba(9,45,79,0.05) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: 'linear-gradient(to top, rgba(9,45,79,0.85), rgba(9,45,79,0))' }}
        />

        <div className="container-page relative z-10 flex h-full min-h-[560px] items-center py-16 md:min-h-[640px] lg:min-h-[720px]">
          <div className="reveal max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              <MapPin size={14} className="text-green-light" />
              Based in Beira, Mozambique
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-white drop-shadow-sm md:text-5xl lg:text-6xl">
              Connecting Markets. <span className="text-green-light">Growing Africa.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              Trade, supply chain and market solutions connecting suppliers, customers
              and opportunities across Africa and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/request-a-quote" className="btn-outline-light">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-green/30 bg-navy">
        <div className="container-page py-12 md:py-14">
          <FlowChain steps={['Supply', 'Trade', 'Logistics', 'Market']} tone="dark" />
        </div>
      </div>
    </section>
  )
}
