import type { Metadata } from "next";
import {
  HeroActions,
  MethodologyGrid,
  SectionContainer,
} from "@/components/digital-markedsforing/ui";

export const metadata: Metadata = {
  title: "Betalt media | Digital markedsforing | Apriil",
  description:
    "Apriil leverer betalt media-radgivning for virksomheter som trenger bedre investeringsstyring, tydeligere kanalroller og sterkere kommersiell effekt.",
};

export default function BetaltMediaSubPage() {
  return (
    <main>
      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="grid gap-10 border-t border-apriil-line/70 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Betalt media
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-7xl md:leading-[0.92]">
              Betalt media som støtter hele vekstmodellen.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-apriil-muted md:text-lg">
              Betalt media skal støtte og forsterke etterspørsel pa tvers av
              search, shopping, social og video - ikke skape aktivitet for
              aktivitetens skyld.
            </p>
            <HeroActions />
          </div>
          <div className="apriil-editorial-surface rounded-[18px] border border-apriil-line/70 p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">
              Strategisk posisjonering
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-apriil-muted">
              <li className="border-t border-apriil-line/80 pt-4">Search advertising</li>
              <li className="border-t border-apriil-line/80 pt-4">Shopping advertising</li>
              <li className="border-t border-apriil-line/80 pt-4">Social advertising</li>
              <li className="border-t border-apriil-line/80 pt-4">YouTube</li>
              <li className="border-t border-apriil-line/80 pt-4">Retargeting and attribution</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionContainer
        eyebrow="Arbeidsmodell"
        title="Tre styringsspor for betalt media"
        intro="Kanalvalg, budskap og beslutningskvalitet ma ses i sammenheng."
      >
        <MethodologyGrid
          steps={[
            {
              label: "Spor 1",
              title: "Rolleavklaring",
              points: [
                "Kanalfunksjon",
                "Maalgrupper",
                "Investeringsrammer",
                "Forventet effekt",
              ],
            },
            {
              label: "Spor 2",
              title: "Gjennomforing",
              points: [
                "Kreativ retning",
                "Landingsside-samspill",
                "Testdesign",
                "Budsjettfordeling",
              ],
            },
            {
              label: "Spor 3",
              title: "Kommersiell vurdering",
              points: [
                "Signalkvalitet",
                "Attribusjon",
                "Prioritering",
                "Lopende justering",
              ],
            },
          ]}
        />
      </SectionContainer>

    </main>
  );
}
