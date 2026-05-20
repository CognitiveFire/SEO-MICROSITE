import { SignalRoomSlideshow } from "../../components/signal-room-slideshow";
import { PremiumServicePricing } from "../../components/premium-service-pricing";

const clarityTasks = [
  {
    title: "Forbedre synlighet i AI-baserte søkeflater",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Innhold og struktur gjør det vanskelig for AI-systemer å forstå og referere til sentrale tjenester.",
  },
  {
    title: "Redusere ineffektiv anskaffelse på tvers av mediemiks",
    impact: "Høy",
    complexity: "Middels",
    description:
      "Flere kanaler driver trafikk med svak kommersiell intensjon og lav konverteringskvalitet.",
  },
  {
    title: "Forbedre sammenheng mellom innhold og annonsering",
    impact: "Middels",
    complexity: "Lav",
    description:
      "Manglende sammenheng mellom synlighet, landingssider og anskaffelse reduserer samlet effekt.",
  },
] as const;

export default function SignalRoomPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Rammeverk</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">Apriil Clarity</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-apriil-muted md:text-xl">
              Apriil Clarity er intelligenslaget som samler fragmenterte input, bruker prioriteringslogikk og gjør dem om til tydeligere operative valg for team og ledelse.
            </p>
          </div>
          <div className="border border-apriil-line/80 bg-apriil-dark p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8c6b8]">Hva det gjør</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              <li>Samler signaler fra søkesynlighet, betalt anskaffelse og rapportering</li>
              <li>Vekter påvirkning, kompleksitet, hast og risiko før prioritering</li>
              <li>Gjør output om til tiltak, eierskap og kommersielle implikasjoner</li>
            </ul>
          </div>
        </div>
      </section>
      <SignalRoomSlideshow />
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 lg:grid-cols-3">
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Signaler</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">Etterspørsel, anskaffelse, landingssideatferd og rapporteringshelse.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Clarity henter ikke bare tall. Den organiserer hvilket operativt bilde som faktisk er relevant for neste beslutning.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Logikk</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">En prioriteringsmodell i stedet for enda et dashbord.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Påvirkning, gjennomførbarhet, sikkerhet og tverrkanal-effekt vurderes samlet før et tiltak får oppmerksomhet.</p>
        </div>
        <div className="bg-[#fbfaf7] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-apriil-primary">Output</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-apriil-dark">En tydeligere operativ sekvens for både spesialister og ledelse.</h2>
          <p className="mt-4 text-sm leading-7 text-apriil-muted">Team får tydeligere prioriteringer. Ledelsen får et sterkere beslutningsgrunnlag. Begge ser hva som skal skje videre og hvorfor.</p>
        </div>
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl border-t border-apriil-line/80 pt-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Operativ verdi</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark">Et intelligenslag som gjør neste prioritering tydelig.</h2>
          </div>
          <div className="border border-apriil-line/80 bg-[#fbfaf7] p-6 md:p-8">
            <p className="text-base leading-8 text-apriil-muted">Clarity er laget for virksomheter som trenger ett felles beslutningsgrunnlag på tvers av spesialister, ledelse og kommersielle mål. Det reduserer rapporteringsstøy og gjør oppfølgingen mer operativ.</p>
          </div>
        </div>
      </section>

      <PremiumServicePricing
        embedded
        headlineTag="h2"
        eyebrow="Operasjonell tydelighet"
        headline="Tydeligere prioriteringer på tvers av moderne mediemiljøer."
        body="Apriil Clarity samler signaler fra synlighet, anskaffelse og mediemiks for å gi tydeligere beslutningsgrunnlag, prioriteringer og operasjonell oversikt."
        retainer={{
          label: "Apriil Clarity",
          price: "Fra NOK 15.000 / måned",
          description:
            "Operasjonell innsikt og strategisk prioritering på tvers av moderne synlighets- og anskaffelsesmiljøer.",
          items: [
            "Strategisk prioritering",
            "Medieovergripende innsikt",
            "Operasjonell rapportering",
            "Implementeringsoversikt",
            "Beslutningsstøtte",
            "Signal Room-tilgang",
          ],
          cta: "Book strategisamtale",
          href: "/contact",
        }}
        analysis={{
          label: "Apriil Clarity Analyse",
          price: "NOK 18.000",
          description:
            "En strukturert analyse av synlighet, anskaffelse og operasjonelle forbedringsmuligheter på tvers av moderne mediemiljøer.",
          items: [
            "Synlighetsanalyse",
            "Anskaffelsesanalyse",
            "Mediemiks-vurdering",
            "Prioritert tiltaksliste",
            "Strategiske anbefalinger",
            "Lederoppsummering",
            "Signal Room-demo",
          ],
          cta: "Bestill analyse",
          href: "/contact",
        }}
        tasks={[...clarityTasks]}
        closingHeadline="Bygget for tydeligere beslutninger og sterkere operasjonell kontroll."
        closingBody="Apriil Clarity kombinerer signaler fra moderne mediemiljøer til ett strukturert beslutningsgrunnlag utviklet for langsiktig synlighet og mer effektiv anskaffelse."
        closingCtaLabel="Book strategisamtale"
        closingCtaHref="/contact"
      />
    </main>
  );
}