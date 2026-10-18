import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  // English (default) has no prefix: /about. Portuguese is /pt/about.
  localePrefix: 'as-needed',
  // Everyone lands on English unless they choose Portuguese. Set to true to
  // redirect visitors automatically based on their browser language.
  localeDetection: false,
})
