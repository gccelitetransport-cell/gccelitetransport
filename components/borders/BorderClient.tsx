"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Vehicle } from "../Art";
import { ArrowIcon, CheckIcon } from "../Icons";
import { BAHRAIN, CORRIDORS, COUNTRIES, LABELS, SHAPES, pairInfo, type Corridor } from "@/lib/borders";

/* ---------- Hero map ---------- */
export function HeroMap() {
  const [active, setActive] = useState<Corridor>(CORRIDORS[0]);
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 150); return () => clearTimeout(t); }, []);
  const pick = (c: Corridor, scroll = false) => {
    setActive(c);
    if (scroll) document.getElementById(`corr-${c.id}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  const pt = (n: string): [number, number] => (n === "Bahrain" ? BAHRAIN : LABELS[n]);
  return (
    <div>
      <svg viewBox="0 0 700 450" className="h-auto w-full" role="group" aria-label="Simplified map of GCC land border corridors">
        {Object.entries(SHAPES).map(([n, d]) => (<path key={n} d={d} fill="#123B5D" fillOpacity=".75" stroke="#C9A14A" strokeOpacity=".35" strokeWidth="1" />))}
        <circle cx={BAHRAIN[0]} cy={BAHRAIN[1]} r="4.5" fill="#123B5D" stroke="#C9A14A" strokeOpacity=".5" />
        {Object.entries(LABELS).map(([n, [x, y]]) => (<text key={n} x={x} y={y} textAnchor="middle" fill="#fff" fillOpacity=".75" fontSize="12" fontFamily="sans-serif">{n}</text>))}
        {CORRIDORS.map((c, i) => {
          const a = pt(c.a), b = pt(c.b), on = active.id === c.id;
          const d = `M${a[0]} ${a[1] + 6} L${c.node[0]} ${c.node[1]} L${b[0]} ${b[1] + 6}`;
          return (
            <g key={c.id} role="button" tabIndex={0} aria-label={`${c.name}, ${c.crossing}`} aria-pressed={on} style={{ cursor: "pointer", outline: "none" }}
              onMouseEnter={() => setActive(c)} onFocus={() => setActive(c)} onClick={() => pick(c, true)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(c, true); } }}>
              <path d={d} stroke="transparent" strokeWidth="16" fill="none" />
              <path d={d} fill="none" stroke="#C9A14A" strokeWidth={on ? 3 : 1.6} strokeOpacity={on ? 1 : 0.7} strokeLinecap="round" pathLength={1}
                className={`draw ${ready ? "on" : ""}`} style={{ transitionDelay: `${0.4 + i * 0.25}s` }} />
              <circle cx={c.node[0]} cy={c.node[1]} r={on ? 8 : 5} fill={on ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2" />
            </g>
          );
        })}
      </svg>
      <div className="mt-3 rounded-xl bg-white/10 p-4 text-white" aria-live="polite">
        <p className="text-sm font-semibold">{active.name}</p>
        <p className="text-xs text-gold">{active.crossing}</p>
        <Link href={active.guide} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">View Guide<ArrowIcon /></Link>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Select a border corridor">
        {CORRIDORS.map((c) => (<li key={c.id}><button type="button" onClick={() => pick(c)} aria-pressed={active.id === c.id} className={`min-h-[40px] rounded-full border px-3 text-xs font-semibold ${active.id === c.id ? "border-gold bg-gold/20 text-white" : "border-white/25 text-white/75"}`}>{c.a} ↔ {c.b}</button></li>))}
      </ul>
      <p className="mt-2 text-[11px] text-white/50">Simplified, not to scale. Corridors shown are not guaranteed routes.</p>
    </div>
  );
}

/* ---------- Route finder ---------- */
const WHO = ["Individual", "Family", "Business", "Group"];
const PREP: Record<string, string> = {
  Individual: "Passport validity, visa or entry permission, and the vehicle arrangement.",
  Family: "Passports for every traveler, child seats, luggage and comfort stops.",
  Business: "Document preparation, timing buffers and a planned return.",
  Group: "Passenger count, luggage volume, vehicle size and pickup coordination.",
};
export function RouteFinder() {
  const [from, setFrom] = useState(""); const [to, setTo] = useState(""); const [dir, setDir] = useState("One Way"); const [who, setWho] = useState("Individual"); const [go, setGo] = useState(false);
  const info = go ? pairInfo(from, to) : null;
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <form onSubmit={(e) => { e.preventDefault(); setGo(true); }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <label className="label">Starting Country<select required className="field" value={from} onChange={(e) => { setFrom(e.target.value); setGo(false); }}><option value="">Select</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">Destination Country<select required className="field" value={to} onChange={(e) => { setTo(e.target.value); setGo(false); }}><option value="">Select</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">Journey Direction<select className="field" value={dir} onChange={(e) => setDir(e.target.value)}>{["One Way", "Return", "Multi-Country"].map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">Passenger Type<select className="field" value={who} onChange={(e) => setWho(e.target.value)}>{WHO.map((c) => <option key={c}>{c}</option>)}</select></label>
        <div className="flex items-end"><button type="submit" className="btn-navy w-full">Explore Border Guide</button></div>
      </form>
      {info && (
        <div className="mt-5 rounded-xl bg-paper p-5" aria-live="polite">
          {info.kind === "same" && <p className="text-sm text-ink">Choose two different countries to see the border corridor.</p>}
          {info.kind === "direct" && (<>
            <p className="text-xs font-semibold text-gold">Relevant border corridor</p>
            <p className="mt-1 text-lg font-semibold text-navy">{info.c.name} · {info.c.crossing}</p>
            <p className="mt-2 text-sm text-muted">{info.c.summary}</p>
            <p className="mt-2 text-sm text-ink"><span className="font-semibold">Key preparation ({who}, {dir}):</span> {PREP[who]}</p>
            <p className="mt-2 text-xs text-muted">The applicable crossing can depend on your exact origin, destination, vehicle and current border operations.</p>
            <Link href={info.c.guide} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">Read the border guide<ArrowIcon /></Link>
          </>)}
          {info.kind === "via" && (<>
            <p className="text-xs font-semibold text-gold">Multi-country road journey</p>
            <p className="mt-1 text-lg font-semibold text-navy">{from} and {to} have no direct land border</p>
            <p className="mt-2 text-sm text-muted">A road journey between them would normally pass through {info.via}, with a separate border, vehicle arrangement and set of passenger requirements for each crossing.</p>
            <p className="mt-2 text-xs text-muted">The applicable crossings can depend on your exact origin, destination, vehicle and current border operations.</p>
          </>)}
        </div>
      )}
    </div>
  );
}

/* ---------- Generic expandable list (timeline, docs, factors, steps) ---------- */
export function ExpandList({ items, numbered = false, cols = "" }: { items: { t: string; d: string }[]; numbered?: boolean; cols?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ol className={`grid gap-3 ${cols}`}>
      {items.map((it, i) => (
        <li key={it.t}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all duration-300 ${open === i ? "border-gold bg-white shadow-md" : "border-slate-200 bg-white/70 hover:border-gold/60"}`}>
            <span className="flex items-center gap-3">
              {numbered && <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>}
              <span className="font-semibold text-navy">{it.t}</span>
            </span>
            {open === i && <span className="mt-2 block text-sm leading-relaxed text-muted">{it.d}</span>}
          </button>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Journey simulator ---------- */
const LUG = ["Light", "Moderate", "Heavy"]; const VEH = ["Sedan", "SUV", "Large SUV", "Van", "Not sure yet"];
export function Simulator() {
  const [step, setStep] = useState(0);
  const [v, setV] = useState({ from: "", to: "", who: "Family", lug: "Moderate", veh: "Not sure yet", trip: "One way" });
  const set = (k: string, val: string) => setV({ ...v, [k]: val });
  const steps = ["Where are you starting?", "Where are you going?", "Who is traveling?", "How much luggage?", "What type of vehicle?", "One-way or return?"];
  const done = step >= 6;
  const info = pairInfo(v.from, v.to);
  const Opt = ({ list, k }: { list: string[]; k: keyof typeof v }) => (
    <div className="grid gap-2 sm:grid-cols-2">{list.map((o) => (<button key={o} type="button" onClick={() => set(k, o)} aria-pressed={v[k] === o} className={`min-h-[48px] rounded-xl border-2 px-4 text-left text-sm font-semibold ${v[k] === o ? "border-gold bg-gold/10 text-navy" : "border-slate-200 text-muted hover:border-gold/60"}`}>{o}</button>))}</div>
  );
  const ok = step === 0 ? !!v.from : step === 1 ? !!v.to && v.to !== v.from : true;
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      {!done ? (<>
        <p className="text-xs font-semibold tracking-widest text-gold">STEP {step + 1} OF 6</p>
        <div className="mt-1 h-1 rounded bg-slate-200"><div className="h-1 rounded bg-gold transition-all duration-500" style={{ width: `${((step + 1) / 6) * 100}%` }} /></div>
        <h3 className="mt-4 text-xl font-semibold text-navy">{steps[step]}</h3>
        <div className="mt-4">
          {step === 0 && <Opt list={COUNTRIES} k="from" />}
          {step === 1 && <Opt list={COUNTRIES.filter((c) => c !== v.from)} k="to" />}
          {step === 2 && <Opt list={WHO} k="who" />}
          {step === 3 && <Opt list={LUG} k="lug" />}
          {step === 4 && <Opt list={VEH} k="veh" />}
          {step === 5 && <Opt list={["One way", "Return"]} k="trip" />}
        </div>
        <div className="mt-5 flex gap-3">
          {step > 0 && <button type="button" className="btn-outline" onClick={() => setStep(step - 1)}>Back</button>}
          <button type="button" disabled={!ok} className="btn-navy disabled:opacity-40" onClick={() => setStep(step + 1)}>{step === 5 ? "See my profile" : "Next"}</button>
        </div>
      </>) : (
        <div aria-live="polite">
          <h3 className="text-xl font-semibold text-navy">Your Cross-Border Journey Profile</h3>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-semibold text-navy">Route</dt><dd className="text-muted">{v.from} → {v.to} ({v.trip.toLowerCase()})</dd></div>
            <div><dt className="font-semibold text-navy">Likely border corridor</dt><dd className="text-muted">{info.kind === "direct" ? `${info.c.crossing}. The applicable crossing depends on your exact origin, destination and current operations.` : info.kind === "via" ? `No direct land border. The journey would pass through ${info.via}.` : "-"}</dd></div>
            <div><dt className="font-semibold text-navy">Journey type</dt><dd className="text-muted">{info.kind === "via" ? "Multi-country road journey" : "Direct cross-border road journey"}, {v.trip.toLowerCase()}</dd></div>
            <div><dt className="font-semibold text-navy">Passenger considerations</dt><dd className="text-muted">{v.who}: {PREP[v.who]}</dd></div>
            <div><dt className="font-semibold text-navy">Luggage considerations</dt><dd className="text-muted">{v.lug} luggage. Bag count and size decide the vehicle.</dd></div>
            <div><dt className="font-semibold text-navy">Vehicle considerations</dt><dd className="text-muted">{v.veh === "Not sure yet" ? "We recommend a category from your passengers and bags." : `${v.veh} preferred.`} Eligibility is confirmed for the route.</dd></div>
            <div className="sm:col-span-2"><dt className="font-semibold text-navy">Document checklist</dt><dd className="text-muted">Passport, visa or entry permission where applicable, residency documents where relevant, and vehicle documentation reviewed for the route.</dd></div>
            {info.kind === "direct" && <div className="sm:col-span-2"><dt className="font-semibold text-navy">Relevant guide</dt><dd><Link href={info.c.guide} className="text-ocean underline underline-offset-4 hover:text-gold">{info.c.name} border guide</Link></dd></div>}
          </dl>
          <p className="mt-4 text-xs text-muted">This profile does not predict border processing time, clearance or approval.</p>
          <div className="mt-4 flex flex-wrap gap-3"><a href="#quote" className="btn-gold">Request Route-Specific Quote</a><button type="button" className="btn-outline" onClick={() => setStep(0)}>Start again</button></div>
        </div>
      )}
    </div>
  );
}

