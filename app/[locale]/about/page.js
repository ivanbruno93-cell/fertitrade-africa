import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ShieldCheck, Handshake, Gauge, Sprout } from 'lucide-react'
import { getAlternates } from '@/lib/site'
import SectionHeader from '@/components/SectionHeader'
import ValueCard from '@/components/ValueCard'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.about' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/about'),
  }
}

const VALUES = [
  { index: '01', icon: ShieldCheck, key: 'reliability' },
  { index: '02', icon: Handshake, key: 'partnership' },
  { index: '03', icon: Gauge, key: 'excellence' },
  { index: '04', icon: Sprout, key: 'growth' },
]

const PROCESS_KEYS = ['understand', 'source', 'coordinate', 'move', 'deliver']

export default function AboutPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('About')

  const processSteps = PROCESS_KEYS.map((key) => ({
    title: t(`process.steps.${key}.title`),
    description: t(`process.steps.${key}.description`),
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
        <div className="container-page max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70">{t('body')}</p>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-2">{t('mission.title')}</p>
              <p className="text-sm leading-relaxed text-ink/70">{t('mission.text')}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">{t('vision.title')}</p>
              <p className="text-sm leading-relaxed text-ink/70">{t('vision.text')}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">{t('approach.title')}</p>
              <p className="text-sm leading-relaxed text-ink/70">{t('approach.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeader eyebrow={t('values.eyebrow')} title={t('values.title')} />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <ValueCard
                key={value.index}
                index={value.index}
                icon={value.icon}
                title={t(`values.items.${value.key}.title`)}
                description={t(`values.items.${value.key}.description`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeader eyebrow={t('process.eyebrow')} title={t('process.title')} />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
