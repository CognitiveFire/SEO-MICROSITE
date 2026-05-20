"use client";

import { FormEvent, useState, useTransition } from "react";

type LeadCaptureFormProps = {
  source: string;
  messagePlaceholder: string;
  submitLabel: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  feedbackClassName?: string;
  showFocusField?: boolean;
};

const focusOptions = [
  "Søkesynlighet",
  "Betalt anskaffelse",
  "Integrert søkeytelse",
  "Apriil Clarity",
];

export function LeadCaptureForm({
  source,
  messagePlaceholder,
  submitLabel,
  formClassName = "grid gap-5 rounded-[28px] border border-apriil-line bg-white/80 p-6 shadow-[0_24px_60px_rgba(28,24,21,0.08)] md:p-8",
  inputClassName = "w-full rounded-2xl border border-apriil-line bg-[#fbfaf7] px-4 py-3.5 text-apriil-dark outline-none transition placeholder:text-apriil-muted/60 focus:border-apriil-dark/40 focus:bg-white",
  buttonClassName = "mt-2 inline-flex items-center justify-center rounded-full border border-apriil-dark bg-apriil-dark px-8 py-3 font-semibold text-white transition hover:bg-[#2d2824] disabled:cursor-not-allowed disabled:opacity-70",
  feedbackClassName = "rounded-2xl border border-apriil-line bg-[#fbfaf7] px-4 py-3 text-sm text-apriil-muted",
  showFocusField = true,
}: LeadCaptureFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFocus, setSelectedFocus] = useState(focusOptions[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("idle");
    setErrorMessage("");

    startTransition(async () => {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          focus: showFocusField ? formData.get("focus") : "Generell henvendelse",
          message: formData.get("message"),
          source,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setErrorMessage(data?.error || "Noe gikk galt. Prøv igjen om litt.");
        return;
      }

      form.reset();
      setSelectedFocus(focusOptions[0]);
      setStatus("success");
    });
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-apriil-dark">
          Navn
          <input name="name" type="text" placeholder="Navn" className={inputClassName} required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-apriil-dark">
          E-post
          <input name="email" type="email" placeholder="navn@firma.no" className={inputClassName} required />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-apriil-dark">
          Selskap
          <input name="company" type="text" placeholder="Selskap" className={inputClassName} />
        </label>
      {showFocusField ? (
        <label className="grid gap-2 text-sm font-medium text-apriil-dark">
          Fokusområde
          <select
            name="focus"
            value={selectedFocus}
            onChange={(event) => setSelectedFocus(event.target.value)}
            className={inputClassName}
          >
            {focusOptions.map((option) => (
              <option key={option} value={option} className="text-apriil-dark">
                {option}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      </div>
      <label className="grid gap-2 text-sm font-medium text-apriil-dark">
        Beskrivelse
        <textarea
          name="message"
          placeholder={messagePlaceholder}
          className={`${inputClassName} min-h-[160px] resize-y`}
          rows={5}
          required
        />
      </label>
      <button type="submit" className={buttonClassName} disabled={isPending}>
        {isPending ? "Sender..." : submitLabel}
      </button>
      {status === "success" ? (
        <p className={feedbackClassName}>Takk. Vi følger opp innen én arbeidsdag.</p>
      ) : null}
      {status === "error" ? <p className={feedbackClassName}>{errorMessage}</p> : null}
    </form>
  );
}