import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flag } from "@/components/Flag";
import { ArrowIcon, CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, waLink } from "@/lib/site";
import { enAlternates } from "@/lib/i18n";

const URL = `${SITE.url}/cross-border-transfers/`;
const TITLE = "GCC Cross-Border Transport | Private GCC Transfers";
const DESC = "Private cross-border transportation across the GCC and selected regional routes. Request a private vehicle and a route-specific quote.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: enAlternates("/cross-border-transfers/"),
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/cross-border-transfers.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/cross-border-transfers.jpg"] },
};

/* ---------- content ---------- */
const STAGES = [
  { t: "Pickup", d: "Your driver meets the group at the confirmed pickup location." },
  { t: "Road journey", d: "The vehicle travels toward the selected international crossing." },
  { t: "Border crossing", d: "Depending on the crossing, the journey may involve immigration, customs, vehicle checks or other procedures." },
  { t: "Required checks", d: "Passengers carry the documents and permissions that apply to their own journey." },
  { t: "Continue", d: "The trip continues under the vehicle and driver arrangement confirmed beforehand." },
  { t: "Destination", d: "Drop-off at the agreed address or airport." },
];

const COMPARE = [
  { pair: "Saudi Arabia ↔ Bahrain", crossing: "A causeway link rather than an open land frontier", plan: "Causeway procedures, vehicle eligibility and where in each country you start" },
  { pair: "Saudi Arabia ↔ Kuwait", crossing: "A land crossing in the north-east of Saudi Arabia", plan: "Pickup area, passenger documents and the vehicle arrangement on each side" },
  { pair: "Saudi Arabia ↔ Qatar", crossing: "A single main land border", plan: "Distance to the border, vehicle permissions and onward arrangement" },
  { pair: "UAE ↔ Oman", crossing: "More than one land crossing exists", plan: "Which crossing suits your pickup and destination, plus passenger requirements" },
];

const NETWORK = [
  { id: "saudi-arabia", href: "/saudi-arabia/", name: "Saudi Arabia", t: "The largest land network in the region, with road links toward Bahrain, Qatar, Kuwait, the UAE and Oman. Distance and crossing choice shape the journey." },
  { id: "uae", href: "/uae/", name: "United Arab Emirates", t: "Private road transportation can connect major UAE destinations with other GCC markets where an operational road route is available." },
  { id: "bahrain", href: "/bahrain/", name: "Bahrain", t: "International road journeys involving Bahrain may use the King Fahd Causeway when the selected route requires it." },
  { id: "qatar", href: "/qatar/", name: "Qatar", t: "Qatar's land connection runs through its border with Saudi Arabia, so most road journeys are planned around that crossing." },
  { id: "kuwait", href: "/kuwait/", name: "Kuwait", t: "Road travel from Kuwait generally heads south toward Saudi Arabia, with onward legs arranged separately where needed." },
  { id: "oman", href: "/oman/", name: "Oman", t: "Oman connects by road with the UAE, and with Saudi Arabia on longer routes that are reviewed individually." },
];

const USES = [
  { t: "Family travel", d: "A private vehicle for parents, children and the luggage that comes with them. Tell us about child seats, stroller and bag counts so the vehicle is chosen around the group.", cta: "Plan a family journey" },
  { t: "Business travel", d: "Cross-border transportation for executives, meetings, site visits and company travel, with pickup times fixed to a schedule.", cta: "Request business transport", href: "/corporate/" },
  { t: "Airport connections", d: "Road transfers between airports, hotels and destinations on the other side of a border, without arranging a second car on arrival.", cta: "See airport transfers", href: "/airport-transfers/" },
  { t: "Multi-day journeys", d: "A dedicated vehicle for extended GCC trips, events, tours or business schedules, where available.", cta: "Ask about multi-day travel" },
];

const VEHICLES = [
  { n: "Executive Sedan", d: "Smaller groups and business travelers." },
  { n: "Premium SUV", d: "Families and passengers needing extra luggage space." },
  { n: "Large SUV", d: "Larger families or groups needing more passenger capacity." },
  { n: "Premium Van", d: "Groups traveling together." },
  { n: "Minibus", d: "Larger group transportation, where available." },
];

