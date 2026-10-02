import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { LuggageCalc } from "@/components/kuwait/Interactive";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { ReturnPlanner, RouteHero, VehicleSelector } from "@/components/routes/RouteClient";
import { getRoute, publishedRoutes, type Route, type Section } from "@/lib/routes";
import { SITE, waLink } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => publishedRoutes().map((r) => ({ slug: r.slug }));
type Props = { params: Promise<{ slug: string }> };

const OG: Record<string, string> = { causeway: "/images/king-fahd-causeway.svg", capital: "/images/saudi-border-road.svg", "desert-city": "/images/uae-border-road.svg", gateway: "/images/oman-road.svg", regional: "/images/jordan-saudi-road.svg" };
const HREF: Record<string, string> = { "saudi-arabia": "/saudi-arabia/", uae: "/uae/", bahrain: "/bahrain/", oman: "/oman/", jordan: "/jordan/", qatar: "/qatar/", kuwait: "/kuwait/" };
const REQ = "Requirements can vary by nationality, residency, vehicle ownership, route and current regulations. Verify current requirements with the relevant authorities before travel.";
const DISC = "Border, immigration, customs, vehicle and entry requirements are determined by the relevant authorities and may change. GCC Elite Transport provides transportation and practical journey-planning information, but does not control border decisions or guarantee entry, clearance or processing times.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const r = getRoute(slug); if (!r) return {};
  const url = `${SITE.url}/routes/${r.slug}/`;
  return { title: { absolute: r.metaTitle }, description: r.metaDesc, alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: SITE.name, title: r.metaTitle, description: r.metaDesc, images: [{ url: `/og/route-${r.slug}.jpg`, width: 1200, height: 630, alt: r.metaTitle }] },
    twitter: { card: "summary_large_image", title: r.metaTitle, description: r.metaDesc, images: [`/og/route-${r.slug}.jpg`] } };
}

