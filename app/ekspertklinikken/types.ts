export type TopicTag = "seo" | "paid" | "bi" | "general";

export type EventState =
  | "upcoming"
  | "today-before"
  | "live"
  | "recording-pending"
  | "recording-available";

export type Expert = {
  initials: string;
  name: string;
  title: string;
  location: string;
  topic: string;
  tag: TopicTag;
  avatarBg: string;
  avatarColor: string;
};

export interface SubmittedQuestion {
  id: string;
  topic: TopicTag;
  topicLabel: string;
  question: string;
  status: "pending" | "answered";
  answeredInSession?: string;
  answer?: string;
  isNew?: boolean;
}

export interface Recording {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  durationMinutes: number;
  questionCount: number;
  topics: TopicTag[];
  linkedInUrl: string;
  recordingAvailableAt: string;
  status: "available" | "pending" | "upcoming";
}
