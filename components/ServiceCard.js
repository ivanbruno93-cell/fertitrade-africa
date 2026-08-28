import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ index, title, description, href, icon: Icon, image }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
      {image && (
        <div className="h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt=""
            width={900}
            height={700}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-bold tracking-[0.16em] text-green">
            {index}
          </span>
          {Icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-navy">
              <Icon size={28} strokeWidth={1.75} />
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors group-hover:text-green"
        >
          Learn more
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  )
}
