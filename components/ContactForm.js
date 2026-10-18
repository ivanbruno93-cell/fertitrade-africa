'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { CheckCircle2 } from 'lucide-react'

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  honeypot: '',
}

export default function ContactForm() {
  const t = useTranslations('ContactForm')
  const locale = useLocale()
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = t('errors.name')
    if (!values.email.trim()) {
      next.email = t('errors.email')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = t('errors.emailInvalid')
    }
    if (!values.subject.trim()) next.subject = t('errors.subject')
    if (!values.message.trim()) next.message = t('errors.message')
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, locale }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error('request failed')
      }
      setSubmitted(true)
      setValues(initialState)
    } catch (err) {
      setSubmitError(t('errors.generic'))
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border border-green/30 bg-green/5 p-10 text-center">
        <CheckCircle2 className="text-green" size={32} />
        <p className="text-lg font-bold text-navy">{t('success.title')}</p>
        <p className="text-sm text-ink/60">{t('success.text')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={t('labels.name')} name="name" value={values.name} onChange={handleChange} error={errors.name} required />
        <Field label={t('labels.company')} name="company" value={values.company} onChange={handleChange} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={t('labels.email')} name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
        <Field label={t('labels.phone')} name="phone" type="tel" value={values.phone} onChange={handleChange} />
      </div>
      <Field label={t('labels.subject')} name="subject" value={values.subject} onChange={handleChange} error={errors.subject} required />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          {t('labels.message')} <span className="text-green">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={`w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-green ${
            errors.message ? 'border-red-400' : 'border-navy/15'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {submitting ? t('sending') : t('submit')}
      </button>
      {submitError && <p className="text-sm text-red-500">{submitError}</p>}

      {/* Honeypot — hidden from real visitors, often filled in by bots */}
      <input
        type="text"
        name="honeypot"
        value={values.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
    </form>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-green ${
          error ? 'border-red-400' : 'border-navy/15'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
