import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#151312] px-6 pb-6 pt-12 text-[#f2f0eb] md:px-10 md:pt-16 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.85fr_0.8fr]">
          <div>
            <p className="text-[34px] font-medium tracking-[0.18em] text-white">APRIIL</p>
            <h2 className="mt-8 max-w-[10ch] text-5xl font-semibold tracking-[-0.04em] text-white md:text-[3.4rem] md:leading-[0.95]">
              Klar for å nå dine mål?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#f2f0eb] bg-[#f2f0eb] px-5 py-2 text-lg font-medium text-[#171717]"
            >
              Kontakt oss
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ff4e1a] text-white">→</span>
            </Link>
          </div>

          <div>
            <h3 className="text-[2.05rem] font-semibold tracking-[-0.02em] text-white">Tjenester</h3>
            <nav className="mt-4 grid gap-2 text-[1.06rem] leading-8 text-[#d4cfc5]">
              <Link href="/contact" className="hover:text-white">Reklame</Link>
              <Link href="/contact" className="hover:text-white">Design</Link>
              <Link href="/contact" className="hover:text-white">PR og rådgivning</Link>
              <Link href="/tjenester/digital-markedsforing" className="hover:text-white">Digital markedsføring</Link>
              <Link href="/contact" className="hover:text-white">Teknologi</Link>
              <Link href="/contact" className="hover:text-white">Innhold</Link>
            </nav>
            <Link href="/results" className="mt-4 inline-block text-[1.9rem] font-semibold tracking-[-0.02em] text-white hover:opacity-80 md:text-[2.05rem]">
              Arbeider
            </Link>
          </div>

          <div>
            <h3 className="text-[2.05rem] font-semibold tracking-[-0.02em] text-white">Besøk</h3>
            <div className="mt-4 space-y-4 text-[1.06rem] leading-8 text-[#d4cfc5]">
              <p>
                Bergen
                <br />
                Damsgårdveien 59
              </p>
              <p>
                Oslo
                <br />
                Hausmannsgate 21
              </p>
              <p>
                Stavanger
                <br />
                Nykirkebakken 7
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[2.05rem] font-semibold tracking-[-0.02em] text-white">Om Apriil</h3>
            <nav className="mt-4 grid gap-2 text-[1.06rem] leading-8 text-[#d4cfc5]">
              <Link href="/contact" className="hover:text-white">Kontakt oss</Link>
              <Link href="/about" className="hover:text-white">Ansatte i Apriil</Link>
              <Link href="/about" className="hover:text-white">Ledige stillinger</Link>
            </nav>
            <p className="mt-6 text-[1.06rem] leading-8 text-[#d4cfc5]">
              Apriil AS
              <br />
              Org. nr 930999369
            </p>
            <div className="mt-5 w-[125px] rounded-[10px] border border-[#d4cfc5] p-3 text-center text-xs uppercase tracking-[0.08em] text-[#d4cfc5]">
              Sertifisert
              <br />
              virksomhet
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/30 pt-6 text-sm text-[#d4cfc5] md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:text-white">Personvern</Link>
            <Link href="/about" className="hover:text-white">Innstillinger for informasjonskapsler</Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 md:mt-0">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
