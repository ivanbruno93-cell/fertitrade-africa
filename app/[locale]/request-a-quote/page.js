import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAlternates } from '@/lib/site'
import QuoteForm from '@/components/QuoteForm'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.quote' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: getAlternates(locale, '/request-a-quote'),
  }
}

export default function RequestQuotePage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Quote')

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
          <div className="rounded-sm border border-navy/10 bg-white p-8 shadow-card md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
