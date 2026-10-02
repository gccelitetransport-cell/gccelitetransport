"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "../Icons";
import { BAHRAIN, SHAPES, LABELS, px } from "@/lib/borders";
import type { Route } from "@/lib/routes";

export function RouteExplorer({ routes }: { routes: Route[] }) {
  const [q, setQ] = useState(""); const [oc, setOc] = useState("All"); const [dc, setDc] = useState("All"); const [tag, setTag] = useState("All"); const [hover, setHover] = useState<string | null>(null);
  const origins = Array.from(new Set(routes.map((r) => r.from.country))); const dests = Array.from(new Set(routes.map((r) => r.to.country)));
  const tags = ["Family", "Business", "Group", "Religious"];
  const list = useMemo(() => routes.filter((r) =>
    (oc === "All" || r.from.country === oc) && (dc === "All" || r.to.country === dc) && (tag === "All" || r.tags.includes(tag as never)) &&
    (!q || `${r.from.city} ${r.to.city} ${r.from.country} ${r.to.country}`.toLowerCase().includes(q.toLowerCase()))), [routes, q, oc, dc, tag]);
  const Sel = ({ label, v, set, opts }: { label: string; v: string; set: (x: string) => void; opts: string[] }) => (<label className="label">{label}<select className="field" value={v} onChange={(e) => set(e.target.value)}><option>All</option>{opts.map((o) => <option key={o}>{o}</option>)}</select></label>);
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <figure className="rounded-2xl bg-navy p-4 sm:p-6">
          <svg viewBox="0 0 700 450" className="h-auto w-full" role="img" aria-label="Simplified map of curated cross-border routes">
            {Object.entries(SHAPES).map(([k, d]) => (<path key={k} d={d} fill="#123B5D" fillOpacity=".7" stroke="#C9A14A" strokeOpacity=".3" />))}
            <circle cx={BAHRAIN[0]} cy={BAHRAIN[1]} r="4" fill="#123B5D" stroke="#C9A14A" strokeOpacity=".5" />
            {Object.entries(LABELS).map(([n, [x, y]]) => (<text key={n} x={x} y={y} textAnchor="middle" fill="#fff" fillOpacity=".4" fontSize="11" fontFamily="sans-serif">{n}</text>))}
            {list.map((r) => {
              const a = px(...r.from.ll), b = px(...r.to.ll), n = px(...r.borderNode), on = hover === r.slug;
              return (<g key={r.slug} onMouseEnter={() => setHover(r.slug)} onMouseLeave={() => setHover(null)}>
                <path d={`M${a[0]} ${a[1]} L${n[0]} ${n[1]} L${b[0]} ${b[1]}`} fill="none" stroke="#C9A14A" strokeWidth={on ? 3 : 1.5} strokeOpacity={on ? 1 : 0.6} />
                <circle cx={a[0]} cy={a[1]} r="4" fill="#C9A14A" /><circle cx={b[0]} cy={b[1]} r="4" fill="#C9A14A" />
                {on && (<><text x={a[0]} y={a[1] - 8} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">{r.from.city}</text><text x={b[0]} y={b[1] - 8} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">{r.to.city}</text></>)}
              </g>);
            })}
          </svg>
          <figcaption className="mt-2 text-xs text-white/60">Simplified, not to scale. Lines are approximate and are not road paths.</figcaption>
        </figure>
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <label className="label">Search routes<input className="field" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Makkah, Dubai" /></label>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Sel label="Origin country" v={oc} set={setOc} opts={origins} /><Sel label="Destination country" v={dc} set={setDc} opts={dests} /><Sel label="Traveler type" v={tag} set={setTag} opts={tags} />
          </div>
          <p className="mt-3 text-xs text-muted">Only curated routes are listed. Both one-way and return journeys are available on each, subject to confirmation.</p>
        </div>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((r) => (
          <li key={r.slug} onMouseEnter={() => setHover(r.slug)} onMouseLeave={() => setHover(null)} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">{r.eyebrow}</p>
            <p className="mt-1 text-lg font-semibold text-navy">{r.from.city} → {r.to.city}</p>
            <p className="mt-2 text-sm text-muted">{r.angle}.</p>
            <Link href={`/routes/${r.slug}/`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">View Route<ArrowIcon /></Link>
          </li>
        ))}
        {list.length === 0 && <li className="text-sm text-muted sm:col-span-3">No published route matches those filters.</li>}
      </ul>
    </div>
  );
}
