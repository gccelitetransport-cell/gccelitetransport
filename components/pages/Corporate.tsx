"use client";
import { useMemo, useState } from "react";
import { COUNTRIES } from "@/lib/borders";
import { waLink } from "@/lib/site";

type Leg = { from: string; fromCity: string; to: string; toCity: string; when: string; pax: number; ret: boolean };
const blank = (): Leg => ({ from: "Saudi Arabia", fromCity: "", to: "UAE", toCity: "", when: "", pax: 2, ret: false });

/** Multi-leg corporate itinerary desk. Builds a readable brief and opens it in WhatsApp. Nothing is stored. */
export function ItineraryDesk() {
  const [legs, setLegs] = useState<Leg[]>([blank()]);
  const [company, setCompany] = useState(""); const [pattern, setPattern] = useState("One-off trip"); const [notes, setNotes] = useState("");
  const set = (i: number, k: keyof Leg, v: string | number | boolean) => setLegs(legs.map((l, j) => (j === i ? { ...l, [k]: v } : l)));
  const msg = useMemo(() => [
    "Hello GCC Elite Transport, corporate cross-border transportation request.",
    company && `Company: ${company}`, `Pattern: ${pattern}`,
    ...legs.map((l, i) => `Leg ${i + 1}: ${l.fromCity || "?"}, ${l.from} → ${l.toCity || "?"}, ${l.to} | ${l.when || "date TBC"} | ${l.pax} traveler${l.pax > 1 ? "s" : ""}${l.ret ? " | return needed" : ""}`),
    notes && `Notes: ${notes}`,
  ].filter(Boolean).join("\n"), [legs, company, pattern, notes]);
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="label !text-white/70">Company or team<input className="field" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Optional" /></label>
          <label className="label !text-white/70">Travel pattern<select className="field" value={pattern} onChange={(e) => setPattern(e.target.value)}>{["One-off trip", "Recurring route", "Multi-day schedule", "Event or project"].map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        {legs.map((l, i) => (
          <fieldset key={i} className="rounded-2xl border border-white/15 bg-white/5 p-4">
            <legend className="px-2 text-xs font-semibold uppercase tracking-widest text-gold">Leg {i + 1}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="label !text-white/70">From country<select className="field" value={l.from} onChange={(e) => set(i, "from", e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
              <label className="label !text-white/70">From city<input className="field" value={l.fromCity} onChange={(e) => set(i, "fromCity", e.target.value)} /></label>
              <label className="label !text-white/70">To country<select className="field" value={l.to} onChange={(e) => set(i, "to", e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
              <label className="label !text-white/70">To city<input className="field" value={l.toCity} onChange={(e) => set(i, "toCity", e.target.value)} /></label>
              <label className="label !text-white/70">Date / schedule<input className="field" value={l.when} onChange={(e) => set(i, "when", e.target.value)} placeholder="e.g. 14 Nov, 07:00" /></label>
              <label className="label !text-white/70">Travelers<input type="number" min={1} max={60} className="field" value={l.pax} onChange={(e) => set(i, "pax", Number(e.target.value) || 1)} /></label>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <label className="flex min-h-[44px] items-center gap-2 text-sm text-white/80"><input type="checkbox" className="h-5 w-5 accent-[#C9A14A]" checked={l.ret} onChange={(e) => set(i, "ret", e.target.checked)} />Return needed</label>
              {legs.length > 1 && <button type="button" onClick={() => setLegs(legs.filter((_, j) => j !== i))} className="min-h-[44px] px-3 text-sm text-white/60 hover:text-gold">Remove leg</button>}
            </div>
          </fieldset>
        ))}
        {legs.length < 6 && <button type="button" onClick={() => setLegs([...legs, blank()])} className="btn-ghost w-full">+ Add another leg</button>}
        <label className="label !text-white/70">Notes (luggage, equipment, executives, timing)<textarea rows={2} className="field !min-h-[72px] py-2" value={notes} onChange={(e) => setNotes(e.target.value)} /></label>
      </div>
      <div className="h-fit rounded-2xl bg-white p-5 text-ink lg:sticky lg:top-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Your brief</p>
        <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-ink" aria-live="polite">{msg}</pre>
        <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full">Send to Our Transport Team</a>
        <p className="mt-2 text-[11px] text-muted">Opens WhatsApp with this brief. Nothing is stored on this website.</p>
      </div>
    </div>
  );
}