/* ---------- Multi-country builder ---------- */
export function MultiCountry() {
  const [seq, setSeq] = useState(["Oman", "UAE", "Saudi Arabia", "Bahrain"]);
  const upd = (i: number, val: string) => setSeq(seq.map((s, j) => (j === i ? val : s)));
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <div className="grid gap-3 sm:grid-cols-4">
        {seq.map((s, i) => (<label key={i} className="label">{i === 0 ? "Origin" : `Country ${i}`}<select className="field" value={s} onChange={(e) => upd(i, e.target.value)}>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>))}
      </div>
      <ol className="mt-6 space-y-0">
        {seq.map((s, i) => {
          const next = seq[i + 1]; const info = next ? pairInfo(s, next) : null;
          return (
            <li key={i}>
              <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{i + 1}</span><span className="font-semibold text-navy">{s}</span></div>
              {info && (
                <div className="ml-4 flex gap-3 border-l-2 border-gold/60 py-3 pl-6 text-sm text-muted">
                  <span className="mt-1 h-3 w-3 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  <span>{info.kind === "direct" ? <>Border {i + 1}: {info.c.crossing}</> : info.kind === "via" ? <>No direct land border between {s} and {next}. Add the transit country ({info.via}) as its own step.</> : <>Choose a different country.</>}</span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-muted">Multi-country journeys require separate consideration of each border, vehicle arrangement and passenger requirements. One authorization does not automatically cover the whole itinerary.</p>
    </div>
  );
}

/* ---------- Luggage visualizer ---------- */
function Counter({ label, value, set, min = 0 }: { label: string; value: number; set: (n: number) => void; min?: number }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-sm font-medium text-navy">{label}</span>
      <span className="flex items-center gap-3">
        <button type="button" aria-label={`Fewer ${label}`} onClick={() => set(Math.max(min, value - 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg text-navy hover:border-gold">−</button>
        <span className="w-6 text-center font-semibold tabular-nums">{value}</span>
        <button type="button" aria-label={`More ${label}`} onClick={() => set(Math.min(60, value + 1))} className="h-10 w-10 rounded-full border border-slate-300 text-lg text-navy hover:border-gold">+</button>
      </span>
    </div>
  );
}
export function LuggageViz() {
  const [pax, setPax] = useState(3); const [big, setBig] = useState(2); const [cab, setCab] = useState(2); const [eq, setEq] = useState(0);
  const load = big + cab / 2 + eq * 1.5;
  const id = pax > 12 || load > 14 ? "bus" : pax > 6 || load > 8 ? "van" : pax > 4 || load > 5 ? "lsuv" : pax > 3 || load > 3 ? "suv" : "sedan";
  const names: Record<string, string> = { sedan: "Sedan", suv: "SUV / Premium SUV", lsuv: "Large SUV", van: "Premium van", bus: "Group vehicle / minibus" };
  const f = FLEETDIM[id];
  const tight = load > (id === "sedan" ? 2 : id === "suv" ? 4 : id === "lsuv" ? 6 : 10);
  const label = id === "bus" || id === "van" ? "Larger Vehicle Recommended" : tight ? "Review Vehicle Size" : "Comfortable";
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-3"><Counter label="Passengers" value={pax} set={setPax} min={1} /><Counter label="Large bags" value={big} set={setBig} /><Counter label="Cabin bags" value={cab} set={setCab} /><Counter label="Special equipment" value={eq} set={setEq} /></div>
      <div className="rounded-2xl bg-navy p-6 text-white" aria-live="polite">
        <div className="mx-auto h-24 w-full max-w-[280px] bg-white/95 rounded-xl p-2"><Vehicle id={id} w={f[0]} h={f[1]} /></div>
        <p className="mt-3 text-center text-lg font-bold">{names[id]}</p>
        <p className="text-center text-sm font-semibold text-gold">{label}</p>
        <p className="mt-2 text-center text-[11px] text-white/55">Indicative only. Exact luggage capacity varies by vehicle and is confirmed with the booking.</p>
      </div>
    </div>
  );
}
const FLEETDIM: Record<string, [number, number]> = { sedan: [300, 74], suv: [300, 92], lsuv: [320, 98], van: [320, 108], bus: [360, 112] };

/* ---------- Checklist ---------- */
const CHECK = ["Confirm passport validity", "Check entry requirements", "Check visa/residency requirements", "Confirm vehicle documentation", "Confirm driver authorization", "Check insurance requirements", "Confirm route and border crossing", "Confirm luggage", "Confirm pickup details", "Confirm return journey if applicable"];
export function Checklist() {
  const [on, setOn] = useState<boolean[]>(CHECK.map(() => false));
  const n = on.filter(Boolean).length;
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <p className="text-sm font-semibold text-navy" aria-live="polite">{n} of {CHECK.length} done <span className="font-normal text-muted">· kept only on this page, nothing is sent</span></p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {CHECK.map((c, i) => (
          <li key={c}><label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 text-sm text-ink hover:border-gold/60">
            <input type="checkbox" className="h-5 w-5 accent-[#C9A14A]" checked={on[i]} onChange={() => setOn(on.map((x, j) => (j === i ? !x : x)))} />{c}</label></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Directory ---------- */
const NEEDS = ["Documents", "Vehicle requirements", "Border process", "Family travel", "Business travel", "Group travel", "Multi-country road travel"];
export function Directory() {
  const [country, setCountry] = useState("All"); const [journey, setJourney] = useState("All"); const [need, setNeed] = useState("All");
  const list = CORRIDORS.filter((c) => (country === "All" || c.a === country || c.b === country) && (journey === "All" || c.id === journey) && (need === "All" || c.needs.includes(need)));
  const Sel = ({ label, value, set, opts }: { label: string; value: string; set: (v: string) => void; opts: [string, string][] }) => (
    <label className="label">{label}<select className="field" value={value} onChange={(e) => set(e.target.value)}><option value="All">All</option>{opts.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
  );
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Sel label="By country" value={country} set={setCountry} opts={COUNTRIES.map((c) => [c, c])} />
        <Sel label="By journey" value={journey} set={setJourney} opts={CORRIDORS.map((c) => [c.id, c.name])} />
        <Sel label="By need" value={need} set={setNeed} opts={NEEDS.map((c) => [c, c])} />
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((c) => (
          <li key={c.id} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-navy">{c.name}</p><p className="text-xs font-medium text-gold">{c.crossing}</p>
            <p className="mt-2 text-sm text-muted">{c.summary}</p>
            <Link href={c.guide} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">Read Border Guide<ArrowIcon /></Link>
          </li>
        ))}
        {list.length === 0 && <li className="text-sm text-muted sm:col-span-3">No corridor matches those filters. Try widening them.</li>}
      </ul>
    </div>
  );
}
export { CheckIcon };
