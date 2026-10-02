import Link from "next/link";
import {
  BOOKING_AR, CORPORATE_FOR_AR, CORPORATE_SERVICES_AR, COUNTRIES_AR, DISCLAIMER_AR, FAQS_AR, FLEET_AR, GUIDES_AR, ROUTES_AR, SERVICES_AR, STEPS_AR, WHY_AR, waLinkAr,
} from "@/lib/ar/site";
import { publishedRoutes } from "@/lib/routes";
import { CountryScene, HeroScene, Vehicle } from "../Art";
import { Flag } from "../Flag";
import { ArrowIcon, CheckIcon, PlusIcon, WhatsAppIcon } from "../Icons";
import { QuoteFormAr } from "./QuoteForm";

const Head = ({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) => (
  <div className="max-w-2xl">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className={`h2 ${light ? "!text-white" : ""}`}>{title}</h2>
    {text && <p className={`mt-4 leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{text}</p>}
  </div>
);
export const Arrow = ({ className = "h-4 w-4" }: { className?: string }) => <ArrowIcon className={`${className} -scale-x-100`} />;
const Link2 = ({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) => (
  <Link href={href} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${light ? "text-gold" : "text-ocean"} hover:text-gold`}>{children}<Arrow /></Link>
);

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-l from-navy/90 via-navy/45 to-transparent" />
      <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
        <div className="text-white">
          <p className="eyebrow">GCC Elite Transport</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">اعبر الخليج.<br />وسافر بخصوصية.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            نقل بري خاص بين دول مجلس التعاون الخليجي، بسيارات محجوزة مسبقاً وسائقين محترفين وتنسيق خاص بكل مسار ومنفذ حدودي.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#quote" className="btn-gold">اطلب عرض سعر لرحلتك</Link>
            <a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />تواصل عبر واتساب</a>
          </div>
          <p className="mt-5 text-sm text-white/70">سيارات خاصة • توصيل من الباب إلى الباب • ذهاب فقط أو ذهاب وعودة</p>
        </div>
        <QuoteFormAr />
      </div>
    </section>
  );
}

export function Highlights() {
  const items = ["ست دول خليجية", "سيارات خاصة محجوزة مسبقاً", "تخطيط حسب المسار", "عرض سعر قبل السفر"];
  return (
    <section aria-label="أبرز المزايا" className="border-b border-slate-200 bg-white">
      <ul className="container-x grid grid-cols-2 gap-x-4 gap-y-3 py-5 lg:grid-cols-4">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium text-navy"><span className="text-gold"><CheckIcon /></span>{i}</li>
        ))}
      </ul>
    </section>
  );
}

