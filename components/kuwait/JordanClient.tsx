"use client";
import { useEffect, useState } from "react";

export function HeroRoute() {
  const [motion, setMotion] = useState(true);
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => { setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  const nodes = [
    { k: "Jordan", t: "Pickup country", x: 40 },
    { k: "Border", t: "International border procedures", x: 500 },
    { k: "Saudi Arabia", t: "Final destination", x: 960 },
  ];
  const D = "M40 60 C 200 60 260 30 500 50 S 800 80 960 55";
  return (
    <div>
      {/* Mobile: vertical route */}
      <ol className="space-y-0 sm:hidden" aria-label="Route: Jordan, Border, Saudi Arabia">
        {nodes.map((n, i) => (
          <li key={n.k} className="relative pl-8 pb-5 last:pb-0">
            {i < 2 && <span aria-hidden="true" className="absolute left-[7px] top-4 h-full w-0.5 bg-gold/60" />}
            <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-gold bg-navy" />
            <p className="text-sm font-semibold text-white">{n.k}</p><p className="text-xs text-white/65">{n.t}</p>
          </li>
        ))}
      </ol>
      {/* Desktop: horizontal cinematic route */}
      <div className="relative hidden sm:block">
        <svg viewBox="0 0 1000 110" className="h-auto w-full" role="img" aria-label="Illustrated route from Jordan through a border to Saudi Arabia">
          <path d={D} fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="4" strokeLinecap="round" />
          <path d={D} fill="none" stroke="#C9A14A" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 12" className={motion ? "road-anim" : ""} />
          {nodes.map((n, i) => (
            <g key={n.k} transform={`translate(${n.x} ${[60, 50, 55][i]})`} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} style={{ cursor: "pointer" }}>
              {i === 1 ? <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#C9A14A" transform="rotate(45)" /> : <circle r="10" fill="#0B1F33" stroke="#C9A14A" strokeWidth="3" />}
              <text y="34" textAnchor={i === 2 ? "end" : i === 0 ? "start" : "middle"} fill="#fff" fontSize="15" fontWeight="600" fontFamily="sans-serif">{n.k}</text>
            </g>
          ))}
          {motion && (<g><rect x="-13" y="-7" width="26" height="14" rx="5" fill="#fff" /><rect x="-6" y="-11" width="13" height="6" rx="2" fill="#fff" /><animateMotion dur="14s" repeatCount="indefinite" rotate="auto" path={D} /></g>)}
        </svg>
        <div className="min-h-[24px] text-sm text-white/80" aria-live="polite">{active !== null ? `${nodes[active].k}: ${nodes[active].t}` : "Hover a marker for details."}</div>
      </div>
      <p className="mt-1 text-[11px] text-white/50">Illustration only. It is not live GPS or border status.</p>
    </div>
  );
}

const CORRIDORS = [
  { k: "Al-Omari", x: 380, y: 85, side: "Jordan side · linked with Al-Haditha on the Saudi side", d: "A northern Jordan–Saudi land corridor. It may be considered for journeys toward central and eastern Saudi destinations, depending on the route.", n: "Customs and entry procedures apply, and requirements vary." },
  { k: "Mudawara", x: 260, y: 165, side: "Jordan side · linked with Halat Ammar on the Saudi side", d: "A central-southern corridor in southern Jordan, relevant to some routes toward western and north-western Saudi Arabia.", n: "Jordanian authorities have published updates on passenger movement here. Check current conditions." },
  { k: "Al-Durra", x: 140, y: 240, side: "Aqaba, Jordan · linked with Haql on the Saudi side", d: "The Aqaba-side corridor. It matters only where your pickup or route is in the Aqaba area.", n: "Operations have been updated or paused at times, so the applicable border is never assumed." },
];

export function BorderMap() {
  const [i, setI] = useState(1);
  const c = CORRIDORS[i];
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <figure className="rounded-2xl bg-navy p-4 sm:p-6">
        <svg viewBox="0 0 500 300" role="img" aria-label="Stylized map of Jordan–Saudi border corridors: Al-Omari, Mudawara and Al-Durra" className="h-auto w-full">
          <path d="M20 20 H430 L110 290 H20 Z" fill="#123B5D" opacity=".7" /><text x="40" y="60" fill="#fff" fillOpacity=".7" fontSize="14" fontFamily="sans-serif">JORDAN</text>
          <path d="M430 20 H490 V290 H110 Z" fill="#0a1622" /><text x="400" y="270" fill="#fff" fillOpacity=".7" fontSize="14" fontFamily="sans-serif" textAnchor="end">SAUDI ARABIA</text>
          <path d="M430 20 L110 290" stroke="#C9A14A" strokeWidth="2" strokeDasharray="6 6" />
          {CORRIDORS.map((k, n) => (
            <g key={k.k} onMouseEnter={() => setI(n)} onClick={() => setI(n)} style={{ cursor: "pointer" }}>
              <circle cx={k.x} cy={k.y} r={n === i ? 11 : 8} fill={n === i ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" />
              <text x={k.x + 16} y={k.y + 5} fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">{k.k}</text>
            </g>
          ))}
        </svg>
        <figcaption className="mt-2 text-xs text-white/60">Stylized, not to scale. No live availability, and not a routing recommendation.</figcaption>
      </figure>
      <div>
        <div role="tablist" aria-label="Border corridors" className="flex flex-wrap gap-2">
          {CORRIDORS.map((k, n) => (<button key={k.k} role="tab" aria-selected={n === i} onClick={() => setI(n)} className={`min-h-[44px] rounded-lg border px-4 text-sm font-semibold ${n === i ? "border-gold bg-gold/15 text-navy" : "border-slate-300 text-muted"}`}>{k.k}</button>))}
        </div>
        <div role="tabpanel" className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200" aria-live="polite">
          <p className="text-xs font-semibold text-gold">{c.side}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{c.d}</p>
          <p className="mt-2 text-xs text-muted">{c.n}</p>
        </div>
      </div>
    </div>
  );
}

const ORIGINS = ["Amman", "Irbid", "Zarqa", "Ma'an", "Aqaba", "Other Jordan location"];
const DESTS = ["Tabuk", "Madinah", "Makkah", "Jeddah", "Riyadh", "Dammam / Al Khobar", "Other Saudi location"];

export function CorridorFinder() {
  const [o, setO] = useState("");
  const [d, setD] = useState("");
  let out = "";
  if (o && d) {
    if (o === "Aqaba") out = "Al-Durra may be considered, because the pickup is in the Aqaba area.";
    else if (o === "Ma'an") out = "Mudawara may be considered, as it lies in southern Jordan.";
    else if (["Riyadh", "Dammam / Al Khobar"].includes(d) && ["Amman", "Irbid", "Zarqa"].includes(o)) out = "Al-Omari may be considered for a northern start toward central or eastern Saudi Arabia.";
    else if (["Madinah", "Makkah", "Jeddah", "Tabuk"].includes(d) && ["Amman", "Irbid", "Zarqa"].includes(o)) out = "Mudawara or Al-Durra may be considered for destinations in western or north-western Saudi Arabia.";
    else out = "This route needs a manual review before any corridor is suggested.";
  }
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="label">Jordan origin<select className="field" value={o} onChange={(e) => setO(e.target.value)}><option value="">Select</option>{ORIGINS.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label className="label">Saudi destination<select className="field" value={d} onChange={(e) => setD(e.target.value)}><option value="">Select</option>{DESTS.map((x) => <option key={x}>{x}</option>)}</select></label>
      </div>
      <div className="mt-4 rounded-lg bg-paper p-4 text-sm" aria-live="polite">
        <p className="font-semibold text-navy">Potential border corridor</p>
        <p className="mt-1 text-ink">{out || "Choose an origin and a destination."}</p>
      </div>
      <p className="mt-3 text-xs text-muted">Indicative route only. The final border and vehicle arrangement are confirmed from the actual booking and current operating conditions. This is not a live routing engine.</p>
    </div>
  );
}

export function TripProfile() {
  const [type, setType] = useState("Family");
  const [ret, setRet] = useState(false);
  const [pax, setPax] = useState(3);
  const [bags, setBags] = useState("Several bags");
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:grid-cols-[1.3fr_1fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="label">Trip type<select className="field" value={type} onChange={(e) => setType(e.target.value)}>{["Family", "Business", "Umrah", "Group", "Airport-connected"].map((x) => <option key={x}>{x}</option>)}</select></label>
        <label className="label">Passengers<input type="number" min={1} max={60} className="field" value={pax} onChange={(e) => setPax(Number(e.target.value) || 1)} /></label>
        <label className="label">Luggage<select className="field" value={bags} onChange={(e) => setBags(e.target.value)}>{["Light", "Several bags", "A lot of luggage"].map((x) => <option key={x}>{x}</option>)}</select></label>
        <label className="label">Journey<select className="field" value={ret ? "r" : "o"} onChange={(e) => setRet(e.target.value === "r")}><option value="o">One-way</option><option value="r">Return</option></select></label>
      </div>
      <div className="flex flex-col justify-center rounded-xl bg-navy p-5 text-white" aria-live="polite">
        <p className="text-sm font-semibold">{type} · {pax} passenger{pax > 1 ? "s" : ""} · {bags.toLowerCase()} · {ret ? "return" : "one-way"}</p>
        <p className="mt-2 text-sm text-white/75">Your trip requires a route-specific cross-border transportation review.</p>
        <a href="#quote" className="btn-gold mt-4">Get a Quote</a>
      </div>
    </div>
  );
}
