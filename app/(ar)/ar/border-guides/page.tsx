import type { Metadata } from "next";
import Link from "next/link";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { MagneticLink, Reveal } from "@/components/kuwait/Motion";
import { Arrow } from "@/components/ar/Sections";
import { GUIDES_AR } from "@/lib/ar/guides";
import { waLinkAr } from "@/lib/ar/site";
import { arAlternates } from "@/lib/i18n";
import { BORDER_GUIDES_REVIEWED_ON, SITE } from "@/lib/site";

const URL = `${SITE.url}/ar/border-guides/`;
const TITLE = "أدلة المنافذ الحدودية في الخليج | GCC Elite Transport";
const DESC = "أدلة المنافذ البرية بين دول الخليج والأردن: جسر الملك فهد، وسلوى، والبطحاء، والنويصيب، وحتا، والربع الخالي، والعمري. المستندات والسيارة والمسار.";

export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: arAlternates("/border-guides/"),
  openGraph: { type: "website", url: URL, siteName: SITE.name, locale: "ar_SA", title: TITLE, description: DESC, images: [{ url: "/og/ar-border-guides.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/ar-border-guides.jpg"] },
};

const DISCLAIMER = "متطلبات الحدود والجوازات والجمارك والسيارات والدخول تحددها الجهات المختصة وقد تتغير. تقدم GCC Elite Transport خدمة النقل ومعلومات عملية لتخطيط الرحلة، لكنها لا تتحكم في قرارات المنافذ ولا تضمن الدخول أو العبور أو مدة الإنجاز.";

