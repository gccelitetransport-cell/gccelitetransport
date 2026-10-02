type P = { className?: string };
const base = (c?: string) => ({ className: c ?? "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true });

export const WhatsAppIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className ?? "h-5 w-5"} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.12c-.25.69-1.43 1.32-1.97 1.37-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.95-4.37-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.25.6.84 2.07.91 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.09 1.31 2.39 1.46.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.18 1.4Z" />
  </svg>
);
export const MenuIcon = ({ className }: P) => (<svg {...base(className)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = ({ className }: P) => (<svg {...base(className)}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const ArrowIcon = ({ className }: P) => (<svg {...base(className ?? "h-4 w-4")}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const CheckIcon = ({ className }: P) => (<svg {...base(className ?? "h-4 w-4")}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>);
export const PhoneIcon = ({ className }: P) => (<svg {...base(className)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
export const PlusIcon = ({ className }: P) => (<svg {...base(className)}><path d="M12 5v14M5 12h14" /></svg>);
