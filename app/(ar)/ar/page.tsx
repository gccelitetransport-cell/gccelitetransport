import type { Metadata } from "next";
import {
  Airport, Booking, Corporate, Countries, Explainer, Faq, Family, FinalCta, Fleet, Guides, Hero, Highlights, PrivateJourney, Routes, Services, Why,
} from "@/components/ar/Sections";
import { FAQS_AR } from "@/lib/ar/site";
import { arAlternates } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/ar/`;
const TITLE = "نقل بري خاص بين دول الخليج | GCC Elite Transport";
const DESC = "توصيل خاص بين السعودية والبحرين والإمارات وقطر والكويت وعُمان بسيارة وسائق، مع تخطيط لكل منفذ حدودي وعرض سعر قبل السفر.";

export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: arAlternates("/"),
  openGraph: { type: "website", url: URL, siteName: SITE.name, locale: "ar_SA", title: TITLE, description: DESC, images: [{ url: "/og/ar-home.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/ar-home.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESC, inLanguage: "ar", isPartOf: { "@id": `${SITE.url}/#website` }, about: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: URL }] },
    { "@type": "FAQPage", inLanguage: "ar", mainEntity: FAQS_AR.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function ArabicHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Highlights />
      <Countries />
      <Services />
      <Routes />
      <Explainer />
      <PrivateJourney />
      <Fleet />
      <Why />
      <Corporate />
      <Family />
      <Airport />
      <Guides />
      <Booking />
      <Faq />
      <FinalCta />
    </>
  );
}
