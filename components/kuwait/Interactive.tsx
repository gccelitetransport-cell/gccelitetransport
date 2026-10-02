"use client";
import { useEffect, useState } from "react";
import { ArrowIcon } from "../Icons";

const PATH = "M40 150 C 110 150 130 62 220 62 S 320 150 390 140";

export function HeroRoute() {
  const nodes = [
    { k: "Kuwait", x: 40, y: 150, t: "Pickup location", d: "Private pickup in Kuwait, planned for your group and luggage." },
    { k: "Border", x: 220, y: 62, t: "International border", d: "Departure and entry procedures apply here. Decisions belong to the authorities." },
    { k: "Saudi Arabia", x: 390, y: 140, t: "Final destination", d: "Drop-off at the confirmed Saudi destination." },
  ];
  const [active, setActive] = useState(1);
  const [motion, setMotion] = useState(true);
  useEffect(() => { setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
      <svg viewBox="0 0 440 200" className="h-auto w-full" role="img" aria-label="Illustrated route from Kuwait through an international border to Saudi Arabia">
        <path d={PATH} fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="3" strokeLinecap="round" />
        <path d={PATH} fill="none" stroke="#C9A14A" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 10" className={motion ? "road-anim" : ""} />
        {nodes.map((n, i) => (
          <g key={n.k} transform={`translate(${n.x} ${n.y})`}>
            {i === 1 ? <rect x="-9" y="-9" width="18" height="18" rx="3" fill="#C9A14A" transform="rotate(45)" /> : <circle r="9" fill={i === active ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" />}
            <text y={i === 1 ? -20 : 26} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">{n.k}</text>
          </g>
        ))}
        {motion && (
          <g>
            <rect x="-11" y="-6" width="22" height="12" rx="4" fill="#fff" />
            <rect x="-5" y="-9" width="11" height="5" rx="2" fill="#fff" />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={PATH} />
          </g>
        )}
      </svg>
      <div role="tablist" aria-label="Route stages" className="mt-3 grid grid-cols-3 gap-2">
        {nodes.map((n, i) => (
          <button key={n.k} role="tab" aria-selected={active === i} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
            className={`min-h-[44px] rounded-lg border px-2 text-xs font-semibold ${active === i ? "border-gold bg-gold/15 text-white" : "border-white/20 text-white/70"}`}>{n.k}</button>
        ))}
      </div>
      <div role="tabpanel" className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white">
        <p className="font-semibold">{nodes[active].t}</p>
        <p className="mt-1 text-white/75">{nodes[active].d}</p>
      </div>
      <p className="mt-2 text-[11px] text-white/50">Illustration only. It does not show real-time traffic or border status.</p>
    </div>
  );
}

export function RouteSelector() {
  const [dir, setDir] = useState<"ks" | "sk">("ks");
  const data = {
    ks: { title: "Kuwait → Saudi Arabia", items: [["Journey types", "Family trips, business travel, airport-connected journeys and group transfers into Saudi Arabia."], ["Route planning", "Kuwait pickup, Kuwait departure procedures, the border crossing, Saudi entry procedures and the Saudi destination."], ["Passenger requirements", "Passport and any visa or entry permission for Saudi Arabia. Requirements vary by nationality and status."], ["Vehicle selection", "Chosen from passengers, luggage and route. Eligibility is confirmed before booking."]] },
    sk: { title: "Saudi Arabia → Kuwait", items: [["Reverse journey", "Saudi pickup, Saudi exit procedures, the crossing and a Kuwait drop-off."], ["Border considerations", "Kuwait entry requirements apply to each passenger. Check them with the relevant authority."], ["Documentation", "Passport and any visa or residency documents that apply. Vehicle documents are reviewed for the route."], ["Vehicle planning", "Matched to the group and bags, with the driver arrangement confirmed in advance."]] },
  } as const;
  const d = data[dir];
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2" role="tablist" aria-label="Choose direction">
        {(["ks", "sk"] as const).map((k) => (
          <button key={k} role="tab" aria-selected={dir === k} onClick={() => setDir(k)}
            className={`min-h-[72px] rounded-2xl border-2 p-5 text-left transition-colors ${dir === k ? "border-gold bg-white shadow-md" : "border-slate-200 bg-white/60 hover:border-gold/60"}`}>
            <span className="text-xs font-semibold tracking-widest text-gold">{k === "ks" ? "KUWAIT → SAUDI ARABIA" : "SAUDI ARABIA → KUWAIT"}</span>
            <span className="mt-1 block text-lg font-semibold text-navy">{k === "ks" ? "Leaving Kuwait" : "Coming into Kuwait"}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h3 className="text-lg font-semibold text-navy">{d.title}</h3>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {d.items.map(([t, x]) => (<div key={t}><dt className="text-sm font-semibold text-navy">{t}</dt><dd className="mt-1 text-sm leading-relaxed text-muted">{x}</dd></div>))}
        </dl>
        <p className="mt-4 text-xs text-muted">Availability is confirmed per request.</p>
      </div>
    </div>
  );
}

function Counter({ label, value, set, min = 0, max = 60 }: { label: string; value: number; set: (n: number) => void; min?: number; max?: number }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-sm font-medium text-navy">{label}</span>
      <span className="flex items-center gap-3">
        <button type="button" aria-label={`Fewer ${label}`} onClick={() => set(Math.max(min, value - 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg text-navy hover:border-gold">−</button>
        <span className="w-6 text-center font-semibold tabular-nums" aria-live="polite">{value}</span>
        <button type="button" aria-label={`More ${label}`} onClick={() => set(Math.min(max, value + 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg text-navy hover:border-gold">+</button>
      </span>
    </div>
  );
}

export function LuggageCalc() {
  const [pax, setPax] = useState(2);
  const [large, setLarge] = useState(2);
  const [cabin, setCabin] = useState(2);
  const load = large + cabin / 2;
  let rec = "Sedan";
  if (pax > 12 || load > 14) rec = "Group vehicle / minibus";
  else if (pax > 6 || load > 8) rec = "Premium van";
  else if (pax > 4 || load > 5) rec = "Large SUV";
  else if (pax > 3 || load > 3) rec = "SUV / Premium SUV";
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-3">
        <Counter label="Passengers" value={pax} set={setPax} min={1} />
        <Counter label="Large bags" value={large} set={setLarge} />
        <Counter label="Cabin bags" value={cabin} set={setCabin} />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-navy p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Recommended vehicle category</p>
        <p className="mt-2 text-2xl font-bold" aria-live="polite">{rec}</p>
        <p className="mt-3 text-xs text-white/60">Indicative vehicle recommendation. Final vehicle confirmed with booking.</p>
      </div>
    </div>
  );
}

export function TripToggle({ from = "Kuwait", to = "Saudi Arabia" }: { from?: string; to?: string } = {}) {
  const [ret, setRet] = useState(false);
  return (
    <div>
      <div role="group" aria-label="Trip type" className="inline-grid grid-cols-2 rounded-xl bg-slate-200 p-1">
        {[false, true].map((r) => (
          <button key={String(r)} type="button" aria-pressed={ret === r} onClick={() => setRet(r)} className={`min-h-[44px] rounded-lg px-6 text-sm font-semibold ${ret === r ? "bg-navy text-white" : "text-muted"}`}>{r ? "RETURN" : "ONE WAY"}</button>
        ))}
      </div>
      <div className="mt-5 space-y-2" aria-live="polite">
        <div className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200"><span className="text-sm font-semibold text-navy">{from}</span><ArrowIcon className="h-4 w-4 animate-[slideR_1.6s_ease-in-out_infinite] text-gold" /><span className="text-sm font-semibold text-navy">{to}</span></div>
        <div className={`flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 transition-all duration-500 ${ret ? "translate-y-0 opacity-100" : "pointer-events-none h-0 -translate-y-2 overflow-hidden p-0 opacity-0 ring-0"}`}><span className="text-sm font-semibold text-navy">{to}</span><ArrowIcon className="h-4 w-4 animate-[slideR_1.6s_ease-in-out_infinite] text-gold" /><span className="text-sm font-semibold text-navy">{from}</span></div>
      </div>
      <p className="mt-3 text-sm text-muted">{ret ? "Give us the return date, time and pickup point when you request the quote. A scheduled return can be agreed in advance." : "Suited to passengers who continue independently after arriving."}</p>
    </div>
  );
}