export function Countries() {
  return (
    <section className="section" id="countries">
      <div className="container-x">
        <Head eyebrow="شبكتنا الإقليمية" title="جهة نقل واحدة في كل دول الخليج" text="من العبور القصير بين دولتين إلى الرحلات البرية الطويلة، تنسّق GCC Elite Transport النقل الخاص في أنحاء الخليج." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES_AR.map((c) => (
            <article key={c.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
              <div className="relative h-40"><CountryScene hue={c.hue} />
                <div className="absolute start-4 top-4"><Flag id={c.id} className="h-7 w-10" /></div></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-navy">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                <div className="mt-4"><Link2 href={c.href}>{c.link}</Link2></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section bg-white" id="services">
      <div className="container-x">
        <Head eyebrow="الخدمات" title="خدمات مصممة للسفر عبر الحدود" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES_AR.map((s, i) => (
            <article key={s.title} className="rounded-2xl border border-slate-200 bg-paper p-6 sm:p-8">
              <span className="text-sm font-semibold text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              <div className="mt-5"><Link2 href={s.href}>{s.href.endsWith("#quote") ? "اطلب عرض سعر" : "اعرف المزيد"}</Link2></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Routes() {
  return (
    <section className="section" id="routes">
      <div className="container-x">
        <Head eyebrow="المسارات" title="أشهر مسارات النقل البري بين دول الخليج" text="أمثلة على الممرات التي نخطط عليها الرحلات. كل مسار يُؤكَّد على حدة قبل الحجز." />
        <ul className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {ROUTES_AR.map((r) => (
            <li key={r.from + r.to + r.corridor} className="w-[82%] shrink-0 snap-start rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:w-auto">
              <p className="flex items-center gap-2 text-lg font-semibold text-navy">{r.from} <span className="text-gold">↔</span> {r.to}</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">المنفذ</dt><dd className="text-ink">{r.corridor}</dd></div>
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">السيارات</dt><dd className="text-ink">{r.vehicles}</dd></div>
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">الرحلة</dt><dd className="text-ink">{r.trip}</dd></div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-5">
          <h3 className="text-sm font-semibold text-gold">صفحات المسارات التفصيلية (بالإنجليزية حالياً)</h3>
          <ul className="mt-3 flex flex-wrap gap-2" lang="en" dir="ltr">
            {publishedRoutes().map((r) => (<li key={r.slug}><Link href={`/routes/${r.slug}/`} hrefLang="en" className="inline-block rounded-full border border-slate-300 bg-paper px-4 py-2 text-sm font-medium text-navy hover:border-gold">{r.from.city} to {r.to.city}</Link></li>))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Explainer() {
  return (
    <section className="section bg-navy text-white" id="border-travel">
      <div className="container-x">
        <Head light eyebrow="كيف تسير الرحلة" title="المنفذ الحدودي جزء من الرحلة" text="السفر البري الدولي ليس مجرد مشوار تاكسي أطول. تصاريح السيارة ومستندات الركاب وإجراءات المنفذ وظروف الطريق قد تختلف من منفذ لآخر، لذلك نخطط لكل رحلة حسب مسارها الفعلي بدلاً من معاملة كل الرحلات بنفس الطريقة." />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS_AR.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-3xl font-bold text-gold">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-white/50">دخول الركاب وأهليتهم للتأشيرة يخضعان للمتطلبات الرسمية.</p>
      </div>
    </section>
  );
}

export function PrivateJourney() {
  const pts = ["سيارة خاصة", "بدون ركاب آخرين", "استقبال من الباب", "مساحة للأمتعة", "رحلة مخصصة لك"];
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <Head eyebrow="خصوصية من البداية" title="رحلتك أنت، لا تاكسي مشترك" text="عندما يسمح المسار برحلة متواصلة بسيارة خاصة، تسافر مجموعتك معاً دون مشاركة السيارة مع ركاب آخرين. المسار هو ما يحدد إن كان تغيير السيارة أو السائق مطلوباً، ونؤكد ذلك قبل سفرك." />
        <ul className="grid gap-3 sm:grid-cols-2">
          {pts.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-paper px-4 py-4 text-sm font-semibold text-navy"><span className="text-gold"><CheckIcon /></span>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Fleet() {
  return (
    <section className="section" id="fleet">
      <div className="container-x">
        <Head eyebrow="الأسطول" title="اختر السيارة المناسبة لرحلتك" text="طرازات السيارات وسعتها تختلف، ويُؤكَّد التوفر النهائي حسب مسارك." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET_AR.map((v) => (
            <article key={v.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="flex h-40 items-center justify-center bg-gradient-to-b from-slate-100 to-white px-6"><div className="h-24 w-full max-w-[280px] -scale-x-100"><Vehicle id={v.id} w={v.w} h={v.h} /></div></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
                <p className="mt-1 text-sm text-ink">{v.pax}</p>
                <p className="text-sm text-muted">{v.bags}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.use}</p>
                <Link href="/ar/#quote" className="btn-outline mt-5 w-full">اطلب هذه السيارة</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Head eyebrow="لماذا نحن" title="مصممون للسفر البري في الخليج" />
        <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_AR.map((w) => (
            <div key={w.title} className="border-t-2 border-gold pt-4">
              <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Corporate() {
  return (
    <section className="section bg-navy text-white" id="corporate">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <Head light eyebrow="الشركات" title="نقل الشركات بين دول الخليج" text="نقل لمن يحتاج أن يكون في سوق خليجي آخر في موعد محدد." />
          <ul className="mt-6 flex flex-wrap gap-2">{CORPORATE_FOR_AR.map((c) => <li key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">{c}</li>)}</ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLinkAr("مرحباً GCC Elite Transport، أرغب في مناقشة خدمات النقل للشركات.")} target="_blank" rel="noopener noreferrer" className="btn-gold">اطلب نقل الشركات</a>
            <Link href="/corporate/" hrefLang="en" className="btn-ghost">صفحة الشركات (English)</Link>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CORPORATE_SERVICES_AR.map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm"><span className="mt-0.5 text-gold"><CheckIcon /></span>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Family() {
  return (
    <section className="section">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <Head eyebrow="العائلات والمجموعات" title="سافروا معاً عبر الخليج" text="ابقوا معاً من نقطة الاستقبال حتى الوجهة. اختر السيارة حسب عدد الركاب والأمتعة ومتطلبات مسارك." />
          <Link href="/ar/#quote" className="btn-navy mt-7">خطّط رحلة لمجموعتك</Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm font-semibold text-navy">
          {["العائلات والأطفال", "المجموعات", "تخطيط الأمتعة", "سيارات خاصة", "راحة في الرحلات الطويلة", "من الباب إلى الباب"].map((t) => (
            <li key={t} className="rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Airport() {
  const items = ["من المطار إلى الفندق", "من الفندق إلى المطار", "بين مطارين", "من المطار عبر الحدود", "توصيل خاص للعائلات", "نقل الشركات من المطارات وإليها"];
  return (
    <section className="section bg-white" id="airport">
      <div className="container-x">
        <Head eyebrow="المطارات" title="التوصيل من المطارات وإليها في الخليج" text="الاستقبال والتوصيل في المطارات الرئيسية في السعودية والبحرين والإمارات وقطر والكويت وعُمان، بما فيها الرحلات التي تكمل عبر الحدود." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => <li key={i} className="rounded-xl border border-slate-200 bg-paper px-4 py-4 text-sm font-medium text-navy">{i}</li>)}
        </ul>
        <Link href="/ar/#quote" className="btn-outline mt-8">اطلب توصيل المطار</Link>
      </div>
    </section>
  );
}

export function Guides() {
  return (
    <section className="section" id="guides">
      <div className="container-x">
        <Head eyebrow="أدلة المنافذ" title="أدلة المنافذ الحدودية في الخليج" text="متطلبات العبور تختلف حسب الدولة ونوع السيارة والجنسية والغرض من السفر. أدلتنا تشرح التفاصيل العملية التي يجب على الركاب التحقق منها قبل الحجز." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES_AR.map((g) => (
            <article key={g.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-navy">{g.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{g.countries}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">تحقق من: </span>{g.check}</p>
              <div className="mt-4"><Link2 href={g.href}>اقرأ الدليل</Link2></div>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISCLAIMER_AR}</p>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Head eyebrow="الحجز" title="من عرض السعر إلى الوصول" />
          <ol className="mt-8 space-y-6">
            {BOOKING_AR.map((b) => (
              <li key={b.n} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{b.n}</span>
                <div><h3 className="font-semibold text-navy">{b.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{b.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="h-fit rounded-2xl border border-slate-200 bg-paper p-6">
          <h3 className="text-lg font-semibold text-navy">قبل أن تحجز</h3>
          <p className="mt-2 text-sm text-muted">قد يُطلب من الركاب تقديم:</p>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            {["بيانات الجواز أو الهوية عند الحاجة", "أهلية التأشيرة أو الدخول", "عدد الركاب", "تفاصيل الأمتعة", "نقطة الاستقبال والوجهة", "متطلبات السيارة"].map((i) => (
              <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">في طلب عرض السعر الأول نطلب فقط ما نحتاجه لتسعير الرحلة وترتيبها.</p>
        </aside>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section bg-white" id="faq">
      <div className="container-x max-w-3xl">
        <Head eyebrow="الأسئلة الشائعة" title="أسئلة يطرحها المسافرون" />
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS_AR.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}<span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span>
              </summary>
              <p className="pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-center text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-navy via-ocean to-navy" />
      <div className="container-x max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">أخبرنا إلى أين تتجه</h2>
        <p className="mt-4 leading-relaxed text-white/75">أرسل نقطة الاستقبال والوجهة وتاريخ السفر وعدد الركاب، وسنراجع المسار ونرسل لك خيارات النقل المتاحة.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/ar/#quote" className="btn-gold">اطلب عرض سعر</Link>
          <a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />واتساب GCC Elite Transport</a>
        </div>
      </div>
    </section>
  );
}