const RESERVED = [
  "No unrelated passengers in the vehicle",
  "Pickup based on your confirmed itinerary",
  "The luggage space is for your group only",
  "A direct transportation arrangement for your party",
  "Flexible departure planning where operations allow",
];

const MODELS = [
  { t: "Continuous vehicle", d: "Where permitted and operationally available, the same vehicle may continue across the border." },
  { t: "Driver / vehicle handover", d: "Some routes may require a different driver or vehicle arrangement for part of the journey." },
  { t: "Route-specific coordination", d: "Certain journeys need individual confirmation before a price can be finalized." },
];

const PRICE_FACTORS = ["Origin", "Destination", "Border crossing", "Distance", "Passenger count", "Luggage", "Vehicle category", "One-way or return", "Waiting requirements", "Driver arrangement", "Route-specific operating costs"];

const ROUTE_CLUSTERS = [
  { a: "Saudi Arabia", b: "Bahrain", n: "Causeway-based journeys" },
  { a: "Saudi Arabia", b: "UAE", n: "Long-distance road corridor" },
  { a: "Saudi Arabia", b: "Qatar", n: "Via the Saudi–Qatar land border" },
  { a: "Saudi Arabia", b: "Kuwait", n: "Northern land crossing" },
  { a: "Saudi Arabia", b: "Oman", n: "Long-distance, reviewed individually" },
  { a: "UAE", b: "Oman", n: "Multiple crossings possible" },
];

const TIMELINE = [
  { n: "01", t: "Route details", d: "You send pickup, destination, date, time, passengers, luggage and vehicle preference." },
  { n: "02", t: "Route review", d: "We review the requested corridor and the border requirements that apply." },
  { n: "03", t: "Vehicle arrangement", d: "The available vehicle and driver arrangement is confirmed." },
  { n: "04", t: "Quote", d: "You receive the confirmed transportation price and journey details." },
  { n: "05", t: "Booking", d: "You confirm the journey." },
  { n: "06", t: "Pickup", d: "The driver meets you at the agreed location." },
];

const SCENARIOS = [
  { t: "Family crossing", s: "Two adults and children with luggage need private transportation between Bahrain and Saudi Arabia.", need: "We would ask for the pickup and drop-off addresses, number of adults and children, bag count, travel date and whether the trip is one way or return. Child seat needs are raised before the vehicle is confirmed." },
  { t: "Executive journey", s: "An executive traveling between Dubai and Muscat needs a private vehicle for a scheduled business trip.", need: "The quote is prepared from the pickup point, the likely crossing, the meeting time, the vehicle category and any waiting the schedule requires." },
  { t: "Group transfer", s: "A group with several large bags needs a vehicle selected around passengers and luggage.", need: "We start from head count and bag size, then match a van, large SUV or minibus to the route, rather than choosing the cheapest option first." },
];

const KNOWLEDGE = [
  ["Border location", "Which crossing a journey uses affects distance, timing and the vehicle arrangement."],
  ["Route selection", "The practical route depends on where the pickup and destination actually are."],
  ["Vehicle suitability", "Seats, luggage space and the route's vehicle rules all matter."],
  ["Passenger luggage", "Bag counts and sizes are confirmed before departure, not at the curb."],
  ["Travel timing", "Departure time is planned around the crossing and the trip's purpose."],
  ["Border procedures", "Passengers are told what to prepare. Procedures themselves are run by the authorities."],
  ["Driver and vehicle plan", "Whether one vehicle continues or a handover applies is confirmed in advance."],
  ["Communication", "Pickup details and journey information are shared before departure."],
];

const TRUST = ["Private transportation", "Pre-trip quote", "Route-specific planning", "Door-to-door options", "GCC-wide coverage", "WhatsApp support"];

const OFFICIAL = [
  ["Saudi Arabia", "https://visa.visitsaudi.com"],
  ["UAE", "https://icp.gov.ae"],
  ["Bahrain", "https://www.npra.gov.bh"],
  ["Qatar", "https://hukoomi.gov.qa"],
  ["Kuwait", "https://www.moi.gov.kw"],
  ["Oman", "https://www.rop.gov.om"],
  ["Jordan", "https://mfa.gov.jo"],
];

