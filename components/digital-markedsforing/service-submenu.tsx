"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/tjenester/digital-markedsforing/seo", label: "SEO" },
  { href: "/tjenester/digital-markedsforing/betalt-media", label: "Betalt media" },
  { href: "/tjenester/digital-markedsforing/performance", label: "Performance" },
  { href: "/tjenester/digital-markedsforing/analyse", label: "Analyse" },
  { href: "/tjenester/digital-markedsforing/social", label: "Sosiale medier" },
  { href: "/tjenester/digital-markedsforing/programmatic", label: "Programmatic" },
  { href: "/tjenester/digital-markedsforing/creator-network", label: "Creator network" },
  { href: "/tjenester/digital-markedsforing/podcast", label: "Podcast" },
  { href: "/tjenester/digital-markedsforing/dooh", label: "DOOH" },
];

export function ServiceSubmenu() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Tjenestemeny"
      className="sticky top-16 z-20 -mx-2 mb-8 overflow-x-auto border-y border-apriil-line/70 bg-[#f6f4ef]/90 px-2 py-2 backdrop-blur"
    >
      <ul className="flex min-w-max items-center gap-2">
        {serviceLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "border-[#ff4101]/55 bg-[#fff2ea] text-apriil-dark"
                    : "border-apriil-line/80 bg-[#f8f7f4] text-apriil-muted hover:border-apriil-dark/35 hover:text-apriil-dark"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
