type ContactCard = {
  city: "Bergen" | "Oslo" | "Stavanger";
  name: string;
  role: string;
  email: string;
  phone: string;
  imageSrc: string;
  imageAlt: string;
};

const contactCards: ContactCard[] = [
  {
    city: "Bergen",
    name: "Lasse Marøen",
    role: "Avdelingsleder for digital markedsføring",
    email: "lasse.maroen@apriil.no",
    phone: "970 45 704",
    imageSrc: "/team/lasse-maroen.jpg",
    imageAlt: "Lasse Marøen",
  },
  {
    city: "Oslo",
    name: "Line Fauchald",
    role: "Rådgiver/avd. leder performance",
    email: "line.fauchald@apriil.no",
    phone: "930 55 062",
    imageSrc: "/team/line-fauchald.jpg",
    imageAlt: "Line Fauchald",
  },
  {
    city: "Stavanger",
    name: "Lene Hille",
    role: "Markedsrådgiver",
    email: "lene@apriilprocontra.no",
    phone: "921 48 024",
    imageSrc: "/team/lene-hille.jpg",
    imageAlt: "Lene Hille",
  },
];

export function OfficesSection() {
  return (
    <section className="border-t border-apriil-line/70 pt-12">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-apriil-muted">Snakk med oss</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-apriil-dark md:text-5xl md:leading-[0.96]">
          Kontakt våre eksperter i Bergen, Oslo og Stavanger.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-apriil-muted md:text-lg">
          Velg kontaktpersonen som passer best for dere, så hjelper vi dere videre med riktig tjeneste og kontor.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {contactCards.map((contact) => (
          <article key={contact.email} className="overflow-hidden rounded-[14px]">
            <div className="overflow-hidden rounded-[12px] bg-[#efede7]">
              <img
                src={contact.imageSrc}
                alt={contact.imageAlt}
                className="h-[360px] w-full object-cover md:h-[420px]"
                loading="lazy"
              />
            </div>

            <div className="pt-4">
              <span className="inline-flex rounded-full border border-apriil-dark/60 px-3 py-1 text-xs font-medium text-apriil-dark">
                {contact.city}
              </span>

              <h3 className="mt-3 text-[2rem] font-medium tracking-[-0.04em] text-apriil-dark">
                {contact.name}
              </h3>
              <p className="mt-2 text-[1.02rem] leading-8 text-apriil-dark/80">
                {contact.role}
              </p>

              <div className="mt-4 space-y-1 text-[1.02rem]">
                <a href={`mailto:${contact.email}`} className="underline decoration-apriil-dark/40 underline-offset-2 hover:text-apriil-dark">
                  {contact.email}
                </a>
                <br />
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="underline decoration-apriil-dark/40 underline-offset-2 hover:text-apriil-dark">
                  {contact.phone}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
