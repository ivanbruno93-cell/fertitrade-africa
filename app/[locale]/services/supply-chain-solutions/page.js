import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Search, ClipboardList, Handshake, Route, FileCheck, MapPin } from 'lucide-react'
import { getAlternates } from '@/lib/site'
import SectionHeader from '@/components/SectionHeader'
import FlowChain from '@/components/FlowChain'
import CTASection from '@/components/CTASection'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.supplyChain' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/services/supply-chain-solutions'),
  }
}

const CARDS = [
  { icon: Search, key: 'sourcing' },
  { icon: ClipboardList, key: 'procurement' },
  { icon: Handshake, key: 'tradeCoordination' },
  { icon: Route, key: 'logisticsCoordination' },
  { icon: FileCheck, key: 'documentation' },
  { icon: MapPin, key: 'marketDelivery' },
]

export default function SupplyChainSolutionsPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('SupplyChain')

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
          <SectionHeader eyebrow={t('ecosystem.eyebrow')} title={t('ecosystem.title')} align="center" />
          <div className="mx-auto mt-12 max-w-4xl">
            <FlowChain steps={['source', 'procurement', 'trade', 'transport', 'port', 'market']} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map(({ icon: Icon, key }) => (
              <div key={key} className="rounded-sm border border-navy/10 bg-white p-7 shadow-card">
                <Icon size={26} strokeWidth={1.75} className="text-green" />
                <p className="mt-4 font-bold text-navy">{t(`cards.${key}.title`)}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{t(`cards.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
