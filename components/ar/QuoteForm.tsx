"use client";
import { useState } from "react";
import { waLinkAr } from "@/lib/ar/site";
import { track } from "@/lib/track";

const COUNTRIES = ["السعودية", "البحرين", "الإمارات", "قطر", "الكويت", "عُمان", "الأردن", "أخرى"];
const VEHICLES = ["بدون تفضيل", "سيدان تنفيذية", "SUV فاخرة", "SUV كبيرة", "فان فاخر", "ميني باص"];
const TRIPS = ["ذهاب فقط", "ذهاب وعودة"];

type Props = { id?: string; compact?: boolean; title?: string; button?: string; fromCountry?: string; toCountry?: string; fromCity?: string; toCity?: string };

export function QuoteFormAr({ id = "quote", compact = false, title = "خطّط رحلتك في الخليج", button = "أرسل طلب عرض السعر", fromCountry = "", toCountry = "", fromCity = "", toCity = "" }: Props) {
  const [trip, setTrip] = useState(TRIPS[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim() || "-";
    const msg = [
      "مرحباً GCC Elite Transport، أرغب في عرض سعر.",
      `نوع الرحلة: ${trip}`,
      `من: ${g("pc")}، ${g("pl")}`,
      `إلى: ${g("dc")}، ${g("dl")}`,
      `التاريخ: ${g("date")}  الوقت: ${g("time")}`,
      `عدد الركاب: ${g("pax")}  الأمتعة: ${g("bags")}`,
      `السيارة: ${g("veh")}`,
    ].join("\n");
    track("quote_form_submit", { page: window.location.pathname, from: String(f.get("pc") ?? ""), to: String(f.get("dc") ?? ""), lang: "ar" });
    window.open(waLinkAr(msg), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form id={id} onSubmit={onSubmit} className="rounded-2xl bg-white p-5 text-ink shadow-2xl ring-1 ring-black/5 sm:p-7" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-xl font-bold text-navy">{title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="label">دولة الانطلاق
          <select name="pc" required defaultValue={fromCountry} className="field"><option value="" disabled>اختر</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">مدينة / موقع الانطلاق
          <input name="pl" required placeholder="مثال: المنامة" defaultValue={fromCity} className="field" /></label>
        <label className="label">دولة الوجهة
          <select name="dc" required defaultValue={toCountry} className="field"><option value="" disabled>اختر</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">مدينة / موقع الوجهة
          <input name="dl" required placeholder="مثال: الدمام" defaultValue={toCity} className="field" /></label>
        <label className="label">تاريخ السفر<input name="date" type="date" required className="field" /></label>
        <label className="label">وقت الاستقبال<input name="time" type="time" className="field" /></label>
        <label className="label">عدد الركاب<input name="pax" type="number" min={1} max={60} defaultValue={2} required className="field" /></label>
        <label className="label">الأمتعة<input name="bags" placeholder="مثال: 3 حقائب" className="field" /></label>
        <label className="label col-span-2">السيارة المفضلة
          <select name="veh" className="field">{VEHICLES.map((v) => <option key={v}>{v}</option>)}</select></label>
      </div>
      <fieldset className="mt-4">
        <legend className="label">نوع الرحلة</legend>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {TRIPS.map((t) => (
            <label key={t} className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border text-sm font-medium ${trip === t ? "border-gold bg-gold/10 text-navy" : "border-slate-300 text-muted"}`}>
              <input type="radio" name="trip" value={t} checked={trip === t} onChange={() => setTrip(t)} className="sr-only" />{t}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="btn-navy mt-5 w-full">{button}</button>
      <p className="mt-3 text-center text-xs text-muted">
        {sent ? "فُتح واتساب برسالتك. أرسلها إلى فريقنا لتستلم عرض السعر." : "يُؤكَّد توفر المسار وترتيبات السيارة لكل رحلة على حدة."}
      </p>
      {!compact && <p className="mt-1 text-center text-[11px] text-muted/80">هذا طلب عرض سعر وليس حجزاً فورياً. لا نحتاج بيانات جواز السفر في هذه المرحلة.</p>}
    </form>
  );
}
