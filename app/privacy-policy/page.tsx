import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/Legal";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/privacy-policy/`;
export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | GCC Elite Transport" }, description: "How GCC Elite Transport handles the information you share when you ask about a cross-border journey.", alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: "Privacy Policy | GCC Elite Transport", description: "How GCC Elite Transport handles the information you share when you ask about a cross-border journey." },
  robots: { index: true, follow: true },
};
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Privacy Policy", item: URL }] },
  { "@type": "WebPage", name: "Privacy Policy", url: URL },
] };

const sections = [
  { id: "who", title: "Who this applies to", body: <><p>This policy covers gccelitetransport.com and the enquiries you send to GCC Elite Transport about private cross-border road transportation. You can contact us on WhatsApp or by phone using the details on our contact page.</p></> },
  { id: "collect", title: "What we collect", body: <><p>Details you choose to send us when you ask for a quote, such as your name, route, travel date, number of passengers, luggage, vehicle preference, notes and the phone number you message from.</p><p>Our website does not store the quote forms. The forms assemble a message in your browser and open WhatsApp so you can send it. We receive the message only if you send it.</p><p>Our hosting provider may process technical data such as your IP address and the pages requested, in order to deliver the site and keep it secure.</p></> },
  { id: "passports", title: "Passport and sensitive details", body: <><p>We do not ask for passport details in a first quote request. If we later need traveler information to arrange a journey, we ask only for what the arrangement requires, and we ask you to send it to us directly rather than posting it publicly.</p></> },
  { id: "use", title: "How we use it", body: <><p>To respond to your request, review the route, prepare a quote and arrange the journey you confirm; to share pickup and driver details with you; to keep records of the arrangement; and to meet legal obligations.</p></> },
  { id: "share", title: "Who we share it with", body: <><p>We share information only as needed to arrange your journey, for example with the driver or operator who carries out the transportation, and with authorities where the law requires it.</p><p>If you contact us on WhatsApp, WhatsApp processes your messages under its own terms and privacy policy.</p></> },
  { id: "keep", title: "How long we keep it", body: <><p>We keep messages and journey details for as long as we need them to handle your request and the journey, and for as long as the law requires. After that we delete or anonymize them where we can.</p></> },
  { id: "rights", title: "Your choices", body: <><p>You can ask us what we hold about you, ask us to correct it, or ask us to delete it, where the law that applies to you gives you those rights. Contact us and we will respond.</p></> },
  { id: "children", title: "Children", body: <><p>Our website and services are meant for adults arranging travel. We do not knowingly collect information from children, apart from the number and ages of children traveling that a parent or guardian chooses to share so we can arrange suitable seating.</p></> },
  { id: "changes", title: "Changes to this policy", body: <><p>If we change how we handle information, for example by adding analytics, we will update this page before the change takes effect.</p></> },
];

export default function PrivacyPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><LegalPage title="Privacy Policy" lead="How we handle the information you share when you ask about a cross-border journey. This is a plain-language summary of our practices." sections={sections} /></>);
}
