"use client";

import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "../hooks/useChat";
import styles from "../AskAnExpert.module.css";

type ChatTabProps = {
  online: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  onSend: (text: string) => Promise<void>;
  onSwitchToPost: () => void;
};

export function ChatTab({ online, messages, isTyping, onSend, onSwitchToPost }: ChatTabProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    const field = textareaRef.current;
    if (!field) return;
    field.style.height = "auto";
    const nextHeight = Math.min(field.scrollHeight, 100);
    field.style.height = `${nextHeight}px`;
    field.style.overflowY = field.scrollHeight > 100 ? "auto" : "hidden";
  }, [value]);

  const submit = async () => {
    const message = value.trim();
    if (!message || !online) return;
    setValue("");
    await onSend(message);
  };

  return (
    <div className={styles.tabBody}>
      {!online ? (
        <p className={styles.offlineBar}>
          Eksperten er ikke tilgjengelig nå. Åpningstider: man-fre 08:00-17:00. Send et spørsmål så svarer vi neste virkedag.
        </p>
      ) : null}

      <div className={styles.messages} ref={scrollerRef} aria-live="polite">
        {messages.map((message) => {
          const isUser = message.from === "user";
          return (
            <div key={message.id} className={isUser ? styles.messageRowUser : styles.messageRowExpert}>
              <div className={isUser ? styles.bubbleUser : styles.bubbleExpert}>{message.text}</div>
              <p className={styles.messageMeta}>
                {isUser ? "Du" : message.agentName || "Apriil-ekspert"} · {message.timestamp}
              </p>
            </div>
          );
        })}

        {isTyping ? (
          <div className={styles.messageRowExpert}>
            <div className={styles.bubbleExpert}>
              <span className={styles.typingDot} aria-hidden="true" />
              <span className={styles.typingDot} aria-hidden="true" />
              <span className={styles.typingDot} aria-hidden="true" />
            </div>
            <p className={styles.messageMeta}>Apriil-ekspert skriver...</p>
          </div>
        ) : null}
      </div>

      <div className={styles.chatComposer}>
        <textarea
          ref={textareaRef}
          value={value}
          disabled={!online}
          className={styles.chatInput}
          placeholder={
            online
              ? "Skriv meldingen din her..."
              : "Chat er stengt akkurat nå. Bruk 'Send spørsmål'-fanen for å stille spørsmålet ditt."
          }
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              void submit();
            }
          }}
        />
        <button type="button" className={styles.sendButton} aria-label="Send melding" disabled={!online} onClick={() => void submit()}>
          <span aria-hidden="true">➤</span>
        </button>
      </div>

      {!online ? (
        <div className={styles.ghostPrompt}>
          <p>Chat er stengt akkurat nå. Bruk "Send spørsmål"-fanen for å stille spørsmålet ditt.</p>
          <button type="button" className={styles.ghostButton} onClick={onSwitchToPost}>
            Gå til Send spørsmål
          </button>
        </div>
      ) : null}
    </div>
  );
}
