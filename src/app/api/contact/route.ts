import { NextResponse } from "next/server";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const user_name = getString(body.user_name);
    const user_email = getString(body.user_email);
    const subject = getString(body.subject);
    const message = getString(body.message);

    if (!user_name || !user_email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailjsResponse = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          user_name,
          user_email,
          subject,
          message,
        },
      }),
      cache: "no-store",
    });

    if (!emailjsResponse.ok) {
      const details = await emailjsResponse.text();
      console.error("EmailJS send failed:", details);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
