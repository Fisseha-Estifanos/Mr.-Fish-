import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";

// NOTE: The `from` email must be a verified domain in your Resend account.
// Until you verify fish.pro.et with Resend, use "onboarding@resend.dev" for testing
// (only delivers to your Resend-registered email address).
// Once verified, set RESEND_FROM_EMAIL=noreply@fish.pro.et in your environment.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, challenge } = body;

    if (!name || !email) {
      return Response.json({ error: "Name and email are required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `Mr. Fish Contact Form <${from}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #0a0a0f;">
          <h2 style="color: #00d4ff; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td>${company}</td></tr>` : ""}
            ${role ? `<tr><td style="padding: 8px 0; font-weight: 600;">Role</td><td>${role}</td></tr>` : ""}
          </table>
          ${challenge ? `
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e0e0e0;" />
            <h3 style="margin-bottom: 8px;">Their Challenge</h3>
            <p style="line-height: 1.6; color: #444;">${challenge.replace(/\n/g, "<br/>")}</p>
          ` : ""}
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <p style="font-size: 12px; color: #888;">Reply to this email to respond directly to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
