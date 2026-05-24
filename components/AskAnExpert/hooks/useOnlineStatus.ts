"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type OfficeHours = {
  days: number[];
  start: number;
  end: number;
  tz: string;
};

const defaultOfficeHours: OfficeHours = {
  days: [1, 2, 3, 4, 5],
  start: 8,
  end: 17,
  tz: "Europe/Oslo",
};

const dayMap: Record<string, number> = {
  man: 1,
  tir: 2,
  ons: 3,
  tor: 4,
  fre: 5,
  lor: 6,
  son: 0,
};

function normalizeDay(raw: string) {
  return raw
    .toLowerCase()
    .replaceAll("ø", "o")
    .replaceAll("å", "a")
    .replaceAll("æ", "ae")
    .replace(/[^a-z]/g, "")
    .slice(0, 3);
}

export function isOnline(hours: OfficeHours = defaultOfficeHours) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("no", {
    timeZone: hours.tz,
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekdayRaw = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hourRaw = parts.find((part) => part.type === "hour")?.value ?? "-1";

  const day = dayMap[normalizeDay(weekdayRaw)] ?? -1;
  const hour = parseInt(hourRaw, 10);

  return hours.days.includes(day) && hour >= hours.start && hour < hours.end;
}

export function useOnlineStatus(
  officeHours?: Partial<OfficeHours>,
  onTransitionOffline?: () => void,
) {
  const mergedHours = useMemo<OfficeHours>(() => {
    const safe = officeHours ?? {};
    return {
      days: safe.days ?? defaultOfficeHours.days,
      start: safe.start ?? defaultOfficeHours.start,
      end: safe.end ?? defaultOfficeHours.end,
      tz: safe.tz ?? defaultOfficeHours.tz,
    };
  }, [officeHours]);

  const [online, setOnline] = useState<boolean>(() => isOnline(mergedHours));
  const previous = useRef(online);

  useEffect(() => {
    const evaluate = () => {
      const next = isOnline(mergedHours);
      if (previous.current && !next && onTransitionOffline) {
        onTransitionOffline();
      }
      previous.current = next;
      setOnline(next);
    };

    evaluate();
    const interval = window.setInterval(evaluate, 60_000);
    return () => window.clearInterval(interval);
  }, [mergedHours, onTransitionOffline]);

  return online;
}
