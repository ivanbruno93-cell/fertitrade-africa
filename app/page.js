import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Network, Route, TrendingUp, Sprout, Ship, PackageSearch, Truck } from 'lucide-react'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ValueCard from '@/components/ValueCard'
import ServiceCard from '@/components/ServiceCard'
import MarketMap from '@/components/MarketMap'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'

const PILLARS = [
  {
    index: '01',
    icon: MapPin,
    subtitle: 'Beira, Mozambique',
    title: 'Strategic Location',
    description:
      'Our strategic location provides access to key trade corridors in Southern Africa.',
  },
  {
    index: '02',
    icon: Network,
    subtitle: 'Connecting Suppliers & Buyers',
    title: 'Market Connectivity',
    description: 'We facilitate connections between suppliers, buyers and markets.',
  },
  {
    index: '03',
    icon: Route,
    subtitle: 'From Source to Market',
    title: 'Supply Chain Expertise',
    description: 'We support the efficient movement of products from origin to destination.',
  },
  {
    index: '04',
    icon: TrendingUp,
    subtitle: 'Building Regional Opportunities',
    title: 'African Growth',
    description: 'We create commercial solutions oriented toward the growth of African markets.',
  },
]

const SERVICES = [
  {
    index: '01',
    icon: Sprout,
    title: 'Fertilizer Trading',
    description:
      'Sourcing and trading fertilizer products, connecting suppliers with agricultural markets and customers across Africa.',
    href: '/services/fertilizer-trading',
    image: '/images/service-fertilizer.jpg',
  },
  {
    index: '02',
    icon: Ship,
    title: 'Import & Export',
    description:
      'Supporting international trade operations through sourcing, coordination and movement of products across borders and markets.',
    href: '/services#import-export',
    image: '/images/service-import-export.jpg',
  },
  {
    index: '03',
    icon: PackageSearch,
    title: 'Commodity Trading',
    description:
      'Connecting producers, suppliers and buyers through practical commodity trading solutions across regional and international markets.',
    href: '/services/commodity-trading',
    image: '/images/service-commodity.jpg',
  },
  {
    index: '04',
    icon: Truck,
    title: 'Integrated Supply Chain Solutions',
    description:
      'Coordinating supply chain activities to support efficient product movement from source to destination.',
    href: '/services/supply-chain-solutions',
    image: '/images/service-supply-chain.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Company introduction */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Who We Are"
              title="Connecting Supply and Demand Across Africa"
              description="FertiTrade Africa is a Mozambique-based trading and supply chain solutions company connecting suppliers, customers and markets across Africa and beyond."
            />
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Our business is built around fertilizer trading, import and export
              services, commodity trade and integrated supply chain solutions,
              supporting the efficient movement of products from source to market.
            </p>
            <Link href="/about" className="btn-outline-dark mt-8 inline-flex">
              Learn More About Us
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-sm border border-navy/10">
              <Image
                src="/images/about-africa-trade.jpg"
                alt="Ship, port and agricultural trade across Africa"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why FertiTrade Africa */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Why FertiTrade Africa" title="Built to Connect, Trade and Deliver" />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.index} delay={i * 0.08}>
                <ValueCard {...pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title="Our Services"
              description="Practical trade and supply chain solutions designed to move products efficiently from source to market."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.index} delay={i * 0.08}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic location */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-3 text-green-light">Strategic Location</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Strategically Located in Beira
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Headquartered in Beira, Mozambique, FertiTrade Africa is strategically
              positioned along one of Southern Africa&apos;s key trade corridors, enabling
              us to serve local, regional and international markets.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-sm border border-white/10 bg-white/5 p-8">
              <MarketMap tone="dark" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
