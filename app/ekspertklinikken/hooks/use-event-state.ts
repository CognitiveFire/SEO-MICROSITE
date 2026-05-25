"use client";

import { useEffect, useMemo, useState } from "react";
import type { EventState } from "../types";

const RECORDING_GRACE_HOURS = 24;

function toOsloDate(date: Date) {
  return new Date(date.toLocaleString("en-US", { timeZone: "Europe/Oslo" }));
}

function lastFridayOf(year: number, month: number) {
  const lastDay = new Date(year, month + 1, 0);
  const dow = lastDay.getDay();
  const offset = dow >= 5 ? dow - 5 : dow + 2;
  const d = new Date(year, month, lastDay.getDate() - offset);
  d.setHours(12, 0, 0, 0);
  return d;
}

export function getNextLastFriday() {
  const nowOslo = toOsloDate(new Date());
  const currentMonthCandidate = lastFridayOf(
    nowOslo.getFullYear(),
    nowOslo.getMonth(),
  );
  const currentMonthRecordingAvailableAt = recordingAvailableAtFromEvent(
    currentMonthCandidate,
  );
  const currentMonthRecordingGraceEnds = new Date(
    currentMonthRecordingAvailableAt,
  );
  currentMonthRecordingGraceEnds.setHours(
    currentMonthRecordingGraceEnds.getHours() + RECORDING_GRACE_HOURS,
  );

  if (nowOslo <= currentMonthRecordingGraceEnds) {
    return currentMonthCandidate;
  }

  return lastFridayOf(nowOslo.getFullYear(), nowOslo.getMonth() + 1);
}

function recordingAvailableAtFromEvent(event: Date) {
  const end = new Date(event);
  end.setHours(13, 0, 0, 0);
  end.setMinutes(end.getMinutes() + 60);
  return end;
}

export function getEventState(
  event: Date,
  recordingAvailableAt: Date,
): EventState {
  const now = toOsloDate(new Date());
  const start = new Date(event);
  start.setHours(12, 0, 0, 0);
  const end = new Date(event);
  end.setHours(13, 0, 0, 0);

  if (now < start) {
    const isToday = now.toDateString() === start.toDateString();
    return isToday ? "today-before" : "upcoming";
  }

  if (now >= start && now < end) {
    return "live";
  }

  if (now >= end && now < recordingAvailableAt) {
    return "recording-pending";
  }

  return "recording-available";
}

function formatEventDate(eventDate: Date) {
  const weekday = new Intl.DateTimeFormat("no-NO", {
    weekday: "long",
    timeZone: "Europe/Oslo",
  }).format(eventDate);
  const datePart = new Intl.DateTimeFormat("no-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Oslo",
  }).format(eventDate);
  return `${weekday} ${datePart} kl. 12:00–13:00`;
}

export function getEventMonthValue(eventDate: Date) {
  const year = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    timeZone: "Europe/Oslo",
  }).format(eventDate);
  const month = new Intl.DateTimeFormat("en-CA", {
    month: "2-digit",
    timeZone: "Europe/Oslo",
  }).format(eventDate);
  return `${year}-${month}`;
}

export function useEventState() {
  const [nowTick, setNowTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setNowTick((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  const eventDate = useMemo(() => getNextLastFriday(), [nowTick]);
  const recordingAvailableAt = useMemo(
    () => recordingAvailableAtFromEvent(eventDate),
    [eventDate],
  );
  const eventState = useMemo(
    () => getEventState(eventDate, recordingAvailableAt),
    [eventDate, recordingAvailableAt, nowTick],
  );

  const nowOslo = toOsloDate(new Date());
  const diffMs = eventDate.getTime() - nowOslo.getTime();
  const safeDiff = Math.max(diffMs, 0);

  const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDiff / 1000) % 60);

  return {
    eventDate,
    eventDateLabel: formatEventDate(eventDate),
    eventMonth: getEventMonthValue(eventDate),
    eventState,
    recordingAvailableAt,
    countdown: {
      days,
      hours,
      minutes,
      seconds,
    },
  };
}
