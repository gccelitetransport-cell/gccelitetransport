import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { Marquee, WeAre } from "@/components/pages/About";
import { ScrollProgress, SideIndex } from "@/components/pages/Common";
import { CORRIDORS } from "@/lib/borders";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/about/`;
const TITLE = "About GCC Elite Transport | Private Cross-Border Transport";
const DESC = "GCC Elite Transport arranges private cross-border road journeys across the GCC and Jordan, planned around each border, vehicle and passenger.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/about.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/about.jpg"] },
};
const INDEX: [string, string][] = [["who", "Who we are"], ["do", "What we do"], ["how", "How a journey is arranged"], ["principles", "How we work"], ["coverage", "Where we operate"], ["verify", "Before you book"]];
const PRINCIPLES = [
  ["Confirm before promising", "We review the route and the vehicle arrangement first. You get the confirmed arrangement and price before you travel."],
  ["Say when it depends", "Whether the same vehicle or driver can cross depends on the route and the rules. We tell you which applies, not what sounds best."],
  ["Keep transport and immigration apart", "We arrange transportation. Visas, entry and customs belong to the authorities and the traveler, and we say so."],
  ["No filler numbers", "We do not publish customer counts, fleet sizes or years in business, because they are not claims we can back on this page."],
];
const STEPS = [["Request", "You send the route, date, passengers and luggage."], ["Review", "We look at the corridor, the border and the vehicle arrangement."], ["Confirm", "You receive the arrangement and price, then approve it."], ["Travel", "The driver meets you at the agreed pickup point."]];
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel, description: "Private international road transportation across the GCC and selected regional routes." },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "About", item: URL }] },
  { "@type": "AboutPage", name: "About GCC Elite Transport", url: URL, about: { "@id": `${SITE.url}/#org` } },
] };

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollProgress />
      <section className="bg-navy text-white">
        <div className="container-x py-16 sm:py-28">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / About</nav>
          <p className="eyebrow mt-6">About GCC Elite Transport</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-[1.05] sm:text-7xl">Roads that cross borders. Planned that way.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">GCC Elite Transport arranges private international road transportation across the GCC and selected regional routes. We plan each journey around its border, its vehicle and its passengers.</p>
        </div>
        <Marquee items={CORRIDORS.map((c) => `${c.a.toUpperCase()} ↔ ${c.b.toUpperCase()}`)} />
      </section>

      <div className="container-x grid gap-10 py-16 lg:grid-cols-[14rem_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-28"><SideIndex items={INDEX} /></div></aside>
        <div className="space-y-20">
          <section id="who"><Reveal><h2 className="h2">Who We Are</h2><div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>We are a regional transportation company built around one kind of trip: the one that crosses an international border by road. People use us to travel between Saudi Arabia, the UAE, Bahrain, Qatar, Kuwait and Oman, and on selected routes between Jordan and Saudi Arabia.</p>
            <p>Jordan is not a GCC country. We include it as a regional road link into the Gulf, and we keep it separate from the GCC corridors on this site.</p>
            <p>We are not a taxi company. We do not run city taxis, airport taxis or hourly drivers inside any one country, and none of our pages is built around them.</p></div></Reveal></section>

          <section id="do"><h2 className="h2">What We Do</h2><p className="mb-6 mt-3 max-w-2xl text-muted">The clearest way to describe us is by what we do and what we leave to others.</p><WeAre /></section>

          <section id="how"><h2 className="h2">How a Journey Is Arranged</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{STEPS.map(([t, d], i) => (<li key={t}><Reveal className="h-full rounded-2xl border border-slate-200 bg-white p-5"><span className="text-2xl font-bold text-gold">0{i + 1}</span><h3 className="mt-1 font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Reveal></li>))}</ol>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">Each route is different, so each is reviewed separately. See <Link href="/cross-border-transfers/" className="text-ocean underline decoration-gold/60 underline-offset-4">how cross-border transfers work</Link> and our <Link href="/border-guides/" className="text-ocean underline decoration-gold/60 underline-offset-4">border guides</Link>.</p></section>

          <section id="principles"><h2 className="h2">How We Work</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">{PRINCIPLES.map(([t, d]) => (<Reveal key={t} className="rounded-2xl border-l-4 border-gold bg-white p-5"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></Reveal>))}</div></section>

          <section id="coverage"><h2 className="h2">Where We Operate</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">Our country pages explain how we operate from each country:</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">{[["Saudi Arabia", "/saudi-arabia/"], ["UAE", "/uae/"], ["Bahrain", "/bahrain/"], ["Qatar", "/qatar/"], ["Kuwait", "/kuwait/"], ["Oman", "/oman/"], ["Jordan (regional)", "/jordan/"]].map(([n, h]) => (<li key={h}><Link href={h} className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 font-medium text-navy hover:border-gold">{n}</Link></li>))}</ul>
            <p className="mt-4 text-sm text-muted">City-to-city journeys are on the <Link href="/routes/" className="text-ocean underline decoration-gold/60 underline-offset-4">routes</Link> page. Availability is confirmed per journey.</p></section>

          <section id="verify"><h2 className="h2">Before You Book</h2>
            <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted"><p>We do not list licenses, awards or partnerships on this site, because we only publish what we can stand behind. Ask us about the vehicle and operator arrangement for your own journey and we will answer plainly.</p>
              <p>Border, immigration, customs, vehicle and entry requirements are decided by the relevant authorities and can change. We do not control them and we do not guarantee entry, clearance or crossing times.</p></div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row"><MagneticLink href="/contact/" className="btn-gold">Contact Us</MagneticLink><a href={waLink("Hello GCC Elite Transport, I have a question before booking.")} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" />WhatsApp GCC Elite Transport</a></div></section>
        </div>
      </div>
    </>
  );
}