const LAYERS = [
  { t: "الراكب", d: "الجنسية والإقامة ووضع التأشيرة." },
  { t: "السيارة", d: "التسجيل والملكية والتفويض." },
  { t: "المشغّل", d: "الترخيص وأذونات التشغيل." },
  { t: "المنفذ", d: "الجوازات والجمارك والإجراءات المحلية." },
  { t: "المسار", d: "متطلبات كل دولة على الممر." },
];
const STEPS = [
  { t: "اعرف مسارك", d: "حدد الممر، وهل تمر الرحلة بمنفذ واحد أو أكثر." },
  { t: "تحقق من متطلبات الركاب", d: "الجوازات والتأشيرات أو أذونات الدخول ووثائق الإقامة لكل مسافر." },
  { t: "تأكد من أهلية السيارة", d: "التسجيل والملكية وتفويض السائق والتأمين وأذونات المشغّل." },
  { t: "جهّز المستندات", d: "اجمع المستندات مسبقاً واجعلها في متناول اليد عند العبور." },
  { t: "أكّد ترتيب النقل", d: "اتفق على السيارة وخطة السائق والاستقبال والعودة قبل السفر." },
];
const OFFICIAL: [string, [string, string][]][] = [
  ["مجلس التعاون", [["الأمانة العامة لمجلس التعاون", "https://www.gcc-sg.org"]]],
  ["السعودية", [["منصة التأشيرات", "https://visa.visitsaudi.com"], ["وزارة الداخلية", "https://www.moi.gov.sa"], ["الهيئة العامة للنقل", "https://www.tga.gov.sa"]]],
  ["الإمارات", [["السفر براً", "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways"], ["الهيئة الاتحادية للهوية والجنسية", "https://icp.gov.ae"]]],
  ["البحرين", [["وزارة المواصلات والاتصالات", "https://www.mtt.gov.bh"], ["شؤون الجنسية والجوازات والإقامة", "https://www.npra.gov.bh"]]],
  ["قطر", [["الهيئة العامة للجمارك", "https://www.customs.gov.qa"], ["وزارة الداخلية", "https://portal.moi.gov.qa"]]],
  ["الكويت", [["وزارة الداخلية", "https://www.moi.gov.kw"]]],
  ["عُمان", [["تأشيرة العبور البري", "https://gov.om/en/w/get-land-transit-visa"], ["شرطة عُمان السلطانية", "https://www.rop.gov.om"]]],
  ["الأردن", [["وزارة الخارجية", "https://mfa.gov.jo"]]],
];
const FAQS = [
  { q: "ما هو المنفذ البري بين دول الخليج؟", a: "هو منفذ مخصص يعبر فيه الطريق بين دولتين خليجيتين، مثل السعودية والبحرين أو الإمارات وعُمان. يمر فيه الركاب والسيارات بإجراءات المغادرة والدخول، وتختلف الإجراءات والمتطلبات حسب المنفذ والمسافر." },
  { q: "هل يمكنني السفر براً بين دول الخليج؟", a: "غالباً نعم حيث يوجد اتصال بري. السعودية ترتبط برياً بالبحرين وقطر والكويت والإمارات وعُمان، والإمارات ترتبط بعُمان. المتطلبات تعتمد على الجنسية والإقامة والسيارة، فتأكد منها قبل السفر." },
  { q: "ما المستندات المطلوبة لعبور منفذ خليجي؟", a: "عادة جواز سفر ساري وأي تأشيرة أو إذن دخول ينطبق عليك، ووثائق الإقامة عند الحاجة، وقد تهم مستندات السيارة أيضاً. راجع المصادر الرسمية لحالتك." },
  { q: "هل تستطيع سيارة مستأجرة عبور الحدود؟", a: "فقط إذا سمحت شروط الإيجار ومتطلبات الدولتين بذلك. كثير من السيارات المستأجرة تحتاج تفويضاً خاصاً أو مقيدة بدولة واحدة، فاسأل شركة التأجير والجهات المختصة قبل التخطيط." },
  { q: "هل تكمل نفس السيارة ونفس السائق عبر الحدود؟", a: "يعتمد ذلك على المسار وتصريح السيارة والترخيص وأذونات المشغّل ومتطلبات المنفذ. بعض الرحلات تكمل بنفس السيارة والسائق، وأخرى تحتاج ترتيباً مختلفاً. لا نعد بأي منهما مسبقاً، ونؤكد الترتيب لكل حجز." },
  { q: "هل يحتاج المقيمون في الخليج مستندات مختلفة عن الزوار؟", a: "قد يحدث ذلك. وضع الإقامة والجنسية ونوع التأشيرة تؤثر جميعها فيما يحمله الراكب، وتختلف المتطلبات بين الدول. راجع الإرشادات الرسمية للدولة الوجهة حسب وضعك." },
  { q: "هل يمكنني المرور بأكثر من دولة خليجية براً؟", a: "نعم في بعض البرامج، لكن لكل منفذ اعتباراته وترتيب سيارته ومتطلبات ركابه. تصريح واحد لا يغطي تلقائياً رحلة متعددة الدول، فخطط لكل مرحلة." },
  { q: "هل ترتّب GCC Elite Transport نقلاً خاصاً عبر الحدود؟", a: "نعم، على المسارات المناسبة. نرتّب نقلاً برياً خاصاً عبر ممرات خليجية وإقليمية مختارة، ونؤكد ترتيب السيارة والسائق قبل الحجز. لا نتحكم في قرارات الجوازات أو الجمارك." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE.url}/ar/` },
      { "@type": "ListItem", position: 2, name: "أدلة المنافذ الحدودية", item: URL }] },
    { "@type": "CollectionPage", "@id": `${URL}#page`, name: "أدلة المنافذ الحدودية في الخليج", url: URL, description: DESC, inLanguage: "ar",
      mainEntity: { "@type": "ItemList", itemListElement: GUIDES_AR.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.h1, url: `${URL}${g.slug}/` })) } },
    { "@type": "FAQPage", inLanguage: "ar", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function BorderGuidesAr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <svg aria-hidden="true" viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute inset-0 -z-10 h-full w-full opacity-30">
          {[60, 140, 220, 300].map((y, n) => (<path key={y} d={`M-20 ${y} C 300 ${y - 60} 600 ${y + 60} 1220 ${y - 20}`} fill="none" stroke="#C9A14A" strokeWidth="1.2" strokeDasharray="6 10" className="road-anim" style={{ animationDuration: `${3 + n}s` }} />))}
        </svg>
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="مسار التنقل" className="text-xs text-white/60"><Link href="/ar/" className="hover:text-gold">الرئيسية</Link> / أدلة المنافذ الحدودية</nav>
          <p className="eyebrow mt-6">سبعة منافذ · ست دول خليجية والأردن</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">أدلة المنافذ الحدودية البرية في الخليج</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">لكل منفذ قصته: جسر فوق البحر، وبوابة واحدة باسمين، وطريق عبر الربع الخالي. اختر المنفذ لتقرأ موقعه وإجراءاته والمستندات التي يجب التحقق منها، مع روابط المصادر الرسمية.</p>
          <p className="mt-3 text-xs text-white/55">{BORDER_GUIDES_REVIEWED_ON ? `تمت المراجعة في ${BORDER_GUIDES_REVIEWED_ON}.` : "المتطلبات تتغير. تحقق دائماً من المصادر الرسمية قبل السفر."}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="h2">اختر المنفذ</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES_AR.map((g, i) => (
              <li key={g.slug}>
                <Reveal className="h-full">
                  <Link href={`/ar/border-guides/${g.slug}/`} className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg hover:ring-gold">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Flag id={g.aId} className="h-5 w-7" /><Flag id={g.bId} className="h-5 w-7" /></span>
                      <span className="text-3xl font-bold text-slate-200 group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-gold">{g.eyebrow}</p>
                    <h3 className="mt-1 text-xl font-bold text-navy">{g.h1}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean group-hover:text-gold">اقرأ الدليل<Arrow /></span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
          {GUIDES_AR.some((g) => g.aId === "jordan") && <p className="mt-4 text-xs text-muted">الأردن ليس من دول مجلس التعاون الخليجي، ويُدرج هنا كوجهة إقليمية مرتبطة برياً بالسعودية.</p>}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">خمس طبقات تحدد كل عبور</h2>
            <p className="mt-4 leading-relaxed text-muted">لا يوجد جواب واحد لسؤال «ماذا أحتاج للعبور؟». المتطلبات تتراكم من خمس جهات، وأي واحدة منها قد تغيّر الخطة.</p>
            <ol className="mt-6 space-y-3">
              {LAYERS.map((l, i) => (
                <li key={l.t} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-paper p-4" style={{ marginInlineStart: `${i * 12}px` }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{i + 1}</span>
                  <div><h3 className="font-semibold text-navy">{l.t}</h3><p className="text-sm text-muted">{l.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">استعد للعبور في خمس خطوات</h2>
            <ol className="mt-6 space-y-5 border-s-2 border-gold/40 ps-6">
              {STEPS.map((s, i) => (
                <li key={s.t} className="relative">
                  <span className="absolute -start-[33px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-white" aria-hidden="true" />
                  <h3 className="font-semibold text-navy">{i + 1}. {s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="h2 !text-white">ما نتولاه وما يبقى عليك</h2>
            <p className="mt-4 leading-relaxed text-white/75">نخطط النقل حول المنفذ ونخبرك بما تجهّزه، لكن قرارات الجوازات والجمارك تعود للجهات الرسمية وحدها.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5"><h3 className="font-semibold text-gold">GCC Elite Transport</h3><ul className="mt-3 space-y-2 text-sm">{["تخطيط المسار والمنفذ", "ترتيب السيارة والسائق", "الاستقبال والتوصيل", "التواصل قبل الرحلة"].map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul></div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5"><h3 className="font-semibold text-gold">الراكب</h3><ul className="mt-3 space-y-2 text-sm">{["صلاحية الجواز", "التأشيرة وأهلية الدخول", "وثائق الإقامة", "الالتزام بأنظمة الجوازات"].map((i) => (<li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>))}</ul></div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container-x max-w-3xl">
          <h2 className="h2">أسئلة عن المنافذ البرية في الخليج</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (<details key={f.q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-navy [&::-webkit-details-marker]:hidden"><h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span></summary><p className="faq-body pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="h2">المصادر الرسمية</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICIAL.map(([c, links]) => (
              <div key={c} className="rounded-xl border border-slate-200 bg-paper p-4">
                <h3 className="text-sm font-semibold text-navy">{c}</h3>
                <ul className="mt-2 space-y-1 text-sm">{links.map(([n, h]) => (<li key={h}><a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}</a></li>))}</ul>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISCLAIMER}</p>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <div className="container-x max-w-2xl">
          <h2 className="text-3xl font-bold">تحتاج نقلاً خاصاً عبر أحد هذه المنافذ؟</h2>
          <p className="mt-3 text-white/75">أرسل مسارك وسنراجع المنفذ ونؤكد ترتيب السيارة والسائق قبل الحجز.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><MagneticLink href="/ar/#quote" className="btn-gold">اطلب عرض سعر</MagneticLink><a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />واتساب GCC Elite Transport</a></div>
        </div>
      </section>
    </>
  );
}
