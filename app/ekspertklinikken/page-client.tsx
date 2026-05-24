"use client";

import { useEffect, useMemo, useState } from "react";
import { EXPERTS } from "./constants/experts";
import { useEventState } from "./hooks/use-event-state";
import { useRecordingAvailability } from "./hooks/use-recording-availability";
import type { Recording, SubmittedQuestion, TopicTag } from "./types";
import styles from "./page.module.css";

type QuestionFormData = {
  name: string;
  email: string;
  topic: string;
  question: string;
  consentToPublish: boolean;
};

type FormErrors = Partial<Record<keyof QuestionFormData, string>>;

const TOPIC_OPTIONS = [
  { value: "", label: "Velg tema…" },
  { value: "seo", label: "SEO og søkesynlighet" },
  { value: "paid", label: "Betalt media (Google, Meta, LinkedIn)" },
  { value: "bi", label: "Analyse og business intelligence" },
  { value: "general-ai", label: "AI og fremtiden for digital markedsføring" },
  { value: "general-strategy", label: "Strategi og prioritering" },
  { value: "general-other", label: "Annet" },
];

function topicLabel(topic: TopicTag) {
  if (topic === "seo") return "SEO";
  if (topic === "paid") return "Betalt media";
  if (topic === "bi") return "Analyse og BI";
  return "Generelt";
}

function tagClass(topic: TopicTag) {
  if (topic === "seo") return `${styles.tag} ${styles.tagSeo}`;
  if (topic === "paid") return `${styles.tag} ${styles.tagPaid}`;
  if (topic === "bi") return `${styles.tag} ${styles.tagBi}`;
  return `${styles.tag} ${styles.tagGeneral}`;
}

function statusUi(state: string) {
  if (state === "today-before") return { text: "I dag kl. 12:00", className: `${styles.pill} ${styles.pillAmber}` };
  if (state === "live")
    return {
      text: "Sender nå!",
      className: `${styles.pill} ${styles.pillRed}`,
      live: true,
    };
  if (state === "recording-pending") return { text: "Opptak klargjøres…", className: `${styles.pill} ${styles.pillGray}` };
  if (state === "recording-available") return { text: "Opptak tilgjengelig", className: `${styles.pill} ${styles.pillGreen}` };
  return { text: "Neste klinikk", className: `${styles.pill} ${styles.pillBlue}` };
}

function useAnnouncedState(eventState: string) {
  const [announced, setAnnounced] = useState("");

  useEffect(() => {
    setAnnounced(statusUi(eventState).text);
  }, [eventState]);

  return announced;
}

