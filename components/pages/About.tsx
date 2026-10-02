"use client";
import { useState } from "react";
import { CheckIcon } from "../Icons";

const DO = ["Private road transportation across GCC borders", "Route-by-route planning of vehicle, driver arrangement and crossing", "Pre-booked journeys, one way or return", "A quote confirmed before you travel", "Selected regional routes, such as Jordan–Saudi Arabia"];
const DONT = ["Local taxi, city taxi or hourly drivers inside one country", "Domestic airport taxis", "Immigration, visa or customs services", "Guaranteed border clearance or crossing times", "Promises that one vehicle or driver crosses every border"];

export function WeAre() {
  const [on, setOn] = useState<"do" | "dont">("do");
  const list = on === "do" ? DO : DONT;
  return (
    <div>
      <div role="tablist" aria-label="What we do and do not do" className="inline-grid grid-cols-2 rounded-xl bg-slate-200 p-1">
        {([["do", "What we do"], ["dont", "What we do not do"]] as const).map(([k, t]) => (<button key={k} role="tab" aria-selected={on === k} onClick={() => setOn(k)} className={`min-h-[44px] rounded-lg px-5 text-sm font-semibold ${on === k ? "bg-navy text-white" : "text-muted"}`}>{t}</button>))}
      </div>
      <ul key={on} className="mt-5 space-y-3" aria-live="polite">
        {list.map((x, i) => (<li key={x} className="row-in flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-ink" style={{ animationDelay: `${i * 0.08}s` }}><span className={on === "do" ? "text-gold" : "text-muted"}>{on === "do" ? <CheckIcon /> : "✕"}</span>{x}</li>))}
      </ul>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 py-4" aria-label="Corridors we plan journeys on">
      <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold tracking-widest text-white/80">
        {row.map((t, i) => (<span key={i} className="flex items-center gap-10">{t}<span className="text-gold" aria-hidden="true">◆</span></span>))}
      </div>
    </div>
  );
}
