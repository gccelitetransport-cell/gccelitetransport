import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/Legal";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/terms/`;
export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | GCC Elite Transport" }, description: "Terms for using the GCC Elite Transport website and requesting private cross-border road transportation.", alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: "Terms & Conditions | GCC Elite Transport", description: "Terms for using the GCC Elite Transport website and requesting private cross-border road transportation." },
  robots: { index: true, follow: true },
};
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: URL }] },
  { "@type": "WebPage", name: "Terms & Conditions", url: URL },
] };

const sections = [
  { id: "service", title: "Our service", body: <><p>GCC Elite Transport arranges private international road transportation across the GCC and selected regional routes. We do not provide local taxi, domestic airport taxi or hourly driver services.</p></> },
  { id: "quotes", title: "Quotes and bookings", body: <><p>Our website is a way to request a quote. It does not create a booking and it does not show instant prices. A booking exists only when we have confirmed the route, vehicle arrangement, price and journey details with you and you have approved them.</p><p>Route availability and vehicle arrangements are confirmed individually for each journey.</p></> },
  { id: "price", title: "Pricing and payment", body: <><p>The price is based on the route, distance, vehicle, passengers, luggage, trip type and border arrangement. We confirm the price before you travel. Payment terms are stated with your quote.</p></> },
  { id: "documents", title: "Your documents and eligibility", body: <><p>Each passenger is responsible for holding valid travel documents and for meeting the entry, visa, residency and immigration requirements of every country on the journey.</p><p>Immigration, customs and entry decisions are made by the relevant authorities. We do not control them and we do not guarantee entry, clearance or processing times.</p></> },
  { id: "vehicle", title: "Vehicles and drivers", body: <><p>Whether the same vehicle or driver can continue across a border depends on the route, vehicle authorization, operator requirements and border rules. We confirm the arrangement before travel, and where a change of vehicle or driver applies we tell you in advance.</p></> },
  { id: "changes", title: "Changes and cancellations", body: <><p>Terms for changes and cancellations are confirmed with your booking, because they depend on the journey. Please tell us as early as possible if your plans change.</p></> },
  { id: "delays", title: "Delays and circumstances beyond our control", body: <><p>Border processing, traffic, weather, closures, changes in regulations and other circumstances beyond our control can affect a journey. We do not guarantee crossing or arrival times. We will tell you about disruptions we become aware of and help you decide what to do.</p></> },
  { id: "liability", title: "Responsibility", body: <><p>We are responsible for arranging the transportation we confirm with you. To the extent the law allows, we are not responsible for decisions of border, immigration or customs authorities, or for losses that result from documents or eligibility the passenger was responsible for.</p></> },
  { id: "site", title: "Using this website", body: <><p>The content here is general information about our services and border travel. It is not legal or immigration advice. Border and entry rules change, so check current requirements with the relevant authorities before you travel.</p></> },
  { id: "law", title: "Governing law", body: <><p>The law that applies to a booking is the one stated in your booking confirmation.</p></> },
  { id: "contact", title: "Contact", body: <><p>For questions about these terms, contact us on WhatsApp or by phone using the details on our contact page.</p></> },
];

export default function TermsPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><LegalPage title="Terms & Conditions" lead="The terms that apply when you use this website or ask GCC Elite Transport to arrange a cross-border journey." sections={sections} /></>);
}
