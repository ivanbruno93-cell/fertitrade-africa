import Link from 'next/link'

export default function CTASection({
  title = "Let's Connect Your Market to Opportunity.",
  description = 'Whether you are a supplier, buyer, distributor or strategic partner, let\u2019s explore how we can work together.',
}) {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/request-a-quote" className="btn-primary">
            Request a Quote
          </Link>
          <Link href="/contact" className="btn-outline-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