const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="h2">{children}</h2>;
const Ticks = ({ items }: { items: string[] }) => (<ul className="mt-3 space-y-2 text-sm text-ink">{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (<Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>);

function renderSection(s: Section, r: Route, i: number) {
  const tint = i % 2 === 1 ? "bg-white" : "";
  const wrap = (id: string, body: React.ReactNode) => (<section key={s} id={id} className={`section ${tint}`}><div className="container-x">{body}</div></section>);
  switch (s) {
    case "summary":
      return (<section key={s} className="border-b border-slate-200 bg-white"><dl className="container-x grid grid-cols-2 gap-x-4 gap-y-4 py-6 md:grid-cols-6">
        {[["Origin", `${r.from.city}, ${r.from.country}`], ["Destination", `${r.to.city}, ${r.to.country}`], ["Journey", "International road"], ["Border", r.borderLabel], ["Trip", "One way / return"], ["Vehicle", "Private vehicle"]].map(([k, v]) => (<div key={k}><dt className="text-xs font-semibold uppercase tracking-wider text-gold">{k}</dt><dd className="mt-1 text-sm font-medium text-navy">{v}</dd></div>))}
      </dl></section>);
    case "whyIntl":
      return wrap("why", (<div className="max-w-3xl"><Reveal><H2>Why This Is an International Cross-Border Journey</H2><div className="mt-4 space-y-4 leading-relaxed text-muted">{r.intro.map((p) => <p key={p}>{p}</p>)}<p>{r.whyIntl} In short: {r.from.city}, {r.from.country} → {r.to.city}, {r.to.country}, by private international road transportation through the {r.borderLabel.replace("↔", "–")} border.</p></div></Reveal></div>));
    case "overview":
      return wrap("overview", (<div className="max-w-3xl"><H2>Route &amp; Border Overview</H2><div className="mt-4 space-y-4 leading-relaxed text-muted">{r.overview.map((p) => <p key={p}>{p}</p>)}</div></div>));
    case "timeline":
      return wrap("timeline", (<><H2>{r.from.city} to {r.to.city}: Stage by Stage</H2><ol className="mt-8 max-w-3xl border-l-2 border-gold/50">{r.timeline.map((t, n) => (<li key={t.t} className="relative pb-6 pl-8 last:pb-0"><Reveal><span className={`absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${t.t.toLowerCase().includes("border") ? "bg-gold text-navy" : "bg-navy text-gold"}`}>{String(n + 1).padStart(2, "0")}</span><h3 className="font-semibold text-navy">{t.t}</h3><p className="mt-1 text-sm text-muted">{t.d}</p></Reveal></li>))}</ol></>));
    case "usecases":
      return wrap("use-cases", (<><H2>Who Takes This Route</H2><div className="mt-8 grid gap-5 md:grid-cols-3">{r.useCases.map((u) => (<article key={u.t} className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">{u.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{u.d}</p></article>))}</div></>));
    case "border":
      return wrap("border", (<div className="grid gap-8 lg:grid-cols-2"><div><H2>Border Crossing Considerations</H2><Ticks items={r.border} /></div><div className="h-fit rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold text-navy">Distance and journey time</h3><p className="mt-2 text-sm leading-relaxed text-muted">Approximate road distance varies depending on the selected route and border crossing. Travel time varies with route, traffic, border procedures, stops and current conditions. We do not promise a duration, and border processing can change the total journey.</p></div></div>));
    case "docs":
      return wrap("documents", (<><H2>Passenger Documents</H2><div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Passenger</h3><Ticks items={["Passport", "Visa or entry permission where applicable", "Residency documentation where relevant"]} /></div><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Vehicle</h3><Ticks items={["Registration", "Insurance", "Authorization", "Operator documentation"]} /></div><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">For this route</h3><Ticks items={r.docsRoute} /></div></div><p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{REQ}</p></>));
    case "driver":
      return wrap("driver", (<div className="max-w-3xl"><H2>Vehicle &amp; Driver Considerations</H2><p className="mt-4 leading-relaxed text-muted">{r.driver}</p><p className="mt-3 text-xs text-muted">We never promise the same vehicle or the same driver in advance. We confirm the arrangement before booking.</p></div>));
    case "vehicles":
      return wrap("vehicles", (<><H2>Choose the Vehicle for {r.from.city} to {r.to.city}</H2><div className="mt-8"><VehicleSelector r={r} /></div></>));
    case "luggage":
      return wrap("luggage", (<><H2>How Much Luggage Are You Travelling With?</H2><p className="mt-3 text-sm text-muted">Enter passengers and bags for an indicative vehicle category. Exact capacity varies by vehicle.</p><div className="mt-6"><LuggageCalc /></div></>));
    case "return":
      return wrap("return", (<><H2>One Way or Return?</H2><div className="mt-6"><ReturnPlanner r={r} /></div></>));
    case "tips":
      return wrap("tips", (<><H2>Journey Planning Tips</H2><ul className="mt-6 grid gap-3 md:grid-cols-2">{r.tips.map((t) => (<li key={t} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-ink">{t}</li>))}</ul></>));
    case "multi":
      return r.multi ? wrap("multi", (<div className="max-w-3xl"><H2>Continuing Beyond {r.to.city}</H2><p className="mt-4 leading-relaxed text-muted">{r.multi}</p></div>)) : null;
    case "faq":
      return wrap("faq", (<div className="max-w-3xl"><H2>{r.from.city} to {r.to.city} Questions</H2><div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">{r.faqs.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}</div></div>));
    case "sources":
      return wrap("sources", (<div className="max-w-3xl"><h2 className="text-2xl font-bold text-navy">Official Information Sources</h2><ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">{r.sources.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}<span className="sr-only"> (opens in a new tab)</span></a></li>))}</ul><p className="mt-4 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISC}</p></div>));
    case "related": {
      const rel = r.related.map((s) => getRoute(s)).filter(Boolean) as Route[];
      return wrap("related", (<><h2 className="text-2xl font-bold text-navy">Related Routes and Guides</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rel.map((x) => (<li key={x.slug}><Link href={`/routes/${x.slug}/`} className="block rounded-xl border border-slate-200 bg-white p-4 font-semibold text-navy hover:border-gold">{x.from.city} → {x.to.city}</Link></li>))}
        <li><Link href={r.guideHref} className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-navy hover:border-gold">Border guide for this crossing</Link></li>
        <li><Link href={HREF[r.from.id]} className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-navy hover:border-gold">{r.from.country} cross-border transportation</Link></li>
        <li><Link href={HREF[r.to.id]} className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-navy hover:border-gold">{r.to.country} cross-border transportation</Link></li>
        <li><Link href="/cross-border-transfers/" className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-navy hover:border-gold">GCC cross-border transfers</Link></li>
      </ul></>));
    }
  }
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params; const r = getRoute(slug); if (!r) notFound();
  const url = `${SITE.url}/routes/${r.slug}/`;
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Routes", item: `${SITE.url}/routes/` }, { "@type": "ListItem", position: 3, name: `${r.from.city} to ${r.to.city}`, item: url }] },
    { "@type": "Service", "@id": `${url}#service`, name: `${r.from.city} to ${r.to.city} cross-border transportation`, serviceType: "Private cross-border road transportation", description: r.metaDesc, url, provider: { "@id": `${SITE.url}/#org` }, areaServed: [r.from.country, r.to.country].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: r.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  const rev = r.variant === "capital" || r.variant === "regional";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image src={OG[r.variant]} alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 to-navy" />
        <div className={`container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center ${rev ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / <Link href="/routes/" className="hover:text-gold">Routes</Link> / {r.from.city} to {r.to.city}</nav>
            <p className="eyebrow mt-5">{r.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] sm:text-5xl">{r.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{r.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href="#quote" className="btn-gold">Get a Route Quote</MagneticLink>
              <a href={waLink(`Hello GCC Elite Transport, I need a quote for ${r.from.city} to ${r.to.city}.`)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-navy/60 p-3"><RouteHero r={r} /><p className="px-2 pb-1 text-[11px] text-white/50">Conceptual route. Not the actual road path, live traffic or border status.</p></div>
        </div>
      </section>
      {r.order.map((s, i) => renderSection(s, r, i))}
      <section id="quote" className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div><H2>Get a {r.from.city} to {r.to.city} Quote</H2><p className="mt-4 leading-relaxed text-muted">Send your pickup, destination, travel date, passenger count and luggage. We review the route and confirm the available private transportation arrangement. Route availability, vehicle arrangements and border requirements vary by journey. See the <A href="/routes/">full route list</A>.</p></div>
          <QuoteForm fromCountry={r.from.country === "United Arab Emirates" ? "United Arab Emirates" : r.from.country} toCountry={r.to.country} fromCity={r.from.city} toCity={r.to.city} title={`Plan ${r.from.city} to ${r.to.city}`} button="Get a Route Quote" note="We'll review your route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Premium SUV", "Van", "Large Group Vehicle"]} showNotes />
        </div>
      </section>
    </>
  );
}
