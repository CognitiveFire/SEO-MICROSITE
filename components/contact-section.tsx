import { LeadCaptureForm } from "./lead-capture-form";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-apriil-line/80 pt-16 md:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-apriil-primary">Kontakt</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-apriil-dark md:text-5xl">Fortell oss hvor dagens modell føles fragmentert.</h2>
          <p className="mt-5 text-base leading-8 text-apriil-muted">Vi kan gå gjennom tjenestestruktur, operasjonell rapportering, prioritering og forholdet mellom søkesynlighet, anskaffelse og Apriil Clarity.</p>
          <p className="mt-8 text-base leading-8 text-apriil-muted">Del dagens struktur, hvor beslutningene føles fragmenterte, og hva dere trenger å få tydeligere neste.</p>
          <p className="mt-8 text-sm text-apriil-muted">Vi svarer vanligvis innen én arbeidsdag.</p>
        </div>
        <LeadCaptureForm
          source="homepage-contact-section"
          messagePlaceholder="Hvor oppleves beslutningene som fragmenterte i dag?"
          submitLabel="Send forespørsel"
          formClassName="grid gap-4"
        />
      </div>
    </section>
  );
}
