import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CountryRoutes } from "@/components/CountryRoutes";
import { Vehicle } from "@/components/Art";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { LuggageCalc, TripToggle } from "@/components/kuwait/Interactive";
import { BorderMap, CorridorFinder, HeroRoute, TripProfile } from "@/components/kuwait/JordanClient";
import { DrawLine, MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { GatewayRail } from "@/components/kuwait/QatarClient";
import { FLEET, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/jordan/`;
const TITLE = "Jordan Cross-Border Transport | Saudi Arabia Transfers";
const DESC = "Private cross-border transportation between Jordan and Saudi Arabia for families, groups and business travellers on long regional road journeys.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/jordan.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/jordan.jpg"] },
};

const REQ = "Requirements can vary by nationality, residency, destination and vehicle arrangement. Confirm current requirements with the relevant authorities before travel.";
const SAME = "It depends on the route, vehicle eligibility, operator requirements and applicable border procedures. Some journeys may use the same vehicle and driver, while others may require a different vehicle or driver arrangement. GCC Elite Transport confirms the operational setup for the specific booking before travel.";
const DRIVER = "Driver arrangements depend on the confirmed route, vehicle requirements and operational setup. Where a route requires a driver or vehicle change, the arrangement is explained before the journey is confirmed.";

const TIMELINE = [["01", "Pickup in Jordan"], ["02", "Journey toward the border"], ["03", "Jordan departure procedures"], ["04", "Border crossing"], ["05", "Saudi entry procedures"], ["06", "Continue to destination"]];
const LONG = [
  ["Vehicle space", "Passenger and luggage planning, so the group is not squeezed for a long drive."],
  ["Journey planning", "Departure time and return planning agreed before the day."],
  ["Border preparation", "Documents and requirements checked ahead, not at the crossing."],
  ["Private travel", "No shared passengers where the confirmed service is private."],
  ["Route coordination", "Pickup, border and destination planned as one journey."],
];
const PRICE = [["Route", "Jordan pickup to Saudi destination."], ["Distance", "Long-distance road mileage."], ["Vehicle", "Sedan, SUV or van."], ["Passengers", "Passenger count."], ["Luggage", "Bag volume."], ["Border arrangement", "Route-specific requirements."], ["One-way / return", "Journey structure."], ["Date & time", "Travel schedule."]];
const SCENARIOS = [
  { n: "01", t: "Family Road Journey", r: "Jordan → Saudi Arabia", d: "A private vehicle with luggage and children. We ask about child seats, elderly passengers and bag count." },
  { n: "02", t: "Umrah Journey", r: "Jordan → Saudi Arabia", d: "Long-distance private transportation for a pilgrim group. The passengers' permits remain their own responsibility." },
  { n: "03", t: "Business Travel", r: "Saudi Arabia → Jordan", d: "A scheduled meeting and a return planned around it." },
  { n: "04", t: "Airport-Connected Journey", r: "Queen Alia Airport → Saudi destination", d: "A passenger lands in Jordan and continues by road. Quoted as one journey, where available." },
  { n: "05", t: "Regional GCC Journey", r: "Jordan → Saudi Arabia → onward GCC destination", d: "A multi-country itinerary. Each border and vehicle arrangement is separate." },
];
const STEPS = [
  ["01", "Send your route", "Jordan pickup and Saudi destination."], ["02", "Passenger details", "Passengers and luggage."], ["03", "Travel date", "Date and departure time."],
  ["04", "Route review", "Border and vehicle considerations."], ["05", "Receive your quote", "Route-specific pricing."], ["06", "Confirm booking", "Final operational arrangement."],
  ["07", "Driver coordination", "Driver and contact information according to the confirmed booking."],
];
const FAQS = [
  { q: "Can I book private transportation from Jordan to Saudi Arabia?", a: "Yes, private cross-border transportation can be arranged between Jordan and Saudi Arabia, subject to route, vehicle and operational availability. The journey involves international border procedures, so passenger documentation and vehicle arrangements should be reviewed before departure. Send your Jordan pickup location, Saudi destination, travel date, passenger count and luggage details for a route-specific quote." },
  { q: "Can I travel from Saudi Arabia to Jordan by private vehicle?", a: "Yes, on applicable routes. The journey runs in reverse: Saudi pickup, Saudi departure procedures, the border crossing and Jordan entry procedures. Entry requirements depend on each passenger. Send your Saudi pickup and Jordan destination so we can confirm the arrangement." },
  { q: "What are the main Jordan–Saudi border crossings?", a: "The land crossings are commonly known as Al-Omari, Mudawara and Al-Durra, on the Jordanian side. Which one applies depends on your origin, destination, vehicle arrangement and current operating conditions. Tell us your route and we confirm the corridor with you." },
  { q: "What is the Al-Omari border?", a: "Al-Omari is a Jordan–Saudi land crossing in the north, linked with Al-Haditha on the Saudi side. Customs and entry procedures apply to passengers and vehicles, and requirements vary. Check current official information, and send your route so we plan around it." },
  { q: "What is the Mudawara border?", a: "Mudawara is a Jordan–Saudi land crossing in southern Jordan, linked with Halat Ammar on the Saudi side. Jordanian authorities publish updates on passenger movement there. It is not the right crossing for every journey, so we confirm it per route." },
  { q: "Can I cross from Jordan to Saudi Arabia in a private vehicle?", a: "Often, but it depends on the vehicle's eligibility and the operator and border requirements for the route. Some journeys use one vehicle through the crossing, others change vehicle or driver. We confirm the arrangement before booking, so send your route and group size." },
  { q: "Will the same vehicle cross the border?", a: SAME },
  { q: "Will the same driver stay with us?", a: DRIVER },
  { q: "What documents do I need?", a: "Passengers usually need a passport and any visa, entry permission or residency documents that apply to them, and vehicle documents are reviewed for the route. Requirements vary by nationality, residency, destination and vehicle arrangement. Confirm current requirements with the relevant authorities before travel." },
  { q: "Do I need a Saudi visa?", a: "It depends on your nationality, residency, purpose of travel and current Saudi entry rules, so there is no universal yes or no. Check eligibility on the official Saudi visa portal before booking, and contact us with your route once your documents are clear." },
  { q: "Can families travel privately from Jordan to Saudi Arabia?", a: "Yes, subject to route and vehicle availability. Families travel in a private vehicle with no shared passengers. Tell us about children, elderly passengers and luggage so we can recommend an appropriate vehicle." },
  { q: "Can groups with luggage book cross-border transportation?", a: "Yes. We choose the vehicle from passenger count, luggage and route, using an SUV, van or group vehicle where available. Capacity varies by vehicle, so send passenger and bag counts before booking." },
  { q: "Can I book one-way transportation?", a: "Yes, subject to route availability. One-way suits passengers who continue independently after arriving. Send your pickup, destination and date for a quote." },
  { q: "Can I book a return journey?", a: "Yes. A return can be planned together with the outbound trip, with the return date, time and pickup point agreed in advance. Include both legs when you request your quote." },
  { q: "Can I travel from Queen Alia Airport directly to Saudi Arabia?", a: "Where such an international road journey is available and confirmed, yes. We quote it as one journey from the airport to your Saudi destination. Send your flight arrival time and destination with the request." },
  { q: "Can Jordan connect to the UAE or Bahrain by road?", a: "Only through Saudi Arabia. Jordan has no direct border with those countries, so such journeys are multi-country road journeys with several border crossings and separate arrangements. Each is planned individually, so tell us the full route you need." },
  { q: "Can I book Jordan–Saudi transportation for Umrah?", a: "Road transportation for Umrah travellers can be arranged on applicable routes. Religious travel is subject to the Saudi rules and permits that apply to each passenger, and we make no entry guarantees. Share your group size, route and dates for a quote." },
  { q: "How much does Jordan cross-border transportation cost?", a: "The price is route-specific. It depends on the route, distance, vehicle, passengers, luggage, journey type and border arrangement, and you receive the agreed price before travel. Request a quote to get yours." },
  { q: "How early should I book?", a: "Earlier booking is recommended for long-distance international journeys so route, vehicle and border requirements can be reviewed before departure. For short-notice trips, message us on WhatsApp and we will say what is possible." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Jordan", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Jordan cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Jordan", "Saudi Arabia"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (<h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>);
const A = ({ href, children, ext = false }: { href: string; children: React.ReactNode; ext?: boolean }) => (
  ext ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</a>
    : <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>);
const Ticks = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className={`mt-3 space-y-2 text-sm ${light ? "text-white/85" : "text-ink"}`}>{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>
);
const Flow = ({ title, steps, accent = false }: { title: string; steps: string[]; accent?: boolean }) => (
  <div className={`rounded-2xl border bg-white p-6 ${accent ? "border-gold/60" : "border-slate-200"}`}>
    <h3 className="font-semibold text-navy">{title}</h3>
    <div className="mt-4 flex gap-4">
      <DrawLine viewBox={`0 0 20 ${steps.length * 34}`} d={`M10 10 V${steps.length * 34 - 10}`} dots={steps.map((_, i) => [10, 10 + i * ((steps.length * 34 - 20) / Math.max(steps.length - 1, 1))] as [number, number])} className="w-5 shrink-0" stroke={accent ? "#C9A14A" : "#94a3b8"} />
      <ol className="flex flex-col justify-between text-sm text-ink" style={{ minHeight: steps.length * 34 }}>{steps.map((s) => (<li key={s}>{s}</li>))}</ol>
    </div>
  </div>
);

export default function JordanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GatewayRail items={["Jordan", "Border", "Saudi", "Destination"]} />

      {/* Cinematic hero */}
      <section data-stage="0" className="relative isolate overflow-hidden bg-navy text-white">
        <Image src="/images/jordan-saudi-road.svg" alt="Illustration of a long desert highway at sunset" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/55 to-navy/90" />
        <div className="container-x py-14 sm:py-24 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Jordan</nav>
          <p className="eyebrow mt-6">Jordan ↔ Saudi Arabia</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">Jordan Cross-Border Transportation</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">Private road transportation for international journeys between Jordan and Saudi Arabia, with route-specific vehicle, driver and border planning. Jordan is a regional road connection into the GCC. This is not a Jordan taxi service.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get a Jordan Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need a Jordan cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
          <div className="mt-12 rounded-2xl border border-white/15 bg-navy/50 p-5 backdrop-blur-sm"><HeroRoute /></div>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <H2>Request a Jordan Cross-Border Quote</H2>
            <p className="mt-4 leading-relaxed text-muted">Tell us the route, date, passengers and bags. We review it and confirm the available private transportation arrangement. This is a quote request, not instant pricing. You can also <A href="/contact/">request a Jordan cross-border quote</A> by message.</p>
          </div>
          <QuoteForm fromCountry="Jordan" toCountry="Saudi Arabia" title="Plan Your Jordan–Saudi Road Journey" button="Request Cross-Border Quote" note="We'll review your route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Premium SUV", "Van", "Group Vehicle"]} showNotes notesLabel="Special Requirements" luggageLabel="Large Luggage" cabinBags />
        </div>
      </section>

      {/* Different */}
      <section className="section" data-stage="0">
        <div className="container-x">
          <Reveal><H2>A Jordan–Saudi Journey Is an International Road Trip</H2></Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Flow title="Domestic" steps={["Pickup", "Road", "Destination"]} />
            <Flow title="Cross-border" accent steps={["Jordan pickup", "International road", "Jordan departure procedures", "Border crossing", "Saudi entry procedures", "Saudi road journey", "Final destination"]} />
          </div>
        </div>
      </section>

      {/* Core */}
      <section className="section bg-white" data-stage="0" id="core">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3"><Flag id="jordan" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="saudi-arabia" className="h-5 w-8" /></div>
            <H2>Jordan ↔ Saudi Arabia Private Transportation</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">Jordan is not a GCC country. It is a regional road connection into the GCC, and Saudi Arabia is the country it meets by land. We arrange private journeys in both directions as part of our <A href="/cross-border-transfers/">GCC cross-border transportation</A> network. For the Saudi side see <A href="/saudi-arabia/">Saudi Arabia cross-border transportation</A>.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">Jordan → Saudi Arabia</h3><ol className="mt-3 space-y-2 text-sm text-ink">{["Jordan pickup", "Road journey toward the border", "Jordan departure procedures", "International crossing", "Saudi entry procedures", "Saudi destination"].map((s, i) => (<li key={s} className="flex gap-3"><span className="font-semibold text-gold">{i + 1}</span>{s}</li>))}</ol></div>
            <div className="rounded-2xl border border-slate-200 bg-paper p-6"><h3 className="font-semibold text-navy">Saudi Arabia → Jordan</h3><ol className="mt-3 space-y-2 text-sm text-ink">{["Saudi pickup", "Saudi departure procedures", "Saudi border", "International crossing", "Jordan entry procedures", "Jordan destination"].map((s, i) => (<li key={s} className="flex gap-3"><span className="font-semibold text-gold">{i + 1}</span>{s}</li>))}</ol></div>
          </div>
          <p className="mt-4 text-xs text-muted">We do not state border processing times.</p>
        </div>
      </section>

      {/* Crossings */}
      <section className="section" data-stage="1" id="crossings">
        <div className="container-x">
          <Reveal>
            <H2>Jordan–Saudi Border Crossings</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">The Jordan–Saudi road network has more than one border corridor. The appropriate border crossing depends on the origin, destination, vehicle arrangement and current operational conditions. We never tell everyone to use one crossing, and a crossing can be updated or paused, which is why every journey is confirmed individually.</p>
          </Reveal>
          <div className="mt-8"><BorderMap /></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">What Is the Al-Omari Border Crossing?</h3><p className="mt-2 text-sm leading-relaxed text-muted">Al-Omari is a Jordan–Saudi land crossing in the north, relevant to international passenger and vehicle movement. Customs and entry procedures apply, and requirements can vary. Jordan Customs maintains operational information for the crossing, and we state no waiting times.</p></article>
            <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">What Is the Mudawara Border Crossing?</h3><p className="mt-2 text-sm leading-relaxed text-muted">Mudawara is a crossing in southern Jordan, relevant to some Jordan–Saudi road routes. Jordanian authorities have published information on passenger movement through it, including during busy religious-travel periods. It is not the right crossing for every passenger or vehicle.</p></article>
            <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Al-Durra and Aqaba-Side Journeys</h3><p className="mt-2 text-sm leading-relaxed text-muted">Al-Durra serves the Aqaba side, and Jordan&apos;s transport authorities have issued operational updates about it. We only consider it where the route is relevant, and promise no specific crossing before reviewing pickup, destination, vehicle, date and current conditions.</p></article>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-navy">Which Border Corridor Applies to Your Journey?</h3>
            <div className="mt-5"><CorridorFinder /></div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white" data-stage="1">
        <div className="container-x max-w-3xl">
          <Reveal><H2>The Border Procedure, Step by Step</H2></Reveal>
          <ol className="mt-8 border-l-2 border-gold/50">
            {TIMELINE.map(([n, t]) => (<li key={n} className="relative pb-6 pl-8 last:pb-0"><Reveal><span className={`absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${n === "04" ? "bg-gold text-navy" : "bg-navy text-gold"}`}>{n}</span><h3 className="font-semibold text-navy">{t}</h3></Reveal></li>))}
          </ol>
        </div>
      </section>

      {/* Same vehicle / driver */}
      <section className="section" data-stage="1">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div><H2>Will the Same Vehicle Cross Into Saudi Arabia?</H2><p className="mt-4 leading-relaxed text-muted">{SAME}</p></div>
          <div><H2>Will the Same Driver Stay With Us?</H2><p className="mt-4 leading-relaxed text-muted">{DRIVER}</p></div>
        </div>
      </section>

      {/* Documents + visa */}
      <section className="section bg-white" data-stage="1" id="documents">
        <div className="container-x">
          <H2>Documents for Jordan–Saudi Cross-Border Travel</H2>
          <p className="mt-4 max-w-3xl text-muted">What applies depends on nationality, passport, visa, residency, destination, vehicle ownership, insurance, vehicle authorization and current border regulations.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Potential passenger documentation</h3><Ticks items={["Passport", "Visa, where applicable", "Residency documentation, where applicable", "Destination-specific documents"]} /></div>
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Vehicle</h3><Ticks items={["Registration", "Insurance", "Authorization", "Operator documentation"]} /></div>
          </div>
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{REQ}</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-paper p-6">
            <h3 className="text-xl font-semibold text-navy">Do I Need a Visa to Travel From Jordan to Saudi Arabia?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">It depends on your nationality, residency, purpose of travel and the current Saudi entry rules. There is no universal yes or no. Check your eligibility on the <A href="https://visa.visitsaudi.com" ext>official Saudi visa portal</A> before you book, and see <A href="https://mfa.gov.jo" ext>Jordan&apos;s Ministry of Foreign Affairs</A> for Jordanian guidance.</p>
          </div>
        </div>
      </section>

      {/* Family / business / umrah */}
      <section className="section" data-stage="2">
        <div className="container-x">
          <Reveal><H2>Private Jordan–Saudi Transportation for Families</H2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[["Children", "Ages and child-seat needs are settled before the day."], ["Elderly passengers", "Seating and pickup are planned around ease of access."], ["Luggage", "Bags drive the choice of vehicle."], ["Long-distance comfort", "The drive is long, so seating and planned stops matter."], ["A private vehicle", "No shared passengers, so the family stays together."], ["A scheduled return", "The return date and pickup can be agreed with the outbound trip."]].map(([t, d]) => (<div key={t} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-shadow hover:shadow-md"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white" data-stage="2" id="business">
        <div className="container-x">
          <Reveal>
            <H2 light>Executive Cross-Border Transportation Between Jordan and Saudi Arabia</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/75">Executive privacy, scheduled road travel, regional business meetings, return journeys, luggage and professional driver coordination. See our <Link href="/corporate/" className="text-gold underline underline-offset-4">corporate cross-border transportation</Link>.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {["Jordan", "Border", "Saudi Arabia", "Business destination"].map((s, i) => (<Reveal key={s}><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{i + 1}</span><span className="text-sm font-semibold">{s}</span></div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section" data-stage="2">
        <div className="container-x max-w-3xl">
          <H2>Jordan–Saudi Road Transportation for Umrah and Religious Travel</H2>
          <p className="mt-4 leading-relaxed text-muted">Some passengers travel by road from Jordan into Saudi Arabia for Umrah, religious visits, family travel or scheduled pilgrim journeys. We arrange the transportation. Religious travel is subject to the current Saudi rules and permits that apply to each passenger, and we make no guarantees about visas, permits or entry.</p>
        </div>
      </section>

      {/* Group + planner + vehicles */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x">
          <H2>Group Transportation From Jordan to Saudi Arabia</H2>
          <p className="mt-4 max-w-3xl text-muted">Passenger count, luggage, vehicle category, route and border requirements decide the booking. Categories: Sedan, SUV, Premium SUV, Van, Group Vehicle.</p>
          <div className="mt-8"><LuggageCalc /></div>
        </div>
      </section>

      <section className="section" data-stage="2">
        <div className="container-x">
          <H2>Vehicles for Jordan Cross-Border Journeys</H2>
          <p className="mt-3 text-sm text-muted">Where available. Eligibility is confirmed for your route. See <A href="/fleet/">cross-border vehicle options</A>.</p>
        </div>
        <ul className="mt-8 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-label="Vehicle categories, scroll horizontally">
          {FLEET.map((v) => (
            <li key={v.id} className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white sm:w-72">
              <div className="flex h-32 items-center justify-center bg-paper px-6"><div className="h-20 w-full"><Vehicle id={v.id} w={v.w} h={v.h} /></div></div>
              <div className="p-5"><h3 className="font-semibold text-navy">{v.name}</h3><p className="mt-1 text-sm text-ink">{v.pax}</p><p className="text-sm text-muted">{v.bags}</p><p className="mt-2 text-sm text-muted">Best for: {v.use}</p></div>
            </li>
          ))}
        </ul>
      </section>

      {/* Long distance */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x">
          <H2>Planning a Long-Distance Jordan–Saudi Road Journey</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">Departure time, passenger comfort, luggage, rest, vehicle selection, border procedures, documents, return planning and destination pickup or drop-off all affect a long drive. We settle them before you travel.</p>
          <h3 className="mt-10 text-2xl font-bold text-navy">Built for Long Road Journeys</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LONG.map(([t, d]) => (<div key={t} className="rounded-2xl border border-slate-200 bg-paper p-5 transition-transform hover:-translate-y-0.5"><h4 className="font-semibold text-navy">{t}</h4><p className="mt-2 text-sm text-muted">{d}</p></div>))}
          </div>
          <h3 className="mt-12 text-2xl font-bold text-navy">Your Trip Profile</h3>
          <div className="mt-5"><TripProfile /></div>
        </div>
      </section>

      {/* Airport + toggle */}
      <section className="section" data-stage="3">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Jordan Airport to a Cross-Border Road Journey</H2>
            <p className="mt-4 text-muted">Not an airport taxi. Queen Alia International Airport appears here only as one end of an international road journey.</p>
            <div className="mt-4 space-y-2 text-sm font-semibold text-navy">
              {[["Arrival", "Private pickup", "Jordan–Saudi border", "Saudi destination"], ["Saudi Arabia", "Border", "Jordan", "Queen Alia International Airport"]].map((r) => (<div key={r[0]} className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">{r.map((s, i) => (<span key={s} className="flex items-center gap-2">{i > 0 && <span className="text-gold">→</span>}{s}</span>))}</div>))}
            </div>
          </div>
          <div><H2>One Way or Return?</H2><div className="mt-6"><TripToggle from="Jordan" to="Saudi Arabia" /></div></div>
        </div>
      </section>

      {/* Wider */}
      <section className="section bg-white" data-stage="3">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2>Jordan and the Wider GCC Road Network</H2>
            <p className="mt-4 leading-relaxed text-muted">Jordan is not GCC, and it has no direct border with the Gulf states other than Saudi Arabia. A road journey toward <A href="/bahrain/">Bahrain</A>, <A href="/qatar/">Qatar</A>, the <A href="/uae/">UAE</A>, <A href="/kuwait/">Kuwait</A> or <A href="/oman/">Oman</A> would run Jordan → Saudi Arabia → the onward destination. These are multi-country regional road journeys with transit through Saudi Arabia, several border crossings, separate vehicle arrangements and different entry requirements, and we plan each one individually.</p>
          </div>
          <figure className="rounded-2xl bg-navy p-5">
            <svg viewBox="0 0 440 240" role="img" aria-label="Jordan to Saudi Arabia, then possible onward GCC road journeys" className="h-auto w-full">
              <path d="M60 36 L60 100" stroke="#C9A14A" strokeWidth="3" />
              {[["Bahrain", 340, 40], ["Qatar", 340, 85], ["UAE", 340, 130], ["Kuwait", 340, 175], ["Oman", 340, 220]].map(([n, x, y]) => (<g key={n as string}><path d={`M60 100 Q 190 ${y} ${x} ${y}`} stroke="#fff" strokeOpacity=".5" strokeDasharray="3 6" fill="none" /><circle cx={x as number} cy={y as number} r="5" fill="#0B1F33" stroke="#fff" /><text x={(x as number) + 12} y={(y as number) + 4} fill="#fff" fontSize="12" fontFamily="sans-serif">{n}</text></g>))}
              <circle cx="60" cy="36" r="8" fill="#0B1F33" stroke="#fff" strokeWidth="2" /><text x="76" y="40" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Jordan</text>
              <circle cx="60" cy="100" r="9" fill="#C9A14A" /><text x="76" y="104" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
            </svg>
            <figcaption className="mt-2 text-xs text-white/60">Regional GCC road connectivity, planned individually. Not direct Jordan borders.</figcaption>
          </figure>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" data-stage="3">
        <div className="container-x">
          <H2>What Determines the Cost of Jordan Cross-Border Transportation?</H2>
          <p className="mt-3 text-sm text-muted">No universal prices are published. Each journey is priced from its own details.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRICE.map(([t, d]) => (<li key={t}><Reveal className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-gold"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Reveal></li>))}
          </ul>
          <MagneticLink href="#quote" className="btn-navy mt-8">Request a Route-Specific Quote</MagneticLink>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-white" data-stage="3">
        <div className="container-x">
          <H2>Common Jordan Cross-Border Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Illustrative travel scenarios, not testimonials.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCENARIOS.map((s) => (<article key={s.n} className="rounded-2xl border border-slate-200 bg-paper p-6 transition-transform hover:-translate-y-0.5"><span className="text-sm font-semibold text-gold">Scenario {s.n}</span><h3 className="mt-1 text-lg font-semibold text-navy">{s.t}</h3><p className="text-xs font-medium text-ocean">{s.r}</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p></article>))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section" data-stage="3">
        <div className="container-x max-w-3xl">
          <H2>From Jordan Pickup to Saudi Destination</H2>
          <ol className="mt-8 border-l-2 border-gold/50">
            {STEPS.map(([n, t, d]) => (<li key={n} className="relative pb-7 pl-8 last:pb-0"><Reveal><span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{n}</span><h3 className="font-semibold text-navy">{t}</h3><p className="text-sm text-muted">{d}</p></Reveal></li>))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq" data-stage="3">
        <div className="container-x max-w-3xl">
          <H2>Jordan Cross-Border Transportation FAQ</H2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary>
                <p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CountryRoutes countryId="jordan" name="Jordan" />

      {/* Final */}
      <section data-stage="3" className="relative isolate overflow-hidden bg-navy py-16 text-center text-white sm:py-24">
        <Image src="/images/jordan-saudi-road.svg" alt="" aria-hidden="true" fill sizes="100vw" loading="lazy" className="-z-10 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-navy/70" />
        <div className="container-x relative max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">JORDAN → BORDER → SAUDI ARABIA</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Planning a Jordan–Saudi Road Journey?</h2>
          <p className="mt-4 leading-relaxed text-white/80">Send your Jordan pickup location, Saudi destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get a Jordan Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need a Jordan cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
