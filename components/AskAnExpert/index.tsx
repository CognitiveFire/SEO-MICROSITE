"use client";

import { useMemo, useRef, useState } from "react";
import { useChat } from "./hooks/useChat";
import { type OfficeHours, useOnlineStatus } from "./hooks/useOnlineStatus";
import { ChatTab } from "./tabs/ChatTab";
import { PostTab } from "./tabs/PostTab";
import { QATab } from "./tabs/QATab";
import styles from "./AskAnExpert.module.css";

type AskAnExpertProps = {
  topic?: string;
  qaEndpoint?: string;
  chatEndpoint?: string;
  submitEndpoint?: string;
  officeHours?: Partial<OfficeHours>;
};

type TabKey = "chat" | "post" | "qa";

const tabs: { key: TabKey; label: string }[] = [
  { key: "chat", label: "Chat nå" },
  { key: "post", label: "Send spørsmål" },
  { key: "qa", label: "Tidligere svar" },
];

export function AskAnExpert({
  topic = "",
  qaEndpoint = "/api/qa",
  chatEndpoint = "/api/chat",
  submitEndpoint = "/api/questions",
  officeHours,
}: AskAnExpertProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("chat");
  const [toast, setToast] = useState<string>("");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const online = useOnlineStatus(officeHours, () => {
    setToast("Eksperten er ikke lenger tilgjengelig. Spørsmålet ditt er lagret og vi svarer på e-post.");
    setTimeout(() => setToast(""), 5000);
  });

  const { messages, isTyping, sendMessage } = useChat({
    chatEndpoint,
    online,
  });

  const statusText = useMemo(
    () =>
      online
        ? "● Tilgjengelig nå — chat direkte"
        : "○ Utilgjengelig nå — send spørsmål",
    [online],
  );

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;

    const next = tabs[nextIndex];
    setActiveTab(next.key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className={styles.wrap}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="ask-an-expert-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.avatar} aria-hidden="true">
          <svg viewBox="0 0 24 24" className={styles.avatarIcon} aria-hidden="true">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.5 0-6.5 1.7-7 4v2h14v-2c-.5-2.3-3.5-4-7-4Z" fill="currentColor" />
          </svg>
          <span
            className={online ? styles.dotOnline : styles.dotOffline}
            aria-label={online ? "Online" : "Utilgjengelig"}
            role="status"
          />
        </span>

        <span className={styles.triggerText}>
          <span className={styles.heading}>Spør en ekspert</span>
          <span className={styles.subtext}>Få svar fra våre spesialister i SEO, betalt media og analyse</span>
          <span className={online ? styles.statusBadgeOnline : styles.statusBadgeOffline}>{statusText}</span>
        </span>

        <span className={open ? styles.chevronOpen : styles.chevron} aria-hidden="true">
          ⌄
        </span>
      </button>

      <div
        id="ask-an-expert-panel"
        role="region"
        aria-label="Spør en ekspert"
        className={open ? styles.panelOpen : styles.panel}
      >
        <div className={styles.tabBar} role="tablist" aria-label="Velg modus">
          {tabs.map((tab, index) => {
            const selected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`ask-tab-${tab.key}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`ask-panel-${tab.key}`}
                type="button"
                className={selected ? styles.tabActive : styles.tab}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id="ask-panel-chat"
          role="tabpanel"
          aria-labelledby="ask-tab-chat"
          hidden={activeTab !== "chat"}
        >
          {activeTab === "chat" ? (
            <ChatTab
              online={online}
              messages={messages}
              isTyping={isTyping}
              onSend={sendMessage}
              onSwitchToPost={() => setActiveTab("post")}
            />
          ) : null}
        </div>

        <div
          id="ask-panel-post"
          role="tabpanel"
          aria-labelledby="ask-tab-post"
          hidden={activeTab !== "post"}
        >
          {activeTab === "post" ? <PostTab submitEndpoint={submitEndpoint} topic={topic} /> : null}
        </div>

        <div
          id="ask-panel-qa"
          role="tabpanel"
          aria-labelledby="ask-tab-qa"
          hidden={activeTab !== "qa"}
        >
          {activeTab === "qa" ? <QATab qaEndpoint={qaEndpoint} /> : null}
        </div>
      </div>

      {toast ? <p className={styles.toast}>{toast}</p> : null}
    </section>
  );
}
