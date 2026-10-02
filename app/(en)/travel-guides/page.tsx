import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { ARTICLES } from "@/lib/articles";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/travel-guides/`;
const TITLE = "GCC Road Travel Guides | GCC Elite Transport";
const DESC = "Practical guides for crossing GCC borders by road: residents and visitors, children, driving yourself vs a private transfer, and multi-country trips.";
export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: { canonical: URL },
  openGraph: { type: "website", url: URL, siteName: SITE.name, title: TITLE, description: DESC, images: [{ url: "/og/travel-guides.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/travel-guides.jpg"] },
};

export default function TravelGuides() {
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Travel Guides", item: URL }] },
    { "@type": "CollectionPage", name: "GCC Road Travel Guides", url: URL, description: DESC, mainEntity: { "@type": "ItemList", itemListElement: ARTICLES.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.h1, url: `${SITE.url}/travel-guides/${a.slug}/` })) } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="bg-paper">
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/" className="hover:text-gold">Home</Link> / Travel Guides</nav>
          <p className="eyebrow mt-5">Before you cross</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] text-navy sm:text-6xl">GCC Road Travel Guides</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">Answers to the questions people ask before crossing a GCC border by road. Each guide starts with a short answer and links to the official sources. For crossing-specific detail, see the <Link href="/border-guides/" className="font-medium text-ocean underline decoration-gold/60 underline-offset-4">border guides</Link>.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {ARTICLES.map((a, i) => (
              <li key={a.slug}><Link href={`/travel-guides/${a.slug}/`} className="group grid gap-2 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                <span className="text-3xl font-bold text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <span><span className="block text-xl font-semibold text-navy group-hover:text-ocean">{a.h1}</span><span className="mt-1 block text-sm text-muted">{a.answer.split(". ")[0]}.</span></span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">Read<ArrowIcon /></span>
              </Link></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="h2">Crossing-Specific Border Guides</h2>
          <ul className="mt-6 flex flex-wrap gap-2">{GUIDES.map((g) => (<li key={g.slug}><Link href={`/border-guides/${g.slug}/`} className="inline-block rounded-full border border-slate-300 bg-paper px-4 py-2 text-sm font-medium text-navy hover:border-gold">{g.h1}</Link></li>))}</ul>
        </div>
      </section>
    </>
  );
}
