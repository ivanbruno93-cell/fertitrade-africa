import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Run on every page route, but skip API routes, Next internals and any
  // file with an extension (images, icon, robots.txt, sitemap.xml...).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
