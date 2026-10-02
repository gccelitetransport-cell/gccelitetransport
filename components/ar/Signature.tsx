"use client";
// Arabic versions of the border-guide signature widgets. Diagrams keep direction="ltr" because they are geographic (west on the left).
import { useState } from "react";

const SVG_FONT = "var(--font-arabic), sans-serif";

export function DirectionStepsAr({ a, b, ab, ba }: { a: string; b: string; ab: string[]; ba: string[] }) {
  const [rev, setRev] = useState(false);
  const steps = rev ? ba : ab;
  return (
    <div>
      <div role="group" aria-label="اتجاه الرحلة" className="inline-grid grid-cols-2 rounded-xl bg-slate-200 p-1">
        {[false, true].map((r) => (<button key={String(r)} type="button" aria-pressed={rev === r} onClick={() => setRev(r)} className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold ${rev === r ? "bg-navy text-white" : "text-muted"}`}>{r ? `من ${b} إلى ${a}` : `من ${a} إلى ${b}`}</button>))}
      </div>
      <ol key={String(rev)} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {steps.map((s, i) => (<li key={s} className="row-in flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-ink" style={{ animationDelay: `${i * 0.07}s` }}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">{i + 1}</span>{s}</li>))}
      </ol>
      <p className="mt-3 text-xs text-muted">تسلسل عام. قد يختلف الترتيب الفعلي حسب الإجراءات الحالية ووضع الراكب ونوع السيارة.</p>
    </div>
  );
}

const STATIONS = [
  { k: "الساحل السعودي", d: "يبدأ الجسر قرب الخبر. يُدفع رسم العبور عند المدخل، وتوفر المؤسسة العامة لجسر الملك فهد خيارات دفع إلكتروني." },
  { k: "فوق البحر", d: "يمتد الطريق فوق مياه الخليج باتجاه جزيرة المنفذ." },
  { k: "جزيرة المنفذ", d: "تتم إجراءات الجوازات والجمارك للدولتين على جزيرة صناعية في منتصف الجسر تقريباً." },
  { k: "الساحل البحريني", d: "بعد الإجراءات يكمل الجسر إلى الجزيرة الرئيسية في البحرين." },
];
export function CausewayAr() {
  const [i, setI] = useState(2);
  return (
    <div className="rounded-2xl bg-navy p-5 text-white sm:p-8">
      <svg viewBox="0 0 600 120" direction="ltr" className="h-auto w-full" role="img" aria-label="مخطط جسر الملك فهد وجزيرة المنفذ في منتصفه">
        <rect x="0" y="70" width="600" height="50" fill="#123B5D" />
        <path d="M20 70 H580" stroke="#C9A14A" strokeWidth="4" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (<rect key={n} x={60 + n * 66} y="72" width="4" height="22" fill="#C9A14A" opacity=".5" />))}
        <ellipse cx="300" cy="72" rx="48" ry="12" fill="#C9A14A" opacity=".35" />
        <text x="20" y="35" fill="#fff" fillOpacity=".7" fontSize="14" fontFamily={SVG_FONT}>السعودية</text>
        <text x="580" y="35" textAnchor="end" fill="#fff" fillOpacity=".7" fontSize="14" fontFamily={SVG_FONT}>البحرين</text>
        {[20, 170, 300, 580].map((x, n) => (<g key={n} onClick={() => setI(n)} style={{ cursor: "pointer" }}><circle cx={x} cy="60" r={i === n ? 10 : 7} fill={i === n ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" /></g>))}
      </svg>
      <div role="tablist" aria-label="محطات الجسر" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STATIONS.map((s, n) => (<button key={s.k} role="tab" aria-selected={i === n} onClick={() => setI(n)} className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold ${i === n ? "border-gold bg-gold/20" : "border-white/20 text-white/75"}`}>{s.k}</button>))}
      </div>
      <p role="tabpanel" className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white/85" aria-live="polite">{STATIONS[i].d}</p>
    </div>
  );
}

