import type { Metadata } from "next";
import Link from "next/link";
import { PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { ArrivalPlanner, Board } from "@/components/pages/Airport";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/airport-transfers/`;
const TITLE = "Airport-Connected Cross-Border Road Journeys | GCC Elite";
const DESC = "Private road journeys that start or end at a GCC airport and cross an international border: arrive in one country, travel by road to another, or return to the airport from across the border.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/oman-road.svg", width: 1600, height: 900, alt: "Highway at sunset" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const ROWS = [
  { code: "DXB", from: "UAE", to: "Saudi Arabia", note: "Saudi–UAE land corridor, long distance" },
  { code: "MCT", from: "Oman", to: "UAE", note: "Oman–UAE border, more than one crossing" },
  { code: "BAH", from: "Bahrain", to: "Saudi Arabia", note: "King Fahd Causeway" },
  { code: "KWI", from: "Kuwait", to: "Saudi Arabia", note: "Northern Saudi land corridor" },
  { code: "DOH", from: "Qatar", to: "Saudi Arabia", note: "Abu Samra / Salwa" },
  { code: "AMM", from: "Jordan", to: "Saudi Arabia", note: "Jordan–Saudi regional corridor" },
  { code: "RUH", from: "Saudi Arabia", to: "UAE", note: "Saudi–UAE land corridor" },
  { code: "DMM", from: "Saudi Arabia", to: "Bahrain", note: "Across the causeway" },
];
const FAQS = [
  { q: "Do you offer airport taxis?", a: "No. We do not operate local airport taxis or transfers inside one country. We arrange private road journeys that cross an international border, where an airport is one end of the trip." },
  { q: "Can I travel from Dubai Airport directly to Saudi Arabia by road?", a: "Where the route is available and confirmed, yes. It is a long international road journey, so the vehicle, driver arrangement and border crossing are confirmed before booking. Send your flight time and Saudi destination." },
  { q: "Can I travel from a Saudi airport to Bahrain or the UAE?", a: "Yes, on applicable routes. Saudi Arabia connects by road to Bahrain and the UAE. We confirm the arrangement for your journey before you book." },
  { q: "What if my flight is delayed?", a: "Tell us as soon as you know. We plan the pickup around the flight details you send, and adjust where we can. We cannot promise to track every flight, so message us if times change." },
  { q: "Do I need to give my flight number?", a: "It helps. Give us the flight number and arrival or departure time so the pickup can be planned around it." },
  { q: "Can I return to the airport from across the border?", a: "Yes, on applicable routes. For example a road journey from Saudi Arabia to a Bahrain or UAE airport for a flight home. Allow generous time for the border." },
  { q: "Are the vehicles private?", a: "Yes. A private transfer is reserved for your group, with no unrelated passengers." },
  { q: "Who handles immigration at the airport and the border?", a: "The relevant authorities. We arrange transportation and do not control immigration, customs or entry decisions." },
];
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Airport-connected journeys", item: URL }] },
  { "@type": "Service", "@id": `${URL}#service`, name: "Airport-connected cross-border road journeys", serviceType: "Private international road transportation connected to airports", url: URL, description: DESC, provider: { "@id": `${SITE.url}/#org` } },
  { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
] };

export default function AirportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="bg-navy text-white">
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Airport-connected journeys</nav>
          <p className="eyebrow mt-5">Arrive here. Continue across the border.</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl">Airport-Connected Cross-Border Road Journeys</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Land at an airport in one GCC country and continue by private road to another, or travel by road from across a border to catch a flight. The airport is one end of an international road journey. This is not an airport taxi service.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><MagneticLink href="#planner" className="btn-gold">Plan Your Arrival</MagneticLink><MagneticLink href="#quote" className="btn-ghost">Get a Cross-Border Quote</MagneticLink></div>
          <div className="mt-10"><Board rows={ROWS} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <Reveal><h2 className="h2">Why We Do Not Offer Airport Taxis</h2><p className="mt-4 leading-relaxed text-muted lg:max-w-xl">A local airport taxi stays in one country. Our journeys do not. Every airport-connected trip on this page crosses a land border, which is why it is planned around the route, the vehicle arrangement and the passengers' documents, not just the flight.</p></Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <h3 className="font-semibold text-navy">Three kinds of airport-connected journey</h3>
            <ul className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
              {[["Arrive, then cross", "Fly into one country, then travel by road across a border to your destination."], ["Cross, then fly", "Travel by road from across a border to an airport for your flight."], ["Two borders", "A longer trip with an airport at one end and a multi-country road route."]].map(([t, d]) => (<li key={t} className="rounded-xl bg-paper p-4"><p className="font-semibold text-navy">{t}</p><p className="mt-1 text-muted">{d}</p></li>))}
            </ul>
          </div>
        </div>
      </section>

      <section id="planner" className="section bg-white">
        <div className="container-x"><h2 className="h2">Plan Your Airport Journey</h2><p className="mb-6 mt-3 max-w-2xl text-muted">Choose an airport and where you are traveling by road. We show the border corridor, or tell you when the trip would pass through another country.</p><ArrivalPlanner /></div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div><h2 className="h2">Allow for the Border</h2><p className="mt-4 leading-relaxed text-muted">The part of an airport-connected journey you cannot time is the border. Processing varies with traffic, passenger requirements and current procedures, so we do not quote crossing times. If you have a flight to catch on the far side, build in generous time and tell us about it.</p><p className="mt-3 text-sm text-muted">See the <Link href="/border-guides/" className="text-ocean underline decoration-gold/60 underline-offset-4">border guides</Link> for how a crossing works, and our <Link href="/routes/" className="text-ocean underline decoration-gold/60 underline-offset-4">routes</Link> for city-to-city journeys.</p></div>
          <div className="rounded-2xl border border-gold/40 bg-gold/10 p-6 text-sm leading-relaxed text-ink"><p className="font-semibold text-navy">What we do and do not control</p><p className="mt-2">We arrange the road transportation. Immigration at the airport and the border, customs, visas and entry eligibility belong to the authorities and to each traveler. We cannot guarantee entry, clearance or crossing times.</p></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="h2">Airport Journey Questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div><h2 className="h2">Request an Airport-Connected Journey</h2><p className="mt-4 leading-relaxed text-muted">Send the airport, flight time, destination across the border, passengers and luggage. We confirm the route and vehicle arrangement before you book.</p><a href={waLink("Hello GCC Elite Transport, I need a road journey connected to an airport and crossing a border.")} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" />WhatsApp GCC Elite Transport</a></div>
          <QuoteForm title="Plan Your Airport-Connected Journey" button="Get a Cross-Border Quote" note="We'll confirm the route and vehicle arrangement." showNotes />
        </div>
      </section>
    </>
  );
}
