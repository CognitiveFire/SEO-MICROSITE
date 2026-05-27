import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "Programmatic | Digital markedsforing | Apriil",
  description:
    "Som sertifisert Google Marketing Platform-partner leverer Apriil programmatisk radgivning med transparente kjop, premium inventory og malbar kommersiell effekt.",
};

export default function ProgrammaticPage() {
  return (
    <ServicePageTemplate
      serviceName="Programmatic"
      slug="programmatic"
      heroTitle="Programmatisk annonsering med bedre kontroll og bedre data"
      heroBody="Som sertifisert Google Marketing Platform-partner hjelper vi virksomheter med a kjope digitale annonseplasseringer smartere, tryggere og mer effektivt - med tydelig innsikt i hva som skaper kommersiell effekt."
      heroImageSrc="/apriil-digital/assets/programmatic-apriil.png"
      heroImageAlt="Programmatisk okosystem med publikumsegmentering, datadrevet optimalisering og brand safety"
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="Apriil jobber consultancy-first med programmatic: vi kombinerer sertifisert plattformkompetanse, enterprise-teknologi og tydelige styringsprinsipper for a sikre kvalitet, presisjon og full transparens i mediekjopene."
      serviceCards={[
        {
          title: "Sertifisert kompetanse",
          body: "Apriil er sertifisert innen Google Marketing Platform og jobber med verktoy som gir bedre innsikt, tryggere annonsering og mer presis malretting.",
          icon: "programmatic",
        },
        {
          title: "Transparente kjop",
          body: "Vi gir innsyn i hvor annonser vises, hvem de nar og hva som faktisk skaper effekt. Beslutninger tas pa data, ikke antakelser.",
          icon: "display",
        },
        {
          title: "Kvalitet fremfor volum",
          body: "Vi prioriterer relevante malgrupper, premium inventory og brand-safe miljoer fremfor billig rekkevidde og uspesifikk distribusjon.",
          icon: "budget",
        },
        {
          title: "Audience intelligence",
          body: "Vi bygger segmentering basert pa signaler, atferd og forretningsmal for a na riktige beslutningstakere med hoyere presisjon.",
          icon: "analytics",
        },
        {
          title: "Private marketplaces",
          body: "Gjennom PMPs og kvalitetssikrede avtaler sikrer vi tilgang til premium publisher-miljoer med bedre kontroll pa kontekst og leveranse.",
          icon: "budget",
        },
        {
          title: "Real-time optimalisering",
          body: "Vi optimaliserer lopende pa tvers av plasseringer, frekvens, enheter og malgrupper for a forbedre kostnadseffektivitet og forretningsresultat.",
          icon: "reporting",
        },
        {
          title: "Brand-safe environments",
          body: "Vi bruker tydelige kvalitetsrammer, ekskluderingslister og kontrollmekanismer for a beskytte merkevaren i alle miljoer.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Forretningsinnsikt og signalanalyse",
          body: "Vi starter med mal, marginer og markedssignaler for a definere hvordan programmatic skal bidra til konkrete forretningsresultater.",
        },
        {
          title: "Strategisk prioritering",
          body: "Vi prioriterer malgrupper, inventory-typer, kontekst og budsjettfordeling basert pa evidens, ikke standardoppsett.",
        },
        {
          title: "Kontrollert implementering",
          body: "Kampanjer settes opp med tydelig governance for brand safety, frekvensstyring, malbarhet og rapporteringsstruktur.",
        },
        {
          title: "Data-led optimalisering",
          body: "Vi justerer lopende pa tvers av bud, segmenter, enheter og plasseringer for a styrke effektiv rekkevidde og kommersiell effekt.",
        },
      ]}
      caseStudy={{
        title: "Nordisk aktor innen finansielle tjenester",
        situation:
          "Virksomheten hadde hoy medieinvestering, men begrenset innsikt i kvaliteten pa inventory, frekvenskontroll og faktisk forretningsbidrag per malgruppe.",
        actions: [
          "Etablerte ny audience intelligence-modell med tydelig segmenthierarki",
          "Flyttet deler av volumet til premium inventory og private marketplaces",
          "Innførte strengere brand safety-rammer og frekvensgovernance",
          "Bygget transparent rapportering pa kvalitet, rekkevidde og forretningssignal per segment",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "27 %", label: "hoyere andel visninger i premium miljoer" },
          { value: "19 %", label: "okning i kvalifisert trafikk" },
          { value: "Betydelig", label: "bedre innsikt i hva som skaper effekt" },
        ],
      }}
      faqItems={[
        {
          question: "Hva er programmatisk annonsering?",
          answer: "Programmatisk annonsering er datadrevet kjop av annonseplasseringer i sanntid, der malgrupper, kontekst og bud styres for a sikre mer presis distribusjon og bedre kontroll.",
        },
        {
          question: "Hvordan skiller dette seg fra vanlig displayannonsering?",
          answer: "Forskjellen er graden av styring, innsikt og optimalisering. I programmatic kan vi justere distribusjon, frekvens, segmenter og kvalitet lopende basert pa faktiske signaler.",
        },
        {
          question: "Hvilke plattformer jobber dere med?",
          answer: "Vi jobber blant annet med Google Marketing Platform og tilknyttede inventory-kilder for a sikre robust leveranse, transparens og skalerbar styring.",
        },
        {
          question: "Hvordan sikrer dere brand safety?",
          answer: "Vi bruker tydelige sikkerhetsrammer med whitelist/blacklist-prinsipper, kategori-ekskludering og kontinuerlig overvaking av plasseringer.",
        },
        {
          question: "Kan programmatic kombineres med andre kanaler?",
          answer: "Ja. Programmatic fungerer best som del av en samlet strategi med sok, social, SEO og analyse, der kanalene forsterker hverandre.",
        },
        {
          question: "Hvordan rapporterer dere resultater?",
          answer: "Vi rapporterer transparent pa hvor annonser vises, hvem de nar, kvalitetsindikatorer og hvordan leveransen bidrar til kommersielle mal.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende gjennomgang av dagens programmatic-oppsett og gi en konkret anbefaling for bedre kontroll, tryggere annonsering og malbar effekt."
    />
  );
}