export function GateAr() {
  const [side, setSide] = useState<"qa" | "sa">("qa");
  const L = { qa: ["أبو سمرة", "الجانب القطري", "إجراءات المغادرة أو الدخول القطرية، وتتولاها وزارة الداخلية والهيئة العامة للجمارك في قطر."], sa: ["سلوى", "الجانب السعودي", "إجراءات المغادرة أو الدخول السعودية، وتتولاها الجهات السعودية المختصة."] } as const;
  return (
    <div className="grid overflow-hidden rounded-2xl bg-navy text-white sm:grid-cols-2">
      {(["qa", "sa"] as const).map((k) => (
        <button key={k} type="button" aria-pressed={side === k} onClick={() => setSide(k)} className={`min-h-[160px] p-6 text-start transition-colors ${side === k ? "bg-ocean" : "bg-navy hover:bg-ocean/50"}`}>
          <span className="text-xs font-semibold text-gold">{L[k][1]}</span>
          <span className="mt-1 block text-3xl font-bold">{L[k][0]}</span>
          {side === k && <span className="mt-3 block text-sm text-white/80">{L[k][2]}</span>}
        </button>
      ))}
      <p className="border-t border-white/10 p-4 text-xs text-white/60 sm:col-span-2">منفذ واحد باسمين مختلفين على كل جانب. اختر الجانب.</p>
    </div>
  );
}

export function PostAr() {
  const [focus, setFocus] = useState<"ae" | "sa">("ae");
  return (
    <div className="rounded-2xl bg-navy p-5 text-white sm:p-8">
      <svg viewBox="0 0 600 110" direction="ltr" className="h-auto w-full" role="img" aria-label="طريق طويل من الإمارات إلى السعودية ومركزا الغويفات والبطحاء على الحدود">
        <path d="M10 70 H590" stroke="#fff" strokeOpacity=".3" strokeWidth="10" strokeLinecap="round" />
        <path d="M10 70 H590" stroke="#C9A14A" strokeWidth="2" strokeDasharray="10 10" className="road-anim" />
        <text x="590" y="100" textAnchor="end" fill="#fff" fillOpacity=".6" fontSize="13" fontFamily={SVG_FONT}>إمارة أبوظبي</text>
        <text x="10" y="100" fill="#fff" fillOpacity=".6" fontSize="13" fontFamily={SVG_FONT}>المنطقة الشرقية، السعودية</text>
        {[["sa", 270, "البطحاء"], ["ae", 330, "الغويفات"]].map(([k, x, n]) => (<g key={k as string} onClick={() => setFocus(k as "ae" | "sa")} style={{ cursor: "pointer" }}><rect x={(x as number) - 6} y="30" width="12" height="40" fill={focus === k ? "#C9A14A" : "#fff"} /><text x={x as number} y="22" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily={SVG_FONT}>{n}</text></g>))}
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {([["ae", "الغويفات · الإمارات"], ["sa", "البطحاء · السعودية"]] as const).map(([k, t]) => (<button key={k} type="button" aria-pressed={focus === k} onClick={() => setFocus(k)} className={`min-h-[44px] rounded-lg border px-3 text-xs font-semibold ${focus === k ? "border-gold bg-gold/20" : "border-white/20 text-white/75"}`}>{t}</button>))}
      </div>
      <p className="mt-3 rounded-lg bg-white/10 p-4 text-sm text-white/85" aria-live="polite">{focus === "ae" ? "المركز الإماراتي عند الطرف الغربي لإمارة أبوظبي، وفيه تتم إجراءات المغادرة أو الدخول الإماراتية." : "المركز السعودي في المنطقة الشرقية، وفيه تتم إجراءات المغادرة أو الدخول السعودية، ويكمل الطريق نحو المدن السعودية وقطر."}</p>
    </div>
  );
}

