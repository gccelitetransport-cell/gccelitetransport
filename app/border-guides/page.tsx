import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { Checklist, Directory, ExpandList, HeroMap, LuggageViz, MultiCountry, RouteFinder, Simulator } from "@/components/borders/BorderClient";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { CORRIDORS } from "@/lib/borders";
import { publishedRoutes } from "@/lib/routes";
import { BORDER_GUIDES_REVIEWED_ON, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/border-guides/`;
const TITLE = "GCC Border Crossing Guides | GCC Elite Transport";
const DESC = "GCC border crossing guides: documents, vehicle rules and route planning for road travel across Saudi Arabia, UAE, Bahrain, Qatar, Kuwait, Oman and Jordan.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/border-guides.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/border-guides.jpg"] },
};

const DISCLAIMER = "Border, immigration, customs, vehicle and entry requirements are determined by the relevant authorities and may change. GCC Elite Transport provides transportation and practical journey-planning information, but does not control border decisions or guarantee entry, clearance or processing times.";
const REQ = "Requirements vary by nationality, residency, vehicle ownership, route and current border rules. Always verify current requirements with the relevant authorities before travel.";

const TIMELINE = [
  { t: "Private pickup", d: "The journey starts at the agreed pickup point, with passengers and luggage collected." },
  { t: "Departure checks", d: "On leaving the country, departure procedures apply. What they involve depends on the country and the passenger." },
  { t: "Border / customs", d: "Customs procedures may apply to passengers' belongings and to the vehicle, depending on the crossing." },
  { t: "Passport / entry procedures", d: "Immigration authorities review passports and entry eligibility. Their decisions are theirs alone." },
  { t: "Vehicle / document checks", d: "Vehicle documents and any required authorization may be checked." },
  { t: "Entry into the destination country", d: "Once procedures are complete, the vehicle and passengers continue into the destination country." },
  { t: "Continue the journey", d: "The journey continues to the confirmed destination, under the vehicle and driver arrangement confirmed beforehand." },
];
const DOCS = [
  { t: "Passenger documents", d: "A passport, a visa or entry permission where applicable, residency documentation where relevant, and travel authorization where applicable." },
  { t: "Vehicle documents", d: "Depending on the journey: vehicle registration, ownership or authorization documents, insurance, operator documents and any required permits." },
  { t: "Additional requirements", d: "These can depend on nationality, residency, vehicle ownership, rental or company vehicle status, the route, the destination country and current regulations." },
];
const FACTORS = [
  { t: "Vehicle registration country", d: "Where a vehicle is registered can affect what is needed to enter another country." },
  { t: "Ownership and rental status", d: "Owned, rented and company vehicles can be treated differently, and may need authorization documents." },
  { t: "Driver authorization", d: "The driver's licence and any authorization to drive the vehicle across the border matter." },
  { t: "Private or commercial use", d: "Carrying passengers for a fee is regulated differently from private use." },
  { t: "Insurance", d: "Cover for the destination country, and for the whole journey, may be required." },
  { t: "Operator licensing", d: "Operating permissions for international passenger transport can apply." },
  { t: "Border-country regulations and permits", d: "Each country sets its own requirements, and some routes need specific permits." },
];
const LAYERS = [
  { t: "Passenger", d: "Nationality, residency and visa status." },
  { t: "Vehicle", d: "Registration, ownership and authorization." },
  { t: "Operator", d: "Licensing and operating permissions." },
  { t: "Border", d: "Immigration, customs and local procedures." },
  { t: "Route", d: "Country-specific requirements for the corridor." },
];
const STEPS5 = [
  { t: "Know Your Route", d: "Identify the corridor, and whether the journey has one border or several." },
  { t: "Check Passenger Requirements", d: "Passports, visas or entry permission, and residency documents for every traveler." },
  { t: "Confirm Vehicle Eligibility", d: "Registration, ownership, driver authorization, insurance and operator permissions." },
  { t: "Prepare Documentation", d: "Gather documents ahead and keep them accessible for the crossing." },
  { t: "Confirm Transportation Arrangement", d: "Agree the vehicle, driver plan, pickup and return before you travel." },
];
const OFFICIAL: [string, [string, string][]][] = [
  ["GCC", [["GCC General Secretariat", "https://www.gcc-sg.org"]]],
  ["Saudi Arabia", [["Visa portal", "https://visa.visitsaudi.com"], ["Ministry of Interior", "https://www.moi.gov.sa"], ["Transport General Authority", "https://www.tga.gov.sa"]]],
  ["UAE", [["Travelling by road", "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways"], ["ICP", "https://icp.gov.ae"]]],
  ["Bahrain", [["Ministry of Transportation", "https://www.mtt.gov.bh"], ["NPRA", "https://www.npra.gov.bh"]]],
  ["Qatar", [["General Authority of Customs", "https://www.customs.gov.qa"], ["Ministry of Interior", "https://portal.moi.gov.qa"]]],
  ["Kuwait", [["Ministry of Interior", "https://www.moi.gov.kw"]]],
  ["Oman", [["Land transit visa", "https://gov.om/en/w/get-land-transit-visa"], ["Royal Oman Police", "https://www.rop.gov.om"]]],
  ["Jordan", [["Ministry of Foreign Affairs", "https://mfa.gov.jo"]]],
];
const FAQS = [
  { q: "What is a GCC land border crossing?", a: "It is a designated land port where a road crosses between two GCC states, such as Saudi Arabia and Bahrain or the UAE and Oman. Passengers and vehicles go through departure and entry procedures there. The procedures and requirements vary by crossing and by traveler." },
  { q: "Can I travel between GCC countries by road?", a: "Often yes, where the countries share a land connection. Saudi Arabia connects by land with Bahrain, Qatar, Kuwait, the UAE and Oman, and the UAE connects with Oman. Requirements depend on nationality, residency and vehicle, so confirm them before you travel." },
  { q: "What documents do I need for a GCC border crossing?", a: "Typically a valid passport and any visa or entry permission that applies, plus residency documents where relevant. Vehicle documents may also matter. Requirements vary by nationality, residency and route, so check the official sources for your own case." },
  { q: "Can a private vehicle cross a GCC border?", a: "Often, but it depends on the vehicle's registration, ownership, insurance and the destination country's rules. A vehicle that is road-legal in one country does not automatically satisfy every cross-border requirement, so check before you go." },
  { q: "Can a rental vehicle cross a GCC border?", a: "Only if the rental terms and the border countries' requirements allow it. Many rentals need specific authorization or are restricted to one country. Ask the rental company and check the relevant authorities before planning the trip." },
  { q: "Can the same vehicle and driver continue across the border?", a: "It depends on the route, vehicle authorization, licensing, operator permissions and border requirements. Some journeys can continue with the same vehicle and driver, others need a different arrangement. We never promise either in advance, and confirm the setup for each booking." },
  { q: "Do GCC residents need different documents from visitors?", a: "They can. Residency status, nationality and visa status all affect what a passenger must carry, and requirements differ between countries. Check the official guidance of the destination country for your own status." },
  { q: "What happens at a GCC land border?", a: "Passengers go through departure procedures, then customs and immigration or entry procedures, and vehicles may be checked for documents. The exact sequence varies by crossing, passenger status, vehicle and current procedures." },
  { q: "How should families prepare for a cross-border road trip?", a: "Check every traveler's passport and entry requirements, plan child seats and luggage, allow for comfort stops, and confirm the vehicle arrangement beforehand. Keep documents easy to reach. Tell your transport provider about children and elderly passengers." },
  { q: "Can I travel through more than one GCC country by road?", a: "Yes, on some itineraries, but each border is its own consideration, with its own vehicle arrangement and passenger requirements. One authorization does not automatically cover a multi-country trip, so plan each leg." },
  { q: "Can GCC Elite Transport arrange private cross-border transportation?", a: "Yes, on applicable routes. We arrange private road transportation across selected GCC and regional corridors and confirm the vehicle and driver arrangement before you book. We do not control immigration or customs decisions." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Border Guides", item: URL }] },
    { "@type": "CollectionPage", "@id": `${URL}#page`, name: "GCC Border Crossing Guides", url: URL, description: DESC, isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: { "@type": "ItemList", itemListElement: CORRIDORS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name}: ${c.crossing}`, url: SITE.url + c.href })) } },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (<h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>);
const A = ({ href, children, ext = false }: { href: string; children: React.ReactNode; ext?: boolean }) => (
  ext ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</a>
    : <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>);
const Ticks = ({ items }: { items: string[] }) => (<ul className="mt-3 space-y-2 text-sm text-ink">{items.map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul>);

function CorridorIcon({ id }: { id: string }) {
  const c = { className: "h-7 w-7 text-gold", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };
  if (id === "sa-bh") return <svg {...c}><path d="M2 16h20M5 16V9M12 16V9M19 16V9M2 9c3-3 7-3 10 0s7 3 10 0" /></svg>;
  if (id === "om-sa" || id === "jo-sa") return <svg {...c}><path d="M3 18 9 8l4 6 3-4 5 8Z" /></svg>;
  return <svg {...c}><path d="M5 21V5h14v16M5 9h14M10 21v-5h4v5" /></svg>;
}

export default function BorderGuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Border Guides</nav>
            <p className="eyebrow mt-5">International Land Travel</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] sm:text-6xl">GCC Border Crossing Guides</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">Practical information for international road journeys across the GCC and connected regional corridors. Explore border routes, travel requirements, vehicle considerations and planning information before you travel by road.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href="#corridors" className="btn-gold">Explore Border Routes</MagneticLink>
              <MagneticLink href="#quote" className="btn-ghost">Request Cross-Border Quote</MagneticLink>
            </div>
          </div>
          <HeroMap />
        </div>
      </section>

      {/* Finder */}
      <section className="section" id="finder">
        <div className="container-x">
          <Reveal>
            <H2>Find Your Border Route</H2>
            <p className="mb-6 mt-3 max-w-2xl text-muted">A border information tool, not a booking form. Choose where you are starting and going to see the relevant corridor and what to prepare.</p>
          </Reveal>
          <RouteFinder />
        </div>
      </section>

      {/* Intro / entity */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <Reveal>
            <H2>The GCC Border Network</H2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>The GCC includes Saudi Arabia, the United Arab Emirates, Bahrain, Qatar, Kuwait and Oman, with international road corridors connecting member states through designated land border crossings. Saudi Arabia sits at the center of that network: it connects by land with Bahrain, Qatar, Kuwait, the UAE and Oman, and the UAE connects with Oman.</p>
              <p>Jordan is not a GCC member. It is shown separately as a GCC-connected regional corridor, because its road link into the Gulf runs through Saudi Arabia.</p>
              <p>These guides explain the framework of a cross-border road journey and point to route pages for the corridor you need. They do not list every rule for every nationality. For the service itself, see our <A href="/cross-border-transfers/">GCC cross-border transportation</A> overview.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Corridors rail */}
      <section className="section" id="corridors">
        <div className="container-x">
          <H2>Featured GCC Border Corridors</H2>
          <p className="mt-3 max-w-2xl text-sm text-muted">Strategically important corridors only. Each links to a route page with its own detail. Dedicated border guides will be published as they are researched.</p>
        </div>
        <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-label="Border corridors, scroll horizontally">
          {CORRIDORS.map((c) => (
            <li key={c.id} id={`corr-${c.id}`} className="w-[85%] shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-6 sm:w-[22rem]">
              <CorridorIcon id={c.id} />
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy"><span>{c.a}</span><span className="h-px flex-1 bg-gold/70" /><span className="h-2.5 w-2.5 rotate-45 bg-gold" /><span className="h-px flex-1 bg-gold/70" /><span>{c.b}</span></div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">{c.crossing}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
              <Link href={c.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">Read the route page<ArrowIcon /></Link>
              {publishedRoutes().filter((r) => r.corridorId === c.id).length > 0 && (<ul className="mt-3 flex flex-wrap gap-2 text-xs">{publishedRoutes().filter((r) => r.corridorId === c.id).map((r) => (<li key={r.slug}><Link href={`/routes/${r.slug}/`} className="inline-block rounded-full border border-slate-300 px-3 py-1 font-medium text-navy hover:border-gold">{r.from.city} → {r.to.city}</Link></li>))}</ul>)}
            </li>
          ))}
        </ul>
      </section>

      {/* Land border timeline */}
      <section className="section bg-white">
        <div className="container-x">
          <H2>What Happens During a Cross-Border Road Journey?</H2>
          <p className="mb-6 mt-3 max-w-3xl text-muted">The exact sequence can vary by country, crossing, passenger status, vehicle and current procedures. Select a stage to read more.</p>
          <ExpandList numbered items={TIMELINE} cols="lg:grid-cols-2" />
        </div>
      </section>

      {/* Simulator */}
      <section className="section" id="simulator">
        <div className="container-x">
          <H2>Build Your Border Journey</H2>
          <p className="mb-6 mt-3 max-w-2xl text-muted">Six quick questions produce a journey profile. It does not predict border processing time, clearance or approval.</p>
          <Simulator />
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-white" id="documents">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <H2>Border Documents: What Should You Prepare?</H2>
            <p className="mt-4 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-ink">{REQ}</p>
          </div>
          <ExpandList items={DOCS} />
        </div>
      </section>

      {/* Vehicle */}
      <section className="section" id="vehicle">
        <div className="container-x">
          <H2>Can Your Vehicle Cross the Border?</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">There is no simple yes or no. A vehicle being road-legal in one GCC country does not automatically mean every cross-border operating requirement is satisfied. These are the factors that decide it.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <ExpandList items={FACTORS} cols="sm:grid-cols-2" />
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Will the same vehicle cross?</h3><p className="mt-2 text-sm text-muted">Depending on the route, vehicle registration, operator permissions and border requirements, the same vehicle may or may not be able to continue across the border.</p></div>
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">Will the same driver continue?</h3><p className="mt-2 text-sm text-muted">Driver arrangements depend on route, licensing, operator requirements and border procedures. We do not promise either in advance.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why differ */}
      <section className="section bg-navy text-white">
        <div className="container-x">
          <Reveal><H2 light>Why Border Requirements Differ</H2></Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {LAYERS.map((l, i) => (<Reveal key={l.t}><div className="h-full rounded-2xl border border-white/15 bg-white/5 p-5" style={{ marginTop: i % 2 ? 12 : 0 }}><span className="text-xs font-semibold tracking-widest text-gold">LAYER {i + 1}</span><h3 className="mt-1 font-semibold">{l.t}</h3><p className="mt-2 text-sm text-white/70">{l.d}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* GCC framework + Saudi */}
      <section className="section" id="framework">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <H2>International Land Transport Across the GCC</H2>
            <div className="mt-4 space-y-3 leading-relaxed text-muted">
              <p>GCC states have a formal framework for international land transport between member states, the Unified Law of International Land Transport, which GCC states have been adopting through their own national legislation. It covers passenger and goods transport by road for a fee and addresses matters such as operating cards, vehicle requirements, driver obligations, entry and return journeys, duration of stay and enforcement.</p>
              <p>The framework provides a regional foundation, while specific border, immigration, customs, vehicle and operator requirements still need to be checked for the route. It does not remove country-specific rules. See the <A href="https://www.gcc-sg.org" ext>GCC General Secretariat</A> and your national authority.</p>
            </div>
          </div>
          <div id="saudi" className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-navy">Saudi Border &amp; Vehicle Considerations</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">Saudi authorities publish land-port procedures and vehicle documentation requirements, including for situations that involve vehicle ownership or authorization. Current Saudi rules also include specific controls for certain GCC-registered vehicles remaining inside Saudi Arabia, so check a vehicle&apos;s status for your journey rather than assuming GCC registration settles every requirement.</p>
            <p className="mt-3 text-xs text-muted">Always verify current requirements before travel. See <A href="/saudi-arabia/">Saudi cross-border transportation</A>.</p>
          </div>
        </div>
      </section>

      {/* Family / business / group */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div><h2 className="text-2xl font-bold text-navy">Crossing Borders With Family</h2><p className="mt-3 text-sm leading-relaxed text-muted">Children, elderly passengers and luggage change a long road journey. Check every passport and the entry or visa requirements, plan child seating where relevant, leave room for comfort stops and make sure the vehicle has space for people and bags. We make no medical or legal assumptions, so check your own circumstances.</p></div>
          <div><h2 className="text-2xl font-bold text-navy">Cross-Border Business Travel</h2><p className="mt-3 text-sm leading-relaxed text-muted">Airport-connected road journeys, meetings across a border, corporate passengers and multi-country itineraries all need document preparation, timing buffers and a planned return. Border timing varies, so we never guarantee arrival times. See <A href="/corporate/">corporate cross-border transportation</A>.</p></div>
          <div><h2 className="text-2xl font-bold text-navy">Group &amp; Family Cross-Border Transportation</h2><p className="mt-3 text-sm leading-relaxed text-muted">Passenger count, seats, luggage volume, the option of more than one vehicle, border coordination, pickup coordination and group communication all matter. Use the planner below, and see our <A href="/fleet/">fleet options</A>.</p></div>
        </div>
      </section>

      {/* Luggage */}
      <section className="section">
        <div className="container-x">
          <H2>Luggage and Seat Planner</H2>
          <div className="mt-6"><LuggageViz /></div>
        </div>
      </section>

      {/* Multi-country */}
      <section className="section bg-white" id="multi">
        <div className="container-x">
          <H2>Planning More Than One Border?</H2>
          <p className="mb-6 mt-3 max-w-2xl text-muted">Pick a sequence of countries. Each border gets its own node. Read the country pages for <A href="/oman/">Oman</A>, <A href="/uae/">the UAE</A>, <A href="/bahrain/">Bahrain</A>, <A href="/kuwait/">Kuwait</A>, <A href="/qatar/">Qatar</A> and <A href="/jordan/">Jordan</A>.</p>
          <MultiCountry />
        </div>
      </section>

      {/* Checklist + before you cross */}
      <section className="section" id="checklist">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div><H2>Border Preparation Checklist</H2><div className="mt-6"><Checklist /></div></div>
          <div><H2>Before You Cross</H2><div className="mt-6"><ExpandList numbered items={STEPS5} /></div></div>
        </div>
      </section>

      {/* Directory */}
      <section className="section bg-white" id="directory">
        <div className="container-x">
          <H2>Explore Border Guides</H2>
          <p className="mb-6 mt-3 max-w-2xl text-muted">Filter the corridors by country, journey or what you need to know.</p>
          <Directory />
        </div>
      </section>

      {/* Official sources */}
      <section className="section" id="sources">
        <div className="container-x">
          <H2>Official Sources &amp; Border Information</H2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">Border and regulatory information is based on official government and authority sources where available. Requirements can change, so travelers should verify current rules before departure. GCC Elite Transport is not an immigration or customs authority.{BORDER_GUIDES_REVIEWED_ON ? ` Information reviewed: ${BORDER_GUIDES_REVIEWED_ON}.` : ""}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICIAL.map(([c, links]) => (
              <div key={c} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wider text-gold">{c}</p>
                <ul className="mt-2 space-y-1 text-sm">{links.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}<span className="sr-only"> (opens in a new tab)</span></a></li>))}</ul></div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-ink">{DISCLAIMER}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" id="faq">
        <div className="container-x max-w-3xl">
          <H2>Border Crossing Questions</H2>
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

      {/* Quote */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <H2>Request a Cross-Border Quote</H2>
            <p className="mt-4 leading-relaxed text-muted">Once you understand the route, tell us about your journey. We review the route and vehicle arrangement, and confirm what is available. This is a quote request, not instant pricing. You can also <A href="/contact/">contact us</A> directly.</p>
          </div>
          <QuoteForm title="Plan Your International Road Journey" button="Get a Cross-Border Quote" note="We'll review your route and confirm the available arrangement." vehicles={["No preference", "Sedan", "SUV", "Premium SUV", "Van", "Group Vehicle"]} showNotes />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-16 text-center text-white sm:py-24">
        <svg viewBox="0 0 800 160" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
          <path d="M0 120 C 150 120 200 40 350 60 S 600 130 800 50" stroke="#C9A14A" strokeWidth="2" strokeDasharray="6 10" fill="none" className="road-anim" />
          <path d="M0 40 C 200 90 300 20 450 70 S 700 30 800 90" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 10" fill="none" className="road-anim" />
        </svg>
        <div className="container-x relative max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Planning an International Road Journey?</h2>
          <p className="mt-4 leading-relaxed text-white/75">Tell us your origin, destination, travel date, passenger count and luggage requirements. We&apos;ll review the route and vehicle arrangement for your cross-border journey.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticLink href="#quote" className="btn-gold">Get a Cross-Border Quote</MagneticLink>
            <a href={waLink("Hello GCC Elite Transport, I need a cross-border transport quote.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
          </div>
        </div>
      </section>
    </>
  );
}
