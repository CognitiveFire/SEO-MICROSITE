import { LeadCaptureForm } from "./lead-capture-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#1c1715] px-6 py-24 text-white md:px-10 md:py-28 xl:px-16 xl:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.82fr_1.18fr] md:items-start lg:gap-16">
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d8a57f]">Kontakt</p>
          <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold tracking-[-0.075em] text-white md:text-[5.35rem] md:leading-[0.9]">
            Fortell oss hvor dagens modell føles fragmentert.
          </h2>
          <p className="mt-9 max-w-md text-lg leading-8 text-white/70 md:text-[1.04rem]">
            Vi kan gå gjennom tjenestestruktur, operasjonell rapportering, prioritering og forholdet mellom search visibility, acquisition og Apriil Clarity.
          </p>
        </div>
        <LeadCaptureForm
          source="homepage-contact-section"
          messagePlaceholder="Hvor oppleves beslutningene som fragmenterte i dag?"
          submitLabel="Send forespørsel"
          introText="Del dagens struktur, hvor beslutningene føles fragmenterte, og hva dere trenger å få tydeligere neste."
          responseText="Vi svarer vanligvis innen én arbeidsdag."
          focusLabel="Primært fokus"
          showMessageField={false}
          fieldLayout="stacked"
          formClassName="grid gap-6 rounded-[30px] border border-[#d9cfc2] bg-[radial-gradient(circle_at_top,rgba(214,188,154,0.22),transparent_34%),linear-gradient(180deg,#f7f2eb_0%,#f4eee6_100%)] p-7 text-apriil-dark shadow-[0_34px_90px_rgba(0,0,0,0.24)] md:gap-7 md:p-9 lg:p-10"
          inputClassName="w-full rounded-[18px] border border-[#d8cfc2] bg-white/74 px-5 py-3.5 text-[1.05rem] text-apriil-dark outline-none transition placeholder:text-apriil-muted/40 focus:border-[#bea792] focus:bg-white focus:shadow-[0_0_0_4px_rgba(190,167,146,0.12)]"
          buttonClassName="inline-flex items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-8 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a2420] disabled:cursor-not-allowed disabled:opacity-70"
          feedbackClassName="rounded-[18px] border border-[#d8cfc2] bg-white/74 px-4 py-3 text-sm text-apriil-muted"
          submitRowClassName="mt-3 flex flex-col gap-4 border-t border-[#e3d8cb] pt-6 md:flex-row md:items-center md:justify-between"
        />
      </div>
    </section>
  );
}
