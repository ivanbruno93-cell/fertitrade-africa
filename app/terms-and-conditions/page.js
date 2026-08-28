export const metadata = { title: 'Terms & Conditions' }

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-6 text-sm leading-relaxed text-ink/70">
          This page is a placeholder. FertiTrade Africa&apos;s terms and conditions of use
          for this website will be published here once finalised. For questions in the
          meantime, contact us at{' '}
          <a href="mailto:info@fertitradeafrica.com" className="font-semibold text-navy underline">
            info@fertitradeafrica.com
          </a>.
        </p>
      </div>
    </section>
  )
}
