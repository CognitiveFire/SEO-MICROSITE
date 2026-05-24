"use client";

import { useMemo, useState } from "react";
import styles from "../AskAnExpert.module.css";

type PostTabProps = {
  submitEndpoint: string;
  topic: string;
};

type FormState = {
  name: string;
  email: string;
  topic: string;
  question: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const topics = [
  "SEO og søkesynlighet",
  "Betalt media (Google, Meta, LinkedIn)",
  "Analyse og business intelligence",
  "Apriil Clarity-plattformen",
  "Priser og pakker",
  "Annet",
] as const;

function normalize(value: string) {
  return value.toLowerCase().replaceAll("ø", "o").replaceAll("å", "a").replaceAll("æ", "ae").trim();
}

function resolveTopic(presetTopic: string) {
  const needle = normalize(presetTopic);
  if (!needle) return "";
  const direct = topics.find((item) => normalize(item) === needle);
  if (direct) return direct;
  const fuzzy = topics.find((item) => normalize(item).includes(needle) || needle.includes(normalize(item)));
  return fuzzy ?? "";
}

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) {
    errors.name = "Skriv inn navn.";
  }

  if (!form.email.trim()) {
    errors.email = "Skriv inn e-post.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Skriv inn en gyldig e-postadresse.";
  }

  if (!form.topic) {
    errors.topic = "Velg et tema.";
  }

  if (!form.question.trim()) {
    errors.question = "Skriv inn spørsmålet ditt.";
  } else if (form.question.trim().length < 20) {
    errors.question = "Spørsmålet må være minst 20 tegn.";
  }

  return errors;
}

export function PostTab({ submitEndpoint, topic }: PostTabProps) {
  const defaultTopic = useMemo(() => resolveTopic(topic), [topic]);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    topic: defaultTopic,
    question: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(submitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          topic: form.topic,
          question: form.question.trim(),
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      setForm({
        name: "",
        email: "",
        topic: defaultTopic,
        question: "",
      });
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.postForm} onSubmit={onSubmit} noValidate>
      <div className={styles.formField}>
        <label htmlFor="ask-expert-name">Navn</label>
        <input
          id="ask-expert-name"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder="Ola Nordmann"
          className={errors.name ? styles.fieldError : ""}
          required
        />
        {errors.name ? <p className={styles.errorText}>{errors.name}</p> : null}
      </div>

      <div className={styles.formField}>
        <label htmlFor="ask-expert-email">E-post</label>
        <input
          id="ask-expert-email"
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          placeholder="ola@bedrift.no"
          className={errors.email ? styles.fieldError : ""}
          required
        />
        {errors.email ? <p className={styles.errorText}>{errors.email}</p> : null}
      </div>

      <div className={styles.formField}>
        <label htmlFor="ask-expert-topic">Tema</label>
        <select
          id="ask-expert-topic"
          value={form.topic}
          onChange={(event) => update("topic", event.target.value)}
          className={errors.topic ? styles.fieldError : ""}
          required
        >
          <option value="" disabled>
            Velg tema...
          </option>
          {topics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.topic ? <p className={styles.errorText}>{errors.topic}</p> : null}
      </div>

      <div className={styles.formField}>
        <label htmlFor="ask-expert-question">Spørsmålet ditt</label>
        <textarea
          id="ask-expert-question"
          value={form.question}
          onChange={(event) => update("question", event.target.value)}
          className={errors.question ? styles.fieldError : ""}
          minLength={20}
          required
        />
        {errors.question ? <p className={styles.errorText}>{errors.question}</p> : null}
      </div>

      <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>
        {status === "submitting" ? "Sender..." : "Send spørsmål"}
      </button>

      {status === "success" ? (
        <p className={styles.successNotice}>✓ Takk! Vi svarer på e-post innen én arbeidsdag.</p>
      ) : null}

      {status === "error" ? (
        <p className={styles.errorNotice}>Noe gikk galt. Prøv igjen eller send e-post til hei@apriil.no</p>
      ) : null}
    </form>
  );
}
