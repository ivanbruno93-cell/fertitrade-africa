import { Sprout, Ship, PackageSearch, Truck } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Services',
  description:
    'Fertilizer trading, import & export, commodity trading and integrated supply chain solutions from FertiTrade Africa.',
}

const SERVICES = [
  {
    index: '01',
    icon: Sprout,
    title: 'Fertilizer Trading',
    description:
      'Sourcing and trading fertilizer products, connecting suppliers with agricultural markets and customers across Africa.',
    href: '/services/fertilizer-trading',
  },
  {
    index: '02',
    icon: Ship,
    title: 'Import & Export',
    description:
      'Supporting international trade operations through sourcing, coordination and movement of products across borders and markets.',
    href: '/services#import-export',
  },
  {
    index: '03',
    icon: PackageSearch,
    title: 'Commodity Trading',
    description:
      'Connecting producers, suppliers and buyers through practical commodity trading solutions across regional and international markets.',
    href: '/services/commodity-trading',
  },
  {
    index: '04',
    icon: Truck,
    title: 'Integrated Supply Chain Solutions',
    description:
      'Coordinating supply chain activities to support efficient product movement from source to destination.',
    href: '/services/supply-chain-solutions',
  },
]

const IMPORT_EXPORT_STEPS = [
  { title: 'Sourcing', description: 'Identifying suitable suppliers and products for the requirement.' },
  { title: 'Commercial Coordination', description: 'Aligning terms between suppliers and buyers.' },
  { title: 'Documentation', description: 'Preparing and coordinating trade documentation.' },
  { title: 'Logistics Coordination', description: 'Arranging transport and handling across the supply chain.' },
  { title: 'Shipment', description: 'Coordinating the movement of goods to port and onward.' },
  { title: 'Delivery', description: 'Connecting the shipment with its intended destination.' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">What We Do</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Our Services</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Practical trade and supply chain solutions designed to move products efficiently
            from source to market.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="import-export" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Service 02"
            title="Import & Export Services"
            description="FertiTrade Africa supports international trade operations, connecting suppliers, buyers and markets through an integrated approach."
          />
          <div className="mt-12">
            <ProcessTimeline steps={IMPORT_EXPORT_STEPS} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
