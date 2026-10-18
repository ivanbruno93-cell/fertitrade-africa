import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAlternates } from '@/lib/site'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata.terms' })
  return {
    title: t('title'),
    alternates: getAlternates(locale, '/terms-and-conditions'),
  }
}

export default function TermsPage({ params: { locale } }) {
  setRequestLocale(locale)
  const t = useTranslations('Legal')

  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">{t('eyebrow')}</p>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">{t('terms.title')}</h1>
        <p className="mt-6 text-sm leading-relaxed text-ink/70">
          {t.rich('terms.body', {
            email: (chunks) => (
              <a href="mailto:info@fertitrade.co.mz" className="font-semibold text-navy underline">
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </section>
  )
}
