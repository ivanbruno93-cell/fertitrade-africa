'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'markets', href: '/markets' },
  { key: 'contact', href: '/contact' },
]

export default function Header() {
  const t = useTranslations('Nav')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="FertiTrade Africa"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="hidden text-sm font-bold uppercase tracking-wide text-navy sm:block">
            FertiTrade <span className="text-green">Africa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-green"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link href="/request-a-quote" className="btn-primary">
            {t('requestQuote')}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-3 text-sm font-semibold text-navy hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {t('requestQuote')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
