import { Resend } from 'resend'

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || 'info@fertitrade.co.mz'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      product,
      quantity,
      origin,
      destination,
      incoterm,
      deliveryDate,
      additionalInfo,
      consent,
      honeypot,
    } = body

    if (honeypot) {
      return Response.json({ ok: true })
    }

    if (!fullName || !companyName || !email || !country || !product || !quantity || !consent) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Quote form error: RESEND_API_KEY is not set.')
      return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
    }
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'FertiTrade Africa Website <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New quote request: ${product} (${companyName})`,
      text: [
        `Full Name: ${fullName}`,
        `Company Name: ${companyName}`,
        `Email: ${email}`,
        `Phone: ${phone || '-'}`,
        `Country: ${country}`,
        `Product / Commodity: ${product}`,
        `Quantity: ${quantity}`,
        `Origin: ${origin || '-'}`,
        `Destination: ${destination || '-'}`,
        `Preferred Incoterm: ${incoterm || '-'}`,
        `Required Delivery Date: ${deliveryDate || '-'}`,
        '',
        'Additional Information:',
        additionalInfo || '-',
      ].join('\n'),
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Quote form error:', error)
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}