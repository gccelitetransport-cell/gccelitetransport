import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { ScrollProgress } from "@/components/pages/Common";
import { CausewayAr, ChooserAr, DesertAr, DirectionStepsAr, GateAr, PairAr, PostAr, ThreeAr } from "@/components/ar/Signature";
import { GUIDES_AR, getGuideAr } from "@/lib/ar/guides";
import { waLinkAr } from "@/lib/ar/site";
import type { Guide } from "@/lib/guides";
import { arAlternates } from "@/lib/i18n";
import { getRoute, type Route } from "@/lib/routes";
import { BORDER_GUIDES_REVIEWED_ON, SITE } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => GUIDES_AR.map((g) => ({ slug: g.slug }));
type Props = { params: Promise<{ slug: string }> };
const DISC = "متطلبات الحدود والجوازات والجمارك والسيارات والدخول تحددها الجهات المختصة وقد تتغير. تقدم GCC Elite Transport خدمة النقل ومعلومات عملية لتخطيط الرحلة، لكنها لا تتحكم في قرارات المنافذ ولا تضمن الدخول أو العبور أو مدة الإنجاز.";
const EN_NAME: Record<string, string> = { "saudi-arabia": "Saudi Arabia", uae: "United Arab Emirates", bahrain: "Bahrain", qatar: "Qatar", kuwait: "Kuwait", oman: "Oman", jordan: "Jordan" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const g = getGuideAr(slug); if (!g) return {};
  const url = `${SITE.url}/ar/border-guides/${g.slug}/`;
  return { title: { absolute: g.title }, description: g.desc, alternates: arAlternates(`/border-guides/${g.slug}/`),
    openGraph: { type: "article", url, siteName: SITE.name, locale: "ar_SA", title: g.title, description: g.desc, images: [{ url: `/og/ar-guide-${g.slug}.jpg`, width: 1200, height: 630, alt: g.h1 }] },
    twitter: { card: "summary_large_image", title: g.title, description: g.desc, images: [`/og/ar-guide-${g.slug}.jpg`] } };
}

function Signature({ g }: { g: Guide }) {
  switch (g.signature) {
    case "causeway": return <CausewayAr />;
    case "gate": return <GateAr />;
    case "post": return <PostAr />;
    case "chooser": return <ChooserAr />;
    case "pair": return <PairAr />;
    case "desert": return <DesertAr />;
    case "three": return <ThreeAr />;
  }
}
const SIG_TITLE: Record<Guide["signature"], string> = { causeway: "على امتداد الجسر", gate: "جانبان لبوابة واحدة", post: "مركزان عند الطرف الغربي", chooser: "أي منفذ يناسب مسارك؟", pair: "الساحل أو الداخل", desert: "الاستعداد لطريق بعيد", three: "ثلاثة منافذ على حدود واحدة" };

