'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const INCOTERMS = ['EXW', 'FOB', 'CFR', 'CIF', 'DAP', 'DDP', 'Other / Not sure']

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  origin: '',
  destination: '',
  incoterm: '',
  deliveryDate: '',
  additionalInfo: '',
  consent: false,
  honeypot: '',
}

export default function QuoteForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  const validate = () => {
    const next = {}
    if (!values.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!values.companyName.trim()) next.companyName = 'Please enter your company name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.country.trim()) next.country = 'Please enter your country.'
    if (!values.product.trim()) next.product = 'Please enter the product or commodity.'
    if (!values.quantity.trim()) next.quantity = 'Please enter an estimated quantity.'
    if (!values.consent) next.consent = 'Please confirm you agree to be contacted.'
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
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
      setValues(initialState)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border border-green/30 bg-green/5 p-10 text-center">
        <CheckCircle2 className="text-green" size={32} />
        <p className="text-lg font-bold text-navy">Thank you. Your enquiry has been received.</p>
        <p className="text-sm text-ink/60">
          A member of our trade team will review your request and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="fullName" value={values.fullName} onChange={handleChange} error={errors.fullName} required />
        <Field label="Company Name" name="companyName" value={values.companyName} onChange={handleChange} error={errors.companyName} required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Country" name="country" value={values.country} onChange={handleChange} error={errors.country} required />
        <Field label="Product / Commodity" name="product" value={values.product} onChange={handleChange} error={errors.product} required />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Quantity" name="quantity" value={values.quantity} onChange={handleChange} error={errors.quantity} required />
        <Field label="Origin" name="origin" value={values.origin} onChange={handleChange} />
        <Field label="Destination" name="destination" value={values.destination} onChange={handleChange} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="incoterm" className="mb-1.5 block text-sm font-semibold text-navy">
            Preferred Incoterm
          </label>
          <select
            id="incoterm"
            name="incoterm"
            value={values.incoterm}
            onChange={handleChange}
            className="w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-green"
          >
            <option value="">Select an option</option>
            {INCOTERMS.map((term) => (
              <option key={term} value={term}>{term}</option>
            ))}
          </select>
        </div>
        <Field label="Required Delivery Date" name="deliveryDate" type="date" value={values.deliveryDate} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="additionalInfo" className="mb-1.5 block text-sm font-semibold text-navy">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          value={values.additionalInfo}
          onChange={handleChange}
          className="w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-green"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 flex-none accent-green"
        />
        I agree to be contacted regarding my enquiry.
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-red-500">{errors.consent}</p>}

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {submitting ? 'Submitting...' : 'Submit Request'}
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
