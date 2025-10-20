import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@mayfairtech.ai>", // Replace with your verified domain
      to: ["contact@mayfair.com.pk"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        company,
        service,
        message,
      }),
      // Fallback text version
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "Not provided"}
Service Interest: ${service || "Not specified"}

Message:
${message}

---
Sent from Mayfair Tech AI website contact form
Time: ${new Date().toLocaleString()}
      `.trim(),
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
