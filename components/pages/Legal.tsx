import Link from "next/link";
import { LEGAL_UPDATED, SITE } from "@/lib/site";
import { ScrollProgress, SideIndex } from "./Common";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export function LegalPage({ title, lead, sections }: { title: string; lead: string; sections: LegalSection[] }) {
  return (
    <>
      <ScrollProgress />
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/" className="hover:text-gold">Home</Link> / {title}</nav>
          <h1 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{lead}</p>
          {LEGAL_UPDATED && <p className="mt-3 text-xs text-muted">Last updated: {LEGAL_UPDATED}</p>}
        </div>
      </section>
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[14rem_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-28"><SideIndex items={sections.map((s) => [s.id, s.title])} /></div></aside>
        <div className="max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-navy"><span className="mr-2 text-gold">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">{s.body}</div>
            </section>
          ))}
          <p className="rounded-lg border border-slate-200 bg-white p-4 text-xs text-muted">Questions about this page? <Link href="/contact/" className="text-ocean underline underline-offset-2">Contact {SITE.name}</Link>.</p>
        </div>
      </div>
    </>
  );
}
