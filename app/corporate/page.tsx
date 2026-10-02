import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { ItineraryDesk } from "@/components/pages/Corporate";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/corporate/`;
const TITLE = "Corporate Cross-Border Transportation | GCC Elite Transport";
const DESC = "Private corporate transportation across GCC borders: executive transfers, employee transport, multi-day schedules and recurring routes, planned around the route, vehicle and border requirements.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/uae-border-road.svg", width: 1600, height: 900, alt: "Highway leading to a border gate" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const SERVICES = [
  ["Executive transfers", "A private vehicle for an executive crossing a GCC border, with pickup timed to a schedule and the return agreed up front."],
  ["Cross-border employee transportation", "Staff moving between offices or sites in different countries, in one vehicle, with one border plan for the group."],
  ["Business meeting transportation", "Pickup, border and drop-off planned around a meeting, with a buffer for the crossing, which we cannot time."],
  ["Airport-connected road journeys", "A road leg that starts or ends at an international airport, quoted as one journey where the route is confirmed."],
  ["Multi-day chauffeur arrangements", "A dedicated vehicle across several days of an itinerary, subject to availability and route eligibility."],
  ["Event transportation", "Group movement for conferences, exhibitions and project launches across a border."],
  ["Recurring corporate routes", "A regular route, such as weekly office-to-office travel, planned once and repeated."],
];
const NEED = ["Origin and destination cities, and the countries involved", "Dates and times, including any return", "Number of travelers and their nationalities and residency, since requirements depend on them", "Luggage and equipment", "Whether travelers are executives, a team or a mixed group", "Any recurring pattern or multi-day schedule"];
const STEPS = [["01", "Brief", "You send the route, schedule and travelers."], ["02", "Route review", "We check the corridor, the border and the vehicle arrangement."], ["03", "Proposal", "You receive the confirmed arrangement and price before travel."], ["04", "Confirmation", "Pickup details and driver coordination are shared."], ["05", "Journey", "The vehicle meets your travelers at the agreed pickup point."]];
const FAQS = [
  { q: "Does GCC Elite Transport provide corporate cross-border transportation?", a: "Yes. We arrange private road transportation for companies, teams and executives across GCC borders and selected regional routes. Each arrangement is confirmed before booking." },
  { q: "Can you arrange recurring routes for a company?", a: "Yes, where the route is available and the vehicle arrangement can be repeated. Describe the pattern, such as weekly or monthly, and we assess it." },
  { q: "Do you guarantee arrival times?", a: "No. Border processing and traffic vary, so we never guarantee arrival or crossing times. We recommend a buffer around the border for time-critical meetings." },
  { q: "Who is responsible for travel documents?", a: "Each traveler. We coordinate the transportation. Passports, visas, residency documents and entry eligibility remain the traveler's responsibility, and immigration and customs decisions belong to the authorities." },
  { q: "Can the same vehicle and driver continue across the border?", a: "It depends on the route, vehicle authorization, operator requirements and border rules. We confirm the arrangement for each booking." },
  { q: "How is corporate pricing decided?", a: "From the route, vehicle, travelers, luggage, trip type and border arrangement. For recurring routes we quote the pattern. You receive the agreed price before travel." },
  { q: "Can executives travel with luggage and equipment?", a: "Yes. Tell us the bags and any equipment so the vehicle is matched to the load." },
];
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Corporate", item: URL }] },
  { "@type": "Service", "@id": `${URL}#service`, name: "Corporate cross-border transportation", serviceType: "Private corporate cross-border road transportation", url: URL, description: DESC, provider: { "@id": `${SITE.url}/#org` }, areaServed: ["Saudi Arabia", "United Arab Emirates", "Bahrain", "Qatar", "Kuwait", "Oman", "Jordan"].map((n) => ({ "@type": "Country", name: n })) },
  { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
] };

export default function CorporatePage() {
  return (
    <div className="bg-navy text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="relative overflow-hidden">
        <svg viewBox="0 0 800 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true"><path d="M0 250 C 200 250 250 90 420 120 S 650 220 800 80" fill="none" stroke="#C9A14A" strokeWidth="2" strokeDasharray="6 10" className="road-anim" /></svg>
        <div className="container-x relative py-14 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Corporate</nav>
          <p className="eyebrow mt-5">The corporate desk</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl">Corporate Cross-Border Transportation Across the GCC</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Private road transportation for executives, teams and project staff who need to be in another GCC market, planned around the border, the vehicle and the schedule. We arrange the transportation. We do not control border decisions.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><MagneticLink href="#desk" className="btn-gold">Build Your Itinerary</MagneticLink><a href={waLink("Hello GCC Elite Transport, I would like to talk about corporate transportation.")} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />Talk to Our Transport Team</a></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="h2 !text-white">What We Arrange for Companies</h2></Reveal>
          <ul className="-mx-4 mt-8 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3" aria-label="Corporate services">
            {SERVICES.map(([t, d], i) => (<li key={t} className="w-[80%] shrink-0 snap-start rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-gold/60 sm:w-auto"><span className="text-sm font-semibold text-gold">0{i + 1}</span><h3 className="mt-1 font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p></li>))}
          </ul>
        </div>
      </section>

      <section id="desk" className="section bg-[#07131f]">
        <div className="container-x">
          <Reveal><h2 className="h2 !text-white">Build Your Itinerary</h2><p className="mb-8 mt-3 max-w-2xl text-white/70">Add each leg of your trip. The brief on the right updates as you type, and you send it to our transport team in one tap. We reply with the confirmed arrangement.</p></Reveal>
          <ItineraryDesk />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2 !text-white">What We Need From You</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/80">{NEED.map((n) => (<li key={n} className="flex gap-3"><span className="mt-0.5 text-gold"><CheckIcon /></span>{n}</li>))}</ul>
            <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-white/85">We do not collect passport numbers in a first request. Documents are checked closer to travel.</p>
          </div>
          <div>
            <h2 className="h2 !text-white">How a Corporate Request Is Handled</h2>
            <ol className="mt-6 border-l-2 border-gold/50">{STEPS.map(([n, t, d]) => (<li key={n} className="relative pb-6 pl-8 last:pb-0"><span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">{n}</span><h3 className="font-semibold">{t}</h3><p className="text-sm text-white/70">{d}</p></li>))}</ol>
          </div>
        </div>
      </section>

      <section className="section bg-white text-ink">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2"><h2 className="h2">Where the Work Happens</h2><p className="mt-4 leading-relaxed text-muted">Corporate demand follows the region's business corridors. Our country pages explain how we operate from each of them: <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/saudi-arabia/">Saudi Arabia</Link>, <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/uae/">the UAE</Link>, <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/bahrain/">Bahrain</Link>, <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/qatar/">Qatar</Link>, <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/kuwait/">Kuwait</Link>, <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/oman/">Oman</Link> and <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/jordan/">Jordan</Link>. For city-to-city journeys, see <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/routes/">our routes</Link>, and for vehicles, the <Link className="text-ocean underline decoration-gold/60 underline-offset-4" href="/fleet/">fleet</Link>.</p></div>
          <div className="h-fit rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed"><p className="font-semibold text-navy">Responsibility</p><p className="mt-2 text-ink">Border, immigration, customs, vehicle and entry requirements are determined by the relevant authorities and may change. We do not guarantee entry, clearance, crossing times or arrival times.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="h2 !text-white">Corporate Questions</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-white/70">{f.a}</p></details>))}
          </div>
        </div>
      </section>
    </div>
  );
}
