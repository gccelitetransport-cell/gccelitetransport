import type { Metadata } from "next";
import Link from "next/link";
import { CountryRoutes } from "@/components/CountryRoutes";
import { Vehicle } from "@/components/Art";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { LuggageCalc, TripToggle } from "@/components/kuwait/Interactive";
import { DrawLine, MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { GatewayHero, GatewayRail } from "@/components/kuwait/QatarClient";
import { FLEET, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/qatar/`;
const TITLE = "Qatar Cross-Border Transport | Saudi Arabia Transfers";
const DESC = "Private cross-border transportation between Qatar and Saudi Arabia through Abu Samra and Salwa, for families, groups and business travellers.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/qatar.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/qatar.jpg"] },
};

const CHECK_REQ = "Check the current official entry requirements applicable to your nationality, residency and destination before travel.";
const SAME = "The vehicle arrangement depends on the route, vehicle eligibility, operator requirements and applicable border procedures. Some journeys may be completed using the same vehicle and driver, while others may require a different arrangement. GCC Elite Transport confirms the operational setup for the specific booking before travel.";
const DRIVER = "That depends on the confirmed route and operational requirements. Driver arrangements are reviewed for each cross-border journey, particularly where vehicle or operator requirements differ between countries.";

const TIMELINE = [
  ["01", "Qatar pickup", "Passengers and luggage are collected."],
  ["02", "Approach Abu Samra", "Private road journey toward the border."],
  ["03", "Qatar departure procedures", "Relevant border formalities."],
  ["04", "International crossing", "Vehicle and passengers proceed through the applicable border process."],
  ["05", "Saudi entry", "Saudi-side entry procedures."],
  ["06", "Continue to destination", "Private road transportation continues according to the confirmed route."],
];
const PRICE = [
  ["Route", "Qatar pickup to Saudi destination."], ["Distance", "Total road distance."], ["Vehicle", "Sedan, SUV or van."], ["Passengers", "Passenger count."],
  ["Luggage", "Bag volume."], ["Journey type", "One-way or return."], ["Border arrangement", "Route-specific requirements."], ["Date & time", "Travel schedule."],
];
const SCENARIOS = [
  { n: "01", t: "Family Journey", r: "Qatar → Saudi Arabia", d: "A private vehicle with family luggage. We ask about children, elderly passengers and bag count, and whether a return is planned." },
  { n: "02", t: "Business Journey", r: "Saudi Arabia → Qatar", d: "A scheduled meeting and a planned return. The return time is agreed up front so the day works around the meeting." },
  { n: "03", t: "Airport-Connected Journey", r: "Qatar airport → Saudi destination", d: "A passenger lands in Qatar and continues by road. The route is quoted as one journey, where it is available and confirmed." },
  { n: "04", t: "Wider GCC Road Journey", r: "Qatar → Saudi Arabia → onward GCC destination", d: "A longer itinerary that continues beyond Saudi Arabia. Each border is its own arrangement." },
];
const STEPS = [
  ["01", "Send your route", "Pickup and destination."], ["02", "Share passenger details", "Passengers and luggage."], ["03", "Choose journey type", "One-way or return."],
  ["04", "Route review", "Vehicle and border considerations."], ["05", "Receive your quote", "Route-specific pricing."], ["06", "Confirm booking", "Final details."],
  ["07", "Driver coordination", "Driver and contact details according to the confirmed booking."],
];
const FAQS = [
  { q: "Can I book private transportation from Qatar to Saudi Arabia?", a: "Yes, private cross-border transportation can be arranged between Qatar and Saudi Arabia, subject to route, vehicle and operational availability. The journey involves international border procedures through the Qatar–Saudi land corridor, so passenger documentation and vehicle arrangements should be reviewed before departure. Send your pickup location, Saudi destination, date, passengers and luggage for a route-specific quote." },
  { q: "Can I travel from Saudi Arabia to Qatar by private vehicle?", a: "Yes, on applicable routes. The journey runs in reverse: Saudi pickup, Saudi departure procedures, the Salwa–Abu Samra crossing and a Qatar destination. Entry requirements depend on each passenger. Send your Saudi pickup and Qatar destination so we can confirm the arrangement." },
  { q: "What is the Qatar–Saudi land border?", a: "It is Qatar's only land border, and it connects Qatar with Saudi Arabia. Road travel between the two countries passes through it, with border procedures on each side. Because every passenger and vehicle is different, we confirm the arrangement for your journey before you book." },
  { q: "What is the Abu Samra border?", a: "Abu Samra is the Qatari side of the land crossing to Saudi Arabia, and Qatar's official authorities run its immigration, security and customs functions. Procedures apply to passengers and vehicles. Check the current official guidance, and tell us your route so we plan around it." },
  { q: "What is the Salwa border?", a: "Salwa is the Saudi side of the same land corridor. After leaving Qatar through Abu Samra, passengers go through Saudi entry procedures at the Saudi side before continuing by road. Requirements vary by passenger, so confirm them with the relevant authority before travel." },
  { q: "Can a private vehicle cross from Qatar into Saudi Arabia?", a: "Often yes, but that depends on the vehicle's eligibility and the operator and border requirements for the route. Some journeys use one vehicle through the crossing, others change vehicle or driver. We confirm the arrangement before booking, so send your route and group size." },
  { q: "Will the same vehicle cross the border?", a: SAME },
  { q: "Will the same driver stay with us?", a: DRIVER },
  { q: "What documents do I need?", a: "Passengers usually need a passport and any visa, entry permission or residency documents that apply to them, and vehicle documents are reviewed for the route. Requirements depend on nationality, residency, destination and current rules. Check the current official entry requirements before travel." },
  { q: "Can families travel privately from Qatar to Saudi Arabia?", a: "Yes, subject to route and vehicle availability. Families travel in a private vehicle with no shared passengers. Tell us about children, elderly passengers and luggage so we can recommend an appropriate vehicle." },
  { q: "Can groups with luggage book transportation?", a: "Yes. We choose the vehicle from passenger count, luggage and route, using an SUV, van or group vehicle where available. Capacity varies by vehicle, so send passenger and bag counts before booking." },
  { q: "Can I book one-way transportation?", a: "Yes, subject to route availability. One-way suits passengers who continue independently after arriving. Send your pickup, destination and travel date for a quote." },
  { q: "Can I book a return trip?", a: "Yes. A return can be planned with the outbound trip, with the return date, time and pickup point agreed in advance. Include both legs when you request your quote." },
  { q: "Can I travel from Hamad International Airport to Saudi Arabia?", a: "Where such an international road journey is available and confirmed, yes. We quote it as one journey from the airport to your Saudi destination. Send your flight arrival time and Saudi destination with the request." },
  { q: "Can Qatar connect to other GCC countries by road?", a: "Qatar's land connection is with Saudi Arabia, so journeys to Bahrain, the UAE, Kuwait or Oman would normally pass through Saudi Arabia and may involve additional borders. Each is planned individually. Tell us the full route you need." },
  { q: "How much does Qatar cross-border transportation cost?", a: "The price is route-specific. It depends on the route, distance, vehicle, passengers, luggage, journey type and border arrangement, and you receive the agreed price before travel. Request a quote to get yours." },
  { q: "How early should I book?", a: "Earlier booking is recommended for international road journeys so route, vehicle and border requirements can be reviewed before departure. For short-notice trips, message us on WhatsApp and we will tell you what is possible." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Qatar", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Qatar cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Qatar", "Saudi Arabia"].map((n) => ({ "@type": "Country", name: n })) },
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
  <div className={`rounded-2xl border bg-paper p-6 ${accent ? "border-gold/60" : "border-slate-200"}`}>
    <h3 className="font-semibold text-navy">{title}</h3>
    <div className="mt-4 flex gap-4">
      <DrawLine viewBox={`0 0 20 ${steps.length * 34}`} d={`M10 10 V${steps.length * 34 - 10}`} dots={steps.map((_, i) => [10, 10 + i * ((steps.length * 34 - 20) / Math.max(steps.length - 1, 1))] as [number, number])} className="w-5 shrink-0" stroke={accent ? "#C9A14A" : "#94a3b8"} />
      <ol className="flex flex-col justify-between text-sm text-ink" style={{ minHeight: steps.length * 34 }}>{steps.map((s) => (<li key={s}>{s}</li>))}</ol>
    </div>
  </div>
);

export default function QatarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GatewayRail />

      {/* Hero */}
      <section data-stage="0" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-ocean text-white">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Qatar</nav>
            <p className="eyebrow mt-5">Qatar ↔ Saudi Arabia</p>
            <p className="qa-in mt-3 text-4xl font-bold leading-[1.08] sm:text-6xl" style={{ animationDuration: ".3s" }} aria-hidden="true">Cross the Border. Travel Privately.</p>
            <h1 className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">Qatar Cross-Border Transportation</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">Private road transportation for international journeys between Qatar and Saudi Arabia, with route-specific vehicle, driver and border planning through the Qatar–Saudi land corridor. This is not a Doha taxi service.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href="#quote" className="btn-gold">Get a Qatar Cross-Border Quote</MagneticLink>
              <a href={waLink("Hello GCC Elite Transport, I need a Qatar cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
            </div>
          </div>
          <GatewayHero />
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <H2>Request a Qatar Cross-Border Quote</H2>
            <p className="mt-4 leading-relaxed text-muted">Tell us the route, date, passengers and bags. We review it and confirm the available private transportation arrangement. This is a quote request, not instant pricing. You can also <A href="/contact/">request a Qatar cross-border quote</A> by message.</p>
          </div>
          <QuoteForm fromCountry="Qatar" toCountry="Saudi Arabia" title="Plan Your Qatar Border Journey" button="Request Cross-Border Quote" note="We'll review your route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Premium SUV", "Van", "Group Vehicle"]} showNotes luggageLabel="Large Bags" cabinBags />
        </div>
      </section>

      {/* Different */}
      <section className="section" data-stage="0">
        <div className="container-x">
          <Reveal><H2>A Qatar–Saudi Journey Is More Than a Local Transfer</H2></Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Flow title="Local journey" steps={["Pickup", "Road", "Destination"]} />
            <Flow title="International journey" accent steps={["Qatar pickup", "Departure procedures", "Abu Samra", "Saudi border", "Entry procedures", "Saudi road journey", "Destination"]} />
          </div>
        </div>
      </section>

      {/* Core */}
      <section className="section bg-white" id="core" data-stage="0">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3"><Flag id="qatar" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="saudi-arabia" className="h-5 w-8" /></div>
            <H2>Qatar ↔ Saudi Arabia Private Transportation</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">Qatar&apos;s only land connection is with Saudi Arabia, so a road journey out of Qatar is a Qatar–Saudi journey. We arrange it in both directions. For the Saudi side, see our <A href="/saudi-arabia/">Saudi Arabia cross-border transportation</A> page, and for the general model, <A href="/cross-border-transfers/">GCC cross-border transportation</A>.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-navy">Qatar → Saudi Arabia</h3>
              <ol className="mt-3 space-y-2 text-sm text-ink">{["Qatar pickup", "Road journey toward Abu Samra", "Qatar departure procedures", "Border crossing", "Saudi entry procedures / Salwa", "Saudi destination"].map((s, i) => (<li key={s} className="flex gap-3"><span className="font-semibold text-gold">{i + 1}</span>{s}</li>))}</ol>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-navy">Saudi Arabia → Qatar</h3>
              <ol className="mt-3 space-y-2 text-sm text-ink">{["Saudi pickup", "Saudi departure procedures", "Salwa", "Border crossing", "Abu Samra", "Qatar destination"].map((s, i) => (<li key={s} className="flex gap-3"><span className="font-semibold text-gold">{i + 1}</span>{s}</li>))}</ol>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">We do not quote crossing durations or border processing times.</p>
        </div>
      </section>

      {/* Abu Samra */}
      <section className="section" data-stage="1" id="abu-samra">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <H2>Abu Samra: Qatar&apos;s Land Gateway to Saudi Arabia</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>Abu Samra is Qatar&apos;s land border connection with Saudi Arabia, and the road to it is the Salwa road. Qatar&apos;s Ministry of Transport has described it as an international gateway, and Qatar Customs lists it as a land customs border with its own operational contacts.</p>
              <p>It handles passenger movement and vehicle-related border procedures. Qatar&apos;s official authorities manage immigration, security and customs functions there, and the Ministry of Interior publishes passenger entry requirements and border guidance. Border processes can involve passenger documentation and vehicle procedures, and we do not state waiting times because they change.</p>
              <p>Qatar&apos;s Ministry of Interior also offers a pre-registration service in its Metrash app for Qatari-registered vehicle owners. Whether it applies to a journey depends on the vehicle and passengers, so we do not assume it. Official sources: <A href="https://www.customs.gov.qa" ext>Qatar General Authority of Customs</A> and <A href="https://portal.moi.gov.qa" ext>Qatar Ministry of Interior</A>.</p>
            </div>
          </Reveal>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white" id="salwa">
            <h3 className="text-xl font-bold">The Saudi Side: Salwa Border</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">The land journey connects Qatar&apos;s Abu Samra side with Saudi Arabia&apos;s Salwa side. After the crossing, passengers go through Saudi entry procedures and the vehicle and driver arrangement continues along the confirmed route.</p>
            <Ticks light items={["Border transition", "Saudi entry procedures", "Passenger documents", "Vehicle arrangement", "Route continuation"]} />
            <p className="mt-4 text-xs text-white/55">We do not state current Saudi operational rules here. Check them with the relevant authority.</p>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white" data-stage="2" id="border">
        <div className="container-x">
          <Reveal><H2>The Border Journey, Stage by Stage</H2></Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map(([n, t, d]) => (
              <li key={n}><Reveal className="h-full rounded-2xl border border-slate-200 bg-paper p-5"><span className={`text-2xl font-bold ${n === "04" ? "text-gold" : "text-navy"}`}>{n}</span><h3 className="mt-1 font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Same vehicle / driver */}
      <section className="section" data-stage="2">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div><H2>Will the Same Vehicle Cross From Qatar Into Saudi Arabia?</H2><p className="mt-4 leading-relaxed text-muted">{SAME}</p></div>
          <div><H2>Will the Same Driver Travel With Us?</H2><p className="mt-4 leading-relaxed text-muted">{DRIVER}</p></div>
        </div>
      </section>

      {/* Documents + QID */}
      <section className="section bg-white" data-stage="2" id="documents">
        <div className="container-x">
          <H2>Documents for Qatar–Saudi Road Travel</H2>
          <p className="mt-4 max-w-3xl text-muted">Requirements can vary according to nationality, passport, residency, visa, destination, vehicle, insurance, authorization and current border rules.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Potential passenger documents</h3><Ticks items={["Passport", "Visa, where required", "Residency documentation, where applicable", "Other destination-specific documents"]} /></div>
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Potential vehicle documents</h3><Ticks items={["Registration", "Insurance", "Authorization", "Operator documentation"]} /></div>
          </div>
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{CHECK_REQ}</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-paper p-6">
            <h3 className="font-semibold text-navy">Can Qatari citizens travel to Saudi Arabia using their Qatari ID?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Qatar&apos;s Ministry of Interior publishes guidance on traveling through the border with the new Qatari smart ID for eligible Qatari citizens, including using the same document for departure and return. That guidance is for eligible citizens only. It should not be assumed for residents, other GCC nationals or other nationalities. Check the Ministry&apos;s current guidance for your own situation.</p>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="section" data-stage="3">
        <div className="container-x">
          <Reveal><H2>Private Qatar–Saudi Transportation for Families</H2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[["Children", "Ages and child-seat needs are settled before the day."], ["Elderly passengers", "Pickup and seating are planned around comfort and ease of access."], ["Family luggage", "Bags drive the choice of vehicle."], ["Private vehicle", "No shared passengers, so the family stays together."], ["A long road journey", "The drive past the border is long, so seating and stops matter."], ["A planned return", "Return date and pickup can be agreed with the outbound trip."]].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-shadow hover:shadow-md"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="section bg-navy text-white" data-stage="3" id="business">
        <div className="container-x">
          <Reveal>
            <H2 light>Executive Cross-Border Transportation Between Qatar and Saudi Arabia</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/75">Executive privacy, scheduled travel, business meetings, return journeys, luggage and professional driver coordination in one planned trip. See our <Link href="/corporate/" className="text-gold underline underline-offset-4">corporate cross-border transportation</Link>.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {["Meeting", "Border", "Saudi destination", "Return"].map((s, i) => (<Reveal key={s}><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{i + 1}</span><span className="text-sm font-semibold">{s}</span></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* Group + planner */}
      <section className="section" data-stage="3">
        <div className="container-x">
          <H2>Group Transportation Across the Qatar–Saudi Border</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">For groups, passenger count and luggage drive the vehicle, and route planning and border considerations follow. Categories: Sedan, SUV, Premium SUV, Van, Group Vehicle.</p>
          <div className="mt-8"><LuggageCalc /></div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="section bg-white" data-stage="3">
        <div className="container-x">
          <H2>Vehicles for Qatar Cross-Border Journeys</H2>
          <p className="mt-3 text-sm text-muted">Where available. Eligibility is confirmed for your route. See <A href="/fleet/">cross-border vehicle options</A>.</p>
        </div>
        <ul className="mt-8 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-label="Vehicle categories, scroll horizontally">
          {FLEET.map((v) => (
            <li key={v.id} className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-paper sm:w-72">
              <div className="flex h-32 items-center justify-center px-6"><div className="h-20 w-full"><Vehicle id={v.id} w={v.w} h={v.h} /></div></div>
              <div className="p-5"><h3 className="font-semibold text-navy">{v.name}</h3><p className="mt-1 text-sm text-ink">{v.pax}</p><p className="text-sm text-muted">{v.bags}</p><p className="mt-2 text-sm text-muted">Best for: {v.use}</p></div>
            </li>
          ))}
        </ul>
      </section>

      {/* Toggle + airport */}
      <section className="section" data-stage="3">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div><H2>One Way or Return?</H2><div className="mt-6"><TripToggle from="Qatar" to="Saudi Arabia" /></div></div>
          <div>
            <H2>Qatar Airport to a Cross-Border Road Journey</H2>
            <p className="mt-4 text-muted">Not an airport taxi. Hamad International Airport appears here only as one end of an international road journey, where it is available and confirmed.</p>
            <div className="mt-4 space-y-2 text-sm font-semibold text-navy">
              {[["Airport arrival", "Passenger pickup", "Abu Samra", "Saudi border", "Saudi destination"], ["Saudi Arabia", "Border", "Qatar", "Hamad International Airport"]].map((r) => (<div key={r[0]} className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">{r.map((s, i) => (<span key={s} className="flex items-center gap-2">{i > 0 && <span className="text-gold">→</span>}{s}</span>))}</div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Wider GCC */}
      <section className="section bg-white" data-stage="3">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2>Qatar and the Wider GCC Road Network</H2>
            <p className="mt-4 leading-relaxed text-muted">Qatar&apos;s land connection is with Saudi Arabia. A journey to <A href="/bahrain/">Bahrain</A>, the <A href="/uae/">UAE</A>, <A href="/kuwait/">Kuwait</A> or Oman would normally run Qatar → Saudi Arabia → the onward destination, and may involve additional border crossings. Qatar has no direct land border with those countries, and we plan these journeys individually.</p>
          </div>
          <figure className="rounded-2xl bg-navy p-5">
            <svg viewBox="0 0 440 230" role="img" aria-label="Qatar to Saudi Arabia, then possible onward GCC road journeys" className="h-auto w-full">
              <path d="M60 36 L60 96" stroke="#C9A14A" strokeWidth="3" />
              {[["Bahrain", 340, 50], ["UAE", 340, 100], ["Kuwait", 340, 150], ["Oman", 340, 200]].map(([n, x, y]) => (<g key={n as string}><path d={`M60 96 Q 190 ${y} ${x} ${y}`} stroke="#fff" strokeOpacity=".5" strokeDasharray="3 6" fill="none" /><circle cx={x as number} cy={y as number} r="5" fill="#0B1F33" stroke="#fff" /><text x={(x as number) + 12} y={(y as number) + 4} fill="#fff" fontSize="12" fontFamily="sans-serif">{n}</text></g>))}
              <circle cx="60" cy="36" r="8" fill="#C9A14A" /><text x="76" y="40" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Qatar</text>
              <circle cx="60" cy="96" r="9" fill="#C9A14A" /><text x="76" y="100" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
            </svg>
            <figcaption className="mt-2 text-xs text-white/60">Wider GCC road journeys, planned individually. Not direct border crossings.</figcaption>
          </figure>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" data-stage="3">
        <div className="container-x">
          <H2>What Determines the Cost of Qatar Cross-Border Transportation?</H2>
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
          <H2>Common Qatar Cross-Border Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Illustrative journey scenarios, not testimonials.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SCENARIOS.map((s) => (
              <article key={s.n} className="rounded-2xl border border-slate-200 bg-paper p-6 transition-transform hover:-translate-y-0.5">
                <span className="text-sm font-semibold text-gold">{s.n}</span><h3 className="mt-1 text-lg font-semibold text-navy">{s.t}</h3><p className="text-xs font-medium text-ocean">{s.r}</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section" data-stage="3">
        <div className="container-x max-w-3xl">
          <H2>From Qatar Pickup to International Road Journey</H2>
          <ol className="mt-8 border-l-2 border-gold/50">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="relative pb-7 pl-8 last:pb-0"><span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{n}</span><h3 className="font-semibold text-navy">{t}</h3><p className="text-sm text-muted">{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq" data-stage="3">
        <div className="container-x max-w-3xl">
          <H2>Qatar Cross-Border Transportation FAQ</H2>
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

      <CountryRoutes countryId="qatar" name="Qatar" />

      {/* Final CTA */}
      <section data-stage="3" className="relative overflow-hidden bg-navy py-16 text-center text-white sm:py-24">
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" className="absolute inset-x-0 top-6 h-24 w-full opacity-30" aria-hidden="true"><path d="M0 70 C 200 70 300 100 400 60 S 600 40 800 70" stroke="#C9A14A" strokeWidth="3" strokeDasharray="8 12" fill="none" className="road-anim" /></svg>
        <div className="container-x relative max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">QATAR → ABU SAMRA → SAUDI ARABIA</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Planning a Qatar–Saudi Road Journey?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Send your pickup location, Saudi destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get a Qatar Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need a Qatar cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
