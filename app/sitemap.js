import { routing } from '@/i18n/routing'
import { localizedUrl } from '@/lib/site'

const routes = [
  '',
  '/about',
  '/services',
  '/services/fertilizer-trading',
  '/services/commodity-trading',
  '/services/supply-chain-solutions',
  '/markets',
  '/contact',
  '/request-a-quote',
]

// One entry per page and language, each pointing to its translated twin.
export default function sitemap() {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, route),
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localizedUrl(l, route)])
        ),
      },
    }))
  )
}
