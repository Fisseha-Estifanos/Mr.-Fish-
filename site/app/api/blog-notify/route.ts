import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email address is required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `Mr. Fish Blog <${from}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Blog notification signup — ${email}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #0a0a0f;">
          <h2 style="color: #00d4ff; margin-bottom: 24px;">New Blog Notification Signup</h2>
          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            Someone signed up to be notified when the blog launches:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Source</td><td>Blog page — "Notify Me" form</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <p style="font-size: 12px; color: #888;">Reply to this email to reach the subscriber directly.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to sign up. Please try again." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Blog notify route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
