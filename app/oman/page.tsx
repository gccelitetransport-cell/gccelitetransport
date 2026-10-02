import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/components/Art";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { LuggageCalc, TripToggle } from "@/components/kuwait/Interactive";
import { DrawLine, MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { CardToggle, HeroNetwork, JourneyCalc, NetworkRail } from "@/components/kuwait/OmanClient";
import { FLEET, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/oman/`;
const TITLE = "Oman Cross-Border Transport | UAE & Saudi Transfers";
const DESC = "Private cross-border transportation between Oman, the UAE and Saudi Arabia, with route-specific options for families, groups, business travellers and long-distance GCC road journeys.";
const TRANSIT = "https://gov.om/en/w/get-land-transit-visa";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/oman-road.svg", width: 1600, height: 900, alt: "Mountain and desert highway at sunset" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const ARR = "Cross-border vehicle and driver arrangements depend on the route, applicable regulations, operator requirements and current border procedures. The operational setup is confirmed for each booking.";
const SAME = "Not always. The vehicle arrangement depends on the route, applicable regulations, operator requirements and vehicle eligibility. Some journeys may use the same vehicle, while others may require a different arrangement. The confirmed vehicle setup should be established before travel.";
const DRIVER = "That depends on the route and operational requirements. A cross-border journey may be completed with the same driver where permitted and operationally suitable, while another route may require a different driver arrangement. GCC Elite Transport confirms the arrangement for the specific booking.";
const CHECK = "Current requirements should be confirmed according to the passenger's nationality, residency, destination and vehicle arrangement.";

const CORRIDORS = [
  { s: "OMAN ↔ UAE", t: "Neighboring GCC road corridor", d: "Planned from your Oman pickup to your UAE destination, with the crossing chosen for the route and the vehicle arrangement confirmed first." },
  { s: "OMAN ↔ SAUDI ARABIA", t: "Long-distance international corridor", d: "A long drive with border planning, luggage and passenger comfort to settle before departure. Crossing availability is never assumed." },
  { s: "WIDER GCC", t: "Multi-country road connectivity", d: "Journeys to Bahrain, Qatar or Kuwait pass through the UAE or Saudi Arabia. Each border is its own arrangement." },
];
const UAE_CTX = [
  { s: "NORTHERN OMAN", t: "Musandam and the north", d: "Northern Oman sits close to the UAE, which changes the routing. We look at the pickup, the border route, the vehicle and the documents." },
  { s: "UAE SIDE", t: "Hatta and Al Ain-side journeys", d: "Which crossing suits depends on where in the UAE the journey starts or ends. We do not assume one." },
  { s: "UAE SIDE", t: "Abu Dhabi and Dubai-side journeys", d: "A long run from the major UAE cities. The crossing depends on origin, destination and current requirements." },
];
const LONG = [
  { s: "ROUTE", t: "Route Planning", d: "Origin, border and destination planned as one journey." },
  { s: "VEHICLE", t: "Vehicle Planning", d: "Passenger and luggage requirements decide the vehicle." },
  { s: "BORDER", t: "Border Preparation", d: "Documents and vehicle requirements checked ahead." },
  { s: "COMFORT", t: "Journey Comfort", d: "Long-distance travel considerations, such as seating, timing and stops." },
];
const PRICE = [["Route", "Oman → UAE / Saudi."], ["Distance", "Total road journey."], ["Vehicle", "Sedan, SUV or van."], ["Passengers", "Passenger count."], ["Luggage", "Bag volume."], ["Border arrangement", "Route-specific requirements."], ["One-way / return", "Journey structure."], ["Date & time", "Travel schedule."]];
const SCENARIOS = [
  { n: "01", t: "Family Journey", r: "Oman → UAE", d: "A private vehicle with luggage and children. We ask about child seats, elderly passengers and bag count." },
  { n: "02", t: "Business Journey", r: "UAE → Oman", d: "A meeting and a return planned around it, with the schedule agreed first." },
  { n: "03", t: "Saudi Journey", r: "Oman → Saudi Arabia", d: "A long-distance road trip. Vehicle, border documents and departure timing are settled in advance." },
  { n: "04", t: "Airport Connection", r: "Muscat Airport → UAE / Saudi destination", d: "A passenger lands in Oman and continues by road, where the route is confirmed." },
  { n: "05", t: "Regional GCC Journey", r: "Oman → UAE → wider GCC", d: "A multi-country itinerary where every border is a separate arrangement." },
];
const STEPS = [
  ["01", "Send your route", "Origin and destination."], ["02", "Share passenger details", "Passengers and luggage."], ["03", "Choose journey", "One-way or return."],
  ["04", "Route review", "Border and vehicle requirements."], ["05", "Receive your quote", "Route-specific pricing."], ["06", "Confirm", "Final booking."], ["07", "Driver coordination", "Driver and contact details according to the confirmed booking."],
];
const FAQS = [
  { q: "Can I book private transportation from Oman to the UAE?", a: "Yes, private cross-border transportation can be arranged between Oman and the UAE, subject to route, vehicle and operational availability. Because the journey involves international border procedures, passenger documentation and vehicle eligibility may need to be reviewed before travel. Send your Oman pickup location, UAE destination, date, passengers and luggage details for a route-specific quote." },
  { q: "Can I travel from the UAE to Oman by private vehicle?", a: "Yes, on applicable routes. The journey runs in reverse: a UAE pickup, UAE departure procedures, the border and Oman entry procedures. Requirements vary by passenger and vehicle. Send your UAE pickup and Oman destination so we can confirm the arrangement." },
  { q: "Can I book private transportation from Oman to Saudi Arabia?", a: "Yes, on applicable routes. It is a long-distance journey, so the route, vehicle and border documents are reviewed before we confirm. Crossing availability is not assumed. Send your Oman pickup, Saudi destination, date and passengers for a quote." },
  { q: "Can I travel from Saudi Arabia to Oman by road?", a: "Yes, where the route and arrangement are available. Because it is long-distance and involves border procedures in both countries, we confirm the vehicle and driver setup before booking. Send your Saudi pickup and Oman destination to start." },
  { q: "Which countries border Oman?", a: "Oman has land borders with the UAE, Saudi Arabia and Yemen. We arrange journeys on the UAE and Saudi corridors. Bahrain, Qatar and Kuwait are reached only through other countries, so those are multi-country journeys planned individually." },
  { q: "Can a foreign vehicle enter Oman?", a: "Oman regulates foreign land-transport vehicles, and authorization and documentation requirements may apply. The exact requirements depend on the operator, vehicle and journey, so we do not assume any vehicle can enter. Send your route and we confirm the arrangement before booking." },
  { q: "Will the same vehicle cross the Oman border?", a: SAME },
  { q: "Will the same driver stay with us?", a: DRIVER },
  { q: "What documents do I need?", a: "Passengers usually need a passport and any visa or residency documents that apply, and vehicle documents are reviewed for the route. Requirements vary by nationality, residency, destination and vehicle arrangement. Confirm current requirements with the relevant authorities before travel." },
  { q: "Do I need an Oman visa?", a: "It depends on your nationality, residency, destination and the purpose of your visit, so there is no single answer. Check the current requirements on Oman's official government and police channels before you book, then send us your route." },
  { q: "Is a land transit visa required?", a: "Possibly, if you are traveling through Oman between neighboring countries. Oman's government portal offers a land transit visa service for eligible travelers via designated land ports, and requirements depend on nationality and route. Check the official portal for your case." },
  { q: "Can families travel privately from Oman to the UAE?", a: "Yes, subject to route and vehicle availability. Families travel in a private vehicle with no shared passengers. Tell us about children, elderly passengers and luggage so we can recommend an appropriate vehicle." },
  { q: "Can groups with luggage book cross-border transportation?", a: "Yes. We choose the vehicle from passenger count, luggage and route, using an SUV, van or group vehicle where available. Capacity varies by vehicle, so send passenger and bag counts before booking." },
  { q: "Can I book one-way transportation?", a: "Yes, subject to route availability. One-way suits passengers who continue independently after arriving. Send your pickup, destination and date for a quote." },
  { q: "Can I book a return journey?", a: "Yes. A return can be planned with the outbound trip, with the return date, time and pickup agreed in advance. Include both legs when you request your quote." },
  { q: "Can I travel from Muscat Airport directly to the UAE?", a: "Where such an international road journey is available and confirmed, yes. We quote it as one journey from the airport to your UAE destination. Send your flight arrival time and destination with the request." },
  { q: "Can I travel from Salalah to the UAE or Saudi Arabia?", a: "Possibly, as a long-distance international road journey that needs careful planning. Departure timing, comfort, luggage and the border route are reviewed first. Send your Salalah pickup and destination and we say what is available." },
  { q: "Can Oman connect to Bahrain, Qatar or Kuwait by road?", a: "Only through neighboring countries. Oman has no direct land border with them, so a journey passes through the UAE or Saudi Arabia and involves several borders and separate arrangements. Each is planned individually. Tell us the full route you need." },
  { q: "How much does Oman cross-border transportation cost?", a: "The price is route-specific. It depends on the route, distance, vehicle, passengers, luggage, journey type and border arrangement, and you receive the agreed price before travel. Request a quote to get yours." },
  { q: "How early should I book?", a: "Earlier booking is recommended for long-distance international journeys so route, vehicle and border requirements can be reviewed before departure. For short-notice trips, message us on WhatsApp and we will say what is possible." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Oman", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "Oman cross-border private transportation", serviceType: "Private cross-border road transportation",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Oman", "United Arab Emirates", "Saudi Arabia"].map((n) => ({ "@type": "Country", name: n })) },
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

export default function OmanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NetworkRail />

      {/* Immersive hero */}
      <section data-stage="0" className="relative isolate overflow-hidden bg-navy text-white">
        <Image src="/images/oman-road.svg" alt="Illustration of a mountain and desert highway at sunset" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/60 to-navy/90" />
        <div className="container-x py-14 sm:py-24 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Oman</nav>
          <p className="eyebrow mt-6">Oman ↔ UAE / Saudi Arabia</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">Oman Cross-Border Transportation</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">Private international road transportation between Oman, the UAE and Saudi Arabia, with route-specific arrangements for passengers, vehicles and border procedures on long-distance GCC journeys. This is not a Muscat taxi service.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get an Oman Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need an Oman cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
          <div className="mt-12"><HeroNetwork /></div>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <H2>Request an Oman Cross-Border Quote</H2>
            <p className="mt-4 leading-relaxed text-muted">Tell us the route, date, passengers and bags. We review it and confirm the available private transportation arrangement. This is a quote request, not instant pricing. You can also <A href="/contact/">request an Oman cross-border quote</A> by message.</p>
          </div>
          <QuoteForm fromCountry="Oman" title="Plan Your Oman Border Journey" button="Request Cross-Border Quote" note="We'll review your route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Premium SUV", "Van", "Group Vehicle"]} showNotes notesLabel="Special Requirements" luggageLabel="Large Bags" cabinBags />
        </div>
      </section>

      {/* Gateway */}
      <section className="section" data-stage="0">
        <div className="container-x">
          <Reveal>
            <H2>Oman at the Southeastern Edge of the GCC Road Network</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">Oman is connected by land to the UAE and Saudi Arabia, and Oman&apos;s official statistics list both among its land neighbors. That road network is what makes regional travel possible, and it is also why a trip out of Oman is a border trip. International road travel takes more planning than domestic travel: border procedures, vehicle requirements and the route all depend on where you start and where you finish. Read our <A href="/cross-border-transfers/">GCC cross-border transportation</A> overview for how transfers work generally.</p>
          </Reveal>
          <div className="mt-8"><CardToggle items={CORRIDORS} /></div>
        </div>
      </section>

      {/* UAE */}
      <section className="section bg-white" data-stage="1" id="uae">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3"><Flag id="oman" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="uae" className="h-5 w-8" /></div>
            <H2>Oman ↔ UAE Cross-Border Transportation</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">The Oman–UAE corridor is the shorter of Oman&apos;s two main routes, and the most varied, because more than one crossing exists. We arrange journeys in both directions. For the UAE end see <A href="/uae/">UAE cross-border transportation</A>.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Flow title="Oman → UAE" accent steps={["Oman pickup", "Oman road journey", "Oman departure procedures", "UAE border", "UAE entry procedures", "UAE destination"]} />
            <Flow title="UAE → Oman" steps={["UAE pickup", "UAE departure procedures", "International border", "Oman entry procedures", "Oman destination"]} />
          </div>
          <p className="mt-4 text-xs text-muted">We do not guarantee border time, the same vehicle or the same driver.</p>
        </div>
      </section>

      {/* Saudi */}
      <section className="section" data-stage="2" id="saudi">
        <div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3"><Flag id="oman" className="h-5 w-8" /><span className="text-gold">↔</span><Flag id="saudi-arabia" className="h-5 w-8" /></div>
            <H2>Oman ↔ Saudi Arabia Cross-Border Transportation</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>This is the long one. Oman–Saudi road travel means a long drive across desert and highway, so border planning, passenger documentation, vehicle arrangement and luggage all need settling before departure. Family and business trips both use it, one-way or return.</p>
              <p>We do not claim a specific crossing is available until we have checked your actual route. See <A href="/saudi-arabia/">Saudi Arabia cross-border transportation</A> for the Saudi side.</p>
            </div>
          </Reveal>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white"><h3 className="font-semibold">Oman → Saudi border → Saudi Arabia</h3><Ticks light items={["Departure planning", "Vehicle suitability", "Luggage", "Passenger comfort", "Border documents", "Rest and fuel planning", "Route coordination"]} /></aside>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-white" data-stage="2">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2>The Three-Corridor Road Network</H2>
            <p className="mt-4 leading-relaxed text-muted">Oman sits at the center. One corridor runs to the UAE, one to Saudi Arabia, and a third, dotted line represents wider GCC journeys that continue through them.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink"><li className="flex items-center gap-3"><span className="h-0.5 w-8 bg-gold" />UAE: solid gold</li><li className="flex items-center gap-3"><span className="h-0.5 w-8 bg-ocean" />Saudi Arabia: solid blue</li><li className="flex items-center gap-3"><span className="w-8 border-t-2 border-dotted border-muted" />Wider GCC: dotted</li></ul>
          </div>
          <figure className="rounded-2xl bg-paper p-5 ring-1 ring-slate-200">
            <svg viewBox="0 0 440 260" role="img" aria-label="Map of road corridors from Oman to the UAE, Saudi Arabia and the wider GCC" className="h-auto w-full">
              <path d="M220 130 L90 50" stroke="#C9A14A" strokeWidth="4" strokeLinecap="round" className="road-anim" strokeDasharray="1 0" />
              <path d="M220 130 L90 210" stroke="#123B5D" strokeWidth="4" strokeLinecap="round" />
              <path d="M220 130 L90 130" stroke="#667085" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" className="road-anim" />
              <circle cx="220" cy="130" r="14" fill="#0B1F33" /><text x="244" y="135" fill="#17212B" fontSize="14" fontWeight="700" fontFamily="sans-serif">OMAN</text>
              <circle cx="90" cy="50" r="8" fill="#C9A14A" /><text x="102" y="40" fill="#17212B" fontSize="13" fontWeight="600" fontFamily="sans-serif">UAE</text>
              <circle cx="90" cy="210" r="8" fill="#123B5D" /><text x="102" y="236" fill="#17212B" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
              <circle cx="90" cy="130" r="6" fill="#fff" stroke="#667085" strokeWidth="2" /><text x="102" y="122" fill="#17212B" fontSize="12" fontFamily="sans-serif">Wider GCC</text>
            </svg>
            <figcaption className="mt-2 text-xs text-muted">Schematic, not to scale. Not live availability.</figcaption>
          </figure>
        </div>
      </section>

      {/* Choosing border */}
      <section className="section" data-stage="1">
        <div className="container-x">
          <H2>Choosing the Right Oman Border Route</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">The applicable border depends on the pickup location, destination, vehicle, operator requirements, passenger documentation and current border operations. The best border is route-dependent, not a universal choice, so the appropriate crossing depends on the origin, destination and current operational requirements.</p>
          <h3 className="mt-10 text-2xl font-bold text-navy">Oman–UAE Border Travel</h3>
          <div className="mt-5"><CardToggle items={UAE_CTX} /></div>
        </div>
      </section>

      {/* Long distance */}
      <section className="section bg-navy text-white" data-stage="3">
        <div className="container-x">
          <Reveal><H2 light>Built for Long-Distance GCC Road Journeys</H2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LONG.map((c) => (<div key={c.t} className="rounded-2xl border border-white/15 bg-white/5 p-5 transition-transform hover:-translate-y-0.5"><span className="text-xs font-semibold tracking-widest text-gold">{c.s}</span><h3 className="mt-1 font-semibold">{c.t}</h3><p className="mt-2 text-sm text-white/70">{c.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section" data-stage="3">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>Planning a Long Road Journey Through Oman</H2>
            <p className="mt-4 leading-relaxed text-muted">A long drive is planned, not improvised. We look at departure time, road conditions, passenger comfort, luggage, rest, fuel, weather considerations, route selection, border timing and vehicle suitability. We do not give weather forecasts here, and we make no safety promises we cannot back.</p>
          </div>
          <div>
            <H2>Long-Distance Journeys From Southern Oman</H2>
            <p className="mt-4 leading-relaxed text-muted">Travelers starting around Salalah, Dhofar or southern Oman face very different planning from those in the north: a much longer drive, so departure timing, passenger comfort, luggage, route selection and border planning matter more. This is about international road travel, not local transport.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white" data-stage="3">
        <div className="container-x max-w-3xl">
          <H2>Northern Oman and UAE Cross-Border Journeys</H2>
          <p className="mt-4 leading-relaxed text-muted">Northern Oman sits close to the UAE, which can create different routing choices from the south. The focus stays on the international road journey: the border route, the vehicle, the documents and the destination.</p>
        </div>
      </section>

      {/* Same vehicle / driver */}
      <section className="section" data-stage="1">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div><H2>Will the Same Vehicle Cross the Oman Border?</H2><p className="mt-4 leading-relaxed text-muted">{SAME}</p><p className="mt-3 text-sm text-muted">Oman&apos;s regulations address foreign transport vehicles and their entry and operation, so this stays route-specific. {ARR}</p></div>
          <div><H2>Will the Same Driver Stay With Us?</H2><p className="mt-4 leading-relaxed text-muted">{DRIVER}</p></div>
        </div>
      </section>

      {/* Docs + foreign vehicle + transit */}
      <section className="section bg-white" data-stage="1" id="documents">
        <div className="container-x">
          <H2>Documents for Oman Cross-Border Travel</H2>
          <p className="mt-4 max-w-3xl text-muted">What applies varies by nationality, passport, visa, residency, destination, vehicle ownership, insurance, authorization, route and current regulations.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Potential passenger documents</h3><Ticks items={["Passport", "Visa, where required", "Residency documentation", "Destination-specific documents"]} /></div>
            <div className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Vehicle</h3><Ticks items={["Registration", "Insurance", "Authorization", "Operator documentation"]} /></div>
          </div>
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{CHECK}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="text-xl font-semibold text-navy">Can a Foreign Vehicle Enter Oman for Passenger Transportation?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Oman&apos;s transport ministry regulates land transport, including passenger transport, licensing and permits, and has rules for foreign land-transport vehicles. Authorization and documentation requirements may apply, and the exact requirements depend on the operator, vehicle and journey. We do not claim any specific Omani permit here.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h3 className="text-xl font-semibold text-navy">Oman Land Transit and Border Requirements</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Oman&apos;s government portal offers a land transit visa service that lets eligible travelers pass through Oman via designated land ports. Whether you need one depends on your nationality and route, and not every traveler needs the same visa. Border entry is controlled by the relevant authorities. See the <A href={TRANSIT} ext>official land transit visa service</A>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family / business */}
      <section className="section" data-stage="4">
        <div className="container-x">
          <Reveal><H2>Private Oman Cross-Border Transportation for Families</H2></Reveal>
          <div className="mt-8"><CardToggle cols="md:grid-cols-3" items={[
            { s: "CHILDREN", t: "Child seats and ages", d: "Settled before the day so the right seats are in the vehicle." },
            { s: "ELDERLY", t: "Elderly passengers", d: "Seating and pickup planned around ease of access and comfort." },
            { s: "LUGGAGE", t: "Family luggage", d: "Bags decide the vehicle. Count them before you book." },
            { s: "PRIVATE", t: "Private vehicle", d: "No shared passengers, so the family stays together." },
            { s: "DISTANCE", t: "A long drive", d: "The distance is long, so seating and planned stops matter." },
            { s: "RETURN", t: "A planned return", d: "Return date and pickup can be agreed with the outbound trip." },
          ]} /></div>
        </div>
      </section>

      <section className="section bg-navy text-white" data-stage="4" id="business">
        <div className="container-x">
          <Reveal>
            <H2 light>Executive Cross-Border Transportation From Oman</H2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/75">Executive privacy, scheduled travel, business meetings, regional travel, return journeys, luggage and professional driver coordination. See our <Link href="/corporate/" className="text-gold underline underline-offset-4">corporate GCC transportation</Link>.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {["Oman", "Border", "UAE / Saudi Arabia", "Business destination"].map((s, i) => (<Reveal key={s}><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{i + 1}</span><span className="text-sm font-semibold">{s}</span></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* Group + planner + vehicles */}
      <section className="section" data-stage="4">
        <div className="container-x">
          <H2>Group Transportation Across Oman&apos;s Borders</H2>
          <p className="mt-4 max-w-3xl text-muted">Passenger count, luggage, vehicle category, border requirements and route planning decide the booking. Categories: Sedan, SUV, Premium SUV, Van, Group Vehicle.</p>
          <div className="mt-8"><LuggageCalc /></div>
        </div>
      </section>

      <section className="section bg-white" data-stage="4">
        <div className="container-x">
          <H2>Vehicles for Oman Cross-Border Journeys</H2>
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
      <section className="section" data-stage="4">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div><H2>One Way or Return?</H2><div className="mt-6"><TripToggle from="Oman" to="Destination" /></div></div>
          <div>
            <H2>Oman Airport to a Cross-Border Road Journey</H2>
            <p className="mt-4 text-muted">Not an airport taxi. Muscat International Airport appears here only as one end of an international road journey, where the route is confirmed.</p>
            <div className="mt-4 space-y-2 text-sm font-semibold text-navy">
              {[["Arrival", "Private pickup", "UAE / Saudi Arabia", "Destination"], ["UAE / Saudi Arabia", "Oman", "Muscat Airport"]].map((r) => (<div key={r[0]} className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">{r.map((s, i) => (<span key={s} className="flex items-center gap-2">{i > 0 && <span className="text-gold">→</span>}{s}</span>))}</div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Wider */}
      <section className="section bg-white" data-stage="4">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2>Oman and the Wider GCC Road Network</H2>
            <p className="mt-4 leading-relaxed text-muted">Oman can connect to wider GCC destinations through its neighbors: Oman → UAE → <A href="/bahrain/">Bahrain</A>, <A href="/qatar/">Qatar</A> or <A href="/kuwait/">Kuwait</A>, or Oman → Saudi Arabia → Bahrain, Qatar, Kuwait or the UAE. These are multi-country journeys, not direct Oman land borders. Oman has no direct border with Bahrain, Qatar or Kuwait. For the regional picture, see <A href="/jordan/">Jordan</A> as a road link into Saudi Arabia.</p>
          </div>
          <figure className="rounded-2xl bg-navy p-5">
            <svg viewBox="0 0 460 240" role="img" aria-label="Oman to the UAE or Saudi Arabia, then onward GCC road journeys" className="h-auto w-full">
              <path d="M50 120 L170 60" stroke="#C9A14A" strokeWidth="3" /><path d="M50 120 L170 180" stroke="#fff" strokeWidth="3" />
              {[["Bahrain", 60], ["Qatar", 110], ["Kuwait", 160]].map(([n, y]) => (<g key={n as string}><path d={`M170 60 L350 ${y}`} stroke="#fff" strokeOpacity=".5" strokeDasharray="3 6" /><circle cx="350" cy={y as number} r="5" fill="#0B1F33" stroke="#fff" /><text x="362" y={(y as number) + 4} fill="#fff" fontSize="12" fontFamily="sans-serif">{n}</text></g>))}
              <path d="M170 180 L350 190" stroke="#fff" strokeOpacity=".5" strokeDasharray="3 6" /><circle cx="350" cy="190" r="5" fill="#0B1F33" stroke="#fff" /><text x="362" y="194" fill="#fff" fontSize="12" fontFamily="sans-serif">Bahrain / Qatar / Kuwait / UAE</text>
              <circle cx="50" cy="120" r="10" fill="#C9A14A" /><text x="20" y="150" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">Oman</text>
              <circle cx="170" cy="60" r="8" fill="#C9A14A" /><text x="150" y="44" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">UAE</text>
              <circle cx="170" cy="180" r="8" fill="#fff" /><text x="130" y="210" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Saudi Arabia</text>
            </svg>
            <figcaption className="mt-2 text-xs text-white/60">Regional GCC road connectivity. Not direct borders.</figcaption>
          </figure>
        </div>
      </section>

      {/* Pricing + calc */}
      <section className="section" data-stage="4">
        <div className="container-x">
          <H2>What Determines the Cost of Oman Cross-Border Transportation?</H2>
          <p className="mt-3 text-sm text-muted">No fixed prices are published. Each journey is priced from its own details.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRICE.map(([t, d]) => (<li key={t}><Reveal className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-gold"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Reveal></li>))}
          </ul>
          <MagneticLink href="#quote" className="btn-navy mt-8">Request a Route-Specific Quote</MagneticLink>
          <h3 className="mt-12 text-2xl font-bold text-navy">Select Your Journey</h3>
          <div className="mt-5"><JourneyCalc /></div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-white" data-stage="4">
        <div className="container-x">
          <H2>Common Oman Cross-Border Travel Scenarios</H2>
          <p className="mt-3 text-sm text-muted">Illustrative travel scenarios, not testimonials.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCENARIOS.map((s) => (<article key={s.n} className="rounded-2xl border border-slate-200 bg-paper p-6 transition-transform hover:-translate-y-0.5"><span className="text-sm font-semibold text-gold">{s.n}</span><h3 className="mt-1 text-lg font-semibold text-navy">{s.t}</h3><p className="text-xs font-medium text-ocean">{s.r}</p><p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p></article>))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section" data-stage="4">
        <div className="container-x max-w-3xl">
          <H2>From Oman Pickup to International Destination</H2>
          <ol className="mt-8 border-l-2 border-gold/50">
            {STEPS.map(([n, t, d]) => (<li key={n} className="relative pb-7 pl-8 last:pb-0"><Reveal><span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{n}</span><h3 className="font-semibold text-navy">{t}</h3><p className="text-sm text-muted">{d}</p></Reveal></li>))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq" data-stage="4">
        <div className="container-x max-w-3xl">
          <H2>Oman Cross-Border Transportation FAQ</H2>
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

      {/* Final */}
      <section data-stage="4" className="relative overflow-hidden bg-navy py-16 text-center text-white sm:py-24">
        <div className="container-x relative max-w-3xl">
          <svg viewBox="0 0 300 120" className="mx-auto mb-6 h-24 w-64" aria-hidden="true">
            <path d="M150 60 L50 20" stroke="#C9A14A" strokeWidth="3" strokeDasharray="6 8" className="road-anim" /><path d="M150 60 L50 100" stroke="#fff" strokeWidth="3" strokeDasharray="6 8" className="road-anim" />
            <circle cx="150" cy="60" r="12" fill="#C9A14A" /><text x="172" y="65" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">OMAN</text>
            <text x="60" y="16" fill="#fff" fontSize="12" fontFamily="sans-serif">UAE</text><text x="60" y="116" fill="#fff" fontSize="12" fontFamily="sans-serif">Saudi Arabia</text>
          </svg>
          <h2 className="text-3xl font-bold sm:text-4xl">Planning an International Road Journey From Oman?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Send your pickup location, destination, travel date, passenger count and luggage details. We&apos;ll review the route, vehicle requirements and cross-border arrangement before confirming your transportation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get an Oman Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need an Oman cross-border transfer quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
