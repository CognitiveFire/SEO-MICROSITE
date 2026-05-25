"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const serviceMenu = [
  { href: "/tjenester/digital-markedsforing/seo", label: "SEO" },
  { href: "/tjenester/digital-markedsforing/betalt-media", label: "Betalt media" },
  { href: "/tjenester/digital-markedsforing/analyse", label: "Analyse" },
  { href: "/tjenester/digital-markedsforing/video", label: "Video" },
  { href: "/tjenester/digital-markedsforing/sosiale-medier", label: "Sosiale medier" },
  { href: "/tjenester/digital-markedsforing/programmatic", label: "Programmatic" },
  { href: "/tjenester/digital-markedsforing/dooh", label: "DOOH" },
  { href: "/tjenester/digital-markedsforing/podcast", label: "Podcast" },
  { href: "/tjenester/digital-markedsforing/creator-network", label: "Creator network" },
];

const primaryNav = [
  { href: "/tjenester/digital-markedsforing", label: "Digital markedsforing" },
  { href: "/signal-room", label: "Signal Room" },
  { href: "/results", label: "Case" },
  { href: "/about", label: "Om Apriil" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDigitalArea = pathname.startsWith("/tjenester/digital-markedsforing");

  return (
    <header className="sticky top-0 z-50 px-6 pt-4 md:px-10 xl:px-16">
      <div
        className={`mx-auto max-w-6xl rounded-[18px] border px-5 py-3 transition duration-300 md:px-7 ${
          isScrolled
            ? "border-apriil-line/80 bg-[#f7f6f3]/90 shadow-[0_6px_24px_rgba(23,23,23,0.06)] backdrop-blur"
            : "border-apriil-line/60 bg-[#f7f6f3]/72"
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="text-[29px] font-medium tracking-[0.22em] text-apriil-dark md:text-[34px]">
            APRIIL
          </Link>

          <nav className="relative hidden items-center gap-7 lg:flex">
            <div
              className="group"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <Link
                href="/tjenester/digital-markedsforing"
                className={`inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] transition ${
                  isDigitalArea ? "text-apriil-dark" : "text-apriil-muted hover:text-apriil-dark"
                }`}
              >
                Digital markedsforing
                <span className="text-xs">▾</span>
              </Link>
              <div
                className={`absolute left-0 top-[calc(100%+14px)] w-[620px] rounded-[16px] border border-apriil-line/80 bg-[#f8f7f4] p-5 transition ${
                  submenuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-apriil-muted">Tjenester</p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                  {serviceMenu.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`border-b border-transparent pb-1 text-[13px] tracking-[0.02em] transition ${
                          active
                            ? "text-apriil-dark"
                            : "text-apriil-muted hover:border-apriil-line/70 hover:text-apriil-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {primaryNav.slice(1).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.12em] transition ${
                    active ? "text-apriil-dark" : "text-apriil-muted hover:text-apriil-dark"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full border border-apriil-dark px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-apriil-dark transition hover:bg-apriil-dark hover:text-white lg:inline-flex"
          >
            Snakk med oss
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-apriil-dark/25 text-xl text-apriil-dark transition hover:bg-white/70 lg:hidden"
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>

        {isOpen ? (
          <nav id="mobile-navigation" className="mt-4 grid gap-px overflow-hidden rounded-[16px] border border-apriil-line/80 bg-apriil-line/80 lg:hidden">
            <Link
              href="/tjenester/digital-markedsforing"
              onClick={() => setIsOpen(false)}
              className="bg-[#f8f7f4] px-5 py-3.5 text-sm font-medium text-apriil-dark"
            >
              Digital markedsforing
            </Link>

            {serviceMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="bg-[#f8f7f4] px-6 py-3 text-sm text-apriil-muted transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}

            {primaryNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="bg-[#f8f7f4] px-5 py-3.5 text-sm font-medium text-apriil-dark"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#f8f7f4] px-5 py-3.5 text-sm font-semibold text-apriil-dark"
            >
              Snakk med oss
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}