export function EkspertklinikkenClient({ initialAnsweredFaq }: { initialAnsweredFaq: SubmittedQuestion[] }) {
  const { eventDateLabel, eventMonth, eventState, countdown } = useEventState();
  const [questions, setQuestions] = useState<SubmittedQuestion[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [isLoadingRecordings, setIsLoadingRecordings] = useState(true);

  const [formData, setFormData] = useState<QuestionFormData>({
    name: "",
    email: "",
    topic: "",
    question: "",
    consentToPublish: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const status = statusUi(eventState);
  const politeStatus = useAnnouncedState(eventState);
  const remainingChars = 500 - formData.question.length;

  useEffect(() => {
    async function loadQuestions() {
      setIsLoadingQuestions(true);
      const res = await fetch(`/api/questions?month=${eventMonth}&status=pending`, { cache: "no-store" });
      const json = await res.json();
      setQuestions((json.data || []) as SubmittedQuestion[]);
      setIsLoadingQuestions(false);
    }

    loadQuestions();
  }, [eventMonth]);

  useEffect(() => {
    async function loadRecordings() {
      setIsLoadingRecordings(true);
      const res = await fetch("/api/recordings", { cache: "no-store" });
      const json = await res.json();
      setRecordings((json.data || []) as Recording[]);
      setIsLoadingRecordings(false);
    }

    loadRecordings();
  }, []);

  const liveRecordings = useRecordingAvailability(recordings);

  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: initialAnsweredFaq
        .filter((q) => q.answer)
        .map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
    };
  }, [initialAnsweredFaq]);

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (!formData.name.trim()) next.name = "Navn er obligatorisk";
    if (!formData.email.trim()) {
      next.email = "E-post er obligatorisk";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Ugyldig e-postadresse";
    }

    if (!formData.topic) next.topic = "Velg et tema";

    const qLen = formData.question.trim().length;
    if (!qLen) {
      next.question = "Spørsmålet er obligatorisk";
    } else if (qLen < 20) {
      next.question = "Spørsmålet må være minst 20 tegn";
    } else if (qLen > 500) {
      next.question = "Spørsmålet kan ikke være over 500 tegn";
    }

    if (!formData.consentToPublish) {
      next.consentToPublish = "Du ma godkjenne anonym publisering";
    }

    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitSuccess("");
    setSubmitError("");

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      topic: formData.topic.startsWith("general") ? "general" : formData.topic,
      question: formData.question.trim(),
      consentToPublish: formData.consentToPublish,
      eventMonth,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      submittedAt: new Date().toISOString(),
    };

    const res = await fetch("/api/questions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      setSubmitError("Noe gikk galt. Prøv igjen eller send e-post til hei@apriil.no");
      setIsSubmitting(false);
      return;
    }

    const created = json.question as SubmittedQuestion;
    setQuestions((prev) => [{ ...created, isNew: true }, ...prev]);
    setFormData({ name: "", email: "", topic: "", question: "", consentToPublish: false });
    setErrors({});
    setSubmitSuccess("Spørsmål mottatt! Ekspertene ser det før sendingen. Du vil se svaret live — eller i opptaket etterpå.");
    setIsSubmitting(false);
  }

  const showCountdown = eventState === "upcoming" || eventState === "today-before";
  const showLiveNotice = eventState === "live";
  const showRecPending = eventState === "recording-pending";
  const showRecCta = eventState === "recording-available";

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <p className={styles.mutedSmall}>Apriil · LinkedIn Live · Siste fredag i måneden</p>
          <h1 className={styles.heroTitle}>Ekspertklinikken — still ditt spørsmål live</h1>
          <p className={styles.heroLead}>
            En gang i måneden svarer Apriils eksperter på dine spørsmål om SEO, betalt media og digital analyse — direkte på
            LinkedIn. Gratis, uforpliktende og alltid relevant. Still spørsmålet ditt på forhånd, eller møt opp live og still det i
            kommentarfeltet.
          </p>
          <div className={styles.statusRow}>
            <span className={status.className}>{status.live ? <span className={styles.liveDot} aria-hidden="true" /> : null}{status.text}</span>
            <span className={styles.dateString}>{eventDateLabel}</span>
          </div>
          <span className={styles.srOnly} aria-live="polite">
            {politeStatus}
          </span>
          <div className={styles.heroActions}>
            <a
              href="https://www.linkedin.com/company/apriil/events/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedInBtn}
            >
              <span aria-hidden="true">in</span>
              Meld deg på LinkedIn
              <span className={styles.srOnly}>(åpnes i ny fane)</span>
            </a>
            <a href="#send-sporsmal" className={styles.outlineBtn}>
              <span aria-hidden="true">?</span>
              Send inn spørsmål
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Nedtelling til neste sending</h2>
          {showCountdown ? (
            <div className={styles.countdownGrid}>
              <div className={styles.countdownBox}>
                <span className={styles.countNum}>{countdown.days}</span>
                <span className={styles.countLabel}>Dager</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countNum}>{countdown.hours}</span>
                <span className={styles.countLabel}>Timer</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countNum}>{countdown.minutes}</span>
                <span className={styles.countLabel}>Min</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countNum}>{countdown.seconds}</span>
                <span className={styles.countLabel}>Sek</span>
              </div>
            </div>
          ) : null}

          {showLiveNotice ? (
            <div className={styles.statusRow}>
              <span className={`${styles.pill} ${styles.pillRed}`}>
                <span className={styles.liveDot} aria-hidden="true" />Klinikken sender nå — bli med på LinkedIn
              </span>
              <a href="https://www.linkedin.com/company/apriil/events/" target="_blank" rel="noopener noreferrer" className={styles.linkedInBtn}>
                Bli med live
                <span className={styles.srOnly}>(åpnes i ny fane)</span>
              </a>
            </div>
          ) : null}

          {showRecPending ? <p className={styles.mutedSmall}>Opptaket er tilgjengelig om ca. 60 minutter</p> : null}
          {showRecCta ? (
            <a href="#opptak" className={styles.linkedInBtn}>
              Se opptak
            </a>
          ) : null}
        </section>

        <section className={styles.section}>
          <h2>Slik fungerer det</h2>
          <div className={styles.grid2}>
            <article className={styles.infoBlock}>
              <div className={styles.infoHeader}><span className={styles.iconRed} aria-hidden="true">◷</span>60 minutter</div>
              <p className={styles.mutedSmall}>Kl. 12:00-13:00 norsk tid, hver siste fredag i måneden</p>
            </article>
            <article className={styles.infoBlock}>
              <div className={styles.infoHeader}><span className={styles.iconBlue} aria-hidden="true">in</span>LinkedIn Live</div>
              <p className={styles.mutedSmall}>Åpent for alle — ingen påmelding nødvendig for å se</p>
            </article>
            <article className={styles.infoBlock}>
              <div className={styles.infoHeader}><span className={styles.iconRed} aria-hidden="true">?</span>Send spørsmål på forhånd</div>
              <p className={styles.mutedSmall}>Ekspertene forbereder seg. Du trenger ikke møte opp live for å få svar</p>
            </article>
            <article className={styles.infoBlock}>
              <div className={styles.infoHeader}><span className={styles.iconRed} aria-hidden="true">▶</span>Se opptak i etterkant</div>
              <p className={styles.mutedSmall}>Tilgjengelig 60 minutter etter sendingen — se når det passer deg</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Dine eksperter</h2>
          <div className={styles.expertList}>
            {EXPERTS.map((expert) => (
              <article key={expert.name} className={styles.expertRow}>
                <span className={styles.avatar} style={{ background: expert.avatarBg, color: expert.avatarColor }}>
                  {expert.initials}
                </span>
                <div className={styles.expertMeta}>
                  <div className={styles.expertName}>{expert.name}</div>
                  <div className={styles.expertRole}>
                    {expert.title} · {expert.location}
                  </div>
                </div>
                <span className={tagClass(expert.tag)}>{expert.topic}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="send-sporsmal" className={styles.section}>
          <h2>Send inn spørsmål på forhånd</h2>
          <p className={styles.mutedSmall}>
            Ekspertene forbereder seg på innsendte spørsmål — du øker sjansen for et grundig svar. Du trenger ikke møte opp live for å få svar på spørsmålet ditt.
          </p>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="name" className={styles.label}>Navn</label>
              <input
                id="name"
                name="name"
                placeholder="Ola Nordmann"
                className={`${styles.input} ${errors.name ? styles.invalid : ""}`}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
              {errors.name ? <p id="name-error" role="alert" className={styles.fieldError}>{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className={styles.label}>E-post</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ola@bedrift.no"
                className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
              {errors.email ? <p id="email-error" role="alert" className={styles.fieldError}>{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="topic" className={styles.label}>Tema</label>
              <select
                id="topic"
                name="topic"
                className={`${styles.select} ${errors.topic ? styles.invalid : ""}`}
                aria-describedby={errors.topic ? "topic-error" : undefined}
                value={formData.topic}
                onChange={(e) => setFormData((prev) => ({ ...prev, topic: e.target.value }))}
              >
                {TOPIC_OPTIONS.map((option, idx) => (
                  <option key={`${option.label}-${idx}`} value={option.value} disabled={idx === 0}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.topic ? <p id="topic-error" role="alert" className={styles.fieldError}>{errors.topic}</p> : null}
            </div>

            <div>
              <label htmlFor="question" className={styles.label}>Spørsmålet ditt</label>
              <textarea
                id="question"
                name="question"
                placeholder="Beskriv utfordringen eller spørsmålet ditt — jo mer kontekst, desto bedre svar…"
                className={`${styles.textarea} ${errors.question ? styles.invalid : ""}`}
                aria-describedby={errors.question ? "question-error" : undefined}
                value={formData.question}
                maxLength={500}
                onChange={(e) => setFormData((prev) => ({ ...prev, question: e.target.value }))}
              />
              <p className={`${styles.counter} ${remainingChars < 50 ? styles.counterWarn : ""}`}>{remainingChars} tegn igjen</p>
              {errors.question ? <p id="question-error" role="alert" className={styles.fieldError}>{errors.question}</p> : null}
            </div>

            <div>
              <label htmlFor="consent" className={styles.mutedSmall}>
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consentToPublish}
                  onChange={(e) => setFormData((prev) => ({ ...prev, consentToPublish: e.target.checked }))}
                />{" "}
                Jeg godtar at spørsmålet kan besvares anonymt på denne siden etter sendingen
              </label>
              {errors.consentToPublish ? <p role="alert" className={styles.fieldError}>{errors.consentToPublish}</p> : null}
            </div>

            <button type="submit" className={styles.redBtn} aria-busy={isSubmitting} disabled={isSubmitting}>
              Send spørsmål →
            </button>

            {submitSuccess ? <p className={styles.noticeSuccess}>✓ {submitSuccess}</p> : null}
            {submitError ? <p className={styles.noticeError}>{submitError}</p> : null}
          </form>
        </section>

        <section className={styles.section}>
          <h2>Innsendte spørsmål — denne måneden</h2>
          <p className={styles.mutedSmall}>Ekspertene besvarer disse live. Alle spørsmål er anonymisert.</p>

          {isLoadingQuestions ? <p className={styles.mutedSmall}>Laster spørsmål...</p> : null}

          {!isLoadingQuestions && questions.length === 0 ? (
            <p className={styles.mutedSmall}>Ingen spørsmål sendt inn ennå — bli den første! ↑</p>
          ) : null}

          <div className={styles.questionsList}>
            {questions.map((q) => (
              <article key={q.id} className={`${styles.questionCard} ${q.isNew ? styles.qNew : ""}`}>
                <span className={tagClass(q.topic)}>{q.topicLabel || topicLabel(q.topic)}</span>
                <p className={styles.questionText}>"{q.question}"</p>
                <p className={styles.questionMeta}>Sendt inn av en deltaker · besvares live</p>
              </article>
            ))}
          </div>
        </section>

        <section id="opptak" className={styles.section}>
          <h2>Tidligere sendinger — se på opptak</h2>
          <p className={styles.mutedSmall}>Opptak er tilgjengelig 60 minutter etter at sendingen er ferdig.</p>

          {isLoadingRecordings ? <p className={styles.mutedSmall}>Laster opptak...</p> : null}

          <div className={styles.recordingsList}>
            {liveRecordings.map((recording) => {
              const available = recording.status === "available";
              const pending = recording.status === "pending";
              const upcoming = recording.status === "upcoming";

              return (
                <article key={recording.id} className={styles.recordingCard} aria-label={`Opptak ${recording.title}`}>
                  <div className={`${styles.thumb} ${available ? styles.thumbAvailable : styles.thumbPending}`}>
                    {available ? "▶" : "..."}
                  </div>
                  <div>
                    <div className={styles.recordingTop}>
                      {available ? <span className={`${styles.pill} ${styles.pillGreen}`}>Tilgjengelig</span> : null}
                      {pending ? <span className={`${styles.pill} ${styles.pillAmber}`}>Tilgjengelig om kort tid</span> : null}
                      {upcoming ? <span className={`${styles.pill} ${styles.pillBlue}`}>Kommende</span> : null}
                      <span className={styles.mutedSmall}>{recording.displayDate}</span>
                    </div>

                    <p className={styles.recordingTitle}>{recording.title}</p>
                    <p className={styles.recordingMeta}>
                      {recording.questionCount} spørsmål besvart · {recording.durationMinutes} min
                    </p>

                    <div className={styles.tagsRow}>
                      {recording.topics.map((topic) => (
                        <span key={`${recording.id}-${topic}`} className={tagClass(topic)}>
                          {topicLabel(topic)}
                        </span>
                      ))}
                    </div>

                    <a className={styles.linkedinLink} href={recording.linkedInUrl} target="_blank" rel="noopener noreferrer">
                      <span aria-hidden="true">in</span>
                      Se opptak på LinkedIn
                      <span className={styles.srOnly}>(åpnes i ny fane)</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={`${styles.section} ${styles.footerCta}`}>
          <h2>Vil du heller snakke med en ekspert direkte?</h2>
          <p>Book en uforpliktende strategisamtale med Lasse, Mari eller Agathe — 30 minutter, ingen salgspress.</p>
          <a href="/kontakt" className={styles.redBtn}>
            Book samtale →
          </a>
        </section>
      </div>
    </main>
  );
}
