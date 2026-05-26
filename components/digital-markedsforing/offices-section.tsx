import Link from "next/link";
import { officeCards } from "@/components/offices/data";

function SkylineIcon({ city }: { city: "bergen" | "oslo" | "stavanger" }) {
  if (city === "bergen") {
    return (
      <svg viewBox="0 0 132 48" className="h-10 w-[108px]" fill="none" aria-hidden="true">
        <path d="M4 42H128" stroke="rgba(23,23,23,0.25)" strokeWidth="1.2" />
        <path d="M10 42L25 16L34 28L44 12L58 42" stroke="#1f1d1a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M50 42L64 22L74 32L86 18L98 42" stroke="#1f1d1a" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="102" y="24" width="6" height="18" rx="1" fill="#1f1d1a" />
        <rect x="112" y="20" width="6" height="22" rx="1" fill="#1f1d1a" />
        <circle cx="44" cy="12" r="1.8" fill="#ff4101" />
      </svg>
    );
  }

  if (city === "oslo") {
    return (
      <svg viewBox="0 0 132 48" className="h-10 w-[108px]" fill="none" aria-hidden="true">
        <path d="M4 42H128" stroke="rgba(23,23,23,0.25)" strokeWidth="1.2" />
        <rect x="12" y="24" width="10" height="18" rx="1" fill="#1f1d1a" />
        <rect x="26" y="18" width="9" height="24" rx="1" fill="#1f1d1a" />
        <rect x="39" y="14" width="9" height="28" rx="1" fill="#1f1d1a" />
        <rect x="52" y="10" width="9" height="32" rx="1" fill="#1f1d1a" />
        <path d="M73 42V10" stroke="#1f1d1a" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M73 10L79 16H67L73 10Z" fill="#1f1d1a" />
        <rect x="88" y="20" width="10" height="22" rx="1" fill="#1f1d1a" />
        <rect x="102" y="16" width="10" height="26" rx="1" fill="#1f1d1a" />
        <circle cx="73" cy="8" r="1.8" fill="#ff4101" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 132 48" className="h-10 w-[108px]" fill="none" aria-hidden="true">
      <path d="M4 42H128" stroke="rgba(23,23,23,0.25)" strokeWidth="1.2" />
      <path d="M12 42L26 22L38 42" stroke="#1f1d1a" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="46" y="26" width="8" height="16" rx="1" fill="#1f1d1a" />
      <rect x="58" y="18" width="8" height="24" rx="1" fill="#1f1d1a" />
      <rect x="70" y="14" width="8" height="28" rx="1" fill="#1f1d1a" />
      <path d="M90 42L102 20L114 42" stroke="#1f1d1a" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="102" cy="20" r="1.8" fill="#ff4101" />
    </svg>
  );
}

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
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-apriil-muted">0{index + 1}</p>
                <SkylineIcon city={office.slug} />
              </div>
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
