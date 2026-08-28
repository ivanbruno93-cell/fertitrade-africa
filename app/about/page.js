import { ShieldCheck, Handshake, Gauge, Sprout } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import ValueCard from '@/components/ValueCard'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About Us',
  description:
    'FertiTrade Africa is a Mozambique-based trading and supply chain solutions company connecting suppliers, customers and markets across Africa and beyond.',
}

const VALUES = [
  {
    index: '01',
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'We build relationships based on trust, consistency and accountability.',
  },
  {
    index: '02',
    icon: Handshake,
    title: 'Partnership',
    description: 'We believe long-term trade is built through strong relationships.',
  },
  {
    index: '03',
    icon: Gauge,
    title: 'Operational Excellence',
    description: 'We focus on efficient execution and practical solutions.',
  },
  {
    index: '04',
    icon: Sprout,
    title: 'Growth',
    description: 'We seek to create sustainable opportunities across African markets.',
  },
]

const PROCESS_STEPS = [
  { title: 'Understand', description: 'Understand customer requirements and market needs.' },
  { title: 'Source', description: 'Identify and connect suitable suppliers and products.' },
  { title: 'Coordinate', description: 'Coordinate commercial, documentation and supply chain requirements.' },
  { title: 'Move', description: 'Support efficient movement from origin to destination.' },
  { title: 'Deliver', description: 'Connect products with the intended market.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">About Us</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            About FertiTrade Africa
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            FertiTrade Africa is a Mozambique-based trading and supply chain solutions
            company connecting suppliers, customers and markets across Africa and beyond.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70">
            Our business is built around fertilizer trading, import and export services,
            commodity trade and integrated supply chain solutions, supporting the efficient
            movement of products from source to market.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-2">Our Mission</p>
              <p className="text-sm leading-relaxed text-ink/70">
                To connect supply and demand through reliable trade relationships and
                practical supply chain solutions.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Our Vision</p>
              <p className="text-sm leading-relaxed text-ink/70">
                To become a trusted African trading and supply chain partner connecting
                markets, enabling trade and contributing to regional growth.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Our Approach</p>
              <p className="text-sm leading-relaxed text-ink/70">
                Strong partnerships. Operational excellence. Practical trade solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Our Values" title="What Guides How We Work" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <ValueCard key={value.index} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="How We Work" title="Our Trade Process" />
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS_STEPS} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
