import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.GMAIL_USER || "bassammethqal7734@gmail.com";
    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (!smtpPass) {
      // No SMTP password configured yet — signal immediate client mailto/WhatsApp fallback
      return NextResponse.json(
        { ok: false, fallback: "direct_client" },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: "bassammethqal7734@gmail.com",
      replyTo: email,
      subject: `[Bassam Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #2563EB; margin-top: 0;">رسالة جديدة من موقعك الشخصي</h2>
          <p><strong>الاسم:</strong> ${String(name)}</p>
          <p><strong>البريد الإلكتروني:</strong> ${String(email)}</p>
          <p><strong>الموضوع:</strong> ${String(subject)}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${String(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, fallback: "direct_client" },
      { status: 200 }
    );
  }
}
