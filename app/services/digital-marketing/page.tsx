import Link from "next/link";
import { ServicePageTemplate } from "@/components/service-page-template";

export default function DigitalMarketingPage() {
  return (
    <>
      <ServicePageTemplate
        eyebrow="Digital markedsføring"
        title="Digital markedsføring som henger sammen på tvers av SEO, paid media og analyse"
        intro="Apriil bygger digitale modeller som gjør at markedsføring, innsikt og kommersielle mål peker i samme retning. I stedet for separate kanalprosjekter får du én struktur som gir tydeligere prioriteringer og målbar effekt."
        trendTitle="Hva har endret seg i digital markedsføring?"
        trendBody="AI-søk, automatisert annonsering og nye personvernkrav gjør at gamle kanal-oppskrifter ikke holder. Bedrifter som lykkes nå samkjører synlighet, anskaffelse og innsikt i ett operativt system."
        bullets={[
          "Strategi som kobler SEO, paid media og analyse",
          "Prioriteringsmodell med tydelige beslutningspunkter",
          "Kontinuerlig optimalisering med kommersiell forankring",
          "Måling og rapportering som ledelsen faktisk bruker",
          "Tverrfaglige team i Bergen, Stavanger og Oslo",
        ]}
        tiers={[
          {
            name: "Basis",
            price: "Fra NOK 18 000 / mnd",
            audience: "For virksomheter som vil få kontroll på digital miks og tydelig retning.",
            features: [
              "Månedlig strategimøte",
              "SEO eller paid som hovedkanal",
              "Grunnleggende målestruktur",
              "Månedlig prioriteringslogg",
            ],
          },
          {
            name: "Vekst",
            price: "Fra NOK 34 000 / mnd",
            audience: "For vekstbedrifter som trenger høyere tempo og tettere oppfølging.",
            highlighted: true,
            features: [
              "SEO + paid media i samme arbeidsflyt",
              "Ukentlig optimalisering",
              "Clarity-rapportering og tiltaksstyring",
              "Kvartalsvis ledelsesgjennomgang",
            ],
          },
          {
            name: "Enterprise",
            price: "Fra NOK 65 000 / mnd",
            audience: "For større virksomheter med komplekse markeder, flere team og høye mål.",
            features: [
              "Dedikert tverrfaglig team",
              "Avansert attribusjon og datamodell",
              "Løpende eksperimentering",
              "Månedlig lederworkshop",
            ],
          },
        ]}
      />

      <section className="bg-white px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-4xl">Utforsk tjenestene hver for seg</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link href="/services/seo" className="rounded-2xl border border-apriil-line/80 bg-[#fbfaf7] p-6 text-apriil-dark transition hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold">SEO</h3>
              <p className="mt-2 text-sm text-apriil-muted">Bli funnet i søk og AI-svar med strukturert, kommersielt innhold.</p>
            </Link>
            <Link href="/services/paid-media" className="rounded-2xl border border-apriil-line/80 bg-[#fbfaf7] p-6 text-apriil-dark transition hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold">Paid media</h3>
              <p className="mt-2 text-sm text-apriil-muted">Effektiv annonsering med bedre trafikkkvalitet og høyere avkastning.</p>
            </Link>
            <Link href="/services/intelligence-consulting-analytics" className="rounded-2xl border border-apriil-line/80 bg-[#fbfaf7] p-6 text-apriil-dark transition hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold">Intelligence, consulting og analytics</h3>
              <p className="mt-2 text-sm text-apriil-muted">Fra rådata til prioriterte beslutninger for ledelse og team.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
