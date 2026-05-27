import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/digital-markedsforing/service-page-template";

export const metadata: Metadata = {
  title: "DOOH | Digital markedsforing | Apriil",
  description:
    "DOOH-radgivning fra Apriil med tydelig prioritering av flater, timing og kommersiell effekt.",
};

export default function DoohPage() {
  return (
    <ServicePageTemplate
      serviceName="DOOH"
      slug="dooh"
      heroTitle="DOOH som stotter lokal synlighet og kommersiell effekt"
      heroBody="Vi hjelper virksomheter med a bruke digitale utendorsflater mer presist gjennom bedre plassering, timing og oppfolging."
      heroImageSrc="/apriil-digital/assets/out-of-home.png"
      heroImageAlt="DOOH-illustrasjon for Apriil"
      heroCtaLabel="Bestill en gjennomgang"
      whatWeDoIntro="DOOH fungerer best nar lokale signaler, budskap og distribusjon sees i sammenheng. Vi bygger planer som er enkle a styre og enkle a evaluere."
      serviceCards={[
        {
          title: "Geografisk prioritering",
          body: "Vi velger omrader og flater basert pa faktisk markedspotensial, ikke bare synlighet alene.",
          icon: "dooh",
        },
        {
          title: "Timing og sesong",
          body: "Vi tilpasser visningstidspunkt etter nar malgruppen er mest mottakelig for budskapet.",
          icon: "programmatic",
        },
        {
          title: "Budskapstilpasning",
          body: "Vi justerer kreative budskap til kontekst, sted og kampanjemal for a okke relevans.",
          icon: "content",
        },
        {
          title: "Maling og oppfolging",
          body: "Vi folger leveranse og effekt med tydelig rapportering slik at plan og budsjett kan justeres fortlopende.",
          icon: "reporting",
        },
      ]}
      processSteps={[
        {
          title: "Innsikt og analyse",
          body: "Vi kartlegger mal, geografi og dagens mediemiks for a avklare hvor DOOH gir best bidrag.",
        },
        {
          title: "Prioritering",
          body: "Vi prioriterer steder, perioder og budsjettfordeling basert pa forventet effekt.",
        },
        {
          title: "Implementering",
          body: "Kampanjer settes opp med tydelig struktur for flatevalg, frekvens og budskap.",
        },
        {
          title: "Optimalisering",
          body: "Vi evaluerer resultater lopende og justerer plan, plassering og investering i takt med utviklingen.",
        },
      ]}
      caseStudy={{
        title: "Nasjonal tjenestevirksomhet",
        situation:
          "Kunden var synlig i mange byer, men manglet tydelig sammenheng mellom lokal eksponering og ettersporsel.",
        actions: [
          "Prioriterte flater i omrader med hoyest potensial",
          "Tilpasset budskap etter tid og lokasjon",
          "Samordnet DOOH med sok og betalt media",
          "Etablerte enkel rapportering per by og kampanje",
        ],
        resultLabel: "Resultat etter 3 maneder",
        stats: [
          { value: "21 %", label: "okning i lokal merkbarhet" },
          { value: "14 %", label: "vekst i branded sok i prioriterte byer" },
          { value: "Bedre", label: "lokal budsjettstyring" },
        ],
      }}
      faqItems={[
        {
          question: "Hva er forskjellen pa DOOH og tradisjonell utendorsreklame?",
          answer: "DOOH gir mer fleksibilitet i styring av tidspunkt, flater og budskap, og er enklere a justere underveis.",
        },
        {
          question: "Passer DOOH for alle virksomheter?",
          answer: "Ikke alltid. Vi vurderer behov, geografi og mal for vi anbefaler kanalbruk.",
        },
        {
          question: "Kan DOOH kombineres med digitale kanaler?",
          answer: "Ja. Kombinasjonen med sok og paid media gir ofte tydeligere effekt enn isolert kanalbruk.",
        },
        {
          question: "Hvordan males effekt?",
          answer: "Vi bruker en kombinasjon av leveransedata, lokal utvikling og signaler fra andre kanaler.",
        },
        {
          question: "Binder man seg til en avtale?",
          answer: "Vi anbefaler en periode med kontinuerlig oppfolging, men avtalens rammer avklares tydelig i oppstart.",
        },
      ]}
      contactText="Vi kan starte med en uforpliktende vurdering av hvor DOOH bor spille en rolle i deres mediemiks."
    />
  );
}
