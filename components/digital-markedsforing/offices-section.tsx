import Link from "next/link";
import { officeCards } from "@/components/offices/data";

export function OfficesSection() {
  return (
    <section className="border-t border-apriil-line/70 pt-12">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">Kontorer</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
            Lokal tilstedevaerelse med nasjonal styrke.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
            Apriil er til stede i flere markeder i Norge. Naerhet til kundene gir bedre markedskontekst, tydeligere prioriteringer og sterkere kommersielle beslutninger.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-apriil-muted lg:justify-self-end lg:text-right">
          Kontorene fungerer som strategiske knutepunkt for synlighet, analyse og distribusjon.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {officeCards.map((office, index) => (
          <Link
            key={office.city}
            href={office.href}
            className="group relative overflow-hidden rounded-[16px] border border-apriil-line/80 bg-[#f6f4ef] p-6 transition hover:border-[#ff4101]/35"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,65,1,0.12),transparent_48%)] opacity-80" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,23,23,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#e2ded5]/85 to-transparent transition group-hover:translate-y-1" />

            <div className="relative flex min-h-[220px] flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">0{index + 1}</p>
              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-apriil-dark transition-transform duration-300 group-hover:-translate-y-0.5">
                {office.city}
              </h3>
              <p className="mt-5 max-w-[26ch] text-base leading-8 text-apriil-muted">{office.positioning}</p>

              <div className="mt-auto flex items-center gap-3 pt-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-apriil-dark">
                <span>Se lokasjon</span>
                <span className="h-px w-10 bg-apriil-dark/35 transition-all duration-300 group-hover:w-16 group-hover:bg-[#ff4101]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
