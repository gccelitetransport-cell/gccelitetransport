"use client";
import { useState } from "react";
import { CheckIcon } from "../Icons";

/* Saudi residents: quick self-check */
export function ResidentsCheck() {
  const Q = ["I hold a valid Saudi residency permit", "My passport is valid for the whole trip", "I have a valid exit/re-entry visa", "I checked the destination's entry rules for my nationality", "Each family member has their own documents"];
  const [on, setOn] = useState<boolean[]>(Q.map(() => false));
  const n = on.filter(Boolean).length;
  return (
    <div className="rounded-2xl bg-navy p-6 text-white">
      <p className="text-sm font-semibold">Before you leave Saudi Arabia <span className="font-normal text-white/60">· {n} of {Q.length}</span></p>
      <div className="mt-3 h-1.5 rounded bg-white/15"><div className="h-1.5 rounded bg-gold transition-all duration-500" style={{ width: `${(n / Q.length) * 100}%` }} /></div>
      <ul className="mt-4 space-y-2">{Q.map((q, i) => (<li key={q}><label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-white/15 px-3 text-sm"><input type="checkbox" className="h-5 w-5 accent-[#C9A14A]" checked={on[i]} onChange={() => setOn(on.map((x, j) => (j === i ? !x : x)))} />{q}</label></li>))}</ul>
      <p className="mt-3 text-[11px] text-white/55">{n === Q.length ? "All checked. Confirm details on the official services before you travel." : "A personal checklist only. It is kept on this page and nothing is sent."}</p>
    </div>
  );
}

/* Citizens / residents / visitors comparator */
export function StatusCompare() {
  const T = {
    "GCC citizen": ["National ID card is generally accepted between GCC states", "Some states also require a valid passport to be held", "Jordan applies its own rules"],
    "GCC resident": ["Passport plus residency permit", "Entry rules of the destination for your nationality", "Saudi residents: exit/re-entry visa"],
    Visitor: ["Passport valid for the trip", "A visa or entry permission for every country", "Check land entry and number of entries on each visa"],
  } as const;
  const keys = Object.keys(T) as (keyof typeof T)[];
  const [k, setK] = useState<keyof typeof T>("GCC resident");
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <div role="tablist" aria-label="Traveler status" className="grid grid-cols-3 gap-2">{keys.map((x) => (<button key={x} role="tab" aria-selected={k === x} onClick={() => setK(x)} className={`min-h-[48px] rounded-xl px-2 text-sm font-semibold ${k === x ? "bg-navy text-white" : "bg-paper text-muted"}`}>{x}</button>))}</div>
      <ul key={k} role="tabpanel" className="mt-4 space-y-2" aria-live="polite">{T[k].map((t, i) => (<li key={t} className="row-in flex gap-3 rounded-xl border border-slate-200 p-3 text-sm text-ink" style={{ animationDelay: `${i * 0.08}s` }}><span className="text-gold"><CheckIcon /></span>{t}</li>))}</ul>
    </div>
  );
}

/* Children packing checklist with per-child count */
export function ChildrenKit() {
  const [kids, setKids] = useState(2);
  const items = [`${kids} child passport${kids > 1 ? "s" : ""} or accepted IDs`, "Visas or entry permissions for each child, if needed", "Consent documents if a parent is not traveling", `Child seats for ${kids} (tell us the ages)`, "Snacks, water and activities for border waiting", "Stroller and bags counted in the luggage"];
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <div className="flex items-center justify-between rounded-xl bg-paper px-4 py-3"><span className="text-sm font-semibold text-navy">Children traveling</span>
        <span className="flex items-center gap-3"><button type="button" aria-label="Fewer children" onClick={() => setKids(Math.max(1, kids - 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg">−</button><span className="w-5 text-center font-semibold tabular-nums">{kids}</span><button type="button" aria-label="More children" onClick={() => setKids(Math.min(10, kids + 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg">+</button></span></div>
      <ul className="mt-4 space-y-2" aria-live="polite">{items.map((t) => (<li key={t} className="flex gap-3 text-sm text-ink"><span className="text-gold"><CheckIcon /></span>{t}</li>))}</ul>
    </div>
  );
}

/* Drive yourself vs private transfer */
export function DriveVsTransfer() {
  const rows: [string, string, string][] = [
    ["Vehicle documents", "Yours to prepare", "Handled by the operator"],
    ["Insurance for the destination", "Yours to buy", "Operator's responsibility"],
    ["Driving the whole route", "You or someone in your group", "A professional driver"],
    ["Same vehicle across the border", "Depends on your car's eligibility", "Depends on route and rules, confirmed before booking"],
    ["Passport, visa, entry", "Yours", "Still yours"],
    ["Cost", "Usually lower in direct terms", "Higher, quoted per route"],
  ];
  const [hl, setHl] = useState<"self" | "transfer" | null>(null);
  return (
    <div>
      <div className="mb-3 flex gap-2">{([["self", "Highlight: drive yourself"], ["transfer", "Highlight: private transfer"]] as const).map(([k, t]) => (<button key={k} type="button" aria-pressed={hl === k} onClick={() => setHl(hl === k ? null : k)} className={`min-h-[44px] rounded-lg border px-3 text-sm font-semibold ${hl === k ? "border-gold bg-gold/10 text-navy" : "border-slate-300 text-muted"}`}>{t}</button>))}</div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-navy text-white"><tr><th scope="col" className="px-4 py-3">Question</th><th scope="col" className={`px-4 py-3 ${hl === "self" ? "bg-gold text-navy" : ""}`}>Drive yourself</th><th scope="col" className={`px-4 py-3 ${hl === "transfer" ? "bg-gold text-navy" : ""}`}>Private transfer</th></tr></thead>
          <tbody className="divide-y divide-slate-200">{rows.map(([q, a, b]) => (<tr key={q}><th scope="row" className="px-4 py-3 font-semibold text-navy">{q}</th><td className={`px-4 py-3 ${hl === "self" ? "bg-gold/10" : ""}`}>{a}</td><td className={`px-4 py-3 ${hl === "transfer" ? "bg-gold/10" : ""}`}>{b}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  );
}
