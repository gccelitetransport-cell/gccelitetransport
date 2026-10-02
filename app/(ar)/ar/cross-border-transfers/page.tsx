import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flag } from "@/components/Flag";
import { CheckIcon, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { Arrow } from "@/components/ar/Sections";
import { QuoteFormAr } from "@/components/ar/QuoteForm";
import { waLinkAr } from "@/lib/ar/site";
import { arAlternates } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const URL = `${SITE.url}/ar/cross-border-transfers/`;
const TITLE = "النقل البري بين دول الخليج | توصيل خاص عبر الحدود";
const DESC = "نقل بري خاص بين دول الخليج ومسارات إقليمية مختارة. اطلب سيارة خاصة بسائق وعرض سعر مبني على مسارك ومنفذك الحدودي.";

export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESC, alternates: arAlternates("/cross-border-transfers/"),
  openGraph: { type: "website", url: URL, siteName: SITE.name, locale: "ar_SA", title: TITLE, description: DESC, images: [{ url: "/og/ar-cross-border-transfers.jpg", width: 1200, height: 630, alt: TITLE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og/ar-cross-border-transfers.jpg"] },
};

const STAGES = [
  { t: "الاستقبال", d: "يلتقي السائق بالمجموعة في نقطة الاستقبال المؤكدة." },
  { t: "الطريق", d: "تتجه السيارة نحو المنفذ الحدودي المختار." },
  { t: "المنفذ الحدودي", d: "حسب المنفذ، قد تشمل الرحلة الجوازات والجمارك وتفتيش السيارة أو إجراءات أخرى." },
  { t: "التحقق المطلوب", d: "يحمل كل راكب المستندات والتصاريح التي تنطبق على رحلته." },
  { t: "متابعة الطريق", d: "تكمل الرحلة وفق ترتيب السيارة والسائق المتفق عليه مسبقاً." },
  { t: "الوجهة", d: "التوصيل إلى العنوان أو المطار المتفق عليه." },
];

const COMPARE = [
  { pair: "السعودية ↔ البحرين", crossing: "جسر بحري وليس حدوداً برية مفتوحة", plan: "إجراءات الجسر، وأهلية السيارة، ومن أين تبدأ رحلتك في كل دولة" },
  { pair: "السعودية ↔ الكويت", crossing: "منفذ بري في شمال شرق السعودية", plan: "منطقة الاستقبال، ومستندات الركاب، وترتيب السيارة على كل جانب" },
  { pair: "السعودية ↔ قطر", crossing: "منفذ بري رئيسي واحد", plan: "المسافة إلى المنفذ، وتصاريح السيارة، وترتيب المرحلة التالية" },
  { pair: "الإمارات ↔ عُمان", crossing: "أكثر من منفذ بري", plan: "المنفذ الأنسب لنقطة الاستقبال والوجهة، ومتطلبات الركاب" },
];

const NETWORK = [
  { id: "saudi-arabia", href: "/ar/border-guides/", link: "منافذ السعودية", name: "المملكة العربية السعودية", t: "أكبر شبكة طرق برية في المنطقة، بروابط نحو البحرين وقطر والكويت والإمارات وعُمان. المسافة واختيار المنفذ يحددان شكل الرحلة." },
  { id: "uae", href: "/ar/border-guides/uae-saudi/", link: "منفذ الغويفات / البطحاء", name: "الإمارات العربية المتحدة", t: "يمكن للنقل البري الخاص أن يربط المدن الإماراتية الرئيسية بأسواق خليجية أخرى حيث يتوفر مسار بري عملي." },
  { id: "bahrain", href: "/ar/border-guides/saudi-bahrain/", link: "دليل جسر الملك فهد", name: "البحرين", t: "الرحلات البرية الدولية من البحرين وإليها تمر عبر جسر الملك فهد عندما يتطلب المسار ذلك." },
  { id: "qatar", href: "/ar/border-guides/qatar-saudi/", link: "منفذ أبو سمرة / سلوى", name: "قطر", t: "الاتصال البري لقطر يمر عبر حدودها مع السعودية، لذلك تُخطَّط معظم الرحلات البرية حول هذا المنفذ." },
  { id: "kuwait", href: "/ar/border-guides/kuwait-saudi/", link: "منافذ الكويت والسعودية", name: "الكويت", t: "السفر البري من الكويت يتجه عادة جنوباً نحو السعودية، مع ترتيب المراحل التالية بشكل منفصل عند الحاجة." },
  { id: "oman", href: "/ar/border-guides/oman-uae/", link: "منافذ عُمان والإمارات", name: "سلطنة عُمان", t: "ترتبط عُمان برياً بالإمارات، وبالسعودية عبر مسارات أطول تُراجَع كل منها على حدة." },
];

const USES = [
  { t: "سفر العائلات", d: "سيارة خاصة للوالدين والأطفال وأمتعتهم. أخبرنا عن مقاعد الأطفال والعربة وعدد الحقائب لنختار السيارة المناسبة للمجموعة." },
  { t: "سفر الأعمال", d: "نقل عبر الحدود للتنفيذيين والاجتماعات والزيارات الميدانية وسفر الشركات، بمواعيد استقبال مرتبطة بجدولك." },
  { t: "الربط مع المطارات", d: "نقل بري بين المطارات والفنادق والوجهات على الجانب الآخر من الحدود، دون ترتيب سيارة ثانية عند الوصول." },
  { t: "رحلات متعددة الأيام", d: "سيارة مخصصة للرحلات الخليجية الطويلة والمناسبات والجولات وجداول الأعمال، حسب التوفر." },
];

const VEHICLES = [
  { n: "سيدان تنفيذية", d: "للمجموعات الصغيرة ورجال الأعمال." },
  { n: "SUV فاخرة", d: "للعائلات ومن يحتاج مساحة أمتعة إضافية." },
  { n: "SUV كبيرة", d: "للعائلات الأكبر أو المجموعات التي تحتاج مقاعد أكثر." },
  { n: "فان فاخر", d: "للمجموعات التي تسافر معاً." },
  { n: "ميني باص", d: "لنقل المجموعات الكبيرة، حسب التوفر." },
];

const RESERVED = [
  "لا يوجد ركاب آخرون في السيارة",
  "الاستقبال حسب برنامج رحلتك المؤكد",
  "مساحة الأمتعة لمجموعتك فقط",
  "ترتيب نقل مباشر لمجموعتك",
  "مرونة في موعد الانطلاق حيث تسمح العمليات",
];

const MODELS = [
  { t: "سيارة واحدة طوال الرحلة", d: "حيث يُسمح بذلك وتتوفر الإمكانية التشغيلية، قد تكمل نفس السيارة عبر الحدود." },
  { t: "تبديل السائق أو السيارة", d: "بعض المسارات قد تتطلب سائقاً أو سيارة مختلفة لجزء من الرحلة." },
  { t: "تنسيق خاص بالمسار", d: "بعض الرحلات تحتاج تأكيداً منفرداً قبل تحديد السعر النهائي." },
];

const PRICE_FACTORS = ["نقطة الانطلاق", "الوجهة", "المنفذ الحدودي", "المسافة", "عدد الركاب", "الأمتعة", "فئة السيارة", "ذهاب أو ذهاب وعودة", "الانتظار المطلوب", "ترتيب السائق", "تكاليف تشغيل خاصة بالمسار"];

const ROUTE_CLUSTERS = [
  { a: "السعودية", b: "البحرين", n: "رحلات عبر جسر الملك فهد", href: "/ar/border-guides/saudi-bahrain/" },
  { a: "السعودية", b: "الإمارات", n: "ممر بري طويل", href: "/ar/border-guides/uae-saudi/" },
  { a: "السعودية", b: "قطر", n: "عبر منفذ سلوى / أبو سمرة", href: "/ar/border-guides/qatar-saudi/" },
  { a: "السعودية", b: "الكويت", n: "منافذ برية شمالية", href: "/ar/border-guides/kuwait-saudi/" },
  { a: "السعودية", b: "عُمان", n: "مسار طويل يُراجَع لكل رحلة", href: "/ar/border-guides/oman-saudi/" },
  { a: "الإمارات", b: "عُمان", n: "أكثر من منفذ ممكن", href: "/ar/border-guides/oman-uae/" },
];

const TIMELINE = [
  { n: "01", t: "تفاصيل المسار", d: "ترسل نقطة الاستقبال والوجهة والتاريخ والوقت وعدد الركاب والأمتعة والسيارة المفضلة." },
  { n: "02", t: "مراجعة المسار", d: "نراجع الممر المطلوب ومتطلبات المنفذ التي تنطبق عليه." },
  { n: "03", t: "ترتيب السيارة", d: "نؤكد السيارة المتاحة وترتيب السائق." },
  { n: "04", t: "عرض السعر", d: "تستلم سعر النقل المؤكد وتفاصيل الرحلة." },
  { n: "05", t: "الحجز", d: "تؤكد أنت الرحلة." },
  { n: "06", t: "الاستقبال", d: "يقابلك السائق في الموقع المتفق عليه." },
];

const SCENARIOS = [
  { t: "عائلة تعبر الحدود", s: "شخصان بالغان وأطفال مع أمتعة يحتاجون نقلاً خاصاً بين البحرين والسعودية.", need: "نطلب عنوان الاستقبال والتوصيل، وعدد البالغين والأطفال، وعدد الحقائب، وتاريخ السفر، ونوع الرحلة. تُطرح احتياجات مقاعد الأطفال قبل تأكيد السيارة." },
  { t: "رحلة عمل", s: "مدير تنفيذي يسافر بين دبي ومسقط ويحتاج سيارة خاصة لرحلة عمل مجدولة.", need: "يُعدّ عرض السعر بناءً على نقطة الاستقبال والمنفذ المرجّح وموعد الاجتماع وفئة السيارة وأي انتظار يتطلبه الجدول." },
  { t: "نقل مجموعة", s: "مجموعة معها عدة حقائب كبيرة تحتاج سيارة تُختار حسب الركاب والأمتعة.", need: "نبدأ بعدد الأشخاص وحجم الحقائب، ثم نختار فان أو SUV كبيرة أو ميني باص يناسب المسار، بدلاً من البدء بالخيار الأرخص." },
];

const KNOWLEDGE = [
  ["موقع المنفذ", "المنفذ الذي تمر به الرحلة يؤثر في المسافة والتوقيت وترتيب السيارة."],
  ["اختيار المسار", "المسار العملي يعتمد على موقع الاستقبال والوجهة الفعليين."],
  ["ملاءمة السيارة", "عدد المقاعد ومساحة الأمتعة وقواعد المسار كلها مهمة."],
  ["أمتعة الركاب", "عدد الحقائب وأحجامها يُؤكَّد قبل الانطلاق، لا عند الرصيف."],
  ["توقيت السفر", "يُخطَّط موعد الانطلاق حول المنفذ والغرض من الرحلة."],
  ["إجراءات المنفذ", "نخبر الركاب بما يجهّزونه، أما الإجراءات نفسها فتديرها الجهات الرسمية."],
  ["خطة السائق والسيارة", "نؤكد مسبقاً إن كانت سيارة واحدة تكمل الرحلة أو يلزم تبديل."],
  ["التواصل", "تُرسل تفاصيل الاستقبال ومعلومات الرحلة قبل الانطلاق."],
];

const TRUST = ["نقل خاص", "عرض سعر قبل الرحلة", "تخطيط حسب المسار", "من الباب إلى الباب", "تغطية خليجية", "دعم عبر واتساب"];

const OFFICIAL = [
  ["السعودية", "https://visa.visitsaudi.com"],
  ["الإمارات", "https://icp.gov.ae"],
  ["البحرين", "https://www.npra.gov.bh"],
  ["قطر", "https://hukoomi.gov.qa"],
  ["الكويت", "https://www.moi.gov.kw"],
  ["عُمان", "https://www.rop.gov.om"],
  ["الأردن", "https://mfa.gov.jo"],
];

const IMMIGRATION = "تعتمد المتطلبات على الجنسية والوجهة والأنظمة الحالية. الراكب مسؤول عن استيفاء متطلبات الدخول المعمول بها، ويجب التحقق من الجهة الرسمية المختصة قبل السفر.";
const VEHICLE_RULE = "ترتيبات السيارة والسائق تعتمد على المسار والمنفذ المختار والتصاريح المطلوبة، ونؤكد الترتيب قبل الرحلة.";
const PRICE_RULE = "يُحسب سعر الرحلة عبر الحدود من نقطة الانطلاق والوجهة الفعليتين والسيارة وعدد الركاب والأمتعة ونوع الرحلة ومتطلبات المسار.";

const FAQS = [
  { q: "ما المقصود بالنقل البري الخاص بين دول الخليج؟", a: "هو رحلة برية خاصة مرتبة مسبقاً ينتقل فيها الركاب بين دول الخليج بسيارة مناسبة وعبر منفذ حدودي محدد. وعلى عكس التاكسي المحلي، يُخطَّط المسار وترتيب السيارة ومتطلبات الركاب قبل الانطلاق." },
  { q: "ما الدول التي تخدمونها؟", a: "ننسّق النقل المرتبط بالسعودية والإمارات والبحرين وقطر والكويت وعُمان، إضافة إلى مسارات إقليمية مختارة نحو الأردن. ليست كل دولتين بينهما مسار بري عملي، لذلك يُؤكَّد التوفر لكل رحلة." },
  { q: "هل السيارات خاصة؟", a: "نعم. الرحلة الخاصة محجوزة لمجموعتك ولا تُشارَك مع ركاب آخرين." },
  { q: "هل يمكنني حجز رحلة ذهاب فقط؟", a: "نعم. اختر «ذهاب فقط» في نموذج الطلب وأخبرنا بنقطة الاستقبال والوجهة، وسنؤكد التوفر لهذا المسار." },
  { q: "هل يمكنني حجز ذهاب وعودة؟", a: "نعم. تُسعَّر رحلة العودة مع رحلة الذهاب. أرسل تاريخ العودة ونقطة الاستقبال عند طلب عرض السعر." },
  { q: "هل تعبر نفس السيارة الحدود؟", a: VEHICLE_RULE },
  { q: "هل يبقى نفس السائق معنا؟", a: "عندما يسمح المسار بترتيب سيارة متواصل، نؤكد خطة السيارة والسائق قبل الانطلاق. بعض المسارات تحتاج سائقاً أو سيارة مختلفة لجزء من الرحلة." },
  { q: "ما المستندات التي يحتاجها الركاب؟", a: "عادة جواز سفر ساري أو هوية مقبولة، وأي تأشيرة أو إذن دخول ينطبق على الراكب. " + IMMIGRATION },
  { q: "هل تستخرجون التأشيرات؟", a: "نحن ننسّق النقل وليس إجراءات الجوازات. أهلية التأشيرة والدخول تحددها الجهات المختصة. " + IMMIGRATION },
  { q: "هل تضمنون العبور من المنفذ؟", a: "لا. قرار العبور يعود للجهات الرسمية في المنفذ. نحن نخطط النقل حول المسار ونخبرك بما تجهّزه." },
  { q: "كيف يُحسب سعر الرحلة؟", a: PRICE_RULE },
  { q: "متى يجب أن أطلب الرحلة؟", a: "في أقرب وقت ممكن. الطلب المبكر يمنحنا وقتاً لمراجعة المسار وتأكيد السيارة. للرحلات العاجلة راسلنا عبر واتساب." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE.url}/ar/` },
      { "@type": "ListItem", position: 2, name: "النقل البري بين دول الخليج", item: URL }] },
    { "@type": "Service", "@id": `${URL}#service`, name: "نقل بري خاص بين دول الخليج", serviceType: "نقل بري خاص عبر الحدود", inLanguage: "ar",
      description: DESC, url: URL, provider: { "@id": `${SITE.url}/#org` },
      areaServed: ["Saudi Arabia", "United Arab Emirates", "Bahrain", "Qatar", "Kuwait", "Oman", "Jordan"].map((n) => ({ "@type": "Country", name: n })) },
    { "@type": "FAQPage", inLanguage: "ar", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const H2 = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`h2 ${light ? "!text-white" : ""}`}>{children}</h2>
);
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-medium text-ocean underline decoration-gold/60 underline-offset-4 hover:text-gold">{children}</Link>
);

function NetworkMap() {
  // Schematic only: positions are illustrative, not geographic. Kept LTR so text anchors behave predictably.
  const n: Record<string, [number, number]> = { jo: [70, 40], kw: [330, 50], sa: [190, 150], bh: [330, 120], qa: [370, 160], ae: [400, 215], om: [440, 275] };
  const lines: [string, string, boolean?][] = [["sa", "bh"], ["sa", "qa"], ["sa", "kw"], ["sa", "ae"], ["sa", "om"], ["ae", "om"], ["sa", "jo", true]];
  const label: Record<string, string> = { jo: "الأردن", kw: "الكويت", sa: "السعودية", bh: "البحرين", qa: "قطر", ae: "الإمارات", om: "عُمان" };
  return (
    <figure className="rounded-2xl bg-navy p-4 sm:p-6">
      <svg viewBox="0 0 520 320" role="img" aria-label="مخطط للروابط البرية بين دول الخليج والأردن" className="h-auto w-full" direction="ltr">
        {lines.map(([a, b, dash]) => (
          <line key={a + b} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} stroke={dash ? "#ffffff" : "#C9A14A"} strokeOpacity={dash ? 0.5 : 0.8} strokeWidth="1.6" strokeDasharray={dash ? "2 6" : "5 5"} />
        ))}
        {Object.entries(n).map(([k, [x, y]]) => (
          <g key={k}>
            <circle cx={x} cy={y} r={k === "sa" ? 9 : 6} fill={k === "jo" ? "#0B1F33" : "#C9A14A"} stroke={k === "jo" ? "#fff" : "none"} strokeWidth="1.5" />
            <text x={x + (k === "sa" ? -14 : 12)} y={y + 5} textAnchor={k === "sa" ? "end" : "start"} fill="#fff" fontSize="15" fontFamily="var(--font-arabic), sans-serif">{label[k]}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 text-xs text-white/60">مخطط توضيحي وليس بمقياس رسم. الخطوط تمثل ممرات نراجعها وليست مسارات مضمونة. الخط المنقط: امتداد إقليمي.</figcaption>
    </figure>
  );
}

export default function CrossBorderTransfersAr() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-navy">
        <Image src="/images/gulf-highway.svg" alt="رسم توضيحي لطريق سريع عند الغروب وأفق مدينة في البعيد" fill priority sizes="100vw" className="-z-10 -scale-x-100 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-navy/90 via-navy/50 to-transparent" />
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <nav aria-label="مسار التنقل" className="text-xs text-white/60"><Link href="/ar/" className="hover:text-gold">الرئيسية</Link> / النقل البري بين دول الخليج</nav>
          <div className="mt-6 max-w-2xl text-white">
            <h1 className="text-4xl font-bold sm:text-5xl">نقل بري خاص بين دول الخليج عبر الحدود</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85">سافر بين دول الخليج برحلة برية خاصة، تُخطَّط حول المسار والمنفذ الحدودي وعدد الركاب والأمتعة ومتطلبات السيارة.</p>
            <p className="mt-3 leading-relaxed text-white/70">من العبور القصير بين دولتين إلى الرحلات الطويلة في الخليج، تقدم GCC Elite Transport نقلاً خاصاً محجوزاً مسبقاً، وليس خدمة تاكسي محلية عادية.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">اطلب عرض سعر لرحلتك</Link>
              <a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />تواصل مع فريق النقل عبر واتساب</a>
            </div>
            <p className="mt-5 text-sm text-white/65">سيارات خاصة · ذهاب فقط أو ذهاب وعودة · ترتيبات حسب المسار</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <H2>الرحلة عبر الحدود ليست مشوار تاكسي أطول</H2>
            <p className="mt-5 font-medium leading-relaxed text-navy">النقل البري الخاص بين دول الخليج هو رحلة برية مرتبة مسبقاً، ينتقل فيها الركاب بين دول المنطقة بسيارة مناسبة وعبر منفذ حدودي محدد.</p>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>كثير من المسافرين يبحثون عن «تاكسي من الدمام إلى البحرين» أو «توصيل من دبي إلى مسقط». لكن التاكسي المحلي يعمل عادة داخل دولة واحدة، وبمجرد أن تعبر الرحلة الحدود تتغير أشياء كثيرة في الوقت نفسه: يجب أن تكون السيارة مؤهلة للمسار، وأن يناسبه ترتيب السائق، وأن يحمل كل راكب المستندات التي تنطبق عليه. وقد يستغرق المنفذ وقتاً، وتختلف القواعد من منفذ لآخر.</p>
              <p>لهذا نخطط النقل حول مسار مؤكد بدلاً من إرسال أقرب سيارة. ننظر في نقطة الاستقبال والمنفذ وعدد الركاب والأمتعة وفئة السيارة، ثم نخبرك بالترتيب قبل سفرك.</p>
              <p>وهناك فرق نحرص على توضيحه: GCC Elite Transport مسؤولة عن <strong className="text-ink">النقل</strong>، أي تخطيط المسار وترتيب السيارة والاستقبال. أما <strong className="text-ink">الجوازات والتأشيرات وقرار العبور</strong> فهي من اختصاص الجهات الرسمية ومسؤولية كل راكب.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy">الرحلة عبر الحدود تشمل</h3>
            <ul className="mt-3 grid gap-2 text-sm text-ink">
              {["سفر بري دولي", "نقاط تفتيش حدودية", "مستندات الركاب", "أهلية السيارة", "ترتيبات السائق", "تخطيط المسار والأمتعة", "انتظار محتمل في المنفذ"].map((i) => (
                <li key={i} className="flex gap-2"><span className="mt-0.5 text-gold"><CheckIcon /></span>{i}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>ما الذي يتغير عندما تعبر رحلتك الحدود؟</H2>
          <p className="mt-4 max-w-2xl text-muted">المراحل التالية تصف رحلة برية دولية نموذجية، وتختلف التفاصيل حسب المنفذ.</p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {STAGES.map((s, i) => (
              <li key={s.t} className="relative lg:px-2">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${i === 2 ? "bg-gold text-navy" : "bg-navy text-white"}`}>{i + 1}</span>
                  <span className="hidden h-px flex-1 bg-slate-300 lg:block lg:w-full" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-semibold text-navy">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <H2>لكل منفذ حدودي ترتيباته الخاصة</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">رحلة السعودية إلى البحرين ليست مثل رحلة السعودية إلى الكويت، والإمارات إلى عُمان تختلف عن قطر إلى السعودية. قواعد السيارة وإجراءات المنفذ والمسافة ومتطلبات الركاب وترتيب السائق أو السيارة كلها قد تتغير من مسار لآخر. لا نطبق قالباً واحداً على كل الرحلات، ولا نذكر أوقات انتظار أو قواعد لا يمكننا التحقق منها لتاريخ سفرك.</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-start text-sm">
              <caption className="sr-only">أمثلة على اختلاف المسارات الحدودية في الخليج</caption>
              <thead className="bg-navy text-white"><tr><th scope="col" className="px-5 py-3 text-start font-semibold">المسار</th><th scope="col" className="px-5 py-3 text-start font-semibold">نوع المنفذ</th><th scope="col" className="px-5 py-3 text-start font-semibold">ما الذي يحدد الخطة</th></tr></thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARE.map((c) => (
                  <tr key={c.pair}><th scope="row" className="px-5 py-4 text-start font-semibold text-navy">{c.pair}</th><td className="px-5 py-4 text-ink">{c.crossing}</td><td className="px-5 py-4 text-muted">{c.plan}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">أوصاف عامة فقط. تفاصيل المنفذ ومتطلباته تُؤكَّد لرحلتك.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>النقل عبر الحدود في دول الخليج</H2>
          <p className="mt-4 max-w-2xl text-muted">دول الخليج الست كما تظهر في شبكتنا البرية. افتح دليل المنفذ لكل دولة لمعرفة التفاصيل الخاصة بها.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <NetworkMap />
            <ul className="grid gap-3 sm:grid-cols-2">
              {NETWORK.map((c) => (
                <li key={c.id} className="rounded-xl border border-slate-200 bg-paper p-4">
                  <div className="flex items-center gap-2"><Flag id={c.id} className="h-5 w-7" /><h3 className="text-sm font-semibold text-navy">{c.name}</h3></div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.t}</p>
                  <Link href={c.href} className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-ocean hover:text-gold">{c.link}<Arrow className="h-3.5 w-3.5" /></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-2xl border border-dashed border-gold/60 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <Flag id="jordan" className="h-10 w-16 shrink-0" />
            <div>
              <H2>سفر إقليمي خارج دول الخليج</H2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">الأردن ليس من دول مجلس التعاون الخليجي. ندرجه كوجهة إقليمية حيث تشغّل GCC Elite Transport مسارات مناسبة. التوفر وترتيبات المنفذ وتصريح السيارة تُؤكَّد لكل رحلة، تماماً كما في رحلات الخليج.</p>
              <Link href="/ar/border-guides/jordan-saudi/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">دليل المنافذ بين الأردن والسعودية<Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>أكثر من توصيل مطار</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {USES.map((u) => (
              <article key={u.t} className="flex flex-col rounded-2xl border border-slate-200 bg-paper p-6">
                <h3 className="text-lg font-semibold text-navy">{u.t}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{u.d}</p>
                <Link href="#quote" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-gold">اطلب عرض سعر<Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <H2>اختر السيارة حسب مجموعتك</H2>
            <p className="mt-4 leading-relaxed text-muted">السيارة المناسبة تعتمد على عدد الركاب والأمتعة وطول الرحلة ومستوى الراحة المطلوب وما يتطلبه المسار. السعة تختلف حسب السيارة وتُؤكَّد في عرض السعر.</p>
          </div>
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {VEHICLES.map((v) => (
              <li key={v.n} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-navy">{v.n}</span><span className="text-sm text-muted">{v.d}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <H2 light>سيارتك محجوزة لمجموعتك</H2>
            <p className="mt-4 leading-relaxed text-white/75">الخاص لا يعني مشتركاً في اللحظة الأخيرة. عندما يسمح المسار بترتيب سيارة متواصل، نؤكد خطة السيارة والسائق قبل الانطلاق.</p>
          </div>
          <ul className="grid gap-3">
            {RESERVED.map((r) => (<li key={r} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm"><span className="mt-0.5 text-gold"><CheckIcon /></span>{r}</li>))}
          </ul>
        </div>
      </section>

      <section className="section" id="documents">
        <div className="container-x">
          <H2>جهّز نفسك قبل العبور</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">قد يحتاج الركاب إلى جواز سفر ساري، والتأشيرة أو إذن الدخول الذي ينطبق عليهم، والهوية، ومعلومات السيارة عند الحاجة، وأي مستند آخر تطلبه الجهات المختصة.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">ما تتولاه GCC Elite Transport</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["تنسيق النقل", "تخطيط المسار", "ترتيب السيارة", "تفاصيل الاستقبال", "التواصل خلال الرحلة"].map((i) => <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-semibold text-navy">ما يبقى من مسؤولية الراكب</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">{["صلاحية جواز السفر", "أهلية التأشيرة والدخول", "المستندات الشخصية", "الالتزام بأنظمة الجوازات"].map((i) => <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>)}</ul>
            </div>
          </div>
          <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-ink">متطلبات الحدود والتأشيرات والجوازات والجمارك والسيارات قد تتغير. تحقق دائماً من المتطلبات الحالية لدى الجهات الرسمية قبل السفر.</p>
          <p className="mt-4 text-sm text-muted">مصادر رسمية:{" "}
            {OFFICIAL.map(([n, h], i) => (<span key={n}>{i > 0 && " · "}<a href={h} target="_blank" rel="noopener noreferrer" className="text-ocean underline underline-offset-2 hover:text-gold">{n}</a></span>))}
            . راجع أيضاً <A href="/ar/border-guides/">أدلة المنافذ الحدودية</A>.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>ترتيب العبور يُؤكَّد قبل السفر</H2>
          <p className="mt-4 max-w-3xl text-muted">هناك ثلاثة ترتيبات ممكنة، ولا ينطبق أي منها على كل الرحلات. {VEHICLE_RULE}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {MODELS.map((m, i) => (
              <article key={m.t} className="rounded-2xl border border-slate-200 bg-paper p-6">
                <span className="text-sm font-semibold text-gold">الترتيب {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold text-navy">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div>
            <H2>لماذا تختلف أسعار الرحلات عبر الحدود؟</H2>
            <p className="mt-4 leading-relaxed text-muted">{PRICE_RULE} لا ننشر سعراً ثابتاً للبداية، لأن الدولتين نفسيهما قد تنتجان رحلات مختلفة جداً حسب المكان الذي تبدأ وتنتهي فيه داخل كل دولة. تستلم السعر المتفق عليه وتفاصيل الرحلة قبل السفر.</p>
            <Link href="#quote" className="btn-navy mt-6">اطلب عرض سعر لمسارك</Link>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {PRICE_FACTORS.map((f) => (<li key={f} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-ink">{f}</li>))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>استكشف المسارات الحدودية في الخليج</H2>
          <p className="mt-4 max-w-2xl text-muted">هذه الصفحة تشرح الخدمة. أدلة المنافذ تدخل في تفاصيل كل ممر، ويمكنك سؤالنا عن أي مسار مباشرة.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTE_CLUSTERS.map((r) => (
              <li key={r.a + r.b} className="rounded-xl border border-slate-200 bg-paper p-5">
                <p className="font-semibold text-navy">{r.a} <span className="text-gold">↔</span> {r.b}</p>
                <p className="mt-1 text-sm text-muted">{r.n}</p>
                <Link href={r.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:text-gold">دليل المنفذ<Arrow /></Link>
              </li>
            ))}
            <li className="rounded-xl border border-dashed border-gold/60 bg-white p-5">
              <p className="text-xs font-semibold text-gold">إقليمي</p>
              <p className="mt-1 font-semibold text-navy">الخليج <span className="text-gold">↔</span> الأردن</p>
              <p className="mt-1 text-sm text-muted">مسارات مختارة تُؤكَّد لكل رحلة</p>
              <Link href="/ar/border-guides/jordan-saudi/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:text-gold">دليل منافذ الأردن<Arrow /></Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <H2>من رسالتك الأولى حتى وجهتك</H2>
          <ol className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map((s) => (
              <li key={s.n} className="flex gap-4 border-t-2 border-gold pt-4">
                <span className="text-2xl font-bold text-navy">{s.n}</span>
                <div><h3 className="font-semibold text-navy">{s.t}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <H2>أمثلة عملية على الرحلات</H2>
          <p className="mt-4 max-w-2xl text-sm text-muted">أمثلة توضيحية لطريقة تعاملنا مع الطلبات، وليست قصص عملاء.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((s) => (
              <article key={s.t} className="rounded-2xl border border-slate-200 bg-paper p-6">
                <h3 className="text-lg font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">{s.s}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.need}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <H2>النقل عبر الحدود يحتاج معرفة بالمسارات</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">خدمة التاكسي العادية ليست مهيأة للتفكير في هذه الأمور. نحن نخطط لها قبل الرحلة، لا عند المنفذ.</p>
          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {KNOWLEDGE.map(([t, d]) => (<div key={t} className="border-s-2 border-gold ps-4"><dt className="font-semibold text-navy">{t}</dt><dd className="mt-1 text-sm text-muted">{d}</dd></div>))}
          </dl>
          <ul className="mt-10 flex flex-wrap gap-3">
            {TRUST.map((t) => (<li key={t} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-slate-200"><span className="text-gold"><CheckIcon /></span>{t}</li>))}
          </ul>
        </div>
      </section>

      <section className="section bg-white" id="faq">
        <div className="container-x max-w-3xl">
          <H2>أسئلة عن النقل البري بين دول الخليج</H2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold">{f.q}</h3><span className="text-gold transition-transform group-open:rotate-45"><PlusIcon /></span>
                </summary>
                <p className="pb-2 pt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">تخطط لرحلة عبر الحدود؟</h2>
            <p className="mt-4 leading-relaxed text-white/75">أرسل لنا نقطة الاستقبال والوجهة وتاريخ السفر وعدد الركاب وتفاصيل الأمتعة، وسنراجع المسار ونؤكد ترتيب النقل المتاح.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="btn-gold">اطلب عرض سعر</Link>
              <a href={waLinkAr()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />واتساب GCC Elite Transport</a>
            </div>
            <p className="mt-4 text-xs text-white/55">توفر المسار وترتيبات السيارة ومتطلبات الحدود تختلف حسب الرحلة.</p>
          </div>
          <div className="text-ink"><QuoteFormAr compact /></div>
        </div>
      </section>
    </>
  );
}
