import Link from "next/link";
import { SITE } from "@/lib/site";
import { TAGLINE_AR } from "@/lib/ar/site";
import { Logo } from "../Logo";

const cols = [
  { t: "الخدمات", l: [["النقل البري بين دول الخليج", "/ar/cross-border-transfers/"], ["أدلة المنافذ الحدودية", "/ar/border-guides/"], ["اطلب عرض سعر", "/ar/#quote"], ["الأسئلة الشائعة", "/ar/#faq"]] },
  { t: "المنافذ", l: [["جسر الملك فهد", "/ar/border-guides/saudi-bahrain/"], ["سلوى / أبو سمرة", "/ar/border-guides/qatar-saudi/"], ["الغويفات / البطحاء", "/ar/border-guides/uae-saudi/"], ["منافذ الكويت والسعودية", "/ar/border-guides/kuwait-saudi/"], ["منافذ الإمارات وعُمان", "/ar/border-guides/oman-uae/"], ["منفذ الربع الخالي", "/ar/border-guides/oman-saudi/"], ["منافذ الأردن والسعودية", "/ar/border-guides/jordan-saudi/"]] },
  { t: "English", l: [["Home", "/"], ["Routes", "/routes/"], ["Fleet", "/fleet/"], ["Contact", "/contact/"]] },
  { t: "قانوني (بالإنجليزية)", l: [["سياسة الخصوصية", "/privacy-policy/"], ["الشروط والأحكام", "/terms/"], ["سياسة ملفات تعريف الارتباط", "/cookie-policy/"]] },
];

export function FooterAr() {
  return (
    <footer className="bg-[#07131f] pb-24 pt-14 text-white/70 sm:pb-10">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-4 text-sm">{TAGLINE_AR}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><a className="hover:text-gold" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">واتساب: <span dir="ltr">{SITE.phoneDisplay}</span></a></li>
              <li><a className="hover:text-gold" href={`tel:${SITE.phoneTel}`}>هاتف: <span dir="ltr">{SITE.phoneDisplay}</span></a></li>
              {SITE.email && <li><a className="hover:text-gold" href={`mailto:${SITE.email}`}>البريد: {SITE.email}</a></li>}
            </ul>
          </div>
          {cols.map((c) => (
            <nav key={c.t} aria-label={c.t} lang={c.t === "English" ? "en" : undefined} dir={c.t === "English" ? "ltr" : undefined} className={c.t === "English" ? "text-right" : undefined}>
              <h3 className="text-sm font-semibold text-white">{c.t}</h3>
              <ul className="mt-3 space-y-2 text-sm">{c.l.map(([n, h]) => <li key={n}><Link className="hover:text-gold" href={h}>{n}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>توفر النقل وإجراءات الحدود وتصاريح السيارات ومتطلبات السفر تختلف حسب المسار. تأكد من المتطلبات الحالية قبل السفر.</p>
          <p className="mt-2">© {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
