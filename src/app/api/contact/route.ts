import { Resend } from "resend";
import { NextRequest } from "next/server";
import { z } from "zod";
import { ok, fail, escapeHtml } from "@/lib/utils";

const ContactSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional(),
  service: z.string().max(50).optional(),
  message: z.string().min(1).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);
    if (!result.success) return fail("Invalid input");

    const { firstName, lastName, email, phone, service, message } = result.data;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.YOUR_EMAIL!],
      subject: `New Contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });

    return ok(null, "Message sent successfully");
  } catch (err) {
    console.error("[POST /api/contact]", err);
    return fail("Internal server error", 500);
  }
}
