import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import '../globals.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('siteTitle'),
      template: '%s | FertiTrade Africa',
    },
    description: t('siteDescription'),
    keywords: t.raw('keywords'),
    openGraph: {
      title: t('siteTitle'),
      description: t('ogDescription'),
      siteName: 'FertiTrade Africa',
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  // Lets Next.js render these pages statically instead of per request.
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
