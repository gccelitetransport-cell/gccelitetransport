import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/uae/`;
const TITLE = "UAE Cross-Border Transport | Saudi & Oman Transfers";
const DESC = "Private cross-border transportation between the UAE, Saudi Arabia and Oman, with route-specific options for families, groups, business travellers and GCC road journeys.";
const U_ROAD = "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways";
const U_TRANSPORT = "https://u.ae/en/information-and-services/transportation/roadways";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/uae-border-road.svg", width: 1600, height: 900, alt: "Desert highway leading to a border gantry at sunset" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const REQ = "Requirements vary by nationality, destination and vehicle arrangement. Confirm current requirements before travel.";
const SAME = "It depends on the route, vehicle authorization, operator requirements and border regulations. Some cross-border journeys can be arranged with the same vehicle and driver, while other journeys may require a different vehicle or driver arrangement. We confirm the operational setup for each booking before travel.";

type Step = { t: string; k: "pin" | "doc" | "road" | "flag" | "dest" };
const TO_SAUDI: Step[] = [
  { t: "Pickup in the UAE", k: "pin" }, { t: "UAE departure procedures", k: "doc" }, { t: "Border crossing", k: "road" },
  { t: "Saudi entry procedures", k: "flag" }, { t: "Continue by road", k: "road" }, { t: "Final destination", k: "dest" },
];
const TO_OMAN: Step[] = [
  { t: "Pickup in the UAE", k: "pin" }, { t: "UAE departure procedures", k: "doc" }, { t: "UAE–Oman border", k: "road" },
  { t: "Oman entry procedures", k: "flag" }, { t: "Final destination", k: "dest" },
];

const USERS = [
  { t: "Families", d: "Children, elderly passengers and a lot of luggage in one private vehicle, with no shared passengers." },
  { t: "Business travellers", d: "Meetings, executive travel and scheduled return journeys where privacy and timing matter." },
  { t: "Groups", d: "Several passengers and extra bags, matched to an SUV or van with a coordinated pickup." },
  { t: "International visitors", d: "Hotel or airport pickup in the UAE followed by a road journey into a neighboring GCC country." },
];

const VEHICLES = [
  ["Sedan", "Small groups and lighter luggage."],
  ["Premium SUV", "Families and executive travel."],
  ["Large SUV", "Passengers needing extra luggage space."],
  ["Van / Minibus", "Larger families and groups."],
];

const DOCS_P = ["Passport", "Valid visa, where applicable", "Residence documentation, where applicable", "Other destination-required documents"];
const DOCS_V = ["Vehicle registration", "Insurance", "Authorization, where required", "Operator documentation", "Border-specific permits, where applicable"];
const DEPENDS = ["Nationality", "Destination", "Visa status", "Residence status", "Vehicle ownership", "Driver authorization", "Insurance", "Route"];

const PRICE = ["Origin", "Destination", "Border crossing", "Distance", "One-way or return", "Vehicle type", "Passenger count", "Luggage", "Waiting requirements", "Route complexity", "Border and vehicle arrangements", "Driver requirements", "Date and time", "Special requests"];

const SCENARIOS = [
  { t: "Dubai arrival, onward to Saudi Arabia", d: "A family lands in Dubai and wants to continue by private road transport to Saudi Arabia. We need the arrival time, the Saudi destination, how many adults and children, and the bags. The journey is quoted as one international route." },
  { t: "Abu Dhabi to Oman and back", d: "A business traveller needs private transportation to Oman and a planned return. We ask for both dates and times, and for the meeting schedule so waiting time can be planned." },
  { t: "Saudi Arabia to the UAE with luggage", d: "A group with several large suitcases is coming from Saudi Arabia. Vehicle choice starts with head count and bag size, and the arrangement is confirmed before departure." },
  { t: "A multi-country GCC itinerary", d: "A traveller needs a road itinerary through the UAE and another GCC country. We treat each border as its own arrangement and quote the legs together." },
];

const STEPS = [
  ["01", "Send your route", "Origin and destination."],
  ["02", "Send passenger details", "Passengers and luggage."],
  ["03", "Tell us your date and time", "Departure, and return if applicable."],
  ["04", "We review the route", "Vehicle, driver and border-crossing considerations."],
  ["05", "Receive the quote", "Route-specific pricing."],
  ["06", "Confirm the booking", "Final operational details are shared."],
  ["07", "Driver coordination", "Driver and contact information according to the confirmed booking."],
];

const FAQS = [
  { q: "Can I book private transportation from the UAE to Saudi Arabia?", a: "Yes. GCC Elite Transport arranges private road transportation between the UAE and Saudi Arabia on applicable routes. Send your pickup, destination, date and passenger count, and we confirm the available vehicle and driver arrangement before you book." },
  { q: "Can I travel from the UAE to Oman by private vehicle?", a: "Yes, on applicable routes. The UAE and Oman share a land border, and we review your route, vehicle documentation and passenger details before confirming the journey." },
  { q: "Does GCC Elite Transport provide cross-border transportation?", a: "Yes. Cross-border private road transportation is our focus. We do not operate as a UAE city taxi or local transfer service." },
  { q: "Can the same vehicle cross the UAE border?", a: "It depends on route-specific eligibility: the vehicle's authorization, operator requirements and border regulations. Some journeys can use one vehicle, others need a different arrangement. We confirm it for each booking." },
  { q: "Will the same driver remain with us?", a: "Not always. It depends on the route and operational requirements. Where a continuous arrangement is possible we say so up front, and where a driver change applies we tell you before travel." },
  { q: "What documents do I need for a UAE cross-border journey?", a: "Requirements depend on nationality, destination and vehicle arrangement. Passengers usually need a passport and any visa or entry permission that applies to them. Check the relevant authorities for current rules." },
  { q: "Can families book private UAE cross-border transportation?", a: "Yes, subject to route and vehicle availability. Tell us about children, elderly passengers and luggage so we can match the vehicle." },
  { q: "Can groups with luggage travel from the UAE to Saudi Arabia or Oman?", a: "Yes. We choose the vehicle from passenger count and luggage, using an SUV, van or minibus where the route allows." },
  { q: "Can I book one-way transportation?", a: "Yes, subject to route availability. One-way suits passengers who continue independently after arriving." },
  { q: "Can I book a return journey?", a: "Yes. Give us both the outbound and return date and time when you request the quote." },
  { q: "Can I travel from a UAE airport directly to another GCC country?", a: "Airport-connected international road journeys can be arranged where the route and operational setup are available. We quote it as one journey from the airport to your destination." },
  { q: "How much does UAE cross-border transportation cost?", a: "The price is route-specific. It depends on the origin, destination, border, vehicle, passengers, luggage, trip type and driver arrangement. You receive the agreed price before travel." },
  { q: "How early should I book?", a: "Earlier booking is recommended for international road journeys so route, vehicle and border requirements can be reviewed before departure." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "UAE", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "UAE cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["United Arab Emirates", "Saudi Arabia", "Oman", "Bahrain", "Qatar", "Kuwait"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>
);
const A = ({ href, children, ext = false }: { href: string; children: React.ReactNode; ext?: boolean }) => (
  ext ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</a>
    : <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>
);
const Cta = ({ children, href = "#quote" }: { children: React.ReactNode; href?: string }) => (<Link href={href} className="btn-navy mt-6 inline-flex">{children}</Link>);
const Ticks = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className={`mt-3 space-y-2 text-sm ${light ? "text-white/85" : "text-ink"}`}>{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>
);

function StepIcon({ k }: { k: Step["k"] }) {
  const c = { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };
  if (k === "pin") return <svg {...c}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (k === "doc") return <svg {...c}><path d="M7 3h7l4 4v14H7Z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></svg>;
  if (k === "road") return <svg {...c}><path d="M9 3 5 21M15 3l4 18M12 5v3M12 11v3M12 17v3" /></svg>;
  if (k === "flag") return <svg {...c}><path d="M6 21V4M6 4h11l-2 4 2 4H6" /></svg>;
  return <svg {...c}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>;
}

function Flow({ title, steps, to }: { title: string; steps: Step[]; to: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-navy"><Flag id="uae" className="h-4 w-6" /><span className="text-gold">→</span><Flag id={to} className="h-4 w-6" />{title}</div>
      <ol className="mt-4">
        {steps.map((s, i) => (
          <li key={s.t + i} className="relative pb-4 pl-10 last:pb-0">
            {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-[15px] top-8 h-[calc(100%-22px)] w-px bg-gold/60" />}
            <span className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full ${/border/i.test(s.t) ? "bg-gold text-navy" : "bg-navy text-white"}`}><StepIcon k={s.k} /></span>
            <span className="text-sm leading-8 text-ink">{s.t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function RouteMap() {
  // Schematic only: positions are illustrative, not geographic.
  const uae: [number, number] = [260, 150];
  return (
    <figure className="rounded-2xl bg-navy p-4 sm:p-6">
      <svg viewBox="0 0 520 300" role="img" aria-label="Schematic of cross-border routes from the UAE to Saudi Arabia and Oman, and wider GCC connections" className="h-auto w-full">
        <line x1={uae[0]} y1={uae[1]} x2="110" y2="190" stroke="#C9A14A" strokeWidth="2.2" />
        <line x1={uae[0]} y1={uae[1]} x2="420" y2="215" stroke="#C9A14A" strokeWidth="2.2" />
        {[["Qatar", 190, 70], ["Bahrain", 120, 50], ["Kuwait", 60, 100]].map(([n, x, y]) => (<g key={n as string}><line x1={uae[0]} y1={uae[1]} x2={x as number} y2={y as number} stroke="#fff" strokeOpacity=".4" strokeDasharray="3 6" /><circle cx={x as number} cy={y as number} r="5" fill="#0B1F33" stroke="#fff" /><text x={(x as number) + 10} y={(y as number) + 4} fill="#fff" fontSize="12" fontFamily="sans-serif">{n}</text></g>))}
        <circle cx="110" cy="190" r="8" fill="#C9A14A" /><text x="96" y="214" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
        <circle cx="420" cy="215" r="8" fill="#C9A14A" /><text x="392" y="240" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Oman</text>
        <circle cx={uae[0]} cy={uae[1]} r="12" fill="#C9A14A" /><text x={uae[0] + 16} y={uae[1] + 4} fill="#fff" fontSize="14" fontWeight="600" fontFamily="sans-serif">UAE</text>
        <text x="150" y="160" fill="#fff" fillOpacity=".7" fontSize="10" fontFamily="sans-serif">Cross-Border Route</text>
        <text x="330" y="170" fill="#fff" fillOpacity=".7" fontSize="10" fontFamily="sans-serif">Cross-Border Route</text>
        <text x="10" y="290" fill="#fff" fillOpacity=".55" fontSize="10" fontFamily="sans-serif">Dotted: wider GCC journeys, planned individually, usually through another country</text>
      </svg>
      <figcaption className="mt-2 text-xs text-white/60">Schematic, not to scale. Solid lines are the two neighboring-country corridors. No line implies a guaranteed or single-vehicle route.</figcaption>
    </figure>
  );
}

export default function UaePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-navy">
        <Image src="/images/uae-border-road.svg" alt="Illustration of a desert highway leading to a border gantry at sunset" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="text-white">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / UAE</nav>
            <p className="eyebrow mt-5">Private GCC Cross-Border Transportation</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] sm:text-5xl">UAE Cross-Border Transportation</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">Private road transportation to and from the UAE for international GCC journeys, with specialist route planning for Saudi Arabia, Oman and selected wider GCC connections.</p>
            <p className="mt-3 max-w-xl text-white/70">Travel privately between the UAE and neighboring GCC countries with route-specific vehicle and driver arrangements for international road journeys.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">Get a UAE Cross-Border Quote</Link>
              <a href={waLink("Hello GCC Elite Transport, I need a UAE cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
            </div>
          </div>
          <QuoteForm fromCountry="United Arab Emirates" title="Plan Your International Road Journey" button="Request Cross-Border Quote" note="This is an international road journey. We review the route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Van", "Premium SUV", "Executive Vehicle", "Group Vehicle"]} showNotes luggageLabel="Large Luggage" />
        </div>
      </section>

      {/* Gateway */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <H2>UAE as a Gateway for GCC Cross-Border Road Travel</H2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>The UAE government states that the country has road links to two neighbors: Saudi Arabia and Oman. That makes the UAE a road gateway between the Arabian Peninsula&apos;s eastern edge and the rest of the GCC, and it is why a trip that begins at a Dubai, Abu Dhabi or Sharjah address can become an international road journey.</p>
            <p>This page is about that international side only. It does not cover getting around the UAE. What we arrange are journeys that leave or enter the country by road: crossing a border, using a private vehicle that suits the route, and reaching a destination in a neighboring country. That involves border crossings, the passengers&apos; documents, the vehicle&apos;s requirements and a route that has been planned before departure.</p>
            <p>For the wider picture of how private GCC transfers work, read our <A href="/cross-border-transfers/">GCC cross-border transportation overview</A>. Official UAE guidance on <A href={U_ROAD} ext>travelling by road</A> notes several crossing points along the borders, and some are exclusive to GCC citizens.</p>
          </div>
        </div>
      </section>

      {/* Saudi */}
      <section className="section bg-white" id="saudi">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><Flag id="uae" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="saudi-arabia" className="h-5 w-8" /></div>
            <H2>UAE ↔ Saudi Arabia Cross-Border Transportation</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>This is a long-distance corridor. Going from the UAE, the journey runs from a UAE pickup through UAE border procedures, across the border, through Saudi entry procedures and on to a Saudi destination. Coming from Saudi Arabia, it is the reverse: Saudi pickup, Saudi exit procedures, the crossing, UAE entry procedures and a UAE drop-off.</p>
              <p>Typical trips are business travel in both directions, family journeys, private group transport, airport-connected international journeys, hotel-to-hotel transfers across the border and corporate travel. Starting points are usually Dubai or Abu Dhabi, with destinations such as Riyadh or the Eastern Province, and the same in reverse. Other places can be requested and are quoted as separate routes.</p>
              <p>Distance is the main practical factor here, so seating, luggage space and a confirmed driver arrangement matter more than they do on shorter trips. We do not quote border times, because they depend on conditions that change. See also the <A href="/saudi-arabia/">Saudi Arabia cross-border page</A>.</p>
            </div>
            <Cta>Plan a UAE–Saudi Journey</Cta>
          </div>
          <aside className="h-fit rounded-2xl bg-paper p-6 ring-1 ring-slate-200">
            <h3 className="font-semibold text-navy">What we plan for this corridor</h3>
            <Ticks items={["UAE and Saudi pickup or drop-off points", "The border crossing the route uses", "Vehicle category for a long drive", "Driver arrangement across the border", "Luggage and passenger count", "One-way or return schedule"]} />
          </aside>
        </div>
      </section>

      {/* Oman */}
      <section className="section" id="oman">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="order-2 h-fit rounded-2xl bg-navy p-6 text-white lg:order-1">
            <h3 className="font-semibold">Before an Oman road journey</h3>
            <p className="mt-2 text-sm text-white/70">UAE government travel information advises travellers heading to Oman to carry the relevant original vehicle documents and make sure vehicle and passenger insurance requirements are met.</p>
            <Ticks light items={["Original vehicle documents, where applicable", "Vehicle and passenger insurance", "Route and crossing selection", "Passenger entry requirements"]} />
          </aside>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3"><Flag id="uae" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="oman" className="h-5 w-8" /></div>
            <H2>UAE ↔ Oman Cross-Border Transportation</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>The UAE–Oman corridor has a different character. There is more than one crossing, so choosing the right one for your pickup and destination is part of the planning. Sharjah Customs, for example, identifies Khatmat Malaha as an international crossing between the two countries. The route you take depends on where you start and where you finish.</p>
              <p>Families, business travellers and visitors on a wider itinerary use it, including people heading deeper into Oman. Preparation matters: vehicle documentation, insurance and the passengers&apos; entry requirements. Cross-border vehicle eligibility and documentation are reviewed according to the route and applicable requirements, and we do not assume every vehicle can cross every border.</p>
              <p>For the Oman side of the trip see our <A href="/oman/">UAE–Oman cross-border transportation</A> page.</p>
            </div>
            <Cta>Request a UAE–Oman Quote</Cta>
          </div>
        </div>
      </section>

      {/* Wider GCC + map */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <H2>UAE Connections Across the GCC</H2>
            <p className="mt-4 leading-relaxed text-muted">Two corridors are direct neighbor-to-neighbor road links from the UAE: Saudi Arabia and Oman. Journeys involving <A href="/bahrain/">Bahrain</A>, <A href="/qatar/">Qatar</A> or <A href="/kuwait/">Kuwait</A> are wider GCC trips. They can involve transit through another country, several border crossings and a different vehicle arrangement for each leg, so each one is planned individually.</p>
            <p className="mt-3 leading-relaxed text-muted">We never assume one vehicle covers a whole multi-border itinerary. A &ldquo;same driver from the UAE to Qatar&rdquo; or &ldquo;same vehicle across all borders&rdquo; arrangement is only offered when it has been confirmed for your specific booking. Jordan can be a regional extension on some itineraries and is not a GCC country.</p>
          </div>
          <RouteMap />
        </div>
      </section>

      {/* What differs */}
      <section className="section">
        <div className="container-x">
          <H2>What Changes When Your UAE Journey Crosses an International Border?</H2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold text-navy">Domestic journey</h3><p className="mt-2 text-sm text-muted">One country, one set of rules, and no border between pickup and drop-off.</p></div>
            <div className="rounded-2xl border border-gold/50 bg-white p-6"><h3 className="font-semibold text-navy">Cross-border journey</h3><p className="mt-2 text-sm text-muted">Origin country, border procedures and destination country, each with its own requirements.</p></div>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">An international trip can involve passport or identity checks, immigration, customs procedures, vehicle documentation, insurance, authorization, border-specific rules, entry requirements, driver requirements and vehicle eligibility. GCC Elite Transport arranges transportation; immigration and entry decisions remain with the relevant authorities.</p>
        </div>
      </section>

      {/* Diagram */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>The Border Journey, Step by Step</H2>
          <p className="mt-3 text-sm text-muted">Simplified outline. We do not claim exact processing times.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Flow title="UAE → Saudi Arabia" steps={TO_SAUDI} to="saudi-arabia" />
            <Flow title="UAE → Oman" steps={TO_OMAN} to="oman" />
          </div>
        </div>
      </section>

      {/* Same vehicle */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <H2>Will the Same Vehicle and Driver Cross the Border?</H2>
          <p className="mt-4 rounded-xl border border-gold/40 bg-gold/10 p-5 leading-relaxed text-ink">{SAME}</p>
        </div>
      </section>

      {/* Airport */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <H2>UAE Airport to Cross-Border Road Connections</H2>
            <p className="mt-4 leading-relaxed text-muted">We are not an airport taxi. An airport appears here only as the start or end of an international road journey.</p>
            <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-paper text-sm">
              {["Arrive in the UAE, then travel by private vehicle to Saudi Arabia", "Arrive in the UAE, then travel by private vehicle to Oman", "Return from Saudi Arabia or Oman to a UAE airport"].map((i) => (<li key={i} className="px-4 py-3 text-ink">{i}</li>))}
            </ul>
          </div>
          <p className="self-center leading-relaxed text-muted">Passengers arriving at Dubai International, Abu Dhabi International or Sharjah International can continue by road to a neighboring country, and the reverse. Send your flight details with the quote request so the pickup is planned around your arrival, and we quote it as a single journey.</p>
        </div>
      </section>

      {/* Who */}
      <section className="section">
        <div className="container-x">
          <H2>Who Uses Private Cross-Border Transportation From the UAE?</H2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {USERS.map((u) => (<article key={u.t} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-semibold text-navy">{u.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{u.d}</p></article>))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div id="corporate"><h3 className="text-xl font-semibold text-navy">Corporate Cross-Border Transportation From the UAE</h3><p className="mt-2 leading-relaxed text-muted">Executives, corporate teams, business visitors and teams attending GCC meetings need scheduled transport, privacy, luggage space, a professional driver and a planned return. See our <A href="/corporate/">corporate cross-border transportation</A> page.</p></div>
            <div><h3 className="text-xl font-semibold text-navy">Private UAE Cross-Border Travel for Families and Groups</h3><p className="mt-2 leading-relaxed text-muted">The vehicle is reserved for your party, with no shared passengers. Where operationally possible, private pickup and destination drop-off can be arranged according to the confirmed route.</p></div>
          </div>
        </div>
      </section>

      {/* Vehicles + luggage */}
      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Vehicles for UAE Cross-Border Journeys</h2>
            <p className="mt-3 text-sm text-white/70">Selection depends on passenger count, luggage, route, border eligibility and availability. Not every vehicle is authorized for every international route. See <Link href="/fleet/" className="text-gold underline underline-offset-4">cross-border vehicle options</Link>.</p>
            <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {VEHICLES.map(([n, d]) => (<div key={n} className="flex justify-between gap-4 py-3 text-sm"><dt className="font-semibold">{n}</dt><dd className="text-right text-white/70">{d}</dd></div>))}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">How Much Luggage Can You Take?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">It depends on the vehicle type, passenger count, luggage size, route and the cargo space available. Four adults with large suitcases need a different vehicle from four adults with cabin bags. Please tell us:</p>
            <Ticks light items={["Number of large suitcases", "Cabin bags", "Special equipment", "Strollers", "Wheelchairs"]} />
          </div>
        </div>
      </section>

      {/* Docs */}
      <section className="section" id="documents">
        <div className="container-x">
          <H2>Documents for UAE Cross-Border Road Travel</H2>
          <p className="mt-4 max-w-3xl text-muted">What applies depends on: {DEPENDS.join(", ").toLowerCase()}.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Possible passenger documents</h3><Ticks items={DOCS_P} /></div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Possible vehicle documents</h3><Ticks items={DOCS_V} /></div>
          </div>
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{REQ}</p>
        </div>
      </section>

      {/* Compliance */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <H2>International Road Transport From the UAE</H2>
          <p className="mt-4 leading-relaxed text-muted">International passenger road transportation is subject to UAE transport regulations and operational requirements. The UAE&apos;s Land Transport Law covers international land transport, including the documents drivers must carry and the use of official ports and routes, and the government provides services for permits for the land transportation of passengers and goods across borders. Read the <A href={U_TRANSPORT} ext>UAE government&apos;s roadways information</A>.</p>
          <p className="mt-3 text-sm text-muted">This describes the legal framework. It is not a statement that GCC Elite Transport holds any particular license or permit, and we do not make that claim here.</p>
        </div>
      </section>

      {/* Pricing + one way */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>What Determines the Cost of UAE Cross-Border Transportation?</H2>
            <p className="mt-4 leading-relaxed text-muted">There is no single UAE cross-border price. Each route is priced from its own details.</p>
            <ul className="mt-4 flex flex-wrap gap-2">{PRICE.map((f) => (<li key={f} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-ink">{f}</li>))}</ul>
            <Cta>Request a Route-Specific Quote</Cta>
          </div>
          <div>
            <H2>One-Way or Return Cross-Border Transportation</H2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200"><dt className="font-semibold text-navy">One-way</dt><dd className="mt-1 text-muted">Suitable when the passenger continues independently after reaching the destination.</dd></div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200"><dt className="font-semibold text-navy">Return</dt><dd className="mt-1 text-muted">Useful when returning to the UAE, for business meetings, family trips and planned GCC itineraries.</dd></div>
            </dl>
            <p className="mt-3 text-sm text-muted">For a round trip, include both the departure and return date and time in your request.</p>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>Common UAE Cross-Border Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Examples of trip types and how we approach them. They are not customer reviews.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SCENARIOS.map((s) => (<article key={s.t} className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p></article>))}
          </div>
        </div>
      </section>

      {/* Important + booking */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>How UAE Cross-Border Transportation Works</H2>
            <ol className="mt-6 space-y-4">
              {STEPS.map(([n, t, d]) => (<li key={n} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{n}</span><div><h3 className="font-semibold text-navy">{t}</h3><p className="text-sm text-muted">{d}</p></div></li>))}
            </ol>
          </div>
          <aside className="h-fit rounded-2xl border border-gold/40 bg-white p-6">
            <h3 className="text-lg font-semibold text-navy">Important Before You Travel</h3>
            <Ticks items={["Border requirements can change.", "Immigration decisions belong to the authorities.", "Visa eligibility depends on passenger nationality and status.", "Vehicle eligibility depends on route and operator requirements.", "Cross-border arrangements are confirmed per booking."]} />
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq">
        <div className="container-x max-w-3xl">
          <H2>UAE Cross-Border Transportation FAQ</H2>
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

      {/* Related */}
      <section className="section">
        <div className="container-x">
          <H2>Related GCC Routes</H2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[["Saudi Arabia", "/saudi-arabia/"], ["Oman", "/oman/"], ["Bahrain", "/bahrain/"], ["Qatar", "/qatar/"], ["Kuwait", "/kuwait/"]].map(([n, h]) => (
              <li key={h}><Link href={h} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-navy hover:border-gold">UAE ↔ {n}<span className="text-gold">→</span></Link></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final */}
      <section className="bg-navy py-16 text-center text-white sm:py-24">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Planning a Cross-Border Journey From the UAE?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Tell us where you are starting, where you need to go, your travel date, passenger count and luggage requirements. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#quote" className="btn-gold">Get a UAE Cross-Border Quote</Link>
            <a href={waLink("Hello GCC Elite Transport, I need a UAE cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
