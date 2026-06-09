import type { IconKey } from "@/lib/data";

type IconProps = {
  name: IconKey;
  className?: string;
};

/**
 * Lightweight inline icon set (thin-line, on-brand).
 * No external icon dependency keeps the bundle small for Core Web Vitals.
 */
const PATHS: Record<IconKey, React.ReactNode> = {
  crack: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
  ),
  asmr: (
    <>
      <path d="M4 9v6h4l5 4V5L8 9z" />
      <path d="M17 8a5 5 0 0 1 0 8M19.5 5.5a8.5 8.5 0 0 1 0 13" />
    </>
  ),
  cup: (
    <>
      <path d="M6 3h12l-1.2 16.4A2 2 0 0 1 14.8 21H9.2a2 2 0 0 1-2-1.6L6 3z" />
      <path d="M6.4 8h11.2" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.1 10.9l7.8-3.9M8.1 13.1l7.8 3.9" />
    </>
  ),
  basket: (
    <>
      <path d="M5 9l2-5M19 9l-2-5" />
      <path d="M3 9h18l-1.6 9.4A2 2 0 0 1 17.4 20H6.6a2 2 0 0 1-2-1.6L3 9z" />
      <path d="M9 13v3M15 13v3" />
    </>
  ),
  cupcake: (
    <>
      <path d="M5 11a7 7 0 0 1 14 0" />
      <path d="M4 11h16l-1.4 8.4A2 2 0 0 1 16.6 21H7.4a2 2 0 0 1-2-1.6L4 11z" />
      <path d="M12 4v2M9.5 5l.7 1.5M14.5 5l-.7 1.5" />
    </>
  ),
  shelf: (
    <>
      <path d="M3 8h18M3 16h18M4 20h16" />
      <path d="M6 8V5h4v3M15 8V5h4v3M9 16v-3M15 16v-3" />
    </>
  ),
  store: (
    <>
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M4 9v10h16V9" />
      <path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M9 19v-5h6v5" />
    </>
  ),
  plane: (
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
  ),
  social: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  rotation: (
    <>
      <path d="M21 12a9 9 0 1 1-3.5-7.1" />
      <path d="M21 4v5h-5" />
      <path d="M8 14l3-3 2 2 3-4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M18 9a4 4 0 0 1 0 6" />
    </>
  ),
  traffic: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a5 5 0 0 1 8-4" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M13 21v-1.5a4 4 0 0 1 8 0V21" />
    </>
  ),
  check: <path d="M5 13l4 4 10-10" />,
  tiktok: (
    <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.4c-1.3.1-2.5-.3-3.5-1v5.9c0 3.4-2.6 5.6-5.6 5.1a4.9 4.9 0 0 1-4-4.6c-.1-2.9 2.4-5.2 5.3-4.8v2.5c-.4-.1-.9-.1-1.3 0a2.3 2.3 0 0 0-1.5 2.6 2.3 2.3 0 0 0 4.5-.6V3z" />
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M21 7v5h-5" />
    </>
  ),
  impulse: (
    <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
  ),
  nomad: (
    <>
      <path d="M6 3h12l-1.2 16.4A2 2 0 0 1 14.8 21H9.2a2 2 0 0 1-2-1.6L6 3z" />
      <path d="M9 7h6M9.5 12h5" />
    </>
  ),
  repeat: (
    <>
      <path d="M4 9a5 5 0 0 1 5-5h7l-2-2M20 15a5 5 0 0 1-5 5H8l2 2" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="12.5" r="3.5" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
