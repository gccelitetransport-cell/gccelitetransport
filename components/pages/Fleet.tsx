"use client";
import Link from "next/link";
import { useState } from "react";
import { Vehicle } from "../Art";
import { CheckIcon } from "../Icons";

export type Veh = { id: string; name: string; w: number; h: number; tag: string; best: string[]; luggage: string; comfort: string; group: string; ask: string[] };

/** "Garage": pick a category, see how it is used on international road journeys. */
export function Garage({ vehicles }: { vehicles: Veh[] }) {
  const [i, setI] = useState(1);
  const v = vehicles[i];
  return (
    <div className="overflow-hidden rounded-3xl bg-navy text-white">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative flex min-h-[260px] items-center justify-center bg-gradient-to-br from-ocean to-navy p-8">
          <div className="absolute inset-x-10 bottom-10 h-3 rounded-full bg-black/30 blur-md" aria-hidden="true" />
          <div key={v.id} className="veh-in relative h-40 w-full max-w-[420px] sm:h-56"><div className="rounded-xl bg-white/95 p-4"><Vehicle id={v.id} w={v.w} h={v.h} /></div></div>
        </div>
        <div className="p-6 sm:p-8" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">{v.tag}</p>
          <h3 className="mt-1 text-2xl font-bold">{v.name}</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div><dt className="font-semibold text-gold">Luggage</dt><dd className="text-white/80">{v.luggage}</dd></div>
            <div><dt className="font-semibold text-gold">Long-distance comfort</dt><dd className="text-white/80">{v.comfort}</dd></div>
            <div><dt className="font-semibold text-gold">Group suitability</dt><dd className="text-white/80">{v.group}</dd></div>
          </dl>
          <p className="mt-4 text-xs text-white/55">Capacity varies by vehicle. Eligibility for the crossing is confirmed before booking.</p>
        </div>
      </div>
      <div role="tablist" aria-label="Vehicle categories" className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-5">
        {vehicles.map((x, n) => (<button key={x.id} role="tab" aria-selected={i === n} onClick={() => setI(n)} className={`min-h-[56px] px-3 text-sm font-semibold transition-colors ${i === n ? "bg-gold text-navy" : "bg-navy text-white/80 hover:bg-ocean"}`}>{x.name}</button>))}
      </div>
      <div className="grid gap-4 bg-ocean/40 p-6 sm:grid-cols-2">
        <div><p className="text-sm font-semibold">Best for</p><ul className="mt-2 space-y-1.5 text-sm text-white/80">{v.best.map((b) => (<li key={b} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{b}</li>))}</ul></div>
        <div><p className="text-sm font-semibold">Tell us when you ask</p><ul className="mt-2 space-y-1.5 text-sm text-white/80">{v.ask.map((b) => (<li key={b} className="flex gap-2"><span className="text-gold">›</span>{b}</li>))}</ul></div>
      </div>
    </div>
  );
}

function Step({ label, value, set, min = 0 }: { label: string; value: number; set: (n: number) => void; min?: number }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-sm font-medium text-navy">{label}</span>
      <span className="flex items-center gap-3">
        <button type="button" aria-label={`Fewer ${label}`} onClick={() => set(Math.max(min, value - 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg hover:border-gold">−</button>
        <span className="w-6 text-center font-semibold tabular-nums">{value}</span>
        <button type="button" aria-label={`More ${label}`} onClick={() => set(Math.min(60, value + 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg hover:border-gold">+</button>
      </span>
    </div>
  );
}

/** Matches a group and journey to an indicative category, with the reasoning shown. */
export function Configurator() {
  const [pax, setPax] = useState(4); const [big, setBig] = useState(3); const [cab, setCab] = useState(2);
  const [len, setLen] = useState("Long distance"); const [who, setWho] = useState("Family");
  const load = big + cab / 2 + (len === "Long distance" ? 1 : 0);
  let rec = "Executive Sedan", why = "Small group, light load.";
  if (pax > 12 || load > 14) { rec = "Minibus or group vehicle"; why = "Group size or luggage volume is beyond a van."; }
  else if (pax > 6 || load > 8) { rec = "Premium Van"; why = "Many passengers or a lot of bags travel better together in one van."; }
  else if (pax > 4 || load > 5) { rec = "Large SUV"; why = "More seats and luggage space than a standard SUV."; }
  else if (pax > 3 || load > 3) { rec = "Premium SUV"; why = "Four or more travelers, or a heavier load, suit an SUV."; }
  const reasons = [`${pax} passenger${pax > 1 ? "s" : ""}`, `${big} large and ${cab} cabin bag${cab === 1 ? "" : "s"}`, len, who];
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-3">
        <Step label="Passengers" value={pax} set={setPax} min={1} /><Step label="Large bags" value={big} set={setBig} /><Step label="Cabin bags" value={cab} set={setCab} />
        <div className="grid grid-cols-2 gap-3">
          <label className="label">Journey<select className="field" value={len} onChange={(e) => setLen(e.target.value)}><option>Long distance</option><option>Short crossing</option></select></label>
          <label className="label">Travelers<select className="field" value={who} onChange={(e) => setWho(e.target.value)}>{["Family", "Business", "Group", "Pilgrims"].map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-white p-6 ring-1 ring-slate-200" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Indicative category</p>
        <p className="mt-1 text-2xl font-bold text-navy">{rec}</p>
        <p className="mt-2 text-sm text-muted">{why}</p>
        <p className="mt-3 text-xs text-muted">Based on: {reasons.join(" · ")}.</p>
        <Link href="#quote" className="btn-gold mt-4 self-start">Request This Vehicle</Link>
        <p className="mt-2 text-[11px] text-muted">A recommendation, not an availability promise. The final vehicle is confirmed with your booking.</p>
      </div>
    </div>
  );
}
