import { enAlternates } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { BorderMap } from "@/components/kuwait/JordanClient";
import { ScrollProgress } from "@/components/pages/Common";
import { Causeway, Chooser, Desert, DirectionSteps, Gate, Pair, Post } from "@/components/guides/Signature";
import { GUIDES, getGuide, type Guide } from "@/lib/guides";
import { getRoute, type Route } from "@/lib/routes";
import { BORDER_GUIDES_REVIEWED_ON, SITE, waLink } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => GUIDES.map((g) => ({ slug: g.slug }));
type Props = { params: Promise<{ slug: string }> };
const HREF: Record<string, string> = { "saudi-arabia": "/saudi-arabia/", uae: "/uae/", bahrain: "/bahrain/", qatar: "/qatar/", kuwait: "/kuwait/", oman: "/oman/", jordan: "/jordan/" };
const DISC = "Border, immigration, customs, vehicle and entry requirements are determined by the relevant authorities and may change. GCC Elite Transport provides transportation and practical journey-planning information, but does not control border decisions or guarantee entry, clearance or processing times.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const g = getGuide(slug); if (!g) return {};
  const url = `${SITE.url}/border-guides/${g.slug}/`;
  return { title: { absolute: g.title }, description: g.desc, alternates: enAlternates(`/border-guides/${g.slug}/`),
    openGraph: { type: "article", url, siteName: SITE.name, title: g.title, description: g.desc, images: [{ url: `/og/guide-${g.slug}.jpg`, width: 1200, height: 630, alt: g.h1 }] },
    twitter: { card: "summary_large_image", title: g.title, description: g.desc, images: [`/og/guide-${g.slug}.jpg`] } };
}

function Signature({ g }: { g: Guide }) {
  switch (g.signature) {
    case "causeway": return <Causeway />;
    case "gate": return <Gate />;
    case "post": return <Post />;
    case "chooser": return <Chooser />;
    case "pair": return <Pair />;
    case "desert": return <Desert />;
    case "three": return <BorderMap />;
  }
}
const SIG_TITLE: Record<Guide["signature"], string> = { causeway: "Along the Causeway", gate: "Two Sides of One Gate", post: "Two Posts at the Western Edge", chooser: "Which Crossing for Your Route?", pair: "Coast or Inland", desert: "Preparing for a Remote Route", three: "Three Crossings Along One Border" };

export default async function GuidePage({ params }: Props) {
  const { slug } = await params; const g = getGuide(slug); if (!g) notFound();
  const url = `${SITE.url}/border-guides/${g.slug}/`;
  const routes = g.related.map((s) => getRoute(s)).filter(Boolean) as Route[];
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Border Guides", item: `${SITE.url}/border-guides/` }, { "@type": "ListItem", position: 3, name: g.h1, item: url }] },
    { "@type": "Article", "@id": `${url}#article`, headline: g.h1, description: g.desc, url, publisher: { "@id": `${SITE.url}/#org` }, about: [g.a, g.b].map((n) => ({ "@type": "Country", name: n === "UAE" ? "United Arab Emirates" : n })), ...(BORDER_GUIDES_REVIEWED_ON ? { dateModified: BORDER_GUIDES_REVIEWED_ON } : {}) },
    { "@type": "FAQPage", mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollProgress />
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/" className="hover:text-gold">Home</Link> / <Link href="/border-guides/" className="hover:text-gold">Border Guides</Link> / {g.h1}</nav>
          <p className="eyebrow mt-5">{g.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">{g.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{g.lead}</p>
          <p className="mt-3 text-xs text-muted">Information guide, not a booking page. {BORDER_GUIDES_REVIEWED_ON ? `Reviewed ${BORDER_GUIDES_REVIEWED_ON}.` : "Requirements change, so check the official sources below before travel."}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="h2">Fact Sheet</h2>
            <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {g.facts.map((f) => (<div key={f.k} className="grid gap-1 p-4 sm:grid-cols-[9rem_1fr]"><dt className="text-xs font-semibold uppercase tracking-wider text-gold">{f.k}</dt><dd className="text-sm text-ink">{f.v}{f.src && <> <a href={f.src[1]} target="_blank" rel="noopener noreferrer" className="ml-1 inline-block rounded-full border border-slate-300 px-2 py-0.5 text-[11px] text-ocean hover:border-gold">Source</a></>}</dd></div>))}
            </dl>
          </div>
          <div><h2 className="h2">{SIG_TITLE[g.signature]}</h2><div className="mt-6"><Signature g={g} /></div></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal><h2 className="h2">What Happens at the Crossing</h2><p className="mb-6 mt-3 max-w-2xl text-muted">Choose a direction to see the general order of procedures.</p></Reveal>
          <DirectionSteps a={g.a} b={g.b} ab={g.steps.ab} ba={g.steps.ba} />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">What It Connects</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.connects.map((c) => (<li key={c} className="flex gap-2"><span className="text-gold">›</span>{c}</li>))}</ul></div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">Passengers Should Check</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.passenger.map((c) => (<li key={c} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{c}</li>))}</ul></div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">Vehicles May Need</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.vehicle.map((c) => (<li key={c} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{c}</li>))}</ul></div>
        </div>
        <p className="container-x mt-5 text-sm text-muted">Requirements vary by nationality, residency, vehicle ownership, route and current rules. Verify them with the relevant authorities before travel.</p>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div><h2 className="h2 !text-white">Know Before You Go</h2><div className="mt-6 space-y-4">{g.notes.map((n) => (<Reveal key={n.t} className="rounded-2xl border border-white/15 bg-white/5 p-5"><h3 className="font-semibold">{n.t}</h3><p className="mt-2 text-sm leading-relaxed text-white/75">{n.d}</p></Reveal>))}</div></div>
          <div><h2 className="text-2xl font-bold">Common Mistakes</h2><ul className="mt-5 space-y-3 text-sm">{g.mistakes.map((m) => (<li key={m} className="flex gap-3 rounded-xl border border-white/10 p-3"><span className="text-gold" aria-hidden="true">✕</span>{m}</li>))}</ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="h2">{g.h1.replace(" Border Guide", "")} Questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {g.faqs.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Official Sources</h2>
            <ul className="mt-4 space-y-2 text-sm">{g.sources.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}<span className="sr-only"> (opens in a new tab)</span></a></li>))}</ul>
            <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISC}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Related Pages</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {routes.map((r) => (<li key={r.slug}><Link href={`/routes/${r.slug}/`} className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">{r.from.city} to {r.to.city} route</Link></li>))}
              <li><Link href={HREF[g.aId]} className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">{g.a} cross-border transportation</Link></li>
              <li><Link href={HREF[g.bId]} className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">{g.b} cross-border transportation</Link></li>
              <li><Link href="/border-guides/" className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">All GCC border guides</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <div className="container-x max-w-2xl">
          <h2 className="text-3xl font-bold">Crossing Between {g.a} and {g.b}?</h2>
          <p className="mt-3 text-white/75">We arrange private transportation across this border and confirm the vehicle and driver arrangement before you book.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><MagneticLink href="/contact/" className="btn-gold">Get a Cross-Border Quote</MagneticLink><a href={waLink(`Hello GCC Elite Transport, I need transport between ${g.a} and ${g.b}.`)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a></div>
        </div>
      </section>
    </>
  );
}
