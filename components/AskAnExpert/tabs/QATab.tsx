"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../AskAnExpert.module.css";

export type QAItem = {
  id: string;
  tag: "seo" | "paid" | "bi" | "clarity";
  label: string;
  question: string;
  answer: string;
  date: string;
  author: string;
};

type QATabProps = {
  qaEndpoint: string;
};

const fallbackItems: QAItem[] = [
  {
    id: "qa-1",
    tag: "seo",
    label: "SEO",
    question: "Hvordan paavirker AI Overviews synlighet i soksider?",
    answer:
      "AI Overviews flytter klikk opp i resultatbildet. Derfor må innholdet være tydelig strukturert, siterbart og bygget rundt spørsmål kundene faktisk stiller.",
    date: "12. mai 2026",
    author: "Karianne B.",
  },
  {
    id: "qa-2",
    tag: "paid",
    label: "Betalt media",
    question: "Hva er et godt startpunkt for annonsesjett i B2B?",
    answer:
      "Start med et testbudsjett som dekker minst 6-8 uker med datainnsamling. Da rekker vi å validere målgrupper, budskap og landingssider uten å overtolke kortsiktig støy.",
    date: "9. mai 2026",
    author: "Martin L.",
  },
  {
    id: "qa-3",
    tag: "bi",
    label: "Analyse/BI",
    question: "Hvilke KPI-er bor ledelsen folge ukentlig?",
    answer:
      "Vi anbefaler 5-7 forretningsnære KPI-er: etterspørsel, kostnad per kvalifiserte lead, konverteringsrate, pipeline-verdi og bidrag til omsetning.",
    date: "5. mai 2026",
    author: "Sigrid V.",
  },
  {
    id: "qa-4",
    tag: "clarity",
    label: "Clarity",
    question: "Hvordan skiller Clarity seg fra et vanlig dashboard?",
    answer:
      "Clarity viser ikke bare hva som skjer. Plattformen rangerer hva som bør prioriteres, hvem som eier tiltaket og forventet effekt på kommersielle mål.",
    date: "2. mai 2026",
    author: "Aksel M.",
  },
];

const chips = [
  { key: "all", label: "Alle" },
  { key: "seo", label: "SEO" },
  { key: "paid", label: "Betalt media" },
  { key: "bi", label: "Analyse/BI" },
  { key: "clarity", label: "Clarity" },
] as const;

export function QATab({ qaEndpoint }: QATabProps) {
  const [items, setItems] = useState<QAItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<(typeof chips)[number]["key"]>("all");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    let active = true;

    const fetchItems = async () => {
      try {
        const response = await fetch(qaEndpoint, { method: "GET" });
        if (!response.ok) {
          throw new Error("QA fetch failed");
        }
        const data = (await response.json()) as QAItem[];
        if (active) {
          setItems(Array.isArray(data) && data.length > 0 ? data : fallbackItems);
        }
      } catch {
        if (active) {
          setItems(fallbackItems);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void fetchItems();

    return () => {
      active = false;
    };
  }, [qaEndpoint]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }
    return items.filter((item) => item.tag === activeFilter);
  }, [activeFilter, items]);

  const visibleItems = filtered.slice(0, visibleCount);
  const canLoadMore = filtered.length > visibleCount;

  useEffect(() => {
    setVisibleCount(8);
  }, [activeFilter]);

  return (
    <div className={styles.qaWrap}>
      <div className={styles.chipsRow}>
        {chips.map((chip) => {
          const active = chip.key === activeFilter;
          return (
            <button
              key={chip.key}
              type="button"
              onClick={() => setActiveFilter(chip.key)}
              className={active ? styles.chipActive : styles.chip}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {loading ? <p className={styles.loading}>Laster tidligere svar...</p> : null}

      {!loading && visibleItems.length === 0 ? (
        <p className={styles.empty}>Ingen spørsmål i denne kategorien ennå.</p>
      ) : null}

      {!loading
        ? visibleItems.map((item, index) => (
            <article key={item.id} className={styles.qaItem}>
              <div className={styles.qaIcon} aria-hidden="true">
                ?
              </div>
              <div className={styles.qaBody}>
                <p className={styles.qaQuestion}>{item.question}</p>
                <p className={styles.qaAnswer}>{item.answer}</p>
                <p className={styles.qaMeta}>
                  <span className={styles.tagPill}>{item.label}</span>
                  {item.date} · {item.author}
                </p>
              </div>
              {index < visibleItems.length - 1 ? <div className={styles.divider} /> : null}
            </article>
          ))
        : null}

      {!loading && canLoadMore ? (
        <button type="button" className={styles.loadMore} onClick={() => setVisibleCount((prev) => prev + 8)}>
          Vis flere svar
        </button>
      ) : null}
    </div>
  );
}
