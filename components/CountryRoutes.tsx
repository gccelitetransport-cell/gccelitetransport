import Link from "next/link";
import { publishedRoutes } from "@/lib/routes";
import { ArrowIcon } from "./Icons";

/** "Routes from / to this country" block for country hubs. Renders nothing when no route page exists yet. */
export function CountryRoutes({ countryId, name }: { countryId: string; name: string }) {
  const from = publishedRoutes().filter((r) => r.from.id === countryId);
  const to = publishedRoutes().filter((r) => r.to.id === countryId);
  if (!from.length && !to.length) return null;
  const Item = ({ slug, a, b, angle }: { slug: string; a: string; b: string; angle: string }) => (
    <li><Link href={`/routes/${slug}/`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-gold">
      <span className="font-semibold text-navy">{a} to {b}</span><span className="mt-1 text-sm text-muted">{angle}</span>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean group-hover:text-gold">View route<ArrowIcon /></span></Link></li>
  );
  return (
    <section className="section bg-white" aria-labelledby={`routes-${countryId}`}>
      <div className="container-x">
        <h2 id={`routes-${countryId}`} className="h2">{name} Cross-Border Route Pages</h2>
        <p className="mt-3 max-w-2xl text-muted">City-to-city journeys with their own planning page. Every route is confirmed individually before booking. <Link href="/routes/" className="font-medium text-ocean underline decoration-gold/60 underline-offset-4">See all routes</Link>.</p>
        {from.length > 0 && (<><h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gold">From {name}</h3><ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{from.map((r) => <Item key={r.slug} slug={r.slug} a={r.from.city} b={r.to.city} angle={r.angle} />)}</ul></>)}
        {to.length > 0 && (<><h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gold">To {name}</h3><ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{to.map((r) => <Item key={r.slug} slug={r.slug} a={r.from.city} b={r.to.city} angle={r.angle} />)}</ul></>)}
      </div>
    </section>
  );
}
