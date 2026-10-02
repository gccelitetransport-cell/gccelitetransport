"use client";
import { useMemo, useState } from "react";
import { COUNTRIES } from "@/lib/borders";
import { waLink } from "@/lib/site";

/** Request desk: fill a short brief, see the exact message that will be sent, send on WhatsApp or copy it. Nothing is stored. */
export function RequestDesk() {
  const [v, setV] = useState({ name: "", fc: "Saudi Arabia", fcity: "", tc: "UAE", tcity: "", date: "", pax: "2", bags: "", trip: "One way", veh: "No preference", notes: "" });
  const [copied, setCopied] = useState(false);
  const set = (k: string, val: string) => setV({ ...v, [k]: val });
  const same = v.fc === v.tc;
  const msg = useMemo(() => [
    "Hello GCC Elite Transport, I would like a cross-border quote.",
    v.name && `Name: ${v.name}`, `From: ${v.fcity || "?"}, ${v.fc}`, `To: ${v.tcity || "?"}, ${v.tc}`,
    `Trip: ${v.trip}`, v.date && `Date: ${v.date}`, `Passengers: ${v.pax}`, v.bags && `Luggage: ${v.bags}`, `Vehicle: ${v.veh}`, v.notes && `Notes: ${v.notes}`,
  ].filter(Boolean).join("\n"), [v]);
  const copy = async () => { try { await navigator.clipboard.writeText(msg); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard unavailable */ } };
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200" aria-label="Quote request details">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="label sm:col-span-2">Your name (optional)<input className="field" value={v.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></label>
          <label className="label">From country<select className="field" value={v.fc} onChange={(e) => set("fc", e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label className="label">From city<input className="field" value={v.fcity} onChange={(e) => set("fcity", e.target.value)} /></label>
          <label className="label">To country<select className="field" value={v.tc} onChange={(e) => set("tc", e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label className="label">To city<input className="field" value={v.tcity} onChange={(e) => set("tcity", e.target.value)} /></label>
          <label className="label">Date<input type="date" className="field" value={v.date} onChange={(e) => set("date", e.target.value)} /></label>
          <label className="label">Passengers<input type="number" min={1} max={60} className="field" value={v.pax} onChange={(e) => set("pax", e.target.value)} /></label>
          <label className="label">Luggage<input className="field" value={v.bags} onChange={(e) => set("bags", e.target.value)} placeholder="e.g. 3 large, 2 cabin" /></label>
          <label className="label">Trip<select className="field" value={v.trip} onChange={(e) => set("trip", e.target.value)}><option>One way</option><option>Return</option></select></label>
          <label className="label sm:col-span-2">Vehicle<select className="field" value={v.veh} onChange={(e) => set("veh", e.target.value)}>{["No preference", "Executive Sedan", "Premium SUV", "Large SUV", "Premium Van", "Minibus"].map((c) => <option key={c}>{c}</option>)}</select></label>
          <label className="label sm:col-span-2">Notes<textarea rows={2} className="field !min-h-[72px] py-2" value={v.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Children, elderly passengers, flight time, return plans" /></label>
        </div>
        {same && <p className="mt-3 rounded-lg bg-gold/10 p-3 text-sm text-ink" role="status">Both countries are the same. We arrange journeys that cross an international border, not trips inside one country.</p>}
      </form>
      <div className="h-fit rounded-2xl bg-navy p-6 text-white lg:sticky lg:top-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Message preview</p>
        <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-white/90" aria-live="polite">{msg}</pre>
        <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-5 w-full" aria-disabled={same}>Send on WhatsApp</a>
        <button type="button" onClick={copy} className="btn-ghost mt-2 w-full">{copied ? "Copied" : "Copy message"}</button>
        <p className="mt-3 text-[11px] text-white/50">This is exactly what is sent. The website does not store it.</p>
      </div>
    </div>
  );
}
