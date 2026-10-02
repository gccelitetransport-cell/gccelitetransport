import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { Configurator, Garage, type Veh } from "@/components/pages/Fleet";
import { ScrollProgress } from "@/components/pages/Common";
import { FLEET, SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/fleet/`;
const TITLE = "Fleet for Cross-Border Journeys | GCC Elite Transport";
const DESC = "Vehicle categories for private cross-border road journeys across the GCC: executive sedan, premium SUV, large SUV, van and minibus, chosen around passengers, luggage and the border route.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/saudi-border-road.svg", width: 1600, height: 900, alt: "Highway approaching a border gate" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const D = (id: string) => FLEET.find((f) => f.id === id)!;
const VEHICLES: Veh[] = [
  { ...D("sedan"), tag: "1–3 passengers", best: ["Business travel", "Solo travelers and couples", "Shorter crossings such as the King Fahd Causeway"], luggage: "Suitable for a small party's suitcases. Check bag count first.", comfort: "Fine for a short crossing. For a day-long road journey, confirm seating comfort for everyone.", group: "Not meant for groups.", ask: ["Number of large suitcases", "Whether the trip is long distance", "Any child seat need"] },
  { ...D("suv"), name: "Premium SUV", tag: "Families and executive travel", best: ["Families with children", "Passengers carrying more luggage", "Long-distance executive travel"], luggage: "More luggage space than a sedan. Confirm large bags and special items.", comfort: "A common choice for long routes such as Saudi–UAE or Jordan–Saudi.", group: "Small groups and families.", ask: ["Adults and children", "Child seats", "Large and cabin bags"] },
  { ...D("lsuv"), tag: "Larger families and groups", best: ["Larger families", "Premium long-distance journeys", "Groups that want to stay in one vehicle"], luggage: "Extra space for family-size luggage. Exact capacity varies by vehicle.", comfort: "More room for passengers and bags over a long drive.", group: "Medium groups.", ask: ["Total passengers", "Bag count", "Elderly passengers or mobility needs"] },
  { ...D("van"), name: "Premium Van", tag: "Groups traveling together", best: ["Groups and teams", "Large families", "Pilgrim and event groups"], luggage: "Built for group luggage. Tell us the number and size of bags.", comfort: "Keeps a group in one vehicle across the border.", group: "Groups. One vehicle for the whole party where the route allows.", ask: ["Group size", "Luggage volume", "One pickup or several"] },
  { ...D("bus"), name: "Minibus", tag: "Larger groups, where available", best: ["Corporate teams", "Large family or event groups"], luggage: "Confirmed per group size and luggage.", comfort: "For larger parties. Availability and eligibility depend on the route.", group: "Larger groups. Availability varies.", ask: ["Group size", "Luggage", "Route and dates"] },
];

const FAQS = [
  { q: "What vehicle categories does GCC Elite Transport offer for cross-border journeys?", a: "Executive sedan, premium SUV, large SUV, premium van and minibus, where available for the route. The category is chosen from passenger count, luggage and the border route, and confirmed before you book." },
  { q: "Do you publish exact passenger and luggage capacities?", a: "No. Capacity varies by vehicle model and configuration, so we confirm what fits for your group instead of printing a number that may not match. Tell us your passengers and bags and we recommend a category." },
  { q: "Can any vehicle cross any border?", a: "No. Eligibility depends on the vehicle's registration, authorization, insurance, operator requirements and the rules of both countries. A vehicle that is road-legal in one country does not automatically meet every cross-border requirement." },
  { q: "Will the same vehicle cross the border?", a: "It depends on the route and the rules that apply. Some journeys keep one vehicle, others change vehicle or driver at the border. We confirm the arrangement before travel." },
  { q: "Can I choose a specific vehicle model?", a: "You can state a preference for a category. A specific model is subject to availability and to the route's eligibility requirements." },
  { q: "Are the vehicles private?", a: "Yes. A private transfer is reserved for your group, with no unrelated passengers." },
  { q: "Do you provide child seats?", a: "Tell us the children's ages when you request a quote so the need is raised before the vehicle is confirmed." },
];
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Fleet", item: URL }] },
  { "@type": "CollectionPage", name: "Fleet for cross-border journeys", url: URL, description: DESC, mainEntity: { "@type": "ItemList", itemListElement: VEHICLES.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: v.name })) } },
  { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
] };

export default function FleetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollProgress />
      <section className="bg-navy text-white">
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Fleet</nav>
          <p className="eyebrow mt-5">Vehicles for international road journeys</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl">Choose the Vehicle for Your Border Journey</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Five vehicle categories for private cross-border road transportation across the GCC and Jordan. The right one depends on how many people travel, how much they carry, how far they go and what the border route requires. This is not a local taxi fleet.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><MagneticLink href="#garage" className="btn-gold">See the Categories</MagneticLink><MagneticLink href="#quote" className="btn-ghost">Request This Vehicle</MagneticLink></div>
        </div>
      </section>

      <section id="garage" className="section">
        <div className="container-x"><Reveal><h2 className="h2">The Garage</h2><p className="mb-6 mt-3 max-w-2xl text-muted">Select a category to see how it is used on a cross-border journey. We describe what each is for, not a capacity we cannot stand behind.</p></Reveal><Garage vehicles={VEHICLES} /></div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="h2">Match Your Group to a Category</h2>
          <p className="mb-6 mt-3 max-w-2xl text-muted">Enter your group and bags. The tool shows its reasoning, so you can see why a category is suggested.</p>
          <Configurator />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="h2">Categories Side by Side</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Comparison of vehicle categories</caption>
              <thead className="bg-navy text-white"><tr><th scope="col" className="px-4 py-3">Category</th><th scope="col" className="px-4 py-3">Suited to</th><th scope="col" className="px-4 py-3">Long-distance comfort</th><th scope="col" className="px-4 py-3">Groups</th></tr></thead>
              <tbody className="divide-y divide-slate-200">{VEHICLES.map((v) => (<tr key={v.id}><th scope="row" className="px-4 py-3 font-semibold text-navy">{v.name}</th><td className="px-4 py-3 text-ink">{v.best[0]}</td><td className="px-4 py-3 text-muted">{v.comfort}</td><td className="px-4 py-3 text-muted">{v.group}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">A Vehicle Is Not Automatically Border-Ready</h2>
            <p className="mt-4 leading-relaxed text-white/75">A vehicle being road-legal in one GCC country does not mean every cross-border operating requirement is met. Whether it can cross depends on the factors on the right, and on the route. That is why we confirm the arrangement with you before we confirm the booking, and why we never promise the same vehicle or driver across every border.</p>
            <p className="mt-3 text-sm text-white/60">Read more in our <Link href="/border-guides/" className="text-gold underline underline-offset-4">border guides</Link> and the <Link href="/cross-border-transfers/" className="text-gold underline underline-offset-4">cross-border transfers overview</Link>.</p>
          </div>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">{["Registration country", "Ownership or rental status", "Driver authorization", "Private or commercial use", "Insurance", "Operator licensing", "Destination country rules", "Required permits"].map((f) => (<li key={f} className="flex gap-2 rounded-xl border border-white/10 bg-white/5 p-3"><span className="text-gold"><CheckIcon /></span>{f}</li>))}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="h2">Fleet Questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <section id="quote-wrap" className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <div><h2 className="h2">Request a Vehicle for Your Route</h2><p className="mt-4 leading-relaxed text-muted">Send your route, passengers, luggage and preferred category. We confirm the vehicle and the border arrangement before booking. You can also message us on WhatsApp.</p>
            <a href={waLink("Hello GCC Elite Transport, I would like to request a vehicle for a cross-border journey.")} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" />WhatsApp GCC Elite Transport</a></div>
          <QuoteForm title="Request This Vehicle" button="Request This Vehicle" note="We'll confirm the vehicle and arrangement for your route." vehicles={["No preference", "Executive Sedan", "Premium SUV", "Large SUV", "Premium Van", "Minibus"]} showNotes />
        </div>
      </section>
    </>
  );
}
