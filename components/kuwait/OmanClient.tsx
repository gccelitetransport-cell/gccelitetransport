"use client";
import { useEffect, useState } from "react";

const SPOKES = [
  { k: "UAE", t: "UAE Cross-Border Corridor", d: "A neighboring GCC road corridor. Planned from your Oman pickup to your UAE destination.", x: 130, y: 70, stroke: "#C9A14A", dash: "" },
  { k: "Saudi Arabia", t: "Saudi Arabia Cross-Border Corridor", d: "A long-distance international road corridor. Route and vehicle arrangement are reviewed first.", x: 130, y: 210, stroke: "#ffffff", dash: "" },
  { k: "Wider GCC", t: "Regional GCC Road Journey", d: "Reached through the UAE or Saudi Arabia, with extra borders and arrangements. Planned individually.", x: 60, y: 140, stroke: "#C9A14A", dash: "3 7" },
];

export function HeroNetwork() {
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => { setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); const t = setTimeout(() => setReady(true), 100); return () => clearTimeout(t); }, []);
  const cx = 300, cy = 140;
  const pos = [[470, 60], [470, 220], [470, 140]];
  return (
    <div>
      {/* Mobile: vertical route cards */}
      <ul className="space-y-2 sm:hidden" aria-label="Corridors from Oman">
        {SPOKES.map((s) => (<li key={s.k} className="rounded-xl border border-white/15 bg-white/5 p-3"><p className="text-sm font-semibold text-white">Oman → {s.k}</p><p className="text-xs text-white/70">{s.t}</p></li>))}
      </ul>
      <div className="hidden sm:block">
        <svg viewBox="0 0 560 280" className="h-auto w-full max-w-2xl" role="img" aria-label="Illustrated road network: Oman at the center with routes to the UAE, Saudi Arabia and the wider GCC">
          {SPOKES.map((s, i) => (
            <path key={s.k} d={`M${cx} ${cy} Q ${(cx + pos[i][0]) / 2} ${i === 0 ? 70 : i === 1 ? 210 : 140} ${pos[i][0]} ${pos[i][1]}`} fill="none" stroke={s.stroke} strokeWidth={s.dash ? 2 : 3.5} strokeLinecap="round" strokeDasharray={s.dash || undefined} strokeOpacity={active === i ? 1 : 0.55}
              pathLength={s.dash ? undefined : 1} className={!s.dash && motion ? `draw ${ready ? "on" : ""}` : ""} />
          ))}
          {SPOKES.map((s, i) => (
            <g key={s.k} transform={`translate(${pos[i][0]} ${pos[i][1]})`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
              <circle r="9" fill={active === i ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" />
              <text x="16" y="5" fill="#fff" fontSize="14" fontWeight="600" fontFamily="sans-serif">{s.k}</text>
            </g>
          ))}
          <circle cx={cx} cy={cy} r="16" fill="#C9A14A" /><text x={cx - 24} y={cy + 5} textAnchor="end" fill="#fff" fontSize="16" fontWeight="700" fontFamily="sans-serif">OMAN</text>
          {motion && (<g><rect x="-9" y="-5" width="18" height="10" rx="4" fill="#fff" /><animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={`M${cx} ${cy} Q ${(cx + 470) / 2} 70 470 60`} /></g>)}
        </svg>
        <div className="mt-2 rounded-lg bg-white/10 p-4 text-sm text-white" aria-live="polite"><p className="font-semibold">{SPOKES[active].t}</p><p className="mt-1 text-white/75">{SPOKES[active].d}</p></div>
      </div>
      <p className="mt-2 text-[11px] text-white/50">Conceptual network. It is not live traffic or route availability.</p>
    </div>
  );
}

export function NetworkRail() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setStage(Number((e.target as HTMLElement).dataset.stage)); }), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  const hl = (i: number) => (stage === i ? 1 : 0.25);
  return (
    <div className="pointer-events-none fixed bottom-6 left-4 z-30 hidden rounded-xl bg-navy/90 p-3 shadow-lg 2xl:block" aria-hidden="true">
      <svg viewBox="0 0 120 90" className="h-20 w-28">
        <path d="M30 45 L90 20" stroke="#C9A14A" strokeWidth="3" strokeOpacity={hl(1)} /><path d="M30 45 L90 70" stroke="#fff" strokeWidth="3" strokeOpacity={hl(2)} />
        <path d="M30 45 L95 45" stroke="#C9A14A" strokeWidth="2" strokeDasharray="2 5" strokeOpacity={hl(4)} />
        <circle cx="30" cy="45" r="7" fill="#C9A14A" fillOpacity={stage === 0 || stage === 3 ? 1 : 0.5} />
        <text x="96" y="22" fill="#fff" fontSize="9" fillOpacity={hl(1) + 0.3}>UAE</text><text x="96" y="73" fill="#fff" fontSize="9" fillOpacity={hl(2) + 0.3}>KSA</text><text x="99" y="48" fill="#fff" fontSize="9" fillOpacity={hl(4) + 0.3}>GCC</text>
      </svg>
    </div>
  );
}

export function CardToggle({ items, cols = "md:grid-cols-3" }: { items: { t: string; s: string; d: string }[]; cols?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`grid gap-4 ${cols}`}>
      {items.map((c, i) => (
        <button key={c.t} type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}
          className={`rounded-2xl border-2 p-5 text-left transition-all duration-300 ${open === i ? "border-gold bg-white shadow-md" : "border-slate-200 bg-white/70 hover:border-gold/60"}`}>
          <span className="text-xs font-semibold tracking-widest text-gold">{c.s}</span>
          <span className="mt-1 block text-lg font-semibold text-navy">{c.t}</span>
          {open === i && <span className="mt-3 block text-sm leading-relaxed text-muted">{c.d}</span>}
        </button>
      ))}
    </div>
  );
}

export function JourneyCalc() {
  const [dest, setDest] = useState("UAE");
  const [pax, setPax] = useState(2);
  const [bags, setBags] = useState(2);
  const [ret, setRet] = useState(false);
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:grid-cols-[1.2fr_1fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="label">Origin<input className="field" value="Oman" readOnly /></label>
        <label className="label">Destination<select className="field" value={dest} onChange={(e) => setDest(e.target.value)}>{["UAE", "Saudi Arabia", "Other GCC (via UAE or Saudi Arabia)"].map((x) => <option key={x}>{x}</option>)}</select></label>
        <label className="label">Passengers<input type="number" min={1} max={60} className="field" value={pax} onChange={(e) => setPax(Number(e.target.value) || 1)} /></label>
        <label className="label">Luggage (bags)<input type="number" min={0} max={60} className="field" value={bags} onChange={(e) => setBags(Number(e.target.value) || 0)} /></label>
        <label className="label sm:col-span-2">Journey<select className="field" value={ret ? "r" : "o"} onChange={(e) => setRet(e.target.value === "r")}><option value="o">One way</option><option value="r">Return</option></select></label>
      </div>
      <div className="rounded-xl bg-navy p-5 text-white" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Cross-Border Trip Profile</p>
        <ul className="mt-3 space-y-1.5 text-sm text-white/85">
          <li>Oman → {dest}, {ret ? "return" : "one way"}</li><li>{pax} passenger{pax > 1 ? "s" : ""}, {bags} bag{bags === 1 ? "" : "s"}</li><li>Long-distance road journey</li><li>Private vehicle</li><li>Route review required</li><li>Border requirements apply</li>
        </ul>
        <a href="#quote" className="btn-gold mt-4">Get Exact Quote</a>
        <p className="mt-2 text-[11px] text-white/50">No price is generated here.</p>
      </div>
    </div>
  );
}