const AREAS: [string, string, string][] = [
  ["دبي أو الشارقة", "حتا – الوجاجة", "يُستخدم كثيراً باتجاه مسقط."],
  ["العين", "منافذ منطقة العين باتجاه البريمي", "بعض منافذ منطقة العين كانت مقتصرة على مواطني دول الخليج. تحقق من المنافذ المتاحة لك."],
  ["كلباء أو الساحل الشرقي", "خطمة ملاحة", "قرب الساحل، باتجاه منطقة الباطنة في عُمان."],
  ["رأس الخيمة", "منافذ مسندم", "للرحلات إلى شبه جزيرة مسندم."],
  ["مسقط أو ساحل الباطنة", "الوجاجة (باتجاه حتا) أو خطمة ملاحة", "حسب وجهتك داخل الإمارات."],
];
export function ChooserAr() {
  const [i, setI] = useState(0);
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:grid-cols-[1fr_1.2fr]">
      <label className="label">منطقة الانطلاق<select className="field" value={i} onChange={(e) => setI(Number(e.target.value))}>{AREAS.map((a, n) => <option key={a[0]} value={n}>{a[0]}</option>)}</select></label>
      <div className="rounded-xl bg-navy p-5 text-white" aria-live="polite">
        <p className="text-xs font-semibold text-gold">المنفذ الذي يُنظر فيه غالباً</p>
        <p className="mt-1 text-xl font-bold">{AREAS[i][1]}</p>
        <p className="mt-2 text-sm text-white/80">{AREAS[i][2]}</p>
        <p className="mt-3 text-[11px] text-white/55">إرشادي فقط. إمكانية الاستخدام تعتمد على الجنسية، ويُؤكَّد منفذ كل حجز وفق القواعد الحالية.</p>
      </div>
    </div>
  );
}

export function PairAr() {
  const [i, setI] = useState(0);
  const C = [
    { n: "النويصيب – الخفجي", where: "قرب الساحل", toward: "المنطقة الشرقية: الخفجي والدمام والخبر" },
    { n: "السالمي – الرقعي", where: "في الداخل", toward: "المسارات المتجهة إلى داخل السعودية" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {C.map((c, n) => (
        <button key={c.n} type="button" aria-pressed={i === n} onClick={() => setI(n)} className={`rounded-2xl border-2 p-6 text-start transition-all ${i === n ? "border-gold bg-white shadow-md" : "border-slate-200 bg-white/70"}`}>
          <span className="text-xs font-semibold text-gold">{c.where}</span>
          <span className="mt-1 block text-xl font-bold text-navy">{c.n}</span>
          <span className="mt-2 block text-sm text-muted">باتجاه: {c.toward}</span>
        </button>
      ))}
      <p className="text-xs text-muted sm:col-span-2">منفذ العبدلي هو منفذ الكويت مع العراق، وليس مع السعودية. يُؤكَّد منفذ رحلتك حسب المسار.</p>
    </div>
  );
}

const PREP = ["خزان وقود ممتلئ قبل المقطع الصحراوي", "ماء وطعام لجميع الركاب", "استراحات مخطط لها", "فحص السيارة: الإطارات والتبريد والإطار الاحتياطي", "موعد انطلاق متفق عليه", "مستندات المنفذين في متناول اليد"];
export function DesertAr() {
  const [on, setOn] = useState<boolean[]>(PREP.map(() => false));
  const done = on.filter(Boolean).length;
  return (
    <div className="overflow-hidden rounded-2xl bg-navy text-white">
      <svg viewBox="0 0 600 90" direction="ltr" className="h-auto w-full" role="img" aria-label="طريق صحراوي من الأحساء في السعودية عبر الحدود إلى عبري في عُمان">
        <path d="M0 70 Q150 40 300 60 T600 50 V90 H0Z" fill="#5a4535" opacity=".6" />
        <path d="M20 60 H580" stroke="#C9A14A" strokeWidth="3" strokeDasharray="8 8" className="road-anim" />
        <text x="20" y="40" fill="#fff" fontSize="13" fontWeight="600" fontFamily={SVG_FONT}>الأحساء</text>
        <rect x="435" y="44" width="10" height="24" fill="#fff" /><text x="440" y="36" textAnchor="middle" fill="#fff" fontSize="12" fontFamily={SVG_FONT}>المنفذ</text>
        <text x="580" y="40" textAnchor="end" fill="#fff" fontSize="13" fontWeight="600" fontFamily={SVG_FONT}>عبري</text>
      </svg>
      <div className="p-5">
        <p className="text-sm font-semibold">قائمة التحضير للطريق الصحراوي <span className="font-normal text-white/60">({done} من {PREP.length})</span></p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">{PREP.map((p, n) => (<li key={p}><label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-white/15 px-3 text-sm"><input type="checkbox" className="h-5 w-5 accent-[#C9A14A]" checked={on[n]} onChange={() => setOn(on.map((x, j) => (j === n ? !x : x)))} />{p}</label></li>))}</ul>
        <p className="mt-2 text-[11px] text-white/50">تبقى القائمة في هذه الصفحة فقط، ولا يُرسل أي شيء.</p>
      </div>
    </div>
  );
}

