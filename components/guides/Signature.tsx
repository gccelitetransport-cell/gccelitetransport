"use client";
import { useState } from "react";
import { CheckIcon } from "../Icons";

/* ---- shared direction toggle + step list ---- */
export function DirectionSteps({ a, b, ab, ba }: { a: string; b: string; ab: string[]; ba: string[] }) {
  const [rev, setRev] = useState(false);
  const steps = rev ? ba : ab;
  return (
    <div>
      <div role="group" aria-label="Direction" className="inline-grid grid-cols-2 rounded-xl bg-slate-200 p-1">
        {[false, true].map((r) => (<button key={String(r)} type="button" aria-pressed={rev === r} onClick={() => setRev(r)} className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold ${rev === r ? "bg-navy text-white" : "text-muted"}`}>{r ? `${b} → ${a}` : `${a} → ${b}`}</button>))}
      </div>
      <ol key={String(rev)} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {steps.map((s, i) => (<li key={s} className="row-in flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-ink" style={{ animationDelay: `${i * 0.07}s` }}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{i + 1}</span>{s}</li>))}
      </ol>
      <p className="mt-3 text-xs text-muted">General sequence. The exact order can vary with current procedures, passenger status and vehicle.</p>
    </div>
  );
}

/* ---- Saudi–Bahrain: causeway stations ---- */
const STATIONS = [
  { k: "Saudi shore", d: "The causeway starts near Al Khobar. Toll payment happens on the approach, and KFCA offers electronic payment options." },
  { k: "Over the water", d: "The road runs over the Gulf toward the border island." },
  { k: "Border island", d: "Both countries' passport and customs checks take place on an artificial island roughly midway." },
  { k: "Bahrain shore", d: "After the checks, the causeway continues to Bahrain's main island." },
];
export function Causeway() {
  const [i, setI] = useState(2);
  return (
    <div className="rounded-2xl bg-navy p-5 text-white sm:p-8">
      <svg viewBox="0 0 600 120" className="h-auto w-full" role="img" aria-label="Diagram of the King Fahd Causeway with the border island in the middle">
        <rect x="0" y="70" width="600" height="50" fill="#123B5D" />
        <path d="M20 70 H580" stroke="#C9A14A" strokeWidth="4" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (<rect key={n} x={60 + n * 66} y="72" width="4" height="22" fill="#C9A14A" opacity=".5" />))}
        <ellipse cx="300" cy="72" rx="48" ry="12" fill="#C9A14A" opacity=".35" />
        {[20, 170, 300, 580].map((x, n) => (<g key={n} onClick={() => setI(n)} style={{ cursor: "pointer" }}><circle cx={x} cy="60" r={i === n ? 10 : 7} fill={i === n ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" /></g>))}
      </svg>
      <div role="tablist" aria-label="Causeway stations" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STATIONS.map((s, n) => (<button key={s.k} role="tab" aria-selected={i === n} onClick={() => setI(n)} className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold ${i === n ? "border-gold bg-gold/20" : "border-white/20 text-white/75"}`}>{s.k}</button>))}
      </div>
      <p role="tabpanel" className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white/85" aria-live="polite">{STATIONS[i].d}</p>
    </div>
  );
}

/* ---- Qatar–Saudi: one gate, two names ---- */
export function Gate() {
  const [side, setSide] = useState<"qa" | "sa">("qa");
  const L = { qa: ["Abu Samra", "Qatari side", "Qatar's departure or entry procedures, run by Qatar's Ministry of Interior and Customs."], sa: ["Salwa", "Saudi side", "Saudi Arabia's departure or entry procedures, run by the Saudi authorities."] } as const;
  return (
    <div className="grid overflow-hidden rounded-2xl bg-navy text-white sm:grid-cols-2">
      {(["qa", "sa"] as const).map((k) => (
        <button key={k} type="button" aria-pressed={side === k} onClick={() => setSide(k)} className={`min-h-[160px] p-6 text-left transition-colors ${side === k ? "bg-ocean" : "bg-navy hover:bg-ocean/50"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">{L[k][1]}</span>
          <span className="mt-1 block text-3xl font-bold">{L[k][0]}</span>
          {side === k && <span className="mt-3 block text-sm text-white/80">{L[k][2]}</span>}
        </button>
      ))}
      <p className="border-t border-white/10 p-4 text-xs text-white/60 sm:col-span-2">One crossing, named differently on each side. Select a side.</p>
    </div>
  );
}

/* ---- UAE–Saudi: two posts on a long road ---- */
export function Post() {
  const [focus, setFocus] = useState<"ae" | "sa">("ae");
  return (
    <div className="rounded-2xl bg-navy p-5 text-white sm:p-8">
      <svg viewBox="0 0 600 110" className="h-auto w-full" role="img" aria-label="Long road from the UAE to Saudi Arabia with Al Ghuwaifat and Al Batha posts at the border">
        <path d="M10 70 H590" stroke="#fff" strokeOpacity=".3" strokeWidth="10" strokeLinecap="round" />
        <path d="M10 70 H590" stroke="#C9A14A" strokeWidth="2" strokeDasharray="10 10" className="road-anim" />
        <text x="10" y="100" fill="#fff" fillOpacity=".6" fontSize="12" fontFamily="sans-serif">Abu Dhabi emirate</text>
        <text x="590" y="100" textAnchor="end" fill="#fff" fillOpacity=".6" fontSize="12" fontFamily="sans-serif">Eastern Province, Saudi Arabia</text>
        {[["ae", 270, "Al Ghuwaifat"], ["sa", 330, "Al Batha"]].map(([k, x, n]) => (<g key={k as string} onClick={() => setFocus(k as "ae" | "sa")} style={{ cursor: "pointer" }}><rect x={(x as number) - 6} y="30" width="12" height="40" fill={focus === k ? "#C9A14A" : "#fff"} /><text x={x as number} y="22" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" fontFamily="sans-serif">{n}</text></g>))}
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {([["ae", "Al Ghuwaifat · UAE"], ["sa", "Al Batha · Saudi Arabia"]] as const).map(([k, t]) => (<button key={k} type="button" aria-pressed={focus === k} onClick={() => setFocus(k)} className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold ${focus === k ? "border-gold bg-gold/20" : "border-white/20 text-white/75"}`}>{t}</button>))}
      </div>
      <p className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white/85" aria-live="polite">{focus === "ae" ? "The UAE post, at the far western edge of Abu Dhabi emirate. UAE departure or entry procedures happen here." : "The Saudi post, in the Eastern Province. Saudi departure or entry procedures happen here, and the road continues toward Saudi cities and Qatar."}</p>
    </div>
  );
}

