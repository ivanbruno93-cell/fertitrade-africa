// The canonical host. fertitrade.co.mz redirects to www.fertitrade.co.mz on Vercel.
export const SITE_URL = 'https://www.fertitrade.co.mz'

export function localizedUrl(locale, path = '') {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const suffix = path === '/' ? '' : path
  return `${SITE_URL}${prefix}${suffix}`
}

// canonical + hreflang links for a page, used in each page's metadata.
export function getAlternates(locale, path = '') {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      en: localizedUrl('en', path),
      pt: localizedUrl('pt', path),
      'x-default': localizedUrl('en', path),
    },
  }
}
