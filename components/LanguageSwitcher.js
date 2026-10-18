'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher({ onSelect, className = '' }) {
  const locale = useLocale()
  const t = useTranslations('Language')
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = (next) => {
    if (next === locale) return
    // Same page, other language (/about <-> /pt/about).
    router.replace(pathname, { locale: next })
    if (onSelect) onSelect()
  }

  return (
    <div
      role="group"
      aria-label={t('label')}
      className={`inline-flex overflow-hidden rounded-sm border border-navy/15 text-xs font-bold ${className}`}
    >
      {routing.locales.map((code) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={t(code)}
            aria-pressed={active}
            onClick={() => switchTo(code)}
            className={`px-3 py-2 uppercase tracking-wide transition-colors ${
              active ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-surface'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
