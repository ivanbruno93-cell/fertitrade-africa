import { Mail, Phone, MessageCircle, Linkedin, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with FertiTrade Africa. Headquartered in Beira, Mozambique, connecting suppliers, buyers and markets across Africa.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Contact</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Let&apos;s Talk Trade</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Whether you are a supplier, buyer, distributor or strategic partner, we&apos;d
            like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold text-navy">FertiTrade Africa</p>
            <div className="mt-6 space-y-5 text-sm text-ink/75">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-none text-green" />
                Beira, Mozambique
              </p>
              <a href="tel:+258841142911" className="flex items-center gap-3 hover:text-navy">
                <Phone size={18} className="flex-none text-green" />
                +258 84 114 2911
              </a>
              <a
                href="https://wa.me/258841142911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-navy"
              >
                <MessageCircle size={18} className="flex-none text-green" />
                WhatsApp: +258 84 114 2911
              </a>
                <a href="mailto:info@fertitrade.co.mz" className="flex items-center gap-3 hover:text-navy">
                <Mail size={18} className="flex-none text-green" />
                info@fertitrade.co.mz
              </a>

              <a href="https://www.linkedin.com/company/fertitrade-africa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-navy">
                <Linkedin size={18} className="flex-none text-green" />
                LinkedIn
              </a>
            </div>
            
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-sm border border-navy/10 bg-white p-8 shadow-card md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
