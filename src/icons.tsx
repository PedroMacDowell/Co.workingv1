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
};