const IMMIGRATION = "Requirements depend on nationality, destination and current regulations. Passengers are responsible for meeting the applicable entry requirements. Check the relevant official authority before traveling.";
const VEHICLE_RULE = "Vehicle and driver arrangements depend on the selected route, border and applicable authorization. We confirm the arrangement before the journey.";
const PRICE_RULE = "Cross-border pricing is calculated from the actual origin, destination, vehicle, passenger count, luggage, trip type and route requirements.";

const FAQS = [
  { q: "What is a GCC cross-border transfer?", a: "A GCC cross-border transfer is a pre-arranged private road journey in which passengers travel between countries in the Gulf region using an appropriate vehicle and border crossing. Unlike a local taxi, the route, vehicle arrangement and passenger requirements are planned before departure." },
  { q: "Which GCC countries do you serve?", a: "We coordinate transportation connected with Saudi Arabia, the UAE, Bahrain, Qatar, Kuwait and Oman, plus selected regional routes toward Jordan. Not every pair of countries has a practical road route, so availability is confirmed per journey." },
  { q: "Do you provide private vehicles?", a: "Yes. A private transfer is reserved for your group and is not shared with unrelated passengers." },
  { q: "Can I book a one-way journey?", a: "Yes. Choose One Way in the quote form and tell us the pickup and destination. We confirm availability for that route." },
  { q: "Can I book a return journey?", a: "Yes. Return trips are quoted together with the outbound leg. Share the return date and pickup point when you request the quote." },
  { q: "Can families travel with luggage?", a: "Yes. Give us the number of adults, children and bags so we can match a vehicle with enough seats and luggage space." },
  { q: "Can I choose my vehicle?", a: "You can state a preference such as sedan, SUV, van or minibus. Final availability depends on the route and is confirmed before booking." },
  { q: "Will the same vehicle cross the border?", a: VEHICLE_RULE },
  { q: "Will the same driver stay with us?", a: "Where the route permits a continuous vehicle arrangement, we confirm the vehicle and driver plan before departure. Some routes need a different driver or vehicle for part of the journey." },
  { q: "What documents do passengers need?", a: "Typically a valid passport or accepted ID and any visa or entry permission that applies to the passenger. " + IMMIGRATION },
  { q: "Does GCC Elite Transport arrange visas?", a: "We coordinate transportation, not immigration. Visa and entry eligibility are decided by the relevant authorities. " + IMMIGRATION },
  { q: "Can you guarantee border clearance?", a: "No. Border clearance is decided by the authorities at the crossing. We plan the transportation around the route and tell you what to prepare." },
  { q: "How is the cross-border price calculated?", a: PRICE_RULE },
  { q: "How far ahead should I request a transfer?", a: "As early as you can. Earlier requests give us time to review the route and confirm the vehicle. For short-notice journeys, message us on WhatsApp." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Cross-Border Transfers", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Private cross-border road transportation", serviceType: "Private cross-border transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Saudi Arabia", "United Arab Emirates", "Bahrain", "Qatar", "Kuwait", "Oman", "Jordan"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

/* ---------- small helpers ---------- */
const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>
);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>
);