const CORRIDORS = [
  { k: "العمري", x: 380, y: 85, side: "الجانب الأردني · يقابله منفذ الحديثة في السعودية", d: "ممر شمالي بين الأردن والسعودية، قد يُنظر فيه للرحلات المتجهة إلى وسط السعودية وشرقها حسب المسار.", n: "تنطبق إجراءات الجمارك والدخول، وتختلف المتطلبات." },
  { k: "المدورة", x: 260, y: 165, side: "الجانب الأردني · يقابله منفذ حالة عمار في السعودية", d: "ممر في جنوب الأردن، مرتبط ببعض المسارات المتجهة إلى غرب السعودية وشمالها الغربي.", n: "نشرت الجهات الأردنية تحديثات حول حركة المسافرين هنا. تحقق من الوضع الحالي." },
  { k: "الدرة", x: 140, y: 240, side: "العقبة، الأردن · يقابله منفذ حقل في السعودية", d: "ممر جهة العقبة، ويهم فقط إذا كان الاستقبال أو المسار في منطقة العقبة.", n: "تغيّر التشغيل أو توقف في أوقات سابقة، لذلك لا يُفترض المنفذ مسبقاً." },
];
export function ThreeAr() {
  const [i, setI] = useState(0);
  const c = CORRIDORS[i];
  return (
    <div className="grid gap-5">
      <figure className="rounded-2xl bg-navy p-4 sm:p-6">
        <svg viewBox="0 0 500 300" direction="ltr" role="img" aria-label="خريطة مبسطة لممرات الحدود بين الأردن والسعودية: العمري والمدورة والدرة" className="h-auto w-full">
          <path d="M20 20 H430 L110 290 H20 Z" fill="#123B5D" opacity=".7" /><text x="40" y="60" fill="#fff" fillOpacity=".7" fontSize="16" fontFamily={SVG_FONT}>الأردن</text>
          <path d="M430 20 H490 V290 H110 Z" fill="#0a1622" /><text x="400" y="270" fill="#fff" fillOpacity=".7" fontSize="16" fontFamily={SVG_FONT} textAnchor="end">السعودية</text>
          <path d="M430 20 L110 290" stroke="#C9A14A" strokeWidth="2" strokeDasharray="6 6" />
          {CORRIDORS.map((k, n) => (
            <g key={k.k} onMouseEnter={() => setI(n)} onClick={() => setI(n)} style={{ cursor: "pointer" }}>
              <circle cx={k.x} cy={k.y} r={n === i ? 11 : 8} fill={n === i ? "#C9A14A" : "#0B1F33"} stroke="#C9A14A" strokeWidth="2.5" />
              <text x={k.x + 16} y={k.y + 5} fill="#fff" fontSize="14" fontWeight="600" fontFamily={SVG_FONT}>{k.k}</text>
            </g>
          ))}
        </svg>
        <figcaption className="mt-2 text-xs text-white/60">مخطط مبسط وليس بمقياس رسم، ولا يعرض حالة المنافذ الفعلية.</figcaption>
      </figure>
      <div>
        <div role="tablist" aria-label="ممرات الحدود" className="flex flex-wrap gap-2">
          {CORRIDORS.map((k, n) => (<button key={k.k} role="tab" aria-selected={n === i} onClick={() => setI(n)} className={`min-h-[44px] rounded-lg border px-4 text-sm font-semibold ${n === i ? "border-gold bg-gold/15 text-navy" : "border-slate-300 text-muted"}`}>{k.k}</button>))}
        </div>
        <div role="tabpanel" className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200" aria-live="polite">
          <p className="text-xs font-semibold text-gold">{c.side}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{c.d}</p>
          <p className="mt-2 text-xs text-muted">{c.n}</p>
        </div>
      </div>
    </div>
  );
}
