import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  office?: string;
  focus?: string;
  message?: string;
  source?: string;
  submittedAt?: string;
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const webhookUrl = process.env.WEBHOOK_URL;
  const webhookSecret = process.env.WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { error: "Lead capture is not configured." },
      { status: 500 },
    );
  }

  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = cleanValue(payload.name);
  const email = cleanValue(payload.email);
  const company = cleanValue(payload.company);
  const office = cleanValue(payload.office);
  const focus = cleanValue(payload.focus);
  const message = cleanValue(payload.message);
  const source = cleanValue(payload.source) || "website";
  const submittedAt = cleanValue(payload.submittedAt) || new Date().toISOString();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-webhook-secret": webhookSecret,
      "x-apriil-source": source,
    },
    body: JSON.stringify({
      name,
      email,
      company,
      office,
      focus,
      message,
      source,
      submittedAt,
    }),
    cache: "no-store",
  });

  if (!webhookResponse.ok) {
    return NextResponse.json(
      { error: "Unable to submit lead right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}