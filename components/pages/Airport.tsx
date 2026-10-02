"use client";
import Link from "next/link";
import { useState } from "react";
import { COUNTRIES, pairInfo } from "@/lib/borders";

export const AIRPORTS = [
  { code: "DXB", name: "Dubai International", country: "UAE", city: "Dubai" },
  { code: "AUH", name: "Abu Dhabi International", country: "UAE", city: "Abu Dhabi" },
  { code: "SHJ", name: "Sharjah International", country: "UAE", city: "Sharjah" },
  { code: "MCT", name: "Muscat International", country: "Oman", city: "Muscat" },
  { code: "DOH", name: "Hamad International", country: "Qatar", city: "Doha" },
  { code: "BAH", name: "Bahrain International", country: "Bahrain", city: "Manama" },
  { code: "KWI", name: "Kuwait International", country: "Kuwait", city: "Kuwait City" },
  { code: "RUH", name: "King Khalid International", country: "Saudi Arabia", city: "Riyadh" },
  { code: "JED", name: "King Abdulaziz International", country: "Saudi Arabia", city: "Jeddah" },
  { code: "DMM", name: "King Fahd International", country: "Saudi Arabia", city: "Dammam" },
  { code: "AMM", name: "Queen Alia International", country: "Jordan", city: "Amman" },
];

/** Departures-board styled list of airport-connected international road journeys. Rows reveal in sequence. */
export function Board({ rows }: { rows: { code: string; from: string; to: string; note: string }[] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#07131f] font-mono text-white shadow-xl" role="table" aria-label="Examples of airport-connected international road journeys">
      <div role="row" className="grid grid-cols-[4rem_1fr_1fr] gap-3 border-b border-white/10 px-4 py-3 text-[11px] uppercase tracking-widest text-gold sm:grid-cols-[5rem_1fr_1fr_1.4fr]">
        <span role="columnheader">Airport</span><span role="columnheader">Arrive in</span><span role="columnheader">Road to</span><span role="columnheader" className="hidden sm:block">Planning note</span>
      </div>
      {rows.map((r, i) => (
        <div role="row" key={r.code + r.to} className="row-in grid grid-cols-[4rem_1fr_1fr] items-center gap-3 border-b border-white/5 px-4 py-3 text-sm sm:grid-cols-[5rem_1fr_1fr_1.4fr]" style={{ animationDelay: `${i * 0.12}s` }}>
          <span role="cell" className="font-bold text-gold">{r.code}</span><span role="cell">{r.from}</span><span role="cell">{r.to}</span><span role="cell" className="hidden text-xs text-white/60 sm:block">{r.note}</span>
        </div>
      ))}
      <p className="px-4 py-3 text-[11px] text-white/45">Illustrative examples, not a schedule and not availability. Each journey is confirmed individually.</p>
    </div>
  );
}

/** Arrival planner: choose an airport and the country you are road-traveling to. */
export function ArrivalPlanner() {
  const [code, setCode] = useState("DXB"); const [dest, setDest] = useState("Saudi Arabia"); const [dir, setDir] = useState("Arriving");
  const ap = AIRPORTS.find((a) => a.code === code)!;
  const info = pairInfo(ap.country, dest);
  const label = (c: string) => (c === "UAE" ? "UAE" : c);
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="label">Airport<select className="field" value={code} onChange={(e) => setCode(e.target.value)}>{AIRPORTS.map((a) => <option key={a.code} value={a.code}>{a.code} · {a.name}</option>)}</select></label>
        <label className="label">Flight<select className="field" value={dir} onChange={(e) => setDir(e.target.value)}><option>Arriving</option><option>Departing</option></select></label>
        <label className="label">{dir === "Arriving" ? "Road journey to" : "Road journey from"}<select className="field" value={dest} onChange={(e) => setDest(e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
      </div>
      <div className="mt-5 rounded-xl bg-paper p-5" aria-live="polite">
        {info.kind === "same" && <p className="text-sm text-ink">Choose a different country. A road journey that stays in {label(ap.country)} is a domestic transfer, and we do not arrange those.</p>}
        {info.kind === "direct" && (<>
          <p className="text-xs font-semibold text-gold">International road journey</p>
          <p className="mt-1 text-lg font-semibold text-navy">{dir === "Arriving" ? `${ap.name} → ${dest}` : `${dest} → ${ap.name}`}</p>
          <p className="mt-2 text-sm text-muted">The border corridor is {info.c.name} ({info.c.crossing}). The applicable crossing depends on your pickup, destination, vehicle and current border operations.</p>
          <Link href={info.c.guide} className="mt-2 inline-block text-sm font-semibold text-ocean hover:text-gold">Read the border guide →</Link>
        </>)}
        {info.kind === "via" && (<>
          <p className="text-xs font-semibold text-gold">Multi-country road journey</p>
          <p className="mt-1 text-lg font-semibold text-navy">{ap.country} and {dest} have no direct land border</p>
          <p className="mt-2 text-sm text-muted">This would pass through {info.via}, with a separate border and vehicle arrangement for each crossing, planned individually.</p>
        </>)}
      </div>
      <ul className="mt-5 grid gap-2 text-sm text-ink sm:grid-cols-2">{["Flight number and arrival or departure time", "Terminal, if known", "Number of passengers and bags", "Final address across the border"].map((x) => (<li key={x} className="flex gap-2"><span className="text-gold">›</span>{x}</li>))}</ul>
      <p className="mt-3 text-xs text-muted">Send these with your request so the pickup can be planned around your flight. If your flight time changes, message us.</p>
    </div>
  );
}
