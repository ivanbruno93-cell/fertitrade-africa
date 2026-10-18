import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAlternates } from '@/lib/site'
import SectionHeader from '@/components/SectionHeader'
import MarketMap from '@/components/MarketMap'
import CTASection from '@/components/CTASection'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.markets' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/markets'),
  }
}

const REGION_KEYS = ['southern', 'regional', 'international']

export default function MarketsPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Markets')

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
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow={t('location.eyebrow')}
              title={t('location.title')}
              description={t('location.description')}
            />
            <div className="mt-8 overflow-hidden rounded-sm border border-navy/10">
              <Image
                src="/images/beira-location.jpg"
                alt={t('location.imageAlt')}
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
            eyebrow={t('regions.eyebrow')}
            title={t('regions.title')}
            description={t('regions.description')}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REGION_KEYS.map((key) => (
              <div key={key} className="rounded-sm border border-navy/10 bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold text-navy">{t(`regions.items.${key}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {t(`regions.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t('cta.title')} description={t('cta.description')} />
    </>
  )
}
