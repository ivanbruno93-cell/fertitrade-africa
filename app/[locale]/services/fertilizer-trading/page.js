import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { FileText, Package, MapPinned, Layers, Boxes, ScrollText } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getAlternates } from '@/lib/site'
import CTASection from '@/components/CTASection'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.fertilizer' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/services/fertilizer-trading'),
  }
}

const AREAS = [
  { icon: Layers, key: 'categories' },
  { icon: FileText, key: 'specifications' },
  { icon: MapPinned, key: 'origin' },
  { icon: Boxes, key: 'packaging' },
  { icon: Package, key: 'volumes' },
  { icon: ScrollText, key: 'documentation' },
]

export default function FertilizerTradingPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Fertilizer')

  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">{t('hero.eyebrow')}</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70">{t('body')}</p>
          <div className="mt-8">
            <Link href="/request-a-quote" className="btn-primary">
              {t('cta')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow mb-3">{t('info.eyebrow')}</p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-navy md:text-4xl">
            {t('info.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">{t('info.description')}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map(({ icon: Icon, key }) => (
              <div key={key} className="rounded-sm border border-dashed border-navy/20 bg-white p-6">
                <Icon size={26} strokeWidth={1.75} className="text-green" />
                <p className="mt-4 font-bold text-navy">{t(`info.areas.${key}`)}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{t('info.placeholder')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t('ctaSection.title')} description={t('ctaSection.description')} />
    </>
  )
}
