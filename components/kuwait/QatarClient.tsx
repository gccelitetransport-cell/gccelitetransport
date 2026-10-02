"use client";
import { useEffect, useState } from "react";

const NODES = [
  { k: "Qatar", t: "Pickup location", d: "Private pickup in Qatar, planned around your group and luggage." },
  { k: "Abu Samra", t: "Qatar-side border", d: "Qatar's land border with Saudi Arabia. Departure and border procedures apply here." },
  { k: "Saudi border / Salwa", t: "Entry procedures", d: "The Saudi side of the crossing, where Saudi entry procedures apply." },
  { k: "Saudi Arabia", t: "Final destination", d: "Drop-off at the confirmed Saudi destination." },
];

export function GatewayHero() {
  const [active, setActive] = useState(1);
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-6">
      <svg viewBox="0 0 460 280" className="h-auto w-full" role="img" aria-label="Illustrated road passing through a border gateway between Qatar and Saudi Arabia">
        <defs><linearGradient id="qsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#123B5D" /><stop offset="1" stopColor="#C9A14A" stopOpacity=".5" /></linearGradient></defs>
        <rect width="460" height="130" fill="url(#qsky)" opacity=".5" className="qa-in" style={{ animationDelay: ".1s" }} />
        <path d="M60 280 L196 120 H264 L400 280 Z" fill="#0a1622" className="qa-in" style={{ animationDelay: ".2s" }} />
        <path d="M230 280 V120" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeDasharray="10 12" className="qa-in" style={{ animationDelay: ".4s" }} />
        <g className="qa-in" style={{ animationDelay: ".6s" }}>
          <rect x="176" y="86" width="10" height="46" fill="#07131f" /><rect x="274" y="86" width="10" height="46" fill="#07131f" />
          <rect x="166" y="78" width="128" height="10" rx="3" fill="#123B5D" /><rect x="205" y="81" width="50" height="4" fill="#C9A14A" />
          <rect x="186" y="108" width="44" height="5" rx="2" fill="#C9A14A" className="qa-gate-l" />
          <rect x="230" y="108" width="44" height="5" rx="2" fill="#C9A14A" className="qa-gate-r" />
        </g>
        <g className="qa-drive"><g transform="translate(230 238)"><rect x="-13" y="-7" width="26" height="14" rx="5" fill="#fff" /><rect x="-7" y="-11" width="13" height="6" rx="2" fill="#fff" /></g></g>
        {[["Qatar", 62, 262], ["Abu Samra", 118, 168], ["Saudi border / Salwa", 290, 160], ["Saudi Arabia", 392, 62]].map(([n, x, y], i) => (
          <g key={n as string} className="qa-in" style={{ animationDelay: `${0.5 + i * 0.5}s` }}>
            <circle cx={x as number} cy={y as number} r="7" fill={i === active ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" />
            <text x={(x as number) + (i === 3 ? -12 : 12)} y={(y as number) + 4} textAnchor={i === 3 ? "end" : "start"} fill="#fff" fontSize="11" fontWeight="600" fontFamily="sans-serif">{n}</text>
          </g>
        ))}
      </svg>
      <div role="tablist" aria-label="Border gateway stages" className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {NODES.map((n, i) => (
          <button key={n.k} role="tab" aria-selected={active === i} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
            className={`min-h-[44px] rounded-lg border px-2 text-xs font-semibold ${active === i ? "border-gold bg-gold/15 text-white" : "border-white/20 text-white/70"}`}>{n.k}</button>
        ))}
      </div>
      <div role="tabpanel" className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white" aria-live="polite">
        <p className="font-semibold">{NODES[active].t}</p>
        <p className="mt-1 text-white/75">{NODES[active].d}</p>
      </div>
      <p className="mt-2 text-[11px] text-white/50">Conceptual illustration. It does not show live border status or traffic.</p>
    </div>
  );
}

/** Left-edge rail: QATAR · ABU SAMRA · BORDER · SAUDI, activated by data-stage sections. */
export function GatewayRail({ items = ["Qatar", "Abu Samra", "Border", "Saudi"] }: { items?: string[] } = {}) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setStage(Number((e.target as HTMLElement).dataset.stage)); }), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return (
    <nav aria-label="Journey progress" className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 2xl:block">
      <ol className="flex flex-col items-start gap-1 text-[10px] font-semibold tracking-widest">
        {items.map((t, i) => (
          <li key={t} className="flex flex-col items-start">
            <span className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full border-2 ${i <= stage ? "border-gold bg-gold" : "border-slate-300 bg-white"}`} /><span className={i === stage ? "text-gold" : "text-muted"}>{t.toUpperCase()}</span></span>
            {i < items.length - 1 && <span className={`ml-[4px] h-6 w-0.5 ${i < stage ? "bg-gold" : "bg-slate-300"}`} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
