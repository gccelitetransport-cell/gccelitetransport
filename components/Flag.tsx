// Simplified flat flags (inline SVG, no external requests).

export function Flag({ id, className = "h-6 w-9" }: { id: string; className?: string }) {
  const common = { viewBox: "0 0 48 32", className: `${className} rounded-[3px] ring-1 ring-black/10`, role: "img" as const };
  switch (id) {
    case "uae":
      return (
        <svg {...common} aria-label="UAE flag">
          <rect width="48" height="32" fill="#fff" />
          <rect y="0" x="12" width="36" height="10.7" fill="#00732f" />
          <rect y="21.3" x="12" width="36" height="10.7" fill="#000" />
          <rect width="12" height="32" fill="#ff0000" />
        </svg>
      );
    case "kuwait":
      return (
        <svg {...common} aria-label="Kuwait flag">
          <rect width="48" height="10.7" fill="#007a3d" />
          <rect y="10.7" width="48" height="10.6" fill="#fff" />
          <rect y="21.3" width="48" height="10.7" fill="#ce1126" />
          <path d="M0 0L14 10.7V21.3L0 32Z" fill="#000" />
        </svg>
      );
    case "qatar":
      return (
        <svg {...common} aria-label="Qatar flag">
          <rect width="48" height="32" fill="#8a1538" />
          <path d="M0 0H15L21 2.9L15 5.8L21 8.7L15 11.6L21 14.5L15 17.4L21 20.3L15 23.2L21 26.1L15 29L21 32H0Z" fill="#fff" />
        </svg>
      );
    case "bahrain":
      return (
        <svg {...common} aria-label="Bahrain flag">
          <rect width="48" height="32" fill="#ce1126" />
          <path d="M0 0H15L21 3.2L15 6.4L21 9.6L15 12.8L21 16L15 19.2L21 22.4L15 25.6L21 28.8L15 32H0Z" fill="#fff" />
        </svg>
      );
    case "oman":
      return (
        <svg {...common} aria-label="Oman flag">
          <rect width="48" height="32" fill="#fff" />
          <rect y="10.7" width="48" height="10.6" fill="#db161b" />
          <rect y="21.3" width="48" height="10.7" fill="#008000" />
          <rect width="14" height="32" fill="#db161b" />
          <circle cx="7" cy="6" r="2.6" fill="#fff" />
        </svg>
      );
    default: // saudi-arabia
      return (
        <svg {...common} aria-label="Saudi Arabia flag">
          <rect width="48" height="32" fill="#006c35" />
          <rect x="12" y="11" width="24" height="3" rx="1.5" fill="#fff" />
          <rect x="14" y="19" width="20" height="1.8" rx=".9" fill="#fff" />
        </svg>
      );
  }
}
