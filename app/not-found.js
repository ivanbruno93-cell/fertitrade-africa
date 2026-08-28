import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-24">
      <div className="container-page max-w-lg text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
