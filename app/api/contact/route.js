import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@fertitrade.co.mz'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, subject, message, honeypot } = body

    // Honeypot: a hidden field real visitors never fill in, but bots often do.
    if (honeypot) {
      return Response.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form error: RESEND_API_KEY is not set.')
      return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
    }
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'FertiTrade Africa Website <no-reply@fertitrade.co.mz>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form enquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || '-'}`,
        `Email: ${email}`,
        `Phone: ${phone || '-'}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}