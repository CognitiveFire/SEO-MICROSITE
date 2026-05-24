import type { Metadata } from "next";
import { getAnsweredQuestions } from "@/app/api/_data/ekspertklinikken-store";
import { EkspertklinikkenClient } from "./page-client";

export const metadata: Metadata = {
  title: "Ekspertklinikken | Gratis manedlig live Q&A - Apriil",
  description:
    "Apriils eksperter svarer pa sporsmal om SEO, betalt media og digital analyse live pa LinkedIn. Siste fredag i maneden, kl. 12-13. Gratis og uforpliktende.",
};

const eventSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "Ekspertklinikken - Apriil",
  description:
    "Manedlig gratis live Q&A pa LinkedIn der Apriils eksperter svarer pa sporsmal om SEO, betalt media og digital analyse.",
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
    { "@type": "Person", name: "Mari Tveit", jobTitle: "Paid media-leder" },
    { "@type": "Person", name: "Agathe Aase", jobTitle: "Analytiker og BI-radgiver" },
  ],
};

export default function EkspertklinikkenPage() {
  const answeredQuestions = getAnsweredQuestions();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesSchema) }} />
      <EkspertklinikkenClient initialAnsweredFaq={answeredQuestions} />
    </>
  );
}
