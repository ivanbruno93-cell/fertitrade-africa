import QuoteForm from '@/components/QuoteForm'

export const metadata = {
  title: 'Request a Quote',
  description:
    'Request a trade quote from FertiTrade Africa for fertilizer, commodity or supply chain enquiries.',
}

export default function RequestQuotePage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3 text-green-light">Request a Quote</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Request a Quote</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Tell us about your requirement and our trade team will follow up with next steps.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <div className="rounded-sm border border-navy/10 bg-white p-8 shadow-card md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
