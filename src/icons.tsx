export type IconName = keyof typeof icons;

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const icons = {
  briefcase: () => (
    <svg viewBox="0 0 24 24">
      <path d="M4 9h16v10H4z" />
      <path d="M8 9V6h8v3" />
      <path d="M4 13h16" />
    </svg>
  ),
  meeting: () => (
    <svg viewBox="0 0 24 24">
      <path d="M3 11h18" />
      <path d="M5 11V7h14v4" />
      <path d="M6 11v6" />
      <path d="M18 11v6" />
      <path d="M9 17h6" />
    </svg>
  ),
  desk: () => (
    <svg viewBox="0 0 24 24">
      <path d="M4 5h16v12H4z" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  pin: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  ),
  coffee: () => (
    <svg viewBox="0 0 24 24">
      <path d="M4 10h11v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M15 11h2.5a2.5 2.5 0 0 1 0 5H15" />
      <path d="M6 4v2" />
      <path d="M10 4v2" />
      <path d="M14 4v2" />
    </svg>
  ),
  wifi: () => (
    <svg viewBox="0 0 24 24">
      <path d="M2 8.5a15 15 0 0 1 20 0" />
      <path d="M5 12a10.5 10.5 0 0 1 14 0" />
      <path d="M8.5 15.5a5.5 5.5 0 0 1 7 0" />
      <path d="M12 19h.01" />
    </svg>
  ),
  presentation: () => (
    <svg viewBox="0 0 24 24">
      <path d="M4 5h16v11H4z" />
      <path d="M8 21l4-5 4 5" />
      <path d="M12 5V3" />
    </svg>
  ),
  building: () => (
    <svg viewBox="0 0 24 24">
      <path d="M5 21V4h10v17" />
      <path d="M15 9h4v12" />
      <path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" />
      <path d="M3 21h18" />
    </svg>
  ),
  heartPulse: () => (
    <svg viewBox="0 0 24 24">
      <path d="M20.5 8.8c0 5-8.5 10.2-8.5 10.2S3.5 13.8 3.5 8.8a4.4 4.4 0 0 1 7.6-3L12 6.7l.9-.9a4.4 4.4 0 0 1 7.6 3z" />
      <path d="M7 12h2.4l1.1-2.2 2.1 4.4 1.3-2.2H17" />
    </svg>
  ),
  users: () => (
    <svg viewBox="0 0 24 24">
      <path d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      <path d="M2.8 20a5.7 5.7 0 0 1 11.4 0" />
      <path d="M16 11.5a3 3 0 1 0-.6-5.9" />
      <path d="M17.5 14.3A5 5 0 0 1 21.2 20" />
    </svg>
  ),
  thermo: () => (
    <svg viewBox="0 0 24 24">
      <path d="M14 14.8V5a4 4 0 0 0-8 0v9.8a6 6 0 1 0 8 0z" />
      <path d="M10 6v9" />
      <path d="M17 5l4 4M21 5l-4 4" />
    </svg>
  ),
  network: () => (
    <svg viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.6 7.4l6.8 6.9M15.4 8.3l-2.2 6.9M7.7 15.9l7-7.1" />
    </svg>
  ),
  spark: () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8z" />
      <path d="M18 3l.7 1.8L20.5 5.5l-1.8.7L18 8l-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  ),
  car: () => (
    <svg viewBox="0 0 24 24">
      <path d="M5 13l1.6-5h10.8l1.6 5" />
      <path d="M4 13h16v5H4z" />
      <path d="M7 18v2M17 18v2" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>
  ),
  support: () => (
    <svg viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-2" />
      <path d="M4 12v4h3v-5H4zM20 12v4h-3v-5h3z" />
      <path d="M12 19h3" />
    </svg>
  ),
  whatsapp: () => (
    <svg viewBox="0 0 24 24">
      <path d="M5 19l1-3a7.5 7.5 0 1 1 2.8 2.5z" />
      <path d="M9 8.8c.3 3 2 4.8 5.1 5.6l1.2-1.4-2-.9-.8.7a5.5 5.5 0 0 1-2.3-2.3l.7-.8-.9-2z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M16.8 7.2h.01" />
    </svg>
  ),
};
