import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Sprout, Ship, PackageSearch, Truck } from 'lucide-react'
import { getAlternates } from '@/lib/site'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.services' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/services'),
  }
}

const SERVICES = [
  { index: '01', icon: Sprout, key: 'fertilizer', href: '/services/fertilizer-trading' },
  { index: '02', icon: Ship, key: 'importExport', href: '/services#import-export' },
  { index: '03', icon: PackageSearch, key: 'commodity', href: '/services/commodity-trading' },
  { index: '04', icon: Truck, key: 'supplyChain', href: '/services/supply-chain-solutions' },
]

const IMPORT_EXPORT_KEYS = ['sourcing', 'commercial', 'documentation', 'logistics', 'shipment', 'delivery']

export default function ServicesPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Services')
  const items = useTranslations('ServiceItems')

  const steps = IMPORT_EXPORT_KEYS.map((key) => ({
    title: t(`importExport.steps.${key}.title`),
    description: t(`importExport.steps.${key}.description`),
  }))

  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">{t('hero.eyebrow')}</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{t('hero.intro')}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.index}
                index={service.index}
                icon={service.icon}
                href={service.href}
                title={items(`${service.key}.title`)}
                description={items(`${service.key}.description`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="import-export" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow={t('importExport.eyebrow')}
            title={t('importExport.title')}
            description={t('importExport.description')}
          />
          <div className="mt-12">
            <ProcessTimeline steps={steps} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
