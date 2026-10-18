'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const SLIDES = [
  { src: '/images/hero-slides/hero-slide-1-field.jpg', key: 'field' },
  { src: '/images/hero-slides/hero-slide-2-port.jpg', key: 'port' },
  { src: '/images/hero-slides/hero-slide-3-vessel.jpg', key: 'vessel' },
  { src: '/images/hero-slides/hero-slide-4-transport.jpg', key: 'transport' },
  { src: '/images/hero-slides/hero-slide-5-warehouse.jpg', key: 'warehouse' },
]

const INTERVAL_MS = 5000

export default function HeroCarousel({ className = '' }) {
  const t = useTranslations('Hero')
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return undefined
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, reducedMotion])

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={t(`slides.${slide.key}`)}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: reducedMotion ? '0ms' : '1200ms',
          }}
        />
      ))}

      {!reducedMotion && (
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={t('showSlide', { n: i + 1, alt: t(`slides.${slide.key}`) })}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
