import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex items-center gap-3 rounded-sm bg-white p-2">
            <Image
              src="/logo.jpg"
              alt="FertiTrade Africa"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <p className="text-sm font-semibold text-white">FertiTrade Africa</p>
          <p className="mt-1 text-sm text-white/60">Connecting Markets. Growing Africa.</p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-green-light">
            Company
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link href="/markets" className="hover:text-white">Markets</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-green-light">
            Services
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li><Link href="/services/fertilizer-trading" className="hover:text-white">Fertilizer Trading</Link></li>
            <li><Link href="/services#import-export" className="hover:text-white">Import & Export</Link></li>
            <li><Link href="/services/commodity-trading" className="hover:text-white">Commodity Trading</Link></li>
            <li><Link href="/services/supply-chain-solutions" className="hover:text-white">Supply Chain Solutions</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-green-light">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Beira, Mozambique</li>
            <li>
              <a href="tel:+258841142911" className="flex items-center gap-2 hover:text-white">
                <Phone size={16} /> +258 84 114 2911
              </a>
            </li>
            <li>
              <a href="https://wa.me/258841142911" className="flex items-center gap-2 hover:text-white" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@fertitradeafrica.co.mz" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} /> info@fertitradeafrica.co.mz
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/fertitrade-africa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>&copy; {year} FertiTrade Africa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/80">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
