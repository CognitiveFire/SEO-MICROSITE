"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type ChatMessage = {
  id: string;
  from: "user" | "expert";
  text: string;
  agentName?: string;
  timestamp: string;
};

type UseChatArgs = {
  chatEndpoint: string;
  online: boolean;
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowLabel() {
  return new Intl.DateTimeFormat("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

const openingMessage: ChatMessage = {
  id: "opening-message",
  from: "expert",
  text: "Hei! 👋 Jeg er her for å hjelpe deg med spørsmål om SEO, betalt media eller digital analyse. Hva lurer du på?",
  agentName: "Apriil-ekspert",
  timestamp: nowLabel(),
};

export function useChat({ chatEndpoint, online }: UseChatArgs) {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const pendingWsReply = useRef(false);
  const sessionId = useMemo(() => makeId(), []);

  const appendExpertMessage = useCallback((text: string, agentName?: string, timestamp?: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: makeId(),
        from: "expert",
        text,
        agentName: agentName || "Apriil-ekspert",
        timestamp: timestamp || nowLabel(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (!online || !chatEndpoint.startsWith("ws")) {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
      return;
    }

    try {
      const ws = new WebSocket(chatEndpoint);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          const text = payload.text || payload.reply || "Takk! Vi følger opp kort.";
          pendingWsReply.current = false;
          setIsTyping(false);
          appendExpertMessage(text, payload.agentName, payload.timestamp);
        } catch {
          pendingWsReply.current = false;
          setIsTyping(false);
          appendExpertMessage("Takk! Vi følger opp kort.");
        }
      };

      ws.onclose = () => {
        wsRef.current = null;
      };
    } catch {
      wsRef.current = null;
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [appendExpertMessage, chatEndpoint, online]);

  const sendMessage = useCallback(
    async (text: string) => {
      const clean = text.trim();
      if (!clean) {
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          from: "user",
          text: clean,
          timestamp: nowLabel(),
        },
      ]);

      if (!online) {
        appendExpertMessage(
          "Chat er stengt akkurat nå. Bruk 'Send spørsmål'-fanen for å stille spørsmålet ditt.",
          "Apriil-ekspert",
        );
        return;
      }

      setIsTyping(true);

      const ws = wsRef.current;
      if (ws && ws.readyState === WebSocket.OPEN) {
        pendingWsReply.current = true;
        ws.send(JSON.stringify({ sessionId, message: clean }));

        window.setTimeout(() => {
          if (pendingWsReply.current) {
            pendingWsReply.current = false;
            setIsTyping(false);
            appendExpertMessage("Vi mistet tilkoblingen et øyeblikk. Prøv igjen, eller bruk 'Send spørsmål'.");
          }
        }, 15000);
        return;
      }

      try {
        const response = await fetch(chatEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId, message: clean }),
        });

        if (!response.ok) {
          throw new Error("Chat endpoint failed");
        }

        const data = await response.json();
        setIsTyping(false);
        appendExpertMessage(data.reply || "Takk! Vi følger opp kort.", data.agentName, data.timestamp);
      } catch {
        setIsTyping(false);
        appendExpertMessage("Kunne ikke hente svar akkurat nå. Prøv igjen, eller bruk 'Send spørsmål'.");
      }
    },
    [appendExpertMessage, chatEndpoint, online, sessionId],
  );

  return {
    messages,
    isTyping,
    sendMessage,
  };
}
