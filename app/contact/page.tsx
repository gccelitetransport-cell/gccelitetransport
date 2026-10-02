import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink } from "@/components/kuwait/Motion";
import { RequestDesk } from "@/components/pages/Contact";
import { SITE, waLink } from "@/lib/site";

const URL = `${SITE.url}/contact/`;
const TITLE = "Contact GCC Elite Transport | Request a Cross-Border Quote";
const DESC = "Contact GCC Elite Transport on WhatsApp or phone to request a private cross-border transportation quote. Send your route, date, passengers and luggage.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/images/saudi-border-road.svg", width: 1600, height: 900, alt: "Highway approaching a border gate" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};
const INCLUDE = ["Where you start and where you finish, including the countries", "Your travel date and time, and a return if you need one", "How many people are traveling, and any children or elderly passengers", "Your luggage, large and cabin bags", "A vehicle preference, if you have one", "Your flight time, if an airport is involved"];
const FAQS = [
  { q: "How do I request a quote?", a: "Use the request desk on this page or message us on WhatsApp with your route, date, passengers and luggage. We review the route and confirm the available arrangement." },
  { q: "Do I need to send my passport details?", a: "No. A first request does not need passport details. We only ask for what is needed to price and arrange the trip, and documents are checked closer to travel." },
  { q: "How long will a reply take?", a: "We cannot promise a fixed response time, because requests vary by route. Include as much detail as you can so we can respond with a useful answer." },
  { q: "Do you take bookings for local taxis?", a: "No. We arrange private road journeys that cross an international border. We do not run local or domestic taxi services." },
  { q: "Is the price confirmed in the first message?", a: "No. Pricing depends on the route, vehicle, passengers, luggage, trip type and border arrangement. You receive the agreed price before you travel." },
];
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel, contactPoint: [{ "@type": "ContactPoint", telephone: SITE.phoneTel, contactType: "customer service", availableLanguage: ["English", "Arabic"] }] },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Contact", item: URL }] },
  { "@type": "ContactPage", name: "Contact GCC Elite Transport", url: URL },
  { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
] };

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="bg-navy text-white">
        <div className="container-x grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-white/60"><Link href="/" className="hover:text-gold">Home</Link> / Contact</nav>
            <p className="eyebrow mt-5">Request desk</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] sm:text-6xl">Contact GCC Elite Transport</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">Tell us where you are going. We review the route and confirm the available private transportation arrangement. We arrange journeys that cross an international border, not local taxis.</p>
          </div>
          <div className="grid gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-[72px] items-center gap-4 rounded-2xl bg-[#25D366] px-6 text-white transition-transform hover:-translate-y-0.5"><WhatsAppIcon className="h-8 w-8" /><span><span className="block text-sm opacity-90">Fastest way to reach us</span><span className="block text-lg font-bold">WhatsApp {SITE.phoneDisplay}</span></span></a>
            <a href={`tel:${SITE.phoneTel}`} className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-white/20 bg-white/5 px-6 transition-transform hover:-translate-y-0.5"><PhoneIcon className="h-7 w-7 text-gold" /><span><span className="block text-sm text-white/70">Call</span><span className="block text-lg font-bold">{SITE.phoneDisplay}</span></span></a>
          </div>
        </div>
      </section>

      <section id="desk" className="section">
        <div className="container-x">
          <h2 className="h2">Build Your Request</h2>
          <p className="mb-6 mt-3 max-w-2xl text-muted">Fill in what you know. The message on the right shows exactly what will be sent. Leave out anything you do not have yet.</p>
          <RequestDesk />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div><h2 className="h2">What to Include</h2><ul className="mt-5 space-y-3 text-sm text-ink">{INCLUDE.map((x) => (<li key={x} className="flex gap-3"><span className="text-gold">›</span>{x}</li>))}</ul></div>
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5 text-ink"><p className="font-semibold text-navy">Not needed yet</p><p className="mt-1">Passport details are not needed for a first request. We ask only for what is needed to price and arrange the trip.</p></div>
            <p>Want to understand the route first? Read the <Link href="/border-guides/" className="text-ocean underline decoration-gold/60 underline-offset-4">border guides</Link> or browse our <Link href="/routes/" className="text-ocean underline decoration-gold/60 underline-offset-4">routes</Link>. Companies can use the <Link href="/corporate/" className="text-ocean underline decoration-gold/60 underline-offset-4">corporate desk</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="h2">Contact Questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><MagneticLink href="#desk" className="btn-gold">Build Your Request</MagneticLink></div>
        </div>
      </section>
    </>
  );
}
