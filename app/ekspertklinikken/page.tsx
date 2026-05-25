import type { Metadata } from "next";
import { getAnsweredQuestions } from "@/app/api/_data/ekspertklinikken-store";
import { EkspertklinikkenClient } from "./page-client";

export const metadata: Metadata = {
  title: "Ekspertklinikken | Gratis månedlig live Q&A — Apriil",
  description:
    "Apriils eksperter svarer på spørsmål om SEO, betalt media og digital analyse live på LinkedIn. Siste fredag i måneden, kl. 12–13. Gratis og uforpliktende.",
};

const eventSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "Ekspertklinikken — Apriil",
  description:
    "Månedlig gratis live Q&A på LinkedIn der Apriils eksperter svarer på spørsmål om SEO, betalt media og digital analyse.",
  organizer: {
    "@type": "Organization",
    name: "Apriil",
    url: "https://apriil.no",
  },
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://linkedin.com/company/apriil",
  },
  isAccessibleForFree: true,
  performer: [
    { "@type": "Person", name: "Lasse Monroe", jobTitle: "SEO-strateg" },
    {
      "@type": "Person",
      name: "Mari Tveit",
      jobTitle: "Leder for betalt media",
    },
    {
      "@type": "Person",
      name: "Agathe Aase",
      jobTitle: "Analytiker og BI-rådgiver",
    },
  ],
};

export default function EkspertklinikkenPage() {
  const answeredQuestions = getAnsweredQuestions();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesSchema) }}
      />
      <EkspertklinikkenClient initialAnsweredFaq={answeredQuestions} />
    </>
  );
}
