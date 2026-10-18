import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function CTASection({ title, description }) {
  const t = useTranslations('CTA')

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
          {title ?? t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70">{description ?? t('description')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/request-a-quote" className="btn-primary">
            {t('requestQuote')}
          </Link>
          <Link href="/contact" className="btn-outline-light">
            {t('contactUs')}
          </Link>
        </div>
      </div>
    </section>
  )
}
