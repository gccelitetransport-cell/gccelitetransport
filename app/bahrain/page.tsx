import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CountryRoutes } from "@/components/CountryRoutes";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/bahrain/`;
const TITLE = "Bahrain Cross-Border Transport | Saudi & GCC Transfers";
const DESC = "Private cross-border transfers between Bahrain and Saudi Arabia via the King Fahd Causeway, for families, groups and business travellers.";
const MTT_NEWS = "https://www.mtt.gov.bh/news/transportation-ministry-announces-licensed-taxis-permitted-transport-passengers-king-fahd";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/bahrain.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/bahrain.jpg"] },
};

const VERIFY = "Border, visa, immigration, customs and vehicle requirements can change. Verify current requirements with the relevant authorities before travel.";
const BORDER_TIME = "Border processing time can vary depending on traffic, passenger requirements and current procedures.";

const TO_SAUDI = ["Bahrain pickup", "Bahrain border / immigration", "King Fahd Causeway", "Saudi border / immigration", "Saudi destination"];
const TO_BAHRAIN = ["Saudi pickup", "Saudi border / immigration", "King Fahd Causeway", "Bahrain border / immigration", "Bahrain destination"];

const CROSSING = [
  { n: "1", t: "Passenger pickup", d: "The driver meets the group at the confirmed pickup point." },
  { n: "2", t: "Drive toward the causeway", d: "The vehicle heads for the King Fahd Causeway." },
  { n: "3", t: "Border and immigration procedures", d: "Passengers complete the procedures that apply to them." },
  { n: "4", t: "Vehicle movement through the crossing", d: "The vehicle crosses under the arrangement confirmed for the journey." },
  { n: "5", t: "Continue to the destination", d: "Transportation continues to the agreed drop-off." },
];

const ARRANGEMENTS = [
  { t: "Continuous cross-border vehicle", d: "Where the vehicle is permitted and operationally arranged for the crossing." },
  { t: "Vehicle / driver change", d: "Where a different arrangement is required for part of the journey." },
  { t: "Confirmation before travel", d: "You receive the confirmed transportation arrangement before departure." },
];

const VEHICLES = [
  ["Sedan", "For smaller groups."],
  ["SUV", "For families and luggage."],
  ["Large SUV", "For larger private groups."],
  ["Premium Van", "For groups traveling together."],
  ["Minibus", "For larger groups, where available."],
];

const PRICE = ["Pickup location", "Destination", "Passenger count", "Luggage", "Vehicle", "One-way or return", "Route", "Driver arrangement", "Border-related operating requirements"];

const SCENARIOS = [
  { t: "Bahrain to Dammam", s: "A family needs private transportation from Bahrain to Dammam with luggage.", d: "We would ask for the Bahrain pickup address, the Dammam drop-off, adults and children, the number of large and small bags, and the travel date. If child seats are needed, that is raised before the vehicle is confirmed." },
  { t: "Khobar to Manama", s: "A business traveler needs a private return journey between Saudi Arabia and Bahrain.", d: "The quote depends on both pickup points, the meeting time, how long the traveler stays, and whether the return is on the same day or later. A scheduled return is agreed up front." },
  { t: "Bahrain Airport to a Saudi destination", s: "A passenger lands in Bahrain and needs onward private road transportation into Saudi Arabia.", d: "We need the flight arrival time, the passenger and bag count and the Saudi address. The route is quoted as one international journey, not an airport taxi followed by a separate car." },
];

const FAQS = [
  { q: "Can I book private transportation from Bahrain to Saudi Arabia?", a: "Yes. GCC Elite Transport can arrange private cross-border transportation between Bahrain and Saudi Arabia on applicable routes, subject to vehicle, route and border requirements. Send your pickup, destination, date and passenger details." },
  { q: "Can I travel from Saudi Arabia to Bahrain by private vehicle?", a: "Yes, on applicable routes. The journey runs in the opposite direction over the same corridor, with a Saudi pickup and a Bahrain destination." },
  { q: "Does the Bahrain–Saudi journey cross the King Fahd Causeway?", a: "For Bahrain–Saudi road journeys, the King Fahd Causeway is the principal land connection between the two countries. The actual vehicle arrangement depends on the route and applicable requirements." },
  { q: "Can a private vehicle cross the King Fahd Causeway?", a: "That depends on the vehicle's authorization and the requirements that currently apply. Bahrain's transport ministry regulates which vehicles may carry passengers across, so we confirm the arrangement for your journey before you book." },
  { q: "Will the same vehicle continue across the causeway?", a: "It depends on the vehicle's authorization and the confirmed route arrangement. We do not promise one vehicle for every journey." },
  { q: "Will the same driver remain with us?", a: "Where the arrangement allows a continuous journey we confirm the driver plan in advance. Some arrangements involve a different driver or vehicle for part of the trip." },
  { q: "What documents should I prepare for Bahrain–Saudi travel?", a: "Passengers must carry the documents and permissions applicable to their nationality and destination, typically a valid passport and any visa or entry permission. Check with the relevant authorities before traveling." },
  { q: "Can families travel with luggage?", a: "Yes. Tell us the number of adults, children and bags so we can recommend a suitable vehicle category." },
  { q: "Can I book a one-way Bahrain–Saudi transfer?", a: "Yes, in either direction. One-way suits passengers who are staying in the destination country." },
  { q: "Can I book a return journey?", a: "Yes. Return trips can be Bahrain → Saudi → Bahrain or Saudi → Bahrain → Saudi, and a scheduled return date can be agreed in advance." },
  { q: "Can I travel from Bahrain Airport directly to Saudi Arabia?", a: "Yes, on applicable routes. We treat it as one international road journey and quote it from the airport to your Saudi destination." },
  { q: "Can I travel from Saudi Arabia to Bahrain Airport?", a: "Yes, on applicable routes. Give us your flight time so the pickup is planned around it." },
  { q: "How is the Bahrain–Saudi transfer price calculated?", a: "It depends on the pickup, destination, passengers, luggage, vehicle, trip type and route requirements. You receive the agreed price before travel." },
  { q: "Can I book a private SUV or van?", a: "Yes. State your preference in the quote form. Final availability is confirmed for your journey." },
  { q: "How do I request a Bahrain cross-border quote?", a: "Use the form on this page or message us on WhatsApp with your pickup, destination, date, passenger count and luggage." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Bahrain", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Bahrain cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Bahrain", "Saudi Arabia"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>
);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>
);
const Cta = ({ children, href = "#quote" }: { children: React.ReactNode; href?: string }) => (
  <Link href={href} className="btn-navy mt-6 inline-flex">{children}</Link>
);
const Ticks = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2 text-sm text-ink">{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>
);

function Flow({ title, steps, from, to }: { title: string; steps: string[]; from: string; to: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-navy"><Flag id={from} className="h-4 w-6" /><span className="text-gold">→</span><Flag id={to} className="h-4 w-6" />{title}</div>
      <ol className="mt-4">
        {steps.map((s, i) => (
          <li key={s} className="relative pl-9 pb-5 last:pb-0">
            {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-[13px] top-7 h-[calc(100%-18px)] w-px bg-gold/60" />}
            <span className={`absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${i === 2 ? "bg-gold text-navy" : "bg-navy text-white"}`}>{i + 1}</span>
            <span className={`text-sm ${i === 2 ? "font-semibold text-navy" : "text-ink"}`}>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BahrainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image src="/images/king-fahd-causeway.svg" alt="Illustration of a causeway road crossing the sea at sunset" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="text-white">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Bahrain</nav>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">Bahrain Cross-Border Transportation</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">Private road transfers between Bahrain and Saudi Arabia via the King Fahd Causeway, with route-specific arrangements for passengers, luggage, vehicles and return journeys.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">Get a Bahrain Cross-Border Quote</Link>
              <a href={waLink("Hello GCC Elite Transport, I need a Bahrain cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp Us</a>
            </div>
            <p className="mt-5 text-sm text-white/65">Private Vehicles · Bahrain ↔ Saudi Arabia · One-Way &amp; Return</p>
          </div>
          <QuoteForm fromCountry="Bahrain" title="Plan Your Bahrain Border Transfer" button="Request My Quote" note="Final vehicle and route arrangements are confirmed before travel." />
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <H2>Bahrain&apos;s Gateway to Saudi Arabia by Road</H2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>Bahrain is an island, and its most important international road connection is the King Fahd Causeway to Saudi Arabia. That is why most cross-border road journeys involving Bahrain are Bahrain–Saudi journeys, and why this page is about that corridor rather than about getting around Bahrain.</p>
            <p>Journeys run in both directions: from Bahrain into Saudi Arabia, and from Saudi Arabia into Bahrain. Passengers cross for business, to visit family, to connect with a flight, to move between a hotel and a destination across the water, for weekend travel, for work assignments and as groups. Some travel one way, others book a scheduled return.</p>
            <p>Whatever the reason, the transfer is more than a longer taxi ride. The pickup, the border crossing, the vehicle, the driver arrangement and the passengers&apos; documents all need to line up. We plan those before we confirm a booking. For the general picture of how this works across the region, see our <A href="/cross-border-transfers/">cross-border transfers overview</A>, and for Saudi Arabia as a whole, the <A href="/saudi-arabia/">Saudi Arabia page</A>.</p>
          </div>
        </div>
      </section>

      {/* Causeway core */}
      <section className="section bg-white" id="causeway">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <H2>King Fahd Causeway Cross-Border Transfers</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>For a private transfer, the causeway shapes everything. The pickup is on one side, the destination on the other, and between them sits the border processing that applies to the passengers and the vehicle. We plan the whole route as one journey: the Bahrain-side pickup, the Saudi-side destination, passenger documentation, vehicle requirements, the driver arrangement, luggage and confirmation of the route.</p>
              <p>{BORDER_TIME} We do not quote crossing times, we cannot promise there will be no waiting, and border clearance is decided by the authorities, not by us.</p>
              <p>The regulatory side matters too. Bahrain&apos;s Ministry of Transportation and Telecommunications states that only officially licensed taxis meeting the applicable technical requirements may carry passengers across the causeway under its cross-border taxi arrangement, and its licensing information lists a temporary operating card for such taxis. These are the ministry&apos;s rules for that arrangement. They are not a statement about GCC Elite Transport&apos;s own permissions, and the arrangement for your trip is confirmed with you before you book.</p>
            </div>
            <Cta>Plan Your Causeway Transfer</Cta>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white">
            <h3 className="text-lg font-semibold">What we plan for a causeway journey</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Bahrain-side pickup", "Saudi-side destination", "Border processing", "Passenger documentation", "Vehicle requirements", "Driver arrangement", "Luggage", "Route confirmation"].map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}
            </ul>
            <p className="mt-5 text-sm text-white/70">Learn more on the <Link href="/border-guides/" className="text-gold underline underline-offset-4">King Fahd Causeway border guide</Link>.</p>
          </aside>
        </div>
      </section>

      {/* Diagram */}
      <section className="section">
        <div className="container-x">
          <H2>The Causeway Journey in Both Directions</H2>
          <p className="mt-3 max-w-2xl text-sm text-muted">A simplified outline. It does not show the physical layout of any checkpoint.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Flow title="Bahrain → Saudi Arabia" steps={TO_SAUDI} from="bahrain" to="saudi-arabia" />
            <Flow title="Saudi Arabia → Bahrain" steps={TO_BAHRAIN} from="saudi-arabia" to="bahrain" />
          </div>
        </div>
      </section>

      {/* Crossing + same vehicle */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>What to Expect During a Bahrain–Saudi Crossing</H2>
            <ol className="mt-6 space-y-4">
              {CROSSING.map((c) => (
                <li key={c.n} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{c.n}</span><div><h3 className="font-semibold text-navy">{c.t}</h3><p className="text-sm leading-relaxed text-muted">{c.d}</p></div></li>
              ))}
            </ol>
            <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">Passengers must follow instructions from the relevant border and immigration authorities. GCC Elite Transport does not control passport checks.</p>
          </div>
          <div>
            <H2>Will the Same Vehicle Take Me Across the Causeway?</H2>
            <p className="mt-4 font-medium text-navy">The vehicle arrangement depends on the route, vehicle authorization and applicable regulations.</p>
            <div className="mt-5 space-y-3">
              {ARRANGEMENTS.map((a) => (<div key={a.t} className="rounded-xl border border-slate-200 bg-paper p-4"><h3 className="font-semibold text-navy">{a.t}</h3><p className="mt-1 text-sm text-muted">{a.d}</p></div>))}
            </div>
            <p className="mt-4 text-xs text-muted">We do not guarantee the same car or the same driver on every journey.</p>
          </div>
        </div>
      </section>

      {/* Bahrain -> Saudi */}
      <section className="section" id="bahrain-to-saudi">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div>
            <H2>Bahrain to Saudi Arabia Private Transfers</H2>
            <p className="mt-4 leading-relaxed text-muted">Start from your Bahrain pickup, cross the causeway and finish at your Saudi destination. Common drop-offs are in the Eastern Province, such as Al Khobar, Dammam and Dhahran, and in Riyadh. Other Saudi destinations can be requested and are quoted as longer routes.</p>
            <p className="mt-3 leading-relaxed text-muted">Tell us about luggage, whether you are traveling alone, as a family or as a group, and whether this is one way or a return. Business travelers can ask for a pickup timed to a meeting.</p>
            <Cta>Request Bahrain–Saudi Quote</Cta>
          </div>
          <div id="saudi-to-bahrain">
            <H2>Saudi Arabia to Bahrain Private Transfers</H2>
            <p className="mt-4 leading-relaxed text-muted">The reverse journey starts at a Saudi pickup, crosses the causeway and ends at a Bahrain hotel, home or airport, where applicable. The same private vehicle logic applies: your group, your luggage, a route planned for your booking.</p>
            <p className="mt-3 leading-relaxed text-muted">Many travelers start in the Eastern Province or in Riyadh. Give us the exact pickup area and we confirm the route, one-way or return.</p>
            <Cta>Request Saudi–Bahrain Quote</Cta>
          </div>
        </div>
      </section>

      {/* Airport + business */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Bahrain Airport &amp; Cross-Border Connections</H2>
            <p className="mt-4 leading-relaxed text-muted">We do not operate as a Bahrain airport taxi. The airport matters here only when it is one end of an international road journey.</p>
            <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-paper text-sm">
              {["Bahrain International Airport → Saudi Arabia", "Saudi Arabia → Bahrain International Airport", "Bahrain hotel → Saudi destination", "Saudi destination → Bahrain hotel or airport"].map((i) => (<li key={i} className="px-4 py-3 text-ink">{i}</li>))}
            </ul>
          </div>
          <div id="business">
            <H2>Bahrain–Saudi Business Transportation</H2>
            <p className="mt-4 leading-relaxed text-muted">Executives, consultants, company staff and project teams use the corridor for meetings, site visits and recurring trips. We can arrange a private executive vehicle for a Bahrain ↔ Saudi meeting, an airport-to-office transfer, a hotel-to-business transfer and a return journey on the same schedule.</p>
            <Link href="/corporate/" className="btn-navy mt-6 inline-flex">Request Corporate Transfer</Link>
          </div>
        </div>
      </section>

      {/* Family + one way / return + luggage */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Private Bahrain–Saudi Transportation for Families &amp; Groups</H2>
            <p className="mt-4 leading-relaxed text-muted">Children, several passengers and a boot full of bags are easier in one private vehicle than in two. An SUV or van keeps the group together from pickup to drop-off.</p>
            <p className="mt-3 rounded-lg bg-white p-4 text-sm text-ink ring-1 ring-slate-200">Tell us your passenger count, luggage quantity and preferred vehicle category so we can recommend an appropriate option.</p>
          </div>
          <div>
            <H2>One-Way or Return Causeway Transfers</H2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200"><dt className="font-semibold text-navy">One way</dt><dd className="mt-1 text-muted">Bahrain → Saudi Arabia, or Saudi Arabia → Bahrain.</dd></div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200"><dt className="font-semibold text-navy">Return</dt><dd className="mt-1 text-muted">Bahrain → Saudi → Bahrain, or Saudi → Bahrain → Saudi.</dd></div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200"><dt className="font-semibold text-navy">Scheduled return</dt><dd className="mt-1 text-muted">For travelers with a planned return date and time.</dd></div>
            </dl>
            <Cta>Get a Return Quote</Cta>
          </div>
        </div>
      </section>

      {/* Vehicles + luggage */}
      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Choose the Right Vehicle for Your Causeway Journey</h2>
            <p className="mt-3 text-sm text-white/70">Choice depends on passengers, luggage, route, availability and the cross-border requirements that apply.</p>
            <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {VEHICLES.map(([n, d]) => (<div key={n} className="flex justify-between gap-4 py-3 text-sm"><dt className="font-semibold">{n}</dt><dd className="text-right text-white/70">{d}</dd></div>))}
            </dl>
            <Link href="/fleet/" className="btn-gold mt-6">View Fleet</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Traveling With Luggage? Tell Us Before Booking</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">Luggage decides vehicle size, boot capacity and how comfortable the group is for the whole journey. Please tell us:</p>
            <ul className="mt-4 space-y-2 text-sm">{["Number of large suitcases", "Small bags", "Hand luggage", "Oversized items, if any"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>))}</ul>
            <p className="mt-4 text-xs text-white/55">Luggage space is not unlimited. We confirm what fits before the booking.</p>
          </div>
        </div>
      </section>

      {/* Requirements + responsibilities */}
      <section className="section" id="requirements">
        <div className="container-x">
          <H2>Documents and Requirements for Bahrain–Saudi Travel</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Passengers should check</h3><Ticks items={["Passport validity", "Visa / entry eligibility", "Nationality-specific requirements", "Destination entry rules", "Personal travel documents"]} /></div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Transportation considerations</h3><Ticks items={["Vehicle eligibility", "Driver arrangement", "Operating permissions", "Route", "Passenger count", "Luggage"]} /></div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">Bahrain&apos;s transport authority lists international passenger transport as a regulated activity and has a specific temporary operating-card process for taxis carrying passengers via the causeway. We do not claim that every journey automatically meets those requirements. We confirm the arrangement with you first.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>What GCC Elite Transport Handles — and What You Need to Handle</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">We coordinate</h3><Ticks items={["Vehicle", "Driver", "Route", "Pickup", "Destination", "Journey communication", "Transportation quote"]} /></div>
            <div className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">Passengers are responsible for</h3><Ticks items={["Passport", "Visa / entry eligibility", "Immigration compliance", "Personal documents", "Customs declarations, where applicable"]} /></div>
          </div>
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{VERIFY}</p>
        </div>
      </section>

      {/* Wider GCC + pricing */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Bahrain and the Wider GCC</H2>
            <p className="mt-4 leading-relaxed text-muted">Bahrain–Saudi is our primary corridor from Bahrain. Bahrain has no land border with other countries, so a longer GCC road journey from Bahrain, for example toward Qatar, the UAE, Kuwait, Oman or Jordan, would normally continue through Saudi Arabia. We treat these as multi-border routes and assess them individually.</p>
            <p className="mt-3 text-sm text-muted">Longer GCC journeys are assessed individually because route, border and vehicle arrangements vary. See the <A href="/saudi-arabia/">Saudi Arabia hub</A>, <A href="/qatar/">Qatar</A>, <A href="/uae/">UAE</A>, <A href="/kuwait/">Kuwait</A>, <A href="/oman/">Oman</A> and <A href="/jordan/">Jordan</A> pages.</p>
          </div>
          <div>
            <H2>How Bahrain–Saudi Cross-Border Prices Are Calculated</H2>
            <p className="mt-4 leading-relaxed text-muted">Our price is built from your journey. Government taxi tariffs are regulated fares for licensed taxis and are not our private-transfer prices, so we do not copy them or publish a &ldquo;from&rdquo; figure.</p>
            <ul className="mt-4 flex flex-wrap gap-2">{PRICE.map((f) => (<li key={f} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-ink">{f}</li>))}</ul>
            <Cta>Request Your Exact Quote</Cta>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>How to Book a Bahrain Cross-Border Transfer</H2>
          <ol className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {[["01", "Send your route", "Pickup, destination, date and time."], ["02", "Add passenger details", "Passengers, luggage and vehicle preference."], ["03", "Route review", "We review the requested route and vehicle arrangement."], ["04", "Quote", "You receive the transportation price and journey details."], ["05", "Confirm", "You approve the booking."], ["06", "Travel", "Meet your driver at the confirmed pickup location."]].map(([n, t, d]) => (
              <li key={n} className="flex gap-4 border-t-2 border-gold pt-4"><span className="text-2xl font-bold text-navy">{n}</span><div><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section">
        <div className="container-x">
          <H2>Real Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Illustrative examples of how we approach a request. They are not customer stories.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((s) => (<article key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-semibold text-navy">{s.t}</h3><p className="mt-2 text-sm italic text-ink">{s.s}</p><p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p></article>))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <H2>Why the King Fahd Causeway Matters</H2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>The causeway is the land link between Bahrain and Saudi Arabia, so it is where road travel between the two countries happens. It also sets the rules for what can carry passengers across.</p>
            <p>In September 2026, Bahrain&apos;s Ministry of Transportation and Telecommunications announced that licensed taxis from Bahrain and Saudi Arabia may carry passengers across the causeway, effective 6 September. The ministry says the arrangement requires officially licensed taxis that meet approved technical requirements, including a vehicle-age condition.</p>
            <p>That framework is about licensed taxis. It does not tell you whether a specific operator or vehicle is authorized, and we do not claim our service is licensed under it. We confirm the vehicle arrangement for each journey. Read the ministry&apos;s own announcement for the full terms.</p>
          </div>
          <p className="mt-4 text-sm"><a href={MTT_NEWS} target="_blank" rel="noopener noreferrer" className="font-medium text-ocean underline underline-offset-4 hover:text-gold">Official Bahrain Transport Ministry information<span className="sr-only"> (opens in a new tab)</span></a></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container-x max-w-3xl">
          <H2>Bahrain Cross-Border Questions</H2>
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

      <CountryRoutes countryId="bahrain" name="Bahrain" />

      {/* Final CTA */}
      <section className="bg-navy py-16 text-center text-white sm:py-24">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Crossing Between Bahrain and Saudi Arabia?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Send us your pickup location, destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#quote" className="btn-gold">Get Your Bahrain Cross-Border Quote</Link>
            <a href={waLink("Hello GCC Elite Transport, I need a Bahrain cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
          <p className="mt-4 text-xs text-white/55">Vehicle availability, border procedures and transportation arrangements vary by route and current requirements.</p>
        </div>
      </section>
    </>
  );
}
