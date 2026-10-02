import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/Legal";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/cookie-policy/`;
export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | GCC Elite Transport" }, description: "What cookies and similar technologies gccelitetransport.com uses, and what happens when you follow links from it.", alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: "Cookie Policy | GCC Elite Transport", description: "What cookies and similar technologies gccelitetransport.com uses, and what happens when you follow links from it.", images: [{ url: "/og/legal.jpg", width: 1200, height: 630, alt: "Cookie Policy | GCC Elite Transport" }] },
  twitter: { card: "summary_large_image", title: "Cookie Policy | GCC Elite Transport", description: "What cookies and similar technologies gccelitetransport.com uses, and what happens when you follow links from it.", images: ["/og/legal.jpg"] },
  robots: { index: true, follow: true },
};
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Cookie Policy", item: URL }] },
  { "@type": "WebPage", name: "Cookie Policy", url: URL },
] };

const sections = [
  { id: "summary", title: "In short", body: <><p>This website does not set advertising or analytics cookies, and it does not use browser storage to track you.</p></> },
  { id: "own", title: "Cookies we set", body: <><p>We do not currently set cookies of our own. The quote forms run in your browser and do not save what you type.</p></> },
  { id: "hosting", title: "Technical cookies from our host", body: <><p>Our hosting provider may set technical cookies or use similar technology for security and to keep the site available. These are not used for advertising.</p></> },
  { id: "third", title: "Links to other services", body: <><p>When you tap a WhatsApp button, you leave this website and open WhatsApp, which has its own cookie and privacy practices. The same applies to the official government links on our guides.</p></> },
  { id: "choices", title: "Your choices", body: <><p>You can block or delete cookies in your browser settings. The site works without them.</p></> },
  { id: "changes", title: "If this changes", body: <><p>If we add analytics or other cookies in future, we will update this policy and ask for consent where the law requires it, before they are set.</p></> },
];

export default function CookiePage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><LegalPage title="Cookie Policy" lead="What cookies and similar technologies this website uses." sections={sections} /></>);
}
