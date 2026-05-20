"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function PricingSection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-28 xl:px-16 xl:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl border-t border-apriil-line/80 pt-16"
      >
        <motion.div variants={itemVariants} className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Strategiske engasjementer</p>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-[3.45rem] md:leading-[0.98]">
              Premium rådgivning strukturert rundt prioriteringer, ikke pakker.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-apriil-muted md:pl-6">
            Apriil går inn der synlighet, anskaffelse og beslutningsgrunnlag trenger tydeligere retning. Hvert engasjement bygges rundt kommersiell effekt, arbeidsform og hva ledelsen trenger å forstå videre.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.03fr_1.03fr_0.94fr]">
          <motion.article
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
            className="rounded-[32px] border border-apriil-dark/85 bg-[linear-gradient(180deg,#211c19_0%,#171311_100%)] p-8 text-white shadow-[0_28px_100px_rgba(23,23,23,0.18)] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8c6b8]">Søkesynlighet</p>
            <p className="mt-8 text-4xl font-semibold tracking-[-0.065em] md:text-[3.15rem] md:leading-none">Fra NOK 25.000 / måned</p>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/74">
              Strategisk og teknisk arbeid for virksomheter som vil bli tydeligere der kunder faktisk søker og oppdager leverandører.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-white/82">
              <li>Teknisk forbedring og struktur</li>
              <li>Synlighetsanalyse og prioritering</li>
              <li>Innholdsretning og oppdagbarhet</li>
              <li>Rapportering og Signal Room-oversikt</li>
            </ul>
            <Link href="/services/sokesynlighet" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white px-5 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5 hover:bg-[#f6f1eb]">
              Se tjeneste
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.article>

          <motion.article
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
            className="rounded-[32px] border border-apriil-line/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(251,250,247,0.95))] p-8 shadow-[0_22px_75px_rgba(23,23,23,0.08)] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Betalt anskaffelse</p>
            <p className="mt-8 text-4xl font-semibold tracking-[-0.065em] text-apriil-dark md:text-[3.15rem] md:leading-none">Fra NOK 25.000 / måned</p>
            <p className="mt-5 max-w-lg text-base leading-8 text-apriil-muted">
              Kontinuerlig forbedring av trafikkvalitet, budsjetteffektivitet og konverteringsstyrke for virksomheter med tydelige vekstmål.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-apriil-muted">
              <li>Kampanjeadministrasjon og søkeanalyse</li>
              <li>Budsjettoptimalisering og prioritering</li>
              <li>Konverteringsanalyse og landingssidevurdering</li>
              <li>Rapportering og Signal Room-innsikt</li>
            </ul>
            <Link href="/services/betalt-anskaffelse" className="mt-10 inline-flex items-center gap-3 rounded-full border border-apriil-line/80 bg-white px-5 py-3 text-sm font-semibold text-apriil-dark transition hover:-translate-y-0.5 hover:border-apriil-primary/40 hover:text-apriil-primary">
              Se tjeneste
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.article>

          <motion.aside
            variants={itemVariants}
            className="rounded-[32px] border border-apriil-line/80 bg-white/72 p-8 shadow-[0_18px_54px_rgba(23,23,23,0.06)] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Kom i gang</p>
            <h3 className="mt-5 max-w-[11ch] text-3xl font-semibold tracking-[-0.05em] text-apriil-dark">Lav friksjon for første beslutning.</h3>
            <p className="mt-5 text-base leading-8 text-apriil-muted">
              For team som ønsker et tydelig startpunkt før et løpende engasjement, tilbyr Apriil analyser som gjør situasjon, muligheter og prioriteringer enklere å vurdere.
            </p>
            <div className="mt-8 space-y-5 border-t border-apriil-line/80 pt-6 text-sm leading-7 text-apriil-muted">
              <div>
                <p className="font-semibold uppercase tracking-[0.18em] text-apriil-dark">Søkesynlighet</p>
                <p className="mt-2">Kom i gang-analyse fra NOK 12.000</p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.18em] text-apriil-dark">Betalt anskaffelse</p>
                <p className="mt-2">Kom i gang-analyse fra NOK 15.000</p>
              </div>
            </div>
            <a href="#contact" className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-apriil-dark transition hover:text-apriil-primary">
              Book strategisamtale
              <span aria-hidden="true">↗</span>
            </a>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
