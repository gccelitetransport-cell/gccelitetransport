import type { Metadata } from "next";
import { enAlternates } from "@/lib/i18n";
import {
  Airport, Booking, Corporate, Countries, Explainer, Family, Faq, Fleet, FinalCta, Guides, Hero, Highlights, PrivateJourney, Routes, Services, Travelers, Why,
} from "@/components/Sections";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = { alternates: enAlternates("/") };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel, description: SITE.tagline,
      contactPoint: [{ "@type": "ContactPoint", telephone: SITE.phoneTel, contactType: "customer service" }] },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" }] },
    { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Home() {
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
      <Travelers />
      <Faq />
      <FinalCta />
    </>
  );
}