function NetworkMap() {
  // Schematic only: positions are illustrative, not geographic.
  const n: Record<string, [number, number]> = { jo: [70, 40], kw: [330, 50], sa: [190, 150], bh: [330, 120], qa: [370, 160], ae: [400, 215], om: [440, 275] };
  const lines: [string, string, boolean?][] = [["sa", "bh"], ["sa", "qa"], ["sa", "kw"], ["sa", "ae"], ["sa", "om"], ["ae", "om"], ["sa", "jo", true]];
  const label: Record<string, string> = { jo: "Jordan", kw: "Kuwait", sa: "Saudi Arabia", bh: "Bahrain", qa: "Qatar", ae: "UAE", om: "Oman" };
  return (
    <figure className="rounded-2xl bg-navy p-4 sm:p-6">
      <svg viewBox="0 0 520 320" role="img" aria-label="Schematic of road links between GCC countries and Jordan" className="h-auto w-full">
        {lines.map(([a, b, dash]) => (
          <line key={a + b} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} stroke={dash ? "#ffffff" : "#C9A14A"} strokeOpacity={dash ? 0.5 : 0.8} strokeWidth="1.6" strokeDasharray={dash ? "2 6" : "5 5"} />
        ))}
        {Object.entries(n).map(([k, [x, y]]) => (
          <g key={k}>
            <circle cx={x} cy={y} r={k === "sa" ? 9 : 6} fill={k === "jo" ? "#0B1F33" : "#C9A14A"} stroke={k === "jo" ? "#fff" : "none"} strokeWidth="1.5" />
            <text x={x + (k === "sa" ? -14 : 12)} y={y + 4} textAnchor={k === "sa" ? "end" : "start"} fill="#fff" fontSize="13" fontFamily="sans-serif">{label[k]}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 text-xs text-white/60">Schematic only, not to scale. Lines show corridors we review, not guaranteed routes. Dotted line: regional extension.</figcaption>
    </figure>
  );
}

/* ---------- page ---------- */
export default function CrossBorderTransfers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image src="/images/gulf-highway.svg" alt="Illustration of a highway at sunset with a city skyline in the distance" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Cross-Border Transfers</nav>
          <div className="mt-6 max-w-2xl text-white">
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Private Cross-Border Transportation Across the GCC</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85">Travel between GCC countries by private road transfer, with your journey planned around the route, border crossing, passengers, luggage and vehicle requirements.</p>
            <p className="mt-3 leading-relaxed text-white/70">From short international crossings to long-distance Gulf road journeys, GCC Elite Transport provides pre-booked private transportation rather than ordinary local taxi service.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">Request a Cross-Border Quote</Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp Our Transport Team</a>
            </div>
            <p className="mt-5 text-sm text-white/65">Private vehicles · One-way &amp; return journeys · Route-specific arrangements</p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <H2>Cross-Border Travel Is More Than a Longer Taxi Ride</H2>
            <p className="mt-5 font-medium leading-relaxed text-navy">A GCC cross-border transfer is a pre-arranged private road journey in which passengers travel between countries in the Gulf region using an appropriate vehicle and border crossing.</p>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>A local taxi normally operates inside one country. Once a journey crosses a border, several things change at the same time: the vehicle has to be eligible for the route, the driver arrangement has to suit it, and every passenger needs the documents that apply to them. There may also be time spent at border facilities, and the rules differ from one crossing to the next.</p>
              <p>That is why we plan the transportation around a confirmed route instead of dispatching the nearest car. We look at the pickup point, the crossing, the number of passengers, the luggage and the vehicle category, then tell you the arrangement before you travel.</p>
              <p>There is one distinction we keep clear. GCC Elite Transport handles the <strong className="text-ink">transportation</strong>: route planning, vehicle arrangement and pickup. <strong className="text-ink">Immigration, visas and border clearance</strong> belong to the authorities and to each passenger.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy">A cross-border journey involves</h3>
            <ul className="mt-3 grid gap-2 text-sm text-ink">
              {["International road travel", "Border controls", "Passenger documentation", "Vehicle eligibility", "Driver arrangements", "Route planning and luggage", "Possible waiting at border facilities"].map((i) => (
                <li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Border stages */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>What Changes When Your Journey Crosses a Border?</H2>
          <p className="mt-4 max-w-2xl text-muted">The stages below describe a typical international road journey. Details depend on the crossing.</p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {STAGES.map((s, i) => (
              <li key={s.t} className="relative lg:px-2">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${i === 2 ? "bg-gold text-navy" : "bg-navy text-white"}`}>{i + 1}</span>
                  <span className="hidden h-px flex-1 bg-slate-300 lg:block lg:w-full" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-semibold text-navy">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Route logic */}
      <section className="section">
        <div className="container-x">
          <H2>Every Border Route Has Its Own Logistics</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">Saudi Arabia to Bahrain is not the same journey as Saudi Arabia to Kuwait. UAE to Oman differs from Qatar to Saudi Arabia. Vehicle rules, border procedures, journey distance, passenger requirements and the driver or vehicle arrangement can all change from one route to the next. We do not apply one template to every trip, and we do not quote waiting times or rules we cannot verify for your date.</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Examples of how GCC border routes differ</caption>
              <thead className="bg-navy text-white"><tr><th scope="col" className="px-5 py-3 font-semibold">Route</th><th scope="col" className="px-5 py-3 font-semibold">Type of crossing</th><th scope="col" className="px-5 py-3 font-semibold">What shapes the plan</th></tr></thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARE.map((c) => (
                  <tr key={c.pair}><th scope="row" className="px-5 py-4 font-semibold text-navy">{c.pair}</th><td className="px-5 py-4 text-ink">{c.crossing}</td><td className="px-5 py-4 text-muted">{c.plan}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">General descriptions only. Crossing details and requirements are confirmed for your journey.</p>
        </div>
      </section>

      {/* Network */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>Cross-Border Transportation Across the GCC</H2>
          <p className="mt-4 max-w-2xl text-muted">The six GCC countries as they appear in our road network. Open a country page for transportation details specific to it.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <NetworkMap />
            <ul className="grid gap-3 sm:grid-cols-2">
              {NETWORK.map((c) => (
                <li key={c.id} className="rounded-xl border border-slate-200 bg-paper p-4">
                  <div className="flex items-center gap-2"><Flag id={c.id} className="h-5 w-7" /><h3 className="text-sm font-semibold text-navy">{c.name}</h3></div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.t}</p>
                  <Link href={c.href} className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-ocean hover:text-gold">{c.name} transfers<ArrowIcon className="h-3.5 w-3.5" /></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Jordan */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-2xl border border-dashed border-gold/60 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <Flag id="jordan" className="h-10 w-16 shrink-0" />
            <div>
              <H2>Regional Cross-Border Travel Beyond the GCC</H2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">Jordan is not a GCC country. We include it as a regional destination where GCC Elite Transport operates applicable routes. Availability, border arrangements and vehicle authorization are confirmed individually, just as they are for GCC journeys.</p>
              <Link href="/jordan/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">Jordan regional transfers<ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey types */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>More Than Airport Transfers</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {USES.map((u) => (
              <article key={u.t} className="flex flex-col rounded-2xl border border-slate-200 bg-paper p-6">
                <h3 className="text-lg font-semibold text-navy">{u.t}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{u.d}</p>
                <Link href={u.href ?? "#quote"} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">{u.cta}<ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <H2>Choose the Vehicle Around Your Group</H2>
            <p className="mt-4 leading-relaxed text-muted">The right vehicle depends on passenger count, luggage, journey length, comfort preference and what the route requires. Capacity varies by vehicle and is confirmed in your quote. See the <A href="/fleet/">fleet overview</A> for the categories.</p>
          </div>
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {VEHICLES.map((v) => (
              <li key={v.n} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-navy">{v.n}</span><span className="text-sm text-muted">{v.d}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Private */}
      <section className="section bg-navy text-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2 light>Your Vehicle Is Reserved for Your Group</H2>
            <p className="mt-4 leading-relaxed text-white/75">Private does not mean shared at the last minute. Where the route permits a continuous vehicle arrangement, we confirm the vehicle and driver plan before departure.</p>
          </div>
          <ul className="grid gap-3">
            {RESERVED.map((r) => (<li key={r} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm"><span className="mt-0.5 text-gold"><CheckIcon /></span>{r}</li>))}
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section className="section" id="documents">
        <div className="container-x">
          <H2>Prepare Before You Cross</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">Passengers may need a valid passport, the visa or entry permission that applies to them, identification, vehicle-related information where applicable and any other document the relevant authorities require.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">GCC Elite Transport handles</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Transportation coordination", "Route planning", "Vehicle arrangement", "Pickup details", "Journey communication"].map((i) => <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">The passenger remains responsible for</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["Passport validity", "Visa and entry eligibility", "Personal travel documents", "Immigration compliance"].map((i) => <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>)}</ul>
            </div>
          </div>
          <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-ink">Border, visa, immigration, customs and vehicle requirements can change. Always verify current requirements with the relevant authorities before traveling.</p>
          <p className="mt-4 text-sm text-muted">Official sources:{" "}
            {OFFICIAL.map(([n, h], i) => (<span key={n}>{i > 0 && " · "}<a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}</a></span>))}
            . See also our <A href="/border-guides/">border guides</A>.</p>
        </div>
      </section>

      {/* Arrangements */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>Your Border Arrangement Is Confirmed Before Travel</H2>
          <p className="mt-4 max-w-3xl text-muted">Three arrangements can apply. None of them is universal. {VEHICLE_RULE}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {MODELS.map((m, i) => (
              <article key={m.t} className="rounded-2xl border border-slate-200 bg-paper p-6">
                <span className="text-sm font-semibold text-gold">Model {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold text-navy">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <H2>Why Cross-Border Prices Vary</H2>
            <p className="mt-4 leading-relaxed text-muted">{PRICE_RULE} We do not publish a fixed starting price because the same two countries can produce very different journeys depending on where in each country you start and finish. You receive the agreed price and journey details before the trip.</p>
            <Link href="#quote" className="btn-navy mt-6">Request Your Route Quote</Link>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {PRICE_FACTORS.map((f) => (<li key={f} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-ink">{f}</li>))}
          </ul>
        </div>
      </section>

      {/* Routes */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>Explore Specific GCC Routes</H2>
          <p className="mt-4 max-w-2xl text-muted">This page explains the service. Route pages go into the detail of each corridor and are linked here as they are published. Until then, ask us about any route directly.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTE_CLUSTERS.map((r) => (
              <li key={r.a + r.b} className="rounded-xl border border-slate-200 bg-paper p-5">
                <p className="font-semibold text-navy">{r.a} <span className="text-gold">↔</span> {r.b}</p>
                <p className="mt-1 text-sm text-muted">{r.n}</p>
                <Link href="/routes/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:text-gold">Routes overview<ArrowIcon /></Link>
              </li>
            ))}
            <li className="rounded-xl border border-dashed border-gold/60 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Regional</p>
              <p className="mt-1 font-semibold text-navy">GCC <span className="text-gold">↔</span> Jordan</p>
              <p className="mt-1 text-sm text-muted">Selected routes, confirmed individually</p>
              <Link href="/jordan/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:text-gold">Jordan transfers<ArrowIcon /></Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section className="section">
        <div className="container-x">
          <H2>From Your First Message to Your Destination</H2>
          <ol className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map((s) => (
              <li key={s.n} className="flex gap-4 border-t-2 border-gold pt-4">
                <span className="text-2xl font-bold text-navy">{s.n}</span>
                <div><h3 className="font-semibold text-navy">{s.t}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>Practical Travel Scenarios</H2>
          <p className="mt-4 max-w-2xl text-sm text-muted">Illustrative examples of how we would approach a request. They are not customer stories.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((s) => (
              <article key={s.t} className="rounded-2xl border border-slate-200 bg-paper p-6">
                <h3 className="text-lg font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm italic leading-relaxed text-ink">{s.s}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.need}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container-x">
          <H2>Cross-Border Transport Requires Route Knowledge</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">An ordinary taxi service is not set up to think about these things. We plan for them before the journey, not at the border.</p>
          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {KNOWLEDGE.map(([t, d]) => (<div key={t} className="border-l-2 border-gold pl-4"><dt className="font-semibold text-navy">{t}</dt><dd className="mt-1 text-sm text-muted">{d}</dd></div>))}
          </dl>
          <ul className="mt-10 flex flex-wrap gap-3">
            {TRUST.map((t) => (<li key={t} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-slate-200"><span className="text-gold"><CheckIcon /></span>{t}</li>))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq">
        <div className="container-x max-w-3xl">
          <H2>Cross-Border Transfer Questions</H2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span>
                </summary>
                <p className="pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Planning a Cross-Border Journey?</h2>
            <p className="mt-4 leading-relaxed text-white/75">Send us your pickup location, destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available transportation arrangement.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">Request a Cross-Border Quote</Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
            </div>
            <p className="mt-4 text-xs text-white/55">Route availability, vehicle arrangements and border requirements vary by journey.</p>
            <p className="mt-6 text-sm text-white/70">Also see <Link href="/airport-transfers/" className="text-gold underline underline-offset-4">airport transfers</Link>, <Link href="/corporate/" className="text-gold underline underline-offset-4">corporate transport</Link> and <Link href="/border-guides/" className="text-gold underline underline-offset-4">border guides</Link>.</p>
          </div>
          <div className="text-ink"><QuoteForm compact /></div>
        </div>
      </section>
    </>
  );
}
