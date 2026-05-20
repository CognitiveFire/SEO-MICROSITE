import { LeadCaptureForm } from "../../components/lead-capture-form";

export default function ContactPage() {
  return (
    <main className="px-6 pb-24 md:px-10 xl:px-16">
      <section className="mx-auto grid max-w-6xl gap-10 border-t border-apriil-line/80 pt-16 md:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Kontakt</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-apriil-dark md:text-7xl">La oss se på hvor dagens modell mister klarhet.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-apriil-muted">Del dagens struktur, hvor beslutningene føles fragmenterte og hva dere trenger å få tydeligere neste. Vi svarer vanligvis innen én arbeidsdag.</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-apriil-line/80 bg-apriil-line/80 sm:grid-cols-2">
            <div className="bg-[#fbfaf7] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Typiske temaer</p>
              <p className="mt-3 text-sm leading-7 text-apriil-muted">Søkesynlighet, betalt anskaffelse, operasjonell rapportering og prioritering.</p>
            </div>
            <div className="bg-[#fbfaf7] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apriil-primary">Respons</p>
              <p className="mt-3 text-sm leading-7 text-apriil-muted">Vanligvis innen én arbeidsdag, med forslag til videre samtale eller neste steg.</p>
            </div>
          </div>
        </div>
        <LeadCaptureForm
          source="contact-page"
          messagePlaceholder="Hva trenger dere å få tydeligere neste?"
          submitLabel="Send forespørsel"
        />
      </section>
    </main>
  );
}