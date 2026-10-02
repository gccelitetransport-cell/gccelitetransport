import type { Metadata } from "next";
import Link from "next/link";
import { RouteExplorer } from "@/components/routes/RouteExplorer";
import { MagneticLink } from "@/components/kuwait/Motion";
import { CORRIDORS } from "@/lib/borders";
import { publishedRoutes } from "@/lib/routes";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/routes/`;
const TITLE = "GCC Cross-Border Routes | International Route Explorer";
const DESC = "Explore curated private cross-border road routes between cities across Saudi Arabia, the UAE, Bahrain, Oman and Jordan, with route-specific planning for passengers, vehicles and borders.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/saudi-border-road.svg", width: 1600, height: 900, alt: "Highway approaching a border gate" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function RoutesPage() {
  const routes = publishedRoutes();
  const clusters = new Map<string, typeof routes>();
  routes.forEach((r) => { const k = `${r.from.country} → ${r.to.country}`; clusters.set(k, [...(clusters.get(k) ?? []), r]); });
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Routes", item: URL }] },
    { "@type": "CollectionPage", name: "GCC Cross-Border Routes", url: URL, description: DESC, mainEntity: { "@type": "ItemList", itemListElement: routes.map((r, i) => ({ "@type": "ListItem", position: i + 1, name: `${r.from.city} to ${r.to.city}`, url: `${SITE.url}/routes/${r.slug}/` })) } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="bg-navy text-white">
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Routes</nav>
          <p className="eyebrow mt-5">International route explorer</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-6xl">Explore GCC Cross-Border Routes</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">City-to-city private road journeys that cross an international border. Every route listed here is individually written, and every journey is confirmed before booking. These are not local taxi routes.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><MagneticLink href="#explorer" className="btn-gold">Browse Routes</MagneticLink><MagneticLink href="/cross-border-transfers/" className="btn-ghost">How cross-border transfers work</MagneticLink></div>
        </div>
      </section>
      <section id="explorer" className="section"><div className="container-x"><RouteExplorer routes={routes} /></div></section>
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="h2">Routes by Country Pair</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[...clusters.entries()].map(([k, rs]) => (
              <div key={k} className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">{k}</h3>
                <ul className="mt-3 space-y-2 text-sm">{rs.map((r) => (<li key={r.slug}><Link href={`/routes/${r.slug}/`} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{r.from.city} to {r.to.city}</Link></li>))}</ul></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <h2 className="h2">Featured International Corridors</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">The border corridors behind the routes. Country pages explain how we operate from each country, and the border guides explain the crossings.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORRIDORS.map((c) => (<li key={c.id} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="font-semibold text-navy">{c.name}</p><p className="text-xs font-medium text-gold">{c.crossing}</p><p className="mt-2 text-sm text-muted">{c.summary}</p><Link href={c.href} className="mt-3 inline-block text-sm font-semibold text-ocean hover:text-gold">Country page →</Link></li>))}
          </ul>
          <p className="mt-8 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">New routes are added only when they are international, commercially meaningful, operationally confirmed and have enough unique information to be useful. Not every possible city pair has a page. If your route is not listed, <Link href="/contact/" className="font-medium underline underline-offset-4">ask us</Link> and we will tell you whether we can arrange it.</p>
        </div>
      </section>
    </>
  );
}
