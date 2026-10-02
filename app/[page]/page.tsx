import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PAGES } from "@/lib/pages";
import { DISCLAIMER, SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export const dynamicParams = false;
export function generateStaticParams() { return PAGES.map((p) => ({ page: p.slug })); }

type Props = { params: Promise<{ page: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const p = PAGES.find((x) => x.slug === page);
  if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/${p.slug}/` }, robots: p.legal ? { index: false, follow: true } : undefined };
}

export default async function InnerPage({ params }: Props) {
  const { page } = await params;
  const p = PAGES.find((x) => x.slug === page);
  if (!p) notFound();
  const ld = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
    { "@type": "ListItem", position: 2, name: p.title, item: `${SITE.url}/${p.slug}/` }] };
  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="container-x max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/" className="hover:text-gold">Home</Link> / {p.title}</nav>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{p.title}</h1>
        <p className="mt-5 leading-relaxed text-muted">{p.intro}</p>
        {!p.legal && (
          <>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#quote" className="btn-gold">Get a Cross-Border Quote</Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" />WhatsApp Us</a>
            </div>
            <p className="mt-8 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed">{DISCLAIMER}</p>
          </>
        )}
      </div>
    </section>
  );
}
