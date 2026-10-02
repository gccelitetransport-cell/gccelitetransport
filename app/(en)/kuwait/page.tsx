import type { Metadata } from "next";
import Link from "next/link";
import { CountryRoutes } from "@/components/CountryRoutes";
import { Vehicle } from "@/components/Art";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { HeroRoute, LuggageCalc, RouteSelector, TripToggle } from "@/components/kuwait/Interactive";
import { DrawLine, JourneyBar, MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { FLEET, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/kuwait/`;
const TITLE = "Kuwait Cross-Border Transport | Saudi Arabia Transfers";
const DESC = "Private cross-border transportation between Kuwait and Saudi Arabia for families, groups and business travellers, with route-specific planning.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/kuwait.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/kuwait.jpg"] },
};

const REQ = "Requirements vary according to nationality, residency, destination and vehicle arrangement. Confirm current requirements before travel.";
const SAME = "This depends on the route, vehicle eligibility, operator requirements and border procedures. Some journeys may be completed with the same vehicle and driver, while others may require a different vehicle or driver arrangement. The operational setup is confirmed for each booking.";

const TIMELINE = ["Pickup in Kuwait", "Kuwait departure procedures", "International border", "Saudi entry procedures", "Continue by road", "Final destination"];
const PRICE = [
  ["Route", "Pickup and drop-off points on each side."], ["Distance", "A short run to the border or a long drive beyond it."], ["Vehicle", "Category chosen for the group."],
  ["Passengers", "Head count and any special needs."], ["Luggage", "Bags and any large items."], ["One-way / return", "A return leg is planned with the outbound."],
  ["Border arrangement", "Vehicle and driver setup for the crossing."], ["Date & time", "When you need to travel."], ["Waiting / special requirements", "Scheduled stops or extra requests."],
];
const SCENARIOS = [
  { n: "01", t: "Family Journey", r: "Kuwait → Saudi Arabia", d: "A family with luggage and children needs a private vehicle for the whole trip. We ask about child seats, elderly passengers and bag count before choosing the vehicle." },
  { n: "02", t: "Business Journey", r: "Saudi Arabia → Kuwait", d: "A scheduled meeting in Kuwait and a transfer back afterwards. The return is agreed up front so timing works for the meeting." },
  { n: "03", t: "Airport-Connected Journey", r: "Kuwait airport → Saudi destination", d: "A passenger lands in Kuwait and continues by private road to Saudi Arabia. We quote it as one international journey." },
  { n: "04", t: "Regional GCC Journey", r: "Kuwait → Saudi Arabia → another GCC destination", d: "A longer itinerary that continues beyond Saudi Arabia. Each border is its own arrangement, and the legs are quoted together." },
];
const STEPS = [
  ["01", "Tell us your route", "Pickup and destination."], ["02", "Share travel details", "Date, time, passengers and luggage."], ["03", "Route review", "Vehicle and border considerations."],
  ["04", "Receive your quote", "Route-specific pricing."], ["05", "Confirm", "Booking confirmation."], ["06", "Driver coordination", "Driver details shared according to the confirmed booking."],
];
const FAQS = [
  { q: "Can I book private transportation from Kuwait to Saudi Arabia?", a: "Yes, private transportation can be arranged between Kuwait and Saudi Arabia, subject to route and vehicle availability. Because border requirements vary by passenger and vehicle, the operational arrangement is confirmed before booking. Send your Kuwait pickup, Saudi destination, travel date, passengers and luggage for a route-specific quote." },
  { q: "Can I travel from Saudi Arabia to Kuwait by private vehicle?", a: "Yes, on applicable routes. The journey runs in reverse: a Saudi pickup, Saudi exit procedures, the border, Kuwait entry procedures and a Kuwait drop-off. Entry requirements for Kuwait depend on each passenger. Share your pickup and travel details so we can confirm the vehicle arrangement." },
  { q: "Does the vehicle cross the Kuwait–Saudi border?", a: "Often it can, but that depends on the vehicle's eligibility and the route. Some arrangements use one vehicle through the border, others change vehicle or driver. We confirm which applies to your journey before you book, so tell us your route and group size." },
  { q: "Will the same driver stay with us?", a: "Not in every case. Where the route allows a continuous arrangement we say so in advance, and where a driver change applies we tell you before travel. Ask for the driver plan when you request your quote." },
  { q: "Will the same vehicle cross the border?", a: SAME + " Request a quote with your route and we confirm it." },
  { q: "What documents do I need?", a: "Passengers usually need a passport and any visa, entry permission or residency documents that apply to them, and vehicle documents are reviewed for the route. " + REQ + " Check the relevant authorities for current rules." },
  { q: "Can families travel privately from Kuwait to Saudi Arabia?", a: "Yes, subject to route and vehicle availability. Families travel in a private vehicle with no shared passengers. Tell us the number of children, any elderly passengers and your luggage so we can recommend an appropriate vehicle." },
  { q: "Can groups with luggage book cross-border transportation?", a: "Yes. We choose the vehicle from passenger count, luggage and route, using an SUV, van or group vehicle where available. Because capacity varies by vehicle, send your passenger and bag counts before booking." },
  { q: "Can I book one-way transportation?", a: "Yes, subject to route availability. One-way suits passengers who continue independently after arriving. Send your pickup, destination and date for a quote." },
  { q: "Can I book a return journey?", a: "Yes. A return can be planned together with the outbound trip, as a same-trip return or a scheduled return later. Include both dates, times and pickup points when you request the quote." },
  { q: "Can I travel from Kuwait Airport to Saudi Arabia by road?", a: "Yes, airport-connected international journeys can be arranged where the route and operational setup are available. We quote it as one journey from the airport to your Saudi destination. Send your flight arrival time with the request." },
  { q: "Can Kuwait transportation connect me with wider GCC countries?", a: "In some cases. Journeys to Bahrain, Qatar, the UAE or Oman normally pass through Saudi Arabia and involve several borders and arrangements. They are planned individually. Tell us the full route you need." },
  { q: "How much does Kuwait cross-border transportation cost?", a: "The price is route-specific. It depends on the route, distance, vehicle, passengers, luggage, trip type and border arrangement, and you receive the agreed price before travel. Request a quote to get yours." },
  { q: "How early should I book?", a: "Earlier booking is recommended for international road journeys so route, vehicle and border requirements can be reviewed before departure. For short-notice trips, message us on WhatsApp." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Kuwait", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Kuwait cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Kuwait", "Saudi Arabia"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (<h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (<Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>);
const Ticks = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className={`mt-3 space-y-2 text-sm ${light ? "text-white/85" : "text-ink"}`}>{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>
);

export default function KuwaitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JourneyBar />

      {/* Hero: split screen */}
      <section data-stage="0" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-ocean text-white">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Kuwait</nav>
            <p className="eyebrow mt-5">Kuwait ↔ Saudi Arabia</p>
            <p className="mt-3 text-4xl font-bold leading-[1.08] sm:text-6xl" aria-hidden="true">Cross Kuwait&apos;s Border. Travel Privately.</p>
            <h1 className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">Kuwait Cross-Border Transportation</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">Private road transportation for international journeys between Kuwait and Saudi Arabia, with route-specific vehicle and driver arrangements. This is not a Kuwait taxi service.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href="#quote" className="btn-gold">Get a Cross-Border Quote</MagneticLink>
              <a href={waLink("Hello GCC Elite Transport, I need a Kuwait cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp Us</a>
            </div>
          </div>
          <HeroRoute />
        </div>
      </section>

      {/* Selector */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <H2>Where Are You Traveling?</H2>
            <p className="mb-8 mt-3 max-w-2xl text-muted">Pick a direction to see how the journey is planned. Availability is confirmed per request.</p>
            <RouteSelector />
          </Reveal>
        </div>
      </section>

      {/* Why different */}
      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <H2>Kuwait–Saudi Cross-Border Travel Is Not a Local Taxi Journey</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">Kuwait&apos;s Ministry of Interior runs formal entry and exit procedures for passengers and vehicles at its land borders. A cross-border trip passes through them. A local trip does not.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="font-semibold text-navy">Local transportation</h3>
              <ol className="mt-4 space-y-1 text-sm text-ink">{["One country", "Local route", "Destination"].map((s, i) => (<li key={s} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-xs">{i + 1}</span>{s}</li>))}</ol>
            </div>
            <div className="rounded-2xl border border-gold/60 bg-paper p-6">
              <h3 className="font-semibold text-navy">Cross-border transportation</h3>
              <div className="mt-4 flex gap-4">
                <DrawLine viewBox="0 0 20 150" d="M10 10 V140" dots={[[10, 10], [10, 45], [10, 80], [10, 115], [10, 140]]} className="h-36 w-5 shrink-0" />
                <ol className="flex flex-col justify-between text-sm text-ink">{["Origin", "Departure procedures", "International border", "Entry procedures", "Destination"].map((s) => (<li key={s}>{s}</li>))}</ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core */}
      <section className="section" id="core" data-stage="0">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3"><Flag id="kuwait" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="saudi-arabia" className="h-5 w-8" /></div>
            <H2>Kuwait ↔ Saudi Arabia Private Transportation</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>This is the corridor Kuwait is built around. Kuwait&apos;s land connection to the rest of the GCC runs south into Saudi Arabia, so most road journeys out of Kuwait are Kuwait–Saudi journeys. We arrange them in both directions.</p>
              <p>From Kuwait, the journey starts with a private pickup, goes through Kuwait departure procedures, crosses the border, passes Saudi entry procedures and ends at your Saudi destination. Coming the other way, the sequence reverses. Typical destinations include the Eastern Province, Dammam, Al Khobar and Riyadh, and the same places are common starting points for trips into Kuwait. These are examples. Other destinations are quoted as separate routes.</p>
              <p>Two crossings are commonly used between the countries: Nuwaiseeb on the Kuwaiti side (toward Khafji in Saudi Arabia) and Salmi. Which one suits you depends on where you start and finish, so we confirm the route with you. Kuwait&apos;s Abdali crossing is on the border with Iraq and is not part of these journeys. See our <A href="/saudi-arabia/">Saudi Arabia cross-border transportation</A> page for the Saudi side, and the <A href="/cross-border-transfers/">GCC cross-border transportation overview</A> for how transfers work in general.</p>
            </div>
          </Reveal>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white">
            <h3 className="font-semibold">Common route examples</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">{["Kuwait → Eastern Saudi Arabia", "Kuwait → Dammam or Al Khobar", "Kuwait → Riyadh", "Eastern Province → Kuwait", "Riyadh → Kuwait"].map((i) => (<li key={i} className="flex gap-2"><span className="text-gold">›</span>{i}</li>))}</ul>
            <p className="mt-4 text-xs text-white/55">Examples only. We do not list every city pairing.</p>
          </aside>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white" id="quote-wrap">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <H2>Request a Kuwait Cross-Border Quote</H2>
            <p className="mt-4 leading-relaxed text-muted">Tell us the route, date, passengers and luggage. We review it and confirm the available private transportation arrangement. This is a quote request, not instant pricing.</p>
            <p className="mt-3 text-sm text-muted">Prefer to talk? <A href="/contact/">Request a Kuwait cross-border quote</A> by message, or use WhatsApp.</p>
          </div>
          <QuoteForm fromCountry="Kuwait" title="Plan Your Kuwait Border Journey" button="Request My Quote" note="We'll review your route and confirm the available arrangement." showNotes luggageLabel="Large Luggage" />
        </div>
      </section>

      {/* Border timeline */}
      <section className="section" data-stage="1" id="border">
        <div className="container-x">
          <Reveal><H2>The Border Journey, Stage by Stage</H2></Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {TIMELINE.map((t, i) => (
              <li key={t} className="relative lg:pr-3">
                <div className="flex items-center">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${i === 2 ? "bg-gold text-navy" : "bg-navy text-white"}`}>0{i + 1}</span>
                  {i < 5 && <span aria-hidden="true" className="ml-2 hidden h-0.5 flex-1 bg-gold/60 lg:block" />}
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">{t}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-muted">We do not quote border times. They depend on conditions that change.</p>
        </div>
      </section>

      {/* Disclaimer + same vehicle */}
      <section className="section bg-white" data-stage="1">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gold/50 bg-gold/10 p-6">
            <h2 className="text-xl font-bold text-navy">Before Your Journey</h2>
            <p className="mt-2 text-sm text-ink">Border requirements can depend on:</p>
            <Ticks items={["Nationality", "Visa status", "Residency", "Passport validity", "Vehicle documentation", "Insurance", "Operator requirements", "Current border rules"]} />
            <p className="mt-4 text-sm leading-relaxed text-ink">Immigration and entry decisions are made by the relevant authorities. GCC Elite Transport provides transportation arrangements and route coordination, and does not control immigration or border-entry decisions.</p>
          </div>
          <div>
            <H2>Will the Same Vehicle and Driver Cross the Border?</H2>
            <p className="mt-4 leading-relaxed text-muted">{SAME}</p>
            <p className="mt-3 text-sm text-muted">We do not promise the same vehicle, the same driver or an uninterrupted journey unless it is confirmed for your route.</p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section" data-stage="1" id="documents">
        <div className="container-x">
          <H2>What Documents Are Needed for a Kuwait–Saudi Road Journey?</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Passenger</h3><Ticks items={["Passport", "Visa, where required", "Residency documentation, where applicable", "Other destination-specific requirements"]} /></div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Vehicle</h3><Ticks items={["Registration", "Insurance", "Authorization, where required", "Operator documentation", "Route-specific requirements"]} /></div>
          </div>
          <p className="mt-5 text-sm text-muted">{REQ}</p>
        </div>
      </section>

      {/* Family */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x">
          <Reveal><H2>Private Kuwait–Saudi Transportation for Families</H2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[["Children", "Tell us ages and whether child seats are needed so it is arranged before the day."], ["Elderly passengers", "Pickup and seating are planned around comfort and ease of getting in and out."], ["Family luggage", "Bags decide the vehicle. Count them before you book."], ["One private vehicle", "No shared passengers, so the group stays together from pickup to drop-off."], ["A long drive", "Distance past the border is longer than many expect, so seating and stops matter."], ["Departure planning", "Departure time is planned around your schedule where operations allow."]].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-paper p-5"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Business (dark) */}
      <section className="section bg-navy text-white" data-stage="2" id="business">
        <div className="container-x">
          <Reveal>
            <H2 light>Executive Cross-Border Travel Between Kuwait and Saudi Arabia</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/75">Executive privacy, scheduled travel, return journeys, business meetings, regional corporate travel, luggage space and professional driver coordination, in one planned trip. See our <Link href="/corporate/" className="text-gold underline underline-offset-4">corporate GCC transportation</Link>.</p>
          </Reveal>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {["Meeting", "Border", "Destination", "Return"].map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-3 sm:flex-col sm:items-start">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{i + 1}</span>
                <span className="text-sm font-semibold">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group + luggage */}
      <section className="section" data-stage="2">
        <div className="container-x">
          <H2>Group Transportation Across the Kuwait–Saudi Border</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">For groups, passenger count, luggage capacity and vehicle category decide the booking, and the route and border arrangement are planned around them. Try the planner below.</p>
          <div className="mt-8"><LuggageCalc /></div>
        </div>
      </section>

      {/* Vehicles carousel */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x">
          <H2>Choose the Right Vehicle for Your Border Journey</H2>
          <p className="mt-3 text-sm text-muted">Categories where available. Capacity varies by vehicle, and eligibility is confirmed for your route. See <A href="/fleet/">cross-border vehicle options</A>.</p>
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

      {/* Pricing */}
      <section className="section" data-stage="2">
        <div className="container-x">
          <H2>What Determines the Cost?</H2>
          <p className="mt-3 text-sm text-muted">No fixed prices are published. Each journey is priced from its own details.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRICE.map(([t, d]) => (<li key={t} className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-gold"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></li>))}
          </ul>
          <MagneticLink href="#quote" className="btn-navy mt-8">Request a Route-Specific Quote</MagneticLink>
        </div>
      </section>

      {/* One-way / return */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div><H2>One Way or Return?</H2><p className="mt-4 text-muted">Plan the journey around your schedule. Toggle to see how each trip type looks.</p></div>
          <TripToggle />
        </div>
      </section>

      {/* Wider GCC */}
      <section className="section" data-stage="2">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2>Kuwait and the Wider GCC Road Network</H2>
            <p className="mt-4 leading-relaxed text-muted">Kuwait has no direct land border with Bahrain, Qatar, the UAE or Oman. Journeys to those countries usually pass through Saudi Arabia, so they involve several international borders, a different vehicle arrangement for each leg and extra route planning. Read about the <A href="/bahrain/">Bahrain</A>, <A href="/qatar/">Qatar</A>, <A href="/uae/">UAE</A> and <A href="/oman/">Oman</A> sides.</p>
            <p className="mt-3 text-sm text-muted">We assess these multi-border journeys individually, and we do not assume one vehicle covers a whole itinerary.</p>
          </div>
          <figure className="rounded-2xl bg-navy p-5">
            <svg viewBox="0 0 440 240" role="img" aria-label="Kuwait to Saudi Arabia, then possible onward GCC road journeys" className="h-auto w-full">
              <path d="M60 40 L60 100" stroke="#C9A14A" strokeWidth="3" />
              {[["Bahrain", 330, 60], ["Qatar", 330, 130], ["UAE", 330, 190], ["Oman", 330, 232]].map(([n, x, y]) => (<g key={n as string}><path d={`M60 100 Q 180 ${y} ${x} ${y}`} stroke="#fff" strokeOpacity=".5" strokeDasharray="3 6" fill="none" /><circle cx={x as number} cy={y as number} r="5" fill="#0B1F33" stroke="#fff" /><text x={(x as number) + 12} y={(y as number) + 4} fill="#fff" fontSize="12" fontFamily="sans-serif">{n}</text></g>))}
              <circle cx="60" cy="40" r="8" fill="#C9A14A" /><text x="76" y="44" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Kuwait</text>
              <circle cx="60" cy="100" r="9" fill="#C9A14A" /><text x="76" y="104" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
            </svg>
            <figcaption className="mt-2 text-xs text-white/60">Possible wider GCC road journeys, planned individually. Not direct routes.</figcaption>
          </figure>
        </div>
      </section>

      {/* Airport */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x">
          <H2>Kuwait Airport to an International Road Journey</H2>
          <p className="mt-4 max-w-3xl text-muted">We are not an airport taxi. An airport appears here only as one end of an international road journey.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[["Kuwait International Airport", "Private vehicle", "Saudi Arabia"], ["Saudi Arabia", "Private vehicle", "Kuwait International Airport"]].map((r) => (
              <div key={r[0]} className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-paper p-4 text-sm font-semibold text-navy">{r.map((s, i) => (<span key={s} className="flex items-center gap-2">{i > 0 && <span className="text-gold">→</span>}{s}</span>))}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section" data-stage="2">
        <div className="container-x">
          <H2>Common Kuwait Cross-Border Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Illustrative trip types, not testimonials.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SCENARIOS.map((s) => (
              <article key={s.n} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
                <span className="text-sm font-semibold text-gold">Scenario {s.n}</span>
                <h3 className="mt-1 text-lg font-semibold text-navy">{s.t}</h3>
                <p className="text-xs font-medium text-ocean">{s.r}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x max-w-3xl">
          <H2>From Route Request to Border Journey</H2>
          <ol className="relative mt-8 border-l-2 border-gold/50">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="relative pb-7 pl-8 last:pb-0">
                <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{n}</span>
                <h3 className="font-semibold text-navy">{t}</h3><p className="text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" data-stage="2">
        <div className="container-x max-w-3xl">
          <H2>Kuwait Cross-Border Transportation FAQ</H2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span>
                </summary>
                <p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CountryRoutes countryId="kuwait" name="Kuwait" />

      {/* Final CTA */}
      <section data-stage="2" className="relative overflow-hidden bg-navy py-16 text-center text-white sm:py-24">
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" className="absolute inset-x-0 top-6 h-24 w-full opacity-30" aria-hidden="true"><path d="M0 80 C 200 80 250 30 400 30 S 600 80 800 70" stroke="#C9A14A" strokeWidth="3" strokeDasharray="8 12" fill="none" className="road-anim" /></svg>
        <div className="container-x relative max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">KUWAIT → BORDER → SAUDI ARABIA</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Planning a Kuwait–Saudi Road Journey?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Send your pickup location, destination, travel date, passenger count and luggage details. We&apos;ll review the route and confirm the available private transportation arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get a Kuwait Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need a Kuwait cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
