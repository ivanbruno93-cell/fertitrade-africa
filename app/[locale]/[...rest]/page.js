import { notFound } from 'next/navigation'

// Any URL that matches no page ends up here, so the localized 404 is shown.
export default function CatchAllPage() {
  notFound()
}
