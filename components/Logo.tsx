export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#0B1F33" />
        <path d="M8 27c4-9 8-13 12-13s8 4 12 13" fill="none" stroke="#C9A14A" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M13 29h14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className={`block text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>GCC Elite</span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-gold">Transport</span>
      </span>
    </span>
  );
}
