import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.fertitradeafrica.com'),
  title: {
    default: 'FertiTrade Africa | Trading & Supply Chain Solutions in Africa',
    template: '%s | FertiTrade Africa',
  },
  description:
    'FertiTrade Africa connects suppliers, customers and markets through fertilizer trading, import & export, commodity trading and integrated supply chain solutions. Based in Beira, Mozambique.',
  keywords: [
    'FertiTrade Africa',
    'fertilizer trading Africa',
    'fertilizer trading Mozambique',
    'commodity trading Africa',
    'import export Mozambique',
    'supply chain Mozambique',
    'supply chain Africa',
    'Beira Mozambique',
    'African trade',
    'fertilizer supply Africa',
    'commodity trading Mozambique',
  ],
  openGraph: {
    title: 'FertiTrade Africa | Trading & Supply Chain Solutions in Africa',
    description:
      'Connecting suppliers, customers and markets through fertilizer trading, import & export, commodity trading and integrated supply chain solutions.',
    siteName: 'FertiTrade Africa',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
