import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flag } from "@/components/Flag";
import { ArrowIcon, CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/saudi-arabia/`;
const TITLE = "Saudi Arabia Cross-Border Transport | GCC & Jordan Transfers";
const DESC = "Private cross-border transportation to and from Saudi Arabia, connecting Bahrain, UAE, Qatar, Kuwait, Oman and Jordan. Route-specific vehicles, border coordination and private transfers.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/saudi-border-road.svg", width: 1600, height: 900, alt: "Highway approaching a border gate at sunset" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const VERIFY = "Requirements may vary and should be verified with the relevant authority before travel.";
const VISA = "Visa and entry requirements depend on nationality, destination and current regulations. Passengers must verify their eligibility before travel.";

/* ---------- content ---------- */
const GCC_LINKS = [
  { id: "bahrain", name: "Bahrain", href: "/bahrain/", t: "The shortest-feeling crossing in the network, built around the King Fahd Causeway where the route uses it. Popular for short family and business trips." },
  { id: "uae", name: "United Arab Emirates", href: "/uae/", t: "A long road journey toward the east. Planning centers on vehicle comfort, luggage and a schedule that suits a full travel day." },
  { id: "qatar", name: "Qatar", href: "/qatar/", t: "Qatar's only land connection is with Saudi Arabia, so every road journey to or from Qatar is planned around that single border." },
  { id: "kuwait", name: "Kuwait", href: "/kuwait/", t: "A northbound crossing popular with families and company teams, where vehicle size and bag count drive the arrangement." },
  { id: "oman", name: "Oman", href: "/oman/", t: "The most remote of the GCC connections. Planned individually, with the route and vehicle arrangement confirmed well ahead." },
];

const STAGES = [
  { n: "01", t: "Pickup", d: "The driver meets the passengers at the confirmed location." },
  { n: "02", t: "International road journey", d: "The vehicle travels toward the applicable border crossing." },
  { n: "03", t: "Border procedures", d: "Passengers complete the applicable immigration and customs procedures." },
  { n: "04", t: "Vehicle / driver arrangement", d: "Depending on the route and applicable requirements, the journey may continue with the same vehicle and driver or require another arrangement." },
  { n: "05", t: "Continue to destination", d: "Transportation continues to the confirmed destination." },
];

const VARIABLES: [string, string, string][] = [
  ["Border", "A causeway link", "A long-distance land corridor"],
  ["Distance", "Crossing-led, shorter", "Long-distance, full-day planning"],
  ["Vehicle permissions", "Checked for the route", "Checked for the route"],
  ["Driver arrangement", "Confirmed in advance", "Confirmed in advance"],
  ["Passenger requirements", "Depend on nationality", "Depend on nationality"],
  ["Return schedule", "Easier to plan around a date", "Needs early scheduling"],
];

const CHANGE = [
  { t: "Continuous vehicle", d: "Where permitted and operationally available, the same vehicle continues across the border." },
  { t: "Vehicle or driver change", d: "Some routes may require a different transportation arrangement for part of the journey." },
  { t: "Pre-trip confirmation", d: "GCC Elite Transport confirms the actual arrangement before the journey, so you know what applies to your route." },
];

const VEHICLES = [
  ["Sedan", "For smaller groups."],
  ["SUV", "For families and extra luggage."],
  ["Large SUV", "For larger private groups."],
  ["Premium Van", "For groups traveling together."],
  ["Minibus", "For larger groups, where available."],
];

const PRICE = ["Origin", "Destination", "Border", "Distance", "Vehicle", "Passengers", "Luggage", "One-way or return", "Driver arrangement", "Route-specific operating costs"];

const ROUTES_GCC = ["Bahrain", "UAE", "Qatar", "Kuwait", "Oman"];

const GUIDES = [
  "Saudi–Bahrain / King Fahd Causeway", "Saudi–Qatar", "Saudi–Kuwait", "Saudi–UAE", "Saudi–Oman", "Saudi–Jordan",
];

const OFFICIAL = [
  ["Saudi visa portal", "https://visa.visitsaudi.com"],
  ["Saudi Ministry of Interior", "https://www.moi.gov.sa"],
  ["Saudi Transport General Authority", "https://www.tga.gov.sa"],
  ["Bahrain NPRA", "https://www.npra.gov.bh"],
  ["UAE ICP", "https://icp.gov.ae"],
  ["Qatar Hukoomi", "https://hukoomi.gov.qa"],
  ["Kuwait MOI", "https://www.moi.gov.kw"],
  ["Royal Oman Police", "https://www.rop.gov.om"],
  ["Jordan MFA", "https://mfa.gov.jo"],
];

const FAQS = [
  { q: "What cross-border transportation does GCC Elite Transport provide from Saudi Arabia?", a: "Pre-booked private road transfers between Saudi Arabia and Bahrain, the UAE, Qatar, Kuwait and Oman, plus selected regional routes to and from Jordan. Each journey is confirmed individually." },
  { q: "Can I travel from Saudi Arabia to Bahrain by private vehicle?", a: "Yes. GCC Elite Transport can arrange private cross-border transportation between Saudi Arabia and Bahrain on applicable routes, subject to vehicle, route and border requirements." },
  { q: "Can I travel from Bahrain to Saudi Arabia?", a: "Yes, on applicable routes. Send your Bahrain pickup point and Saudi destination and we confirm the vehicle and driver arrangement." },
  { q: "Can I book Saudi Arabia to UAE transportation?", a: "Yes, where an operational road route is available. It is a long-distance journey, so we confirm the vehicle, schedule and arrangement before booking." },
  { q: "Can I book Saudi Arabia to Qatar transportation?", a: "Yes. Road journeys between Saudi Arabia and Qatar use the land border between the two countries. The exact procedure and arrangement are confirmed before travel." },
  { q: "Can I travel between Saudi Arabia and Kuwait by private vehicle?", a: "Yes, on applicable routes. Tell us the passenger count and luggage so we can recommend a vehicle category." },
  { q: "Can I travel between Saudi Arabia and Oman?", a: "Road journeys between Saudi Arabia and Oman are long-distance and reviewed individually. Request a quote early so the route and vehicle arrangement can be confirmed." },
  { q: "Can I travel from Saudi Arabia to Jordan?", a: "Yes, on selected regional routes. Jordan is not a GCC country, so we confirm the route and arrangement separately." },
  { q: "Can I book a return journey?", a: "Yes. Choose Return in the quote form and include the return date and pickup point. Scheduled and multi-day returns are available where operations allow." },
  { q: "Will the same vehicle cross the border?", a: "It depends on the route, vehicle authorization and operational arrangement. We confirm it before the journey." },
  { q: "Will the same driver stay with us?", a: "Where the route supports a continuous arrangement, we confirm the driver plan in advance. Some routes need a different driver for part of the trip." },
  { q: "What documents should I check before traveling?", a: `Check your passport validity and any visa or entry permission for the destination. ${VISA} ${VERIFY}` },
  { q: "How is the cross-border price calculated?", a: "From the actual origin, destination, border, vehicle, passenger count, luggage, trip type and driver arrangement. You receive the agreed price before the trip." },
  { q: "Can families travel with luggage?", a: "Yes. Tell us the number of adults, children and bags and we match a vehicle with enough seats and luggage space." },
  { q: "How do I request a Saudi cross-border quote?", a: "Use the quote form on this page or message us on WhatsApp with your origin, destination, date, passenger count and luggage." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Saudi Arabia", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Saudi Arabia cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Saudi Arabia", "Bahrain", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Jordan"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

/* ---------- helpers ---------- */
const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>
);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>
);
const Cta = ({ children }: { children: React.ReactNode }) => (
  <Link href="#quote" className="btn-navy mt-6 inline-flex">{children}</Link>
);

function Corridor({ id, h2, flag, children, cta, tag, tint }: { id: string; h2: string; flag: string; children: React.ReactNode; cta: string; tag?: string; tint?: boolean }) {
  return (
    <section id={id} className={`section ${tint ? "bg-white" : ""}`}>
      <div className="container-x">
        <div className={`max-w-3xl ${tag ? "rounded-2xl border border-dashed border-gold/60 bg-white p-6 sm:p-8" : ""}`}>
          {tag && <p className="mb-3 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">{tag}</p>}
          <div className="flex items-center gap-3"><Flag id="saudi-arabia" className="h-5 w-8" /><span className="text-gold" aria-hidden="true">↔</span><Flag id={flag} className="h-5 w-8" /></div>
          <H2>{h2}</H2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">{children}</div>
          <Cta>{cta}</Cta>
        </div>
      </div>
    </section>
  );
}

function HubMap() {
  // Schematic only. Positions are illustrative, not geographic.
  const c: [number, number] = [200, 150];
  const gcc: [string, number, number][] = [["Bahrain", 340, 95], ["Qatar", 360, 150], ["UAE", 370, 205], ["Oman", 330, 262], ["Kuwait", 300, 40]];
  return (
    <figure className="rounded-2xl bg-navy p-4 sm:p-6">
      <svg viewBox="0 0 520 300" role="img" aria-label="Schematic of Saudi Arabia connected by road to Bahrain, Qatar, UAE, Oman, Kuwait and, separately, Jordan" className="h-auto w-full">
        {gcc.map(([n, x, y]) => (<line key={n} x1={c[0]} y1={c[1]} x2={x} y2={y} stroke="#C9A14A" strokeOpacity=".8" strokeWidth="1.6" strokeDasharray="5 5" />))}
        <line x1={c[0]} y1={c[1]} x2="60" y2="50" stroke="#fff" strokeOpacity=".5" strokeWidth="1.6" strokeDasharray="2 6" />
        <rect x="8" y="8" width="108" height="64" rx="8" fill="none" stroke="#fff" strokeOpacity=".35" strokeDasharray="3 4" />
        <text x="16" y="24" fill="#fff" fillOpacity=".6" fontSize="10" fontFamily="sans-serif">REGIONAL</text>
        <circle cx="60" cy="50" r="6" fill="#0B1F33" stroke="#fff" strokeWidth="1.5" /><text x="72" y="54" fill="#fff" fontSize="13" fontFamily="sans-serif">Jordan</text>
        <circle cx={c[0]} cy={c[1]} r="12" fill="#C9A14A" /><text x={c[0] - 18} y={c[1] + 4} textAnchor="end" fill="#fff" fontSize="14" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
        {gcc.map(([n, x, y]) => (<g key={n}><circle cx={x} cy={y} r="6" fill="#C9A14A" /><text x={x + 12} y={y + 4} fill="#fff" fontSize="13" fontFamily="sans-serif">{n}</text></g>))}
        <text x="300" y="292" fill="#fff" fillOpacity=".55" fontSize="10" fontFamily="sans-serif">GCC CROSS-BORDER ROUTES</text>
      </svg>
      <figcaption className="mt-2 text-xs text-white/60">Schematic, not to scale. Lines show corridors we review, not guaranteed routes. Jordan is shown apart because it is not a GCC country.</figcaption>
    </figure>
  );
}

/* ---------- page ---------- */
export default function SaudiArabiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero + form */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image src="/images/saudi-border-road.svg" alt="Illustration of a highway approaching a border gate at sunset" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="text-white">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Saudi Arabia</nav>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">Saudi Arabia Cross-Border Transportation</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">Private road transfers between Saudi Arabia and Bahrain, UAE, Qatar, Kuwait, Oman and Jordan, with each journey arranged around the route, border crossing, passengers and vehicle requirements.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">Get a Cross-Border Quote</Link>
              <a href={waLink("Hello GCC Elite Transport, I need a Saudi Arabia cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp Us</a>
            </div>
            <p className="mt-5 text-sm text-white/65">Private Vehicles · One-Way &amp; Return · Route-Specific Arrangements</p>
          </div>
          <QuoteForm fromCountry="Saudi Arabia" title="Plan Your Saudi Border Transfer" button="Request My Quote" note="We'll review your route and confirm the available transportation arrangement." />
        </div>
      </section>

      {/* Hub intro */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <H2>Saudi Arabia as a Cross-Border Travel Hub</H2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>Saudi Arabia shares land connections with several GCC countries and with Jordan, which puts it at the center of regional road travel. Bahrain is linked by causeway. Qatar, Kuwait, the UAE and Oman connect by land, and Jordan lies to the north-west. For many passengers in the region, a journey that starts or ends in Saudi Arabia is simply a journey across a border.</p>
            <p>We arrange that travel in both directions: from Saudi Arabia to its neighboring GCC countries, from those countries into Saudi Arabia, and between Saudi Arabia and Jordan. This page covers those international road journeys only. It is not about getting around inside Saudi Arabia.</p>
            <p>An international road transfer takes more planning than an ordinary local ride. Before we confirm a vehicle we look at the border crossing, vehicle authorization, passenger documentation, the route, the vehicle category, the driver arrangement, luggage, the travel date and whether the passengers need to return. Each of these can change the arrangement, which is why we ask for them in the quote request. For how cross-border transfers work in general, see our <A href="/cross-border-transfers/">cross-border transfers overview</A>.</p>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="section bg-white" id="network">
        <div className="container-x">
          <H2>Saudi Arabia ↔ The GCC</H2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <HubMap />
            <div className="space-y-3">
              {GCC_LINKS.map((c) => (
                <div key={c.id} className="flex gap-4 rounded-xl border border-slate-200 bg-paper p-4">
                  <Flag id={c.id} className="mt-1 h-5 w-8 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-navy">Saudi Arabia ↔ {c.name}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{c.t}</p>
                    <Link href={c.href} className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-ocean hover:text-gold">{c.name} transfers<ArrowIcon className="h-3.5 w-3.5" /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Corridor id="bahrain" h2="Saudi Arabia ↔ Bahrain Private Cross-Border Transfers" flag="bahrain" cta="Request Saudi–Bahrain Quote">
        <p><strong className="text-ink">Can I book private transportation from Saudi Arabia to Bahrain?</strong> Yes. GCC Elite Transport can arrange private cross-border transportation between Saudi Arabia and Bahrain on applicable routes, subject to vehicle, route and border requirements.</p>
        <p>The journey works in both directions, Saudi Arabia to Bahrain and Bahrain to Saudi Arabia, and uses the King Fahd Causeway where the selected route requires it. Pickup can be arranged from an airport, hotel or home address where operations allow. Families, business travelers and groups all use this corridor, on one-way or return trips.</p>
        <p>One point matters here: not every vehicle is automatically authorized to cross. The vehicle and driver arrangement depends on the requirements that currently apply, so we confirm it before you travel. Read more on the <A href="/bahrain/">Bahrain transfers page</A>.</p>
      </Corridor>

      <Corridor id="uae" h2="Saudi Arabia ↔ UAE Cross-Border Transportation" flag="uae" cta="Plan Saudi–UAE Journey" tint>
        <p><strong className="text-ink">Can I book Saudi Arabia to UAE transportation?</strong> Yes, where an operational road route is available. This is long-distance private road travel, and the plan is built around the route rather than a standard fare.</p>
        <p>Journeys run Saudi Arabia to the UAE and UAE to Saudi Arabia. Typical passengers are business travelers, families and people continuing an international airport journey by road. Private SUVs and vans suit this distance because seating and luggage space matter more over a long drive.</p>
        <p>We plan the pickup point, the border crossing and the vehicle arrangement together, and confirm them before booking. See the <A href="/uae/">UAE page</A> for the other end of the journey.</p>
      </Corridor>

      <Corridor id="qatar" h2="Saudi Arabia ↔ Qatar Private Road Transfers" flag="qatar" cta="Request Saudi–Qatar Quote">
        <p>Qatar&apos;s land connection runs through its border with Saudi Arabia, so a road journey in either direction is planned around that crossing. Private groups, families and business travelers can request a transfer between Saudi Arabia and Qatar and we review the route before confirming.</p>
        <p>The exact border procedure and transportation arrangement should be confirmed before travel. We tell you what applies to your journey and what to prepare, and we do not give visa or immigration advice. {VERIFY} More on the <A href="/qatar/">Qatar transfers page</A>.</p>
      </Corridor>

      <Corridor id="kuwait" h2="Saudi Arabia ↔ Kuwait Cross-Border Transfers" flag="kuwait" cta="Plan Saudi–Kuwait Transfer" tint>
        <p>Private road transportation between Saudi Arabia and Kuwait is available on applicable routes, one-way or return. Families and business travelers use it most, and the deciding factor is usually luggage and group size rather than distance.</p>
        <p>Tell us how many passengers and bags are traveling and we suggest a vehicle category, then price the journey for your actual route. Pricing is route-specific, not a flat rate. See the <A href="/kuwait/">Kuwait page</A> for the Kuwait side of the trip.</p>
      </Corridor>

      <Corridor id="oman" h2="Saudi Arabia ↔ Oman Private Road Transportation" flag="oman" cta="Request Saudi–Oman Quote">
        <p>This is the most demanding road connection in the network. It is long-distance, so comfort, luggage planning and a confirmed driver arrangement matter more than on shorter crossings. We do not quote journey duration in advance because it depends on the route and conditions.</p>
        <p>Request a quote early, one-way or return, for a family or group. We confirm the route and vehicle arrangement before you book. Read about the <A href="/oman/">Oman side of the journey</A>.</p>
      </Corridor>

      <Corridor id="jordan" h2="Saudi Arabia ↔ Jordan Private Transportation" flag="jordan" cta="Plan Saudi–Jordan Transfer" tag="Regional Cross-Border Route" tint>
        <p>Jordan is a regional cross-border destination, not a GCC member. We include it as a selected regional route, kept separate from the GCC corridors above.</p>
        <p>Families, private groups and travelers with luggage can request one-way or return road transport between Saudi Arabia and Jordan. Border-specific planning and the vehicle arrangement are confirmed individually. See the <A href="/jordan/">Jordan regional page</A>.</p>
      </Corridor>

      {/* Logistics */}
      <section className="section">
        <div className="container-x">
          <H2>Every Saudi Border Route Has Different Logistics</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">A Saudi–Bahrain journey is not operationally identical to a Saudi–Oman journey. The border, distance, vehicle permissions, driver arrangement, passenger requirements, luggage, route, current regulations and return schedule can all differ. We do not publish waiting times, we cannot promise border clearance, and we do not assume every vehicle can cross every border.</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">How two Saudi border routes differ</caption>
              <thead className="bg-navy text-white"><tr><th scope="col" className="px-5 py-3">Variable</th><th scope="col" className="px-5 py-3">Saudi ↔ Bahrain</th><th scope="col" className="px-5 py-3">Saudi ↔ Oman</th></tr></thead>
              <tbody className="divide-y divide-slate-200">
                {VARIABLES.map(([v, a, b]) => (<tr key={v}><th scope="row" className="px-5 py-3 font-semibold text-navy">{v}</th><td className="px-5 py-3 text-ink">{a}</td><td className="px-5 py-3 text-ink">{b}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <H2>From Pickup to Border to Destination</H2>
          <p className="mt-3 text-sm text-muted">General operational information. Details depend on the route.</p>
          <ol className="mt-8 border-l-2 border-gold/50">
            {STAGES.map((s) => (
              <li key={s.n} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{s.n}</span>
                <h3 className="font-semibold text-navy">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Same vehicle */}
      <section className="section">
        <div className="container-x">
          <H2>Will the Same Vehicle Cross the Saudi Border?</H2>
          <p className="mt-4 max-w-3xl font-medium text-navy">It depends on the route and applicable vehicle requirements. Three outcomes are possible.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {CHANGE.map((m) => (<article key={m.t} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-semibold text-navy">{m.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{m.d}</p></article>))}
          </div>
        </div>
      </section>

      {/* Private + vehicles */}
      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2 light>Private Transportation, Not Shared Public Transport</H2>
            <ul className="mt-6 space-y-3 text-sm">
              {["The vehicle is reserved for your passenger group", "No unrelated passengers", "The luggage space belongs to your group", "Pickup is arranged around your confirmed itinerary", "The route is planned for your booking"].map((i) => (<li key={i} className="flex gap-3"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}
            </ul>
            <p className="mt-4 text-xs text-white/55">Flexibility depends on the route and operations, and is confirmed in your quote.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Choose a Vehicle for the Border Journey</h2>
            <p className="mt-3 text-sm text-white/70">Selection depends on passenger count, luggage, route, availability and border requirements.</p>
            <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {VEHICLES.map(([n, d]) => (<div key={n} className="flex justify-between gap-4 py-3 text-sm"><dt className="font-semibold">{n}</dt><dd className="text-right text-white/70">{d}</dd></div>))}
            </dl>
            <Link href="/fleet/" className="btn-gold mt-6">View Full Fleet</Link>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section" id="requirements">
        <div className="container-x">
          <H2>What Should Passengers Prepare Before Crossing?</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">Passenger</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Passport", "Applicable visa or entry permission", "Required identification", "Destination entry requirements", "Personal travel documents"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>))}</ul>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">Transportation</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Confirmed pickup", "Passenger count", "Luggage details", "Vehicle arrangement", "Route information", "Driver details, where applicable"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>))}</ul>
            </div>
          </div>
          <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-ink">Entry, visa, immigration, customs and border requirements can vary by nationality, destination and current regulations. Passengers should verify current requirements with the relevant authorities before travel.</p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>What GCC Elite Transport Handles — and What Passengers Must Handle</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-navy">We coordinate</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Transportation", "Route", "Pickup", "Vehicle", "Driver arrangement", "Journey communication"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>))}</ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-navy">Passengers are responsible for</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Valid travel documents", "Visa and entry eligibility", "Immigration compliance", "Personal customs requirements"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>))}</ul>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted"><strong className="text-ink">Do I need a visa?</strong> {VISA}</p>
        </div>
      </section>

      {/* One-way / return */}
      <section className="section">
        <div className="container-x">
          <H2>One-Way or Return — Plan the Journey Around Your Schedule</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[["One-way", "For passengers staying in the destination country."], ["Return", "For passengers returning to Saudi Arabia or the original country."], ["Multi-day / scheduled return", "Where operationally available, with the return date and pickup agreed in advance."]].map(([t, d]) => (
              <article key={t} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></article>
            ))}
          </div>
          <Cta>Request a Return Quote</Cta>
        </div>
      </section>

      {/* Family + business */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Private Saudi Border Transfers for Families &amp; Groups</H2>
            <p className="mt-4 leading-relaxed text-muted">Multiple passengers, children and a lot of luggage are the usual reasons families and groups choose a private vehicle: you stay together, and the pickup is coordinated for everyone. Larger vehicles are matched to the group rather than split across cars.</p>
            <p className="mt-3 rounded-lg bg-paper p-4 text-sm text-ink">Tell us the number of passengers, number of bags and preferred vehicle. We&apos;ll recommend an appropriate vehicle category for the selected route.</p>
            <Link href="#quote" className="btn-outline mt-5">Plan a Group Border Transfer</Link>
          </div>
          <div id="business">
            <H2>Business Travel Between Saudi Arabia and the GCC</H2>
            <p className="mt-4 leading-relaxed text-muted">Executives, company teams, consultants and project staff travel across Saudi borders for meetings, events and recurring assignments. We arrange a private executive vehicle, airport-to-business-destination transfers, cross-border meeting travel, return journeys and multi-day transportation.</p>
            <Link href="/corporate/" className="btn-navy mt-5">Request Corporate Cross-Border Transport</Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <H2>How Saudi Cross-Border Transfer Prices Are Calculated</H2>
            <p className="mt-4 leading-relaxed text-muted">Prices are built from the journey itself. We do not publish a &ldquo;from&rdquo; price because two routes that look similar on a map can involve very different borders, distances and vehicle arrangements. You receive the agreed price before travel.</p>
            <Cta>Get a Route-Specific Quote</Cta>
          </div>
          <ul className="flex flex-wrap content-start gap-2">{PRICE.map((f) => (<li key={f} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-ink">{f}</li>))}</ul>
        </div>
      </section>

      {/* Routes */}
      <section className="section bg-white" id="routes">
        <div className="container-x">
          <H2>Explore Saudi Cross-Border Routes</H2>
          <p className="mt-3 max-w-2xl text-sm text-muted">Dedicated route pages are linked as they are published. Until then the <A href="/routes/">routes overview</A> lists what we currently cover.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">GCC</h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {ROUTES_GCC.map((r) => (<li key={r}><Link href="/routes/" className="flex items-center justify-between rounded-xl border border-slate-200 bg-paper px-4 py-4 font-semibold text-navy hover:border-gold">Saudi Arabia ↔ {r}<ArrowIcon /></Link></li>))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Regional</h3>
              <ul className="mt-3"><li><Link href="/jordan/" className="flex items-center justify-between rounded-xl border border-dashed border-gold/70 bg-paper px-4 py-4 font-semibold text-navy hover:border-gold">Saudi Arabia ↔ Jordan<ArrowIcon /></Link></li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section" id="guides">
        <div className="container-x">
          <H2>Saudi Border Crossing Guides</H2>
          <p className="mt-3 max-w-3xl text-muted">This page explains the transportation service. Border guides cover the practical details of each crossing, and are being published for the corridors below. Browse the <A href="/border-guides/">border guides</A>.</p>
          <ul className="mt-6 flex flex-wrap gap-2">{GUIDES.map((g) => (<li key={g} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-ink">{g}</li>))}</ul>
          <p className="mt-6 text-sm text-muted">Official sources: {OFFICIAL.map(([n, h], i) => (<span key={n}>{i > 0 && " · "}<a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}</a></span>))}. {VERIFY}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq">
        <div className="container-x max-w-3xl">
          <H2>Saudi Cross-Border Transportation Questions</H2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span>
                </summary>
                <p className="pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 text-center text-white sm:py-24">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Planning to Cross the Saudi Border?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Send us your origin, destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#quote" className="btn-gold">Get Your Cross-Border Quote</Link>
            <a href={waLink("Hello GCC Elite Transport, I need a Saudi Arabia cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
          <p className="mt-4 text-xs text-white/55">Vehicle availability, driver arrangements and border requirements vary by route.</p>
        </div>
      </section>
    </>
  );
}