/* ---- Oman–UAE: crossing chooser ---- */
const AREAS: [string, string, string][] = [
  ["Dubai or Sharjah", "Hatta – Al Wajajah", "Commonly used toward Muscat."],
  ["Al Ain", "Al Ain-area crossings toward Al Buraimi", "Some Al Ain-area crossings have been restricted to GCC citizens. Check which you can use."],
  ["Kalba or the east coast", "Khatmat Malaha", "Near the coast, toward the Batinah region of Oman."],
  ["Ras Al Khaimah", "Musandam crossings", "For trips into the Musandam peninsula."],
  ["Muscat or the Batinah coast", "Al Wajajah (toward Hatta) or Khatmat Malaha", "Depends on where in the UAE you are heading."],
];
export function Chooser() {
  const [i, setI] = useState(0);
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:grid-cols-[1fr_1.2fr]">
      <label className="label">Starting area<select className="field" value={i} onChange={(e) => setI(Number(e.target.value))}>{AREAS.map((a, n) => <option key={a[0]} value={n}>{a[0]}</option>)}</select></label>
      <div className="rounded-xl bg-navy p-5 text-white" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Crossing often considered</p>
        <p className="mt-1 text-xl font-bold">{AREAS[i][1]}</p>
        <p className="mt-2 text-sm text-white/80">{AREAS[i][2]}</p>
        <p className="mt-3 text-[11px] text-white/55">Indicative only. Access depends on nationality, and the crossing for a booking is confirmed against current rules.</p>
      </div>
    </div>
  );
}

/* ---- Kuwait–Saudi: two crossings compared ---- */
export function Pair() {
  const [i, setI] = useState(0);
  const C = [
    { n: "Nuwaiseeb – Al Khafji", where: "Near the coast", toward: "The Eastern Province: Al Khafji, Dammam, Al Khobar" },
    { n: "Salmi – Al Ruqi", where: "Inland", toward: "Routes heading inland into Saudi Arabia" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {C.map((c, n) => (
        <button key={c.n} type="button" aria-pressed={i === n} onClick={() => setI(n)} className={`rounded-2xl border-2 p-6 text-left transition-all ${i === n ? "border-gold bg-white shadow-md" : "border-slate-200 bg-white/70"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">{c.where}</span>
          <span className="mt-1 block text-xl font-bold text-navy">{c.n}</span>
          <span className="mt-2 block text-sm text-muted">Toward: {c.toward}</span>
        </button>
      ))}
      <p className="text-xs text-muted sm:col-span-2">Abdali is Kuwait's crossing with Iraq, not Saudi Arabia. The crossing for your trip is confirmed by route.</p>
    </div>
  );
}

/* ---- Oman–Saudi: desert road planner ---- */
const PREP = ["Full fuel before the desert stretch", "Water and food for everyone", "Planned rest stops", "Vehicle checked: tyres, cooling, spare", "Departure time agreed", "Documents for both borders within reach"];
export function Desert() {
  const [on, setOn] = useState<boolean[]>(PREP.map(() => false));
  const done = on.filter(Boolean).length;
  return (
    <div className="overflow-hidden rounded-2xl bg-navy text-white">
      <svg viewBox="0 0 600 90" className="h-auto w-full" role="img" aria-label="Desert road from Ibri in Oman across the border to Al-Ahsa in Saudi Arabia">
        <path d="M0 70 Q150 40 300 60 T600 50 V90 H0Z" fill="#5a4535" opacity=".6" />
        <path d="M20 60 H580" stroke="#C9A14A" strokeWidth="3" strokeDasharray="8 8" className="road-anim" />
        <text x="20" y="40" fill="#fff" fontSize="12" fontWeight="600" fontFamily="sans-serif">Ibri</text>
        <rect x="155" y="44" width="10" height="24" fill="#fff" /><text x="160" y="36" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif">Border</text>
        <text x="580" y="40" textAnchor="end" fill="#fff" fontSize="12" fontWeight="600" fontFamily="sans-serif">Al-Ahsa</text>
      </svg>
      <div className="p-5">
        <p className="text-sm font-semibold">Remote-route checklist <span className="font-normal text-white/60">({done} of {PREP.length})</span></p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">{PREP.map((p, n) => (<li key={p}><label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-white/15 px-3 text-sm"><input type="checkbox" className="h-5 w-5 accent-[#C9A14A]" checked={on[n]} onChange={() => setOn(on.map((x, j) => (j === n ? !x : x)))} />{p}</label></li>))}</ul>
        <p className="mt-2 text-[11px] text-white/50">Kept only on this page. Nothing is sent.</p>
      </div>
    </div>
  );
}
export { CheckIcon };
