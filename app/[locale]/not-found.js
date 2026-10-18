import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-24">
      <div className="container-page max-w-lg text-center">
        <p className="eyebrow mb-3">{t('eyebrow')}</p>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{t('text')}</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          {t('back')}
        </Link>
      </div>
    </section>
  )
}
