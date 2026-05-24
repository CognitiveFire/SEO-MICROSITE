import { NextResponse } from "next/server";
import { createQuestion, getQuestions } from "@/app/api/_data/ekspertklinikken-store";

type QuestionPayload = {
  name?: string;
  email?: string;
  topic?: string;
  question?: string;
  consentToPublish?: boolean;
  eventMonth?: string;
  pageUrl?: string;
  submittedAt?: string;
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const month = cleanValue(searchParams.get("month"));
  const statusRaw = cleanValue(searchParams.get("status"));
  const status = statusRaw === "pending" || statusRaw === "answered" ? statusRaw : undefined;

  const data = getQuestions(month || undefined, status);
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  let payload: QuestionPayload;

  try {
    payload = (await request.json()) as QuestionPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = cleanValue(payload.name);
  const email = cleanValue(payload.email);
  const topic = cleanValue(payload.topic);
  const question = cleanValue(payload.question);
  const eventMonth = cleanValue(payload.eventMonth);
  const submittedAt = cleanValue(payload.submittedAt) || new Date().toISOString();
  const consentToPublish = Boolean(payload.consentToPublish);

  if (!name || !email || !topic || !question || !eventMonth || !consentToPublish) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (question.length < 20 || question.length > 500) {
    return NextResponse.json({ error: "Question must be between 20 and 500 characters." }, { status: 400 });
  }

  const created = createQuestion({
    name,
    email,
    topic,
    question,
    consentToPublish,
    eventMonth,
    submittedAt,
  });

  return NextResponse.json({ ok: true, question: created });
}
