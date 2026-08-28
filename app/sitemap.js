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

export default function sitemap() {
  const base = 'https://www.fertitradeafrica.com'
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}
