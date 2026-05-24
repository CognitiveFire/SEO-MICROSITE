"use client";

import { useEffect, useMemo, useState } from "react";
import type { Recording } from "../types";

function withStatus(recording: Recording): Recording {
  const now = Date.now();
  const startsAt = new Date(recording.date).getTime();
  const availableAt = new Date(recording.recordingAvailableAt).getTime();

  if (now < startsAt) {
    return { ...recording, status: "upcoming" };
  }

  if (now >= availableAt) {
    return { ...recording, status: "available" };
  }

  return { ...recording, status: "pending" };
}

export function useRecordingAvailability(recordings: Recording[]) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((v) => v + 1);
    }, 60000);

    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => recordings.map(withStatus), [recordings, tick]);
}
