import type { Recording, SubmittedQuestion, TopicTag } from "@/app/ekspertklinikken/types";

type InternalQuestion = SubmittedQuestion & {
  month: string;
  submittedAt: string;
  name?: string;
  email?: string;
  consentToPublish?: boolean;
};

const topicLabelMap: Record<TopicTag, string> = {
  seo: "SEO",
  paid: "Betalt media",
  bi: "Analyse og BI",
  general: "Generelt",
};

const questions: InternalQuestion[] = [
  {
    id: "q-101",
    topic: "seo",
    topicLabel: "SEO",
    question: "Hvordan prioriterer vi innhold når både Google og AI-svarmotorer skal forstå oss?",
    status: "pending",
    month: "2026-05",
    submittedAt: "2026-05-10T09:20:00.000Z",
  },
  {
    id: "q-102",
    topic: "paid",
    topicLabel: "Betalt media",
    question: "Når bør vi splitte budsjettet mellom søk og paid social for best mulig lønnsomhet?",
    status: "pending",
    month: "2026-05",
    submittedAt: "2026-05-14T11:10:00.000Z",
  },
  {
    id: "q-001",
    topic: "general",
    topicLabel: "Strategi",
    question: "Hva er første steg for å få bedre samspill mellom SEO, annonsering og analyse?",
    status: "answered",
    answeredInSession: "April 2026",
    answer: "Start med ett felles mål for inntekt, mål deretter bidrag per kanal ukentlig og prioriter tiltak som løfter total effekt.",
    month: "2026-04",
    submittedAt: "2026-04-20T10:00:00.000Z",
  },
];

const recordings: Recording[] = [
  {
    id: "r-2026-05",
    title: "Mai-klinikken: AI SEO og Meta Ads-strategi",
    date: "2026-05-29T10:00:00.000Z",
    displayDate: "29. mai 2026",
    durationMinutes: 57,
    questionCount: 14,
    topics: ["seo", "paid", "general"],
    linkedInUrl: "https://www.linkedin.com/company/apriil/",
    recordingAvailableAt: "2026-05-29T12:00:00.000Z",
    status: "pending",
  },
  {
    id: "r-2026-04",
    title: "April-klinikken: Sporing, KPI-er og kommersiell prioritering",
    date: "2026-04-24T10:00:00.000Z",
    displayDate: "24. april 2026",
    durationMinutes: 60,
    questionCount: 11,
    topics: ["bi", "general"],
    linkedInUrl: "https://www.linkedin.com/company/apriil/",
    recordingAvailableAt: "2026-04-24T12:00:00.000Z",
    status: "available",
  },
  {
    id: "r-2026-06",
    title: "Juni-klinikken: Fra setup til revenue",
    date: "2026-06-26T10:00:00.000Z",
    displayDate: "26. juni 2026",
    durationMinutes: 60,
    questionCount: 0,
    topics: ["seo", "paid", "bi"],
    linkedInUrl: "https://www.linkedin.com/company/apriil/",
    recordingAvailableAt: "2026-06-26T12:00:00.000Z",
    status: "upcoming",
  },
];

function syncRecordingStatus(recording: Recording): Recording {
  const now = Date.now();
  const startsAt = new Date(recording.date).getTime();
  const availableAt = new Date(recording.recordingAvailableAt).getTime();

  if (now < startsAt) {
    return { ...recording, status: "upcoming" };
  }

  if (now >= availableAt) {
    return { ...recording, status: "available" };
  }

  return { ...recording, status: "pending" };
}

export function getQuestions(month?: string, status?: "pending" | "answered"): SubmittedQuestion[] {
  return questions
    .filter((q) => (month ? q.month === month : true))
    .filter((q) => (status ? q.status === status : true))
    .sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1))
    .map(({ month: _month, submittedAt: _submittedAt, name: _name, email: _email, consentToPublish: _consentToPublish, ...rest }) => rest);
}

export function getAnsweredQuestions(): SubmittedQuestion[] {
  return getQuestions(undefined, "answered").filter((q) => Boolean(q.answer));
}

export function createQuestion(input: {
  name: string;
  email: string;
  topic: string;
  question: string;
  consentToPublish: boolean;
  eventMonth: string;
  submittedAt: string;
}): SubmittedQuestion {
  const normalizedTopic: TopicTag =
    input.topic === "seo" || input.topic === "paid" || input.topic === "bi" || input.topic === "general"
      ? input.topic
      : "general";

  const q: InternalQuestion = {
    id: `q-${Math.random().toString(36).slice(2, 10)}`,
    topic: normalizedTopic,
    topicLabel: topicLabelMap[normalizedTopic],
    question: input.question,
    status: "pending",
    month: input.eventMonth,
    submittedAt: input.submittedAt,
    consentToPublish: input.consentToPublish,
    name: input.name,
    email: input.email,
  };

  questions.unshift(q);

  const { month: _month, submittedAt: _submittedAt, name: _name, email: _email, consentToPublish: _consentToPublish, ...publicQuestion } = q;
  return publicQuestion;
}

export function getRecordings(): Recording[] {
  return recordings
    .map((recording) => syncRecordingStatus(recording))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
