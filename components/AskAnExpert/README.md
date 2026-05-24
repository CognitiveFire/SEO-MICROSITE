# AskAnExpert

Reusable Apriil "Spør en ekspert" component for service pages.

## Features

- Collapsible trigger with online/offline state badge
- Status evaluation every 60s using Europe/Oslo timezone
- Three tabs:
  - Chat nå (WebSocket + HTTP fallback)
  - Send spørsmål (async form with validation)
  - Tidligere svar (filter + load more)
- Keyboard and ARIA-friendly tab interactions
- Works in light/dark mode

## Usage

```tsx
import { AskAnExpert } from "@/components/AskAnExpert";

<AskAnExpert
  topic="SEO og søkesynlighet"
  qaEndpoint="/api/qa"
  chatEndpoint="wss://chat.apriil.no/expert"
  submitEndpoint="/api/questions"
/>
```

## Props

- `topic?: string`
- `qaEndpoint?: string` (default `/api/qa`)
- `chatEndpoint?: string` (default `/api/chat`)
- `submitEndpoint?: string` (default `/api/questions`)
- `officeHours?: { days: number[]; start: number; end: number; tz: string }`

## Notes

- Outside office hours, chat input is disabled and users are guided to "Send spørsmål".
- If WebSocket is unavailable, chat falls back to HTTP POST on the same endpoint.
- The Q&A tab uses endpoint data when available, with internal fallback content for resilience.
