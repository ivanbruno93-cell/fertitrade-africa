import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import MarketMap from '@/components/MarketMap'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Markets We Serve',
  description:
    'FertiTrade Africa is positioned to connect suppliers and customers across regional and international markets, from its base in Beira, Mozambique.',
}

const REGIONS = [
  {
    title: 'Southern Africa',
    description:
      'Beira sits along one of the region\u2019s key trade corridors, positioning our platform to serve markets including Mozambique, Zimbabwe, Zambia and Malawi.',
  },
  {
    title: 'East Africa',
    description:
      'Regional connectivity extends our reach toward East African markets as trade relationships develop.',
  },
  {
    title: 'Regional Markets',
    description:
      'We work to connect suppliers and buyers across neighbouring markets that rely on Beira as a gateway.',
  },
  {
    title: 'International Markets',
    description:
      'Our platform is positioned to connect suppliers and customers across regional and international markets.',
  },
]

export default function MarketsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Markets We Serve</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Connecting Opportunities Across Africa and Beyond
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Our platform is positioned to connect suppliers and customers across regional
            and international markets.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Strategic Location"
              title="Strategically Located in Beira"
              description="Headquartered in Beira, Mozambique, FertiTrade Africa is strategically positioned along one of Southern Africa's key trade corridors, enabling us to serve local, regional and international markets."
            />
            <div className="mt-8 overflow-hidden rounded-sm border border-navy/10">
              <Image
                src="/images/beira-location.jpg"
                alt="Port of Beira, Mozambique"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-sm border border-navy/10 bg-surface p-10">
            <MarketMap />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Regional Connectivity"
            title="Markets and Corridors We Are Positioned to Serve"
            description="These regions represent relevant markets and trade corridors for our platform, not a confirmation of existing operations in each market."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((region) => (
              <div key={region.title} className="rounded-sm border border-navy/10 bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold text-navy">{region.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Exploring a Market Opportunity?"
        description="Tell us about the market you're looking to reach or supply, and let's discuss how we can help."
      />
    </>
  )
}
