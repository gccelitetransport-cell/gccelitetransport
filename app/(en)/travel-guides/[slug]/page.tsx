import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink } from "@/components/kuwait/Motion";
import { MultiCountry } from "@/components/borders/BorderClient";
import { ChildrenKit, DriveVsTransfer, ResidentsCheck, StatusCompare } from "@/components/articles/Widgets";
import { ScrollProgress, SideIndex } from "@/components/pages/Common";
import { ARTICLES, getArticle, type Article } from "@/lib/articles";
import { SITE, waLink } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => ARTICLES.map((a) => ({ slug: a.slug }));
type Props = { params: Promise<{ slug: string }> };
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const a = getArticle(slug); if (!a) return {};
  const url = `${SITE.url}/travel-guides/${a.slug}/`;
  return { title: { absolute: a.title }, description: a.desc, alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: SITE.name, title: a.title, description: a.desc, images: [{ url: `/og/article-${a.slug}.jpg`, width: 1200, height: 630, alt: a.h1 }] },
    twitter: { card: "summary_large_image", title: a.title, description: a.desc, images: [`/og/article-${a.slug}.jpg`] } };
}
function Widget({ a }: { a: Article }) {
  switch (a.widget) {
    case "residents": return <ResidentsCheck />;
    case "compare-status": return <StatusCompare />;
    case "children": return <ChildrenKit />;
    case "drive-vs-transfer": return <DriveVsTransfer />;
    case "multi": return <MultiCountry />;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; const a = getArticle(slug); if (!a) notFound();
  const url = `${SITE.url}/travel-guides/${a.slug}/`;
  const index: [string, string][] = [["answer", "Short answer"], ["tool", "Interactive check"], ...a.blocks.map((b) => [slugify(b.h), b.h] as [string, string]), ["faq", "Questions"], ["sources", "Sources"]];
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` }, { "@type": "ListItem", position: 2, name: "Travel Guides", item: `${SITE.url}/travel-guides/` }, { "@type": "ListItem", position: 3, name: a.h1, item: url }] },
    { "@type": "Article", headline: a.h1, description: a.desc, url, publisher: { "@id": `${SITE.url}/#org` } },
    { "@type": "FAQPage", mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollProgress />
      <header className="bg-paper">
        <div className="container-x max-w-4xl py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/" className="hover:text-gold">Home</Link> / <Link href="/travel-guides/" className="hover:text-gold">Travel Guides</Link> / {a.h1}</nav>
          <p className="eyebrow mt-5">{a.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">{a.h1}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">General information, not legal or immigration advice. Rules change, so confirm with the official sources listed.</p>
        </div>
      </header>
      <div className="container-x grid gap-10 pb-16 lg:grid-cols-[14rem_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-28 pt-10"><SideIndex items={index} /></div></aside>
        <article className="min-w-0 max-w-3xl space-y-12 pt-10">
          <section id="answer" className="scroll-mt-28 rounded-2xl border-l-4 border-gold bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">Short answer</h2>
            <p className="mt-2 text-lg leading-relaxed text-ink">{a.answer}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">{a.takeaways.map((t) => (<li key={t} className="rounded-lg bg-paper px-3 py-2 text-sm text-navy">{t}</li>))}</ul>
          </section>
          <section id="tool" className="scroll-mt-28"><h2 className="text-2xl font-bold text-navy">Interactive Check</h2><div className="mt-4"><Widget a={a} /></div></section>
          {a.blocks.map((b) => (
            <section key={b.h} id={slugify(b.h)} className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-navy">{b.h}</h2>
              {b.p?.map((p) => (<p key={p} className="mt-3 leading-relaxed text-muted">{p}</p>))}
              {b.list && <ul className="mt-3 space-y-2">{b.list.map((l) => (<li key={l} className="flex gap-3 leading-relaxed text-muted"><span className="text-gold">›</span>{l}</li>))}</ul>}
            </section>
          ))}
          <section id="faq" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-navy">Questions</h2>
            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">{a.faqs.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}</div>
          </section>
          <section id="sources" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-navy">Official Sources</h2>
            <ul className="mt-3 space-y-1.5 text-sm">{a.sources.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}<span className="sr-only"> (opens in a new tab)</span></a></li>))}</ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">Related</h3>
            <ul className="mt-2 flex flex-wrap gap-2">{a.links.map(([n, h]) => (<li key={h}><Link href={h} className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-gold">{n}</Link></li>))}</ul>
          </section>
          <section className="rounded-2xl bg-navy p-6 text-white">
            <h2 className="text-xl font-bold">Need private transport across a border?</h2>
            <p className="mt-2 text-sm text-white/75">We arrange private cross-border road transportation and confirm the vehicle and driver arrangement before you book. We do not handle visas or immigration.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row"><MagneticLink href="/contact/" className="btn-gold">Get a Cross-Border Quote</MagneticLink><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp</a></div>
          </section>
        </article>
      </div>
    </>
  );
}
