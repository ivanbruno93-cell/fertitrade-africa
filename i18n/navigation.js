import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Locale-aware versions of Link, usePathname, useRouter and redirect.
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
