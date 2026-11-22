
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    // Check required environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error(
        "Contact API configuration is missing:",
        {
          resendApiKeyConfigured: Boolean(apiKey),
          contactEmailConfigured: Boolean(contactEmail),
        }
      );

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length < 2 ||
      name.length > 80 ||
      !emailPattern.test(email) ||
      email.length > 254 ||
      subject.length < 3 ||
      subject.length > 120 ||
      message.length < 10 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter valid form information.",
        },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}
Email: ${email}

Subject: ${subject}

Message:
${message}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

        <p><strong>Message:</strong></p>

        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
