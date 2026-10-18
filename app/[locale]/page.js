import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { MapPin, Network, Route, TrendingUp, Sprout, Ship, PackageSearch, Truck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getAlternates } from '@/lib/site'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ValueCard from '@/components/ValueCard'
import ServiceCard from '@/components/ServiceCard'
import MarketMap from '@/components/MarketMap'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'

export async function generateMetadata({ params: { locale } }) {
  return { alternates: getAlternates(locale, '') }
}

const PILLARS = [
  { index: '01', icon: MapPin, key: 'location' },
  { index: '02', icon: Network, key: 'connectivity' },
  { index: '03', icon: Route, key: 'expertise' },
  { index: '04', icon: TrendingUp, key: 'growth' },
]

const SERVICES = [
  { index: '01', icon: Sprout, key: 'fertilizer', href: '/services/fertilizer-trading', image: '/images/service-fertilizer.jpg' },
  { index: '02', icon: Ship, key: 'importExport', href: '/services#import-export', image: '/images/service-import-export.jpg' },
  { index: '03', icon: PackageSearch, key: 'commodity', href: '/services/commodity-trading', image: '/images/service-commodity.jpg' },
  { index: '04', icon: Truck, key: 'supplyChain', href: '/services/supply-chain-solutions', image: '/images/service-supply-chain.jpg' },
]

export default function HomePage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Home')
  const items = useTranslations('ServiceItems')

  return (
    <>
      <Hero />

      {/* Company introduction */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow={t('whoWeAre.eyebrow')}
              title={t('whoWeAre.title')}
              description={t('whoWeAre.description')}
            />
            <p className="mt-4 text-base leading-relaxed text-ink/70">{t('whoWeAre.body')}</p>
            <Link href="/about" className="btn-outline-dark mt-8 inline-flex">
              {t('whoWeAre.cta')}
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-sm border border-navy/10">
              <Image
                src="/images/about-africa-trade.jpg"
                alt={t('whoWeAre.imageAlt')}
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
            <SectionHeader eyebrow={t('why.eyebrow')} title={t('why.title')} />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.index} delay={i * 0.08}>
                <ValueCard
                  index={pillar.index}
                  icon={pillar.icon}
                  subtitle={t(`why.pillars.${pillar.key}.subtitle`)}
                  title={t(`why.pillars.${pillar.key}.title`)}
                  description={t(`why.pillars.${pillar.key}.description`)}
                />
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
              eyebrow={t('services.eyebrow')}
              title={t('services.title')}
              description={t('services.description')}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.index} delay={i * 0.08}>
                <ServiceCard
                  index={service.index}
                  icon={service.icon}
                  href={service.href}
                  image={service.image}
                  title={items(`${service.key}.title`)}
                  description={items(`${service.key}.description`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic location */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-3 text-green-light">{t('location.eyebrow')}</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">{t('location.title')}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              {t('location.description')}
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
