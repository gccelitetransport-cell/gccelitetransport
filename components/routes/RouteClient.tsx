"use client";
import { useEffect, useMemo, useState } from "react";
import { BAHRAIN, SHAPES, px } from "@/lib/borders";
import type { Route } from "@/lib/routes";
import { Vehicle } from "../Art";

/* Route hero: cropped simplified map, origin → border node → destination, moving vehicle. Variant changes decoration. */
export function RouteHero({ r }: { r: Route }) {
  const [motion, setMotion] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => { setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t); }, []);
  const a = px(...r.from.ll), b = px(...r.to.ll), n = px(...r.borderNode);
  const { vb, d } = useMemo(() => {
    const xs = [a[0], b[0], n[0]], ys = [a[1], b[1], n[1]];
    const pad = r.variant === "causeway" ? 40 : 90;
    const x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad, w = Math.max(...xs) - Math.min(...xs) + pad * 2, h = Math.max(...ys) - Math.min(...ys) + pad * 2;
    const W = Math.max(w, h * 1.5), H = W / 1.5;
    return { vb: `${x0 - (W - w) / 2} ${y0 - (H - h) / 2} ${W} ${H}`, d: `M${a[0]} ${a[1]} L${n[0]} ${n[1]} L${b[0]} ${b[1]}` };
  }, [a, b, n, r.variant]);
  const label = (p: [number, number], t: string, dx = 10, anchor: "start" | "end" = "start") => (<text x={p[0] + dx} y={p[1] - 8} textAnchor={anchor} fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">{t}</text>);
  return (
    <svg viewBox={vb} className="h-auto w-full" role="img" aria-label={`Simplified route from ${r.from.city} to ${r.to.city} through ${r.borderLabel} border`}>
      {Object.entries(SHAPES).map(([k, p]) => (<path key={k} d={p} fill="#123B5D" fillOpacity=".7" stroke="#C9A14A" strokeOpacity=".3" />))}
      <circle cx={BAHRAIN[0]} cy={BAHRAIN[1]} r="3.5" fill="#123B5D" stroke="#C9A14A" strokeOpacity=".5" />
      {r.variant === "causeway" && <path d={`M${n[0] - 10} ${n[1] + 2} L${n[0] + 12} ${n[1] - 1}`} stroke="#fff" strokeWidth="3" strokeDasharray="2 2" />}
      {r.variant === "capital" && <><circle cx={a[0]} cy={a[1]} r="16" fill="none" stroke="#C9A14A" strokeOpacity=".5" /><circle cx={b[0]} cy={b[1]} r="16" fill="none" stroke="#C9A14A" strokeOpacity=".5" /></>}
      {r.variant === "gateway" && <path d={`M${n[0] - 10} ${n[1] + 10} V${n[1] - 10} H${n[0] + 10} V${n[1] + 10}`} fill="none" stroke="#fff" strokeWidth="2" />}
      {r.variant === "desert-city" && <path d={`M${a[0] - 30} ${a[1] + 28} q 20 -16 40 0 t 40 0`} fill="none" stroke="#C9A14A" strokeOpacity=".4" />}
      {r.variant === "regional" && <path d={d} fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />}
      <path d={d} fill="none" stroke="#C9A14A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className={`draw ${ready ? "on" : ""}`} />
      <circle cx={a[0]} cy={a[1]} r="6" fill="#C9A14A" />{label(a, r.from.city)}
      <rect x={n[0] - 6} y={n[1] - 6} width="12" height="12" transform={`rotate(45 ${n[0]} ${n[1]})`} fill="#fff" stroke="#C9A14A" strokeWidth="2" />
      <circle cx={b[0]} cy={b[1]} r="6" fill="#C9A14A" />{label(b, r.to.city, -10, "end")}
      {motion && (<g><rect x="-7" y="-4" width="14" height="8" rx="3" fill="#fff" /><animateMotion dur="10s" repeatCount="indefinite" rotate="auto" path={d} /></g>)}
    </svg>
  );
}

/* Route-specific vehicle selector */
const VEH = [["sedan", "Sedan", 300, 74], ["suv", "SUV", 300, 92], ["psuv", "Premium SUV", 300, 92], ["van", "Premium Van", 320, 108], ["group", "Large Group Vehicle", 360, 112]] as const;
const ID: Record<string, string> = { sedan: "sedan", suv: "suv", psuv: "lsuv", van: "van", group: "bus" };
export function VehicleSelector({ r }: { r: Route }) {
  const [k, setK] = useState<(typeof VEH)[number][0]>("suv");
  const cur = VEH.find((v) => v[0] === k)!;
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
      <div role="tablist" aria-label="Vehicle categories" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {VEH.map((v) => (<button key={v[0]} role="tab" aria-selected={k === v[0]} onClick={() => setK(v[0])} className={`min-h-[48px] rounded-xl border-2 px-4 text-left text-sm font-semibold ${k === v[0] ? "border-gold bg-white text-navy shadow-sm" : "border-slate-200 text-muted hover:border-gold/60"}`}>{v[1]}</button>))}
      </div>
      <div role="tabpanel" className="rounded-2xl bg-white p-6 ring-1 ring-slate-200" aria-live="polite">
        <div className="mx-auto h-24 max-w-[300px]"><Vehicle id={ID[k]} w={cur[2]} h={cur[3]} /></div>
        <h3 className="mt-3 text-lg font-semibold text-navy">{cur[1]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{r.vehicleNotes[k]}</p>
        <p className="mt-3 text-xs text-muted">Capacity varies by vehicle. Eligibility for the crossing is confirmed before booking.</p>
      </div>
    </div>
  );
}

/* One-way / return planner (UI only, nothing is sent) */
export function ReturnPlanner({ r }: { r: Route }) {
  const [ret, setRet] = useState(false);
  return (
    <div>
      <div role="group" aria-label="Trip type" className="inline-grid grid-cols-2 rounded-xl bg-slate-200 p-1">
        {[false, true].map((x) => (<button key={String(x)} type="button" aria-pressed={ret === x} onClick={() => setRet(x)} className={`min-h-[44px] rounded-lg px-6 text-sm font-semibold ${ret === x ? "bg-navy text-white" : "text-muted"}`}>{x ? "RETURN" : "ONE WAY"}</button>))}
      </div>
      <div className="mt-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200" aria-live="polite">
        <p className="flex items-center gap-3 text-sm font-semibold text-navy">{r.from.city} <span className="text-gold">→</span> {r.to.city}{ret && <><span className="text-gold">→</span>{r.from.city}</>}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          <li>Departure date and time</li>
          {ret && (<><li>Return date and time</li><li>Return pickup location in {r.to.city}</li><li>Vehicle requirement for the return leg</li></>)}
          {!ret && <li>Suited to passengers who continue independently after arriving.</li>}
        </ul>
      </div>
    </div>
  );
}