export default async function GuidePageAr({ params }: Props) {
  const { slug } = await params; const g = getGuideAr(slug); if (!g) notFound();
  const url = `${SITE.url}/ar/border-guides/${g.slug}/`;
  const routes = g.related.map((s) => getRoute(s)).filter(Boolean) as Route[];
  const siblings = GUIDES_AR.filter((x) => x.slug !== g.slug && (x.aId === g.aId || x.bId === g.aId || x.aId === g.bId || x.bId === g.bId)).slice(0, 3);
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE.url}/ar/` }, { "@type": "ListItem", position: 2, name: "أدلة المنافذ الحدودية", item: `${SITE.url}/ar/border-guides/` }, { "@type": "ListItem", position: 3, name: g.h1, item: url }] },
    { "@type": "Article", "@id": `${url}#article`, headline: g.h1, description: g.desc, url, inLanguage: "ar", publisher: { "@id": `${SITE.url}/#org` }, about: [g.aId, g.bId].map((id) => ({ "@type": "Country", name: EN_NAME[id] })), ...(BORDER_GUIDES_REVIEWED_ON ? { dateModified: BORDER_GUIDES_REVIEWED_ON } : {}) },
    { "@type": "FAQPage", inLanguage: "ar", mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollProgress />
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x py-12 sm:py-16">
          <nav aria-label="مسار التنقل" className="text-xs text-muted"><Link href="/ar/" className="hover:text-gold">الرئيسية</Link> / <Link href="/ar/border-guides/" className="hover:text-gold">أدلة المنافذ الحدودية</Link> / {g.h1}</nav>
          <p className="eyebrow mt-5">{g.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold text-navy sm:text-5xl">{g.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{g.lead}</p>
          <p className="mt-3 text-xs text-muted">دليل معلومات وليس صفحة حجز. {BORDER_GUIDES_REVIEWED_ON ? `تمت المراجعة في ${BORDER_GUIDES_REVIEWED_ON}.` : "المتطلبات تتغير، لذلك راجع المصادر الرسمية أدناه قبل السفر."}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="h2">بطاقة المعلومات</h2>
            <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {g.facts.map((f) => (<div key={f.k} className="grid gap-1 p-4 sm:grid-cols-[9rem_1fr]"><dt className="text-xs font-semibold text-gold">{f.k}</dt><dd className="text-sm text-ink">{f.v}{f.src && <> <a href={f.src[1]} target="_blank" rel="noopener noreferrer" className="ms-1 inline-block rounded-full border border-slate-300 px-2 py-0.5 text-[11px] text-ocean hover:border-gold">المصدر</a></>}</dd></div>))}
            </dl>
          </div>
          <div><h2 className="h2">{SIG_TITLE[g.signature]}</h2><div className="mt-6"><Signature g={g} /></div></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal><h2 className="h2">ماذا يحدث في المنفذ؟</h2><p className="mb-6 mt-3 max-w-2xl text-muted">اختر الاتجاه لترى الترتيب العام للإجراءات.</p></Reveal>
          <DirectionStepsAr a={g.a} b={g.b} ab={g.steps.ab} ba={g.steps.ba} />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">ما الذي يربطه</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.connects.map((c) => (<li key={c} className="flex gap-2"><span className="text-gold">‹</span>{c}</li>))}</ul></div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">ما يتحقق منه الركاب</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.passenger.map((c) => (<li key={c} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{c}</li>))}</ul></div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h2 className="text-xl font-bold text-navy">ما قد تحتاجه السيارة</h2><ul className="mt-3 space-y-2 text-sm text-ink">{g.vehicle.map((c) => (<li key={c} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{c}</li>))}</ul></div>
        </div>
        <p className="container-x mt-5 text-sm text-muted">المتطلبات تختلف حسب الجنسية والإقامة وملكية السيارة والمسار والقواعد الحالية. تحقق منها لدى الجهات المختصة قبل السفر.</p>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div><h2 className="h2 !text-white">اعرف قبل أن تسافر</h2><div className="mt-6 space-y-4">{g.notes.map((n) => (<Reveal key={n.t} className="rounded-2xl border border-white/15 bg-white/5 p-5"><h3 className="font-semibold">{n.t}</h3><p className="mt-2 text-sm leading-relaxed text-white/75">{n.d}</p></Reveal>))}</div></div>
          <div><h2 className="text-2xl font-bold">أخطاء شائعة</h2><ul className="mt-5 space-y-3 text-sm">{g.mistakes.map((m) => (<li key={m} className="flex gap-3 rounded-xl border border-white/10 p-3"><span className="text-gold" aria-hidden="true">✕</span>{m}</li>))}</ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="h2">أسئلة عن {g.h1.replace("دليل ", "")}</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {g.faqs.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">المصادر الرسمية</h2>
            <ul className="mt-4 space-y-2 text-sm">{g.sources.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}<span className="sr-only"> (يفتح في نافذة جديدة)</span></a></li>))}</ul>
            <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISC}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">صفحات ذات صلة</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {siblings.map((s) => (<li key={s.slug}><Link href={`/ar/border-guides/${s.slug}/`} className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">{s.h1}</Link></li>))}
              <li><Link href="/ar/cross-border-transfers/" className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">النقل البري بين دول الخليج</Link></li>
              <li><Link href="/ar/border-guides/" className="block rounded-xl border border-slate-200 p-4 text-sm font-semibold text-navy hover:border-gold">كل أدلة المنافذ الحدودية</Link></li>
              {routes.map((r) => (<li key={r.slug}><Link href={`/routes/${r.slug}/`} hrefLang="en" className="block rounded-xl border border-dashed border-slate-300 p-4 text-sm font-semibold text-navy hover:border-gold"><span lang="en" dir="ltr">{r.from.city} to {r.to.city}</span> <span className="text-xs font-normal text-muted">(صفحة المسار بالإنجليزية)</span></Link></li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <div className="container-x max-w-2xl">
          <h2 className="text-3xl font-bold">مسافر بين {g.a} و{g.b}؟</h2>
          <p className="mt-3 text-white/75">نرتّب نقلاً خاصاً عبر هذا المنفذ، ونؤكد ترتيب السيارة والسائق قبل الحجز.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><MagneticLink href="/ar/#quote" className="btn-gold">اطلب عرض سعر</MagneticLink><a href={waLinkAr(`مرحباً GCC Elite Transport، أحتاج نقلاً بين ${g.a} و${g.b}.`)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />واتساب GCC Elite Transport</a></div>
        </div>
      </section>
    </>
  );
}
