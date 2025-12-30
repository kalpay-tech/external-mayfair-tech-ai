import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Check if API key is available
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Initialize Resend inside the function
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "MayfairTech Contact Form <onboarding@resend.dev>", // You can change this after verifying your domain
      to: "bushra.khalid@mayfair.com.pk",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #081b3e; margin-top: 0;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #6fee51; margin-bottom: 10px; font-size: 18px;">Contact Information</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6fee51;">${email}</a></p>
              ${phone ? `<p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>` : ""}
              ${company ? `<p style="margin: 5px 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ""}
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6fee51; margin-bottom: 10px; font-size: 18px;">Service Interest</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Service Interested In:</strong> ${service}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #6fee51; margin-bottom: 10px; font-size: 18px;">Message</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 4px solid #6fee51;">
                <p style="margin: 0; color: #333; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #707e8a; font-size: 12px;">
              <p>This email was sent from the MayfairTech.ai contact form.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

