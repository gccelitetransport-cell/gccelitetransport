"use client";
import { useState } from "react";
import { waLink } from "@/lib/site";

const COUNTRIES = ["Saudi Arabia", "Bahrain", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Jordan", "Other"];
const VEHICLES = ["No preference", "Executive Sedan", "Premium SUV", "Large SUV", "Premium Van", "Minibus"];

type QuoteProps = { id?: string; compact?: boolean; title?: string; button?: string; note?: string; fromCountry?: string; vehicles?: string[]; showNotes?: boolean; luggageLabel?: string; toCountry?: string; cabinBags?: boolean; notesLabel?: string; fromCity?: string; toCity?: string };

export function QuoteForm({ id = "quote", compact = false, title = "Plan Your GCC Journey", button = "Get My Quote", note = "Route availability and vehicle arrangements are confirmed individually.", fromCountry = "", vehicles = VEHICLES, showNotes = false, luggageLabel = "Luggage", toCountry = "", cabinBags = false, notesLabel = "Additional Notes", fromCity = "", toCity = "" }: QuoteProps) {
  const [trip, setTrip] = useState("One Way");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim() || "-";
    const msg = [
      "Hello GCC Elite Transport, I would like a quote.",
      `Trip type: ${trip}`,
      `From: ${g("pc")}, ${g("pl")}`,
      `To: ${g("dc")}, ${g("dl")}`,
      `Date: ${g("date")}  Time: ${g("time")}`,
      `Passengers: ${g("pax")}  Luggage: ${g("bags")}${cabinBags ? "  Cabin bags: " + g("cabin") : ""}`,
      `Vehicle: ${g("veh")}`,
      ...(showNotes ? [`Notes: ${g("notes")}`] : []),
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form id={id} onSubmit={onSubmit} className="rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:p-7" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-xl font-bold text-navy">{title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="label">Pickup Country
          <select name="pc" required defaultValue={fromCountry} className="field"><option value="" disabled>Select</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">Pickup City / Location
          <input name="pl" required placeholder="e.g. Manama" defaultValue={fromCity} className="field" /></label>
        <label className="label">Destination Country
          <select name="dc" required defaultValue={toCountry} className="field"><option value="" disabled>Select</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="label">Destination City / Location
          <input name="dl" required placeholder="e.g. Dammam" defaultValue={toCity} className="field" /></label>
        <label className="label">Travel Date<input name="date" type="date" required className="field" /></label>
        <label className="label">Pickup Time<input name="time" type="time" className="field" /></label>
        <label className="label">Passengers<input name="pax" type="number" min={1} max={60} defaultValue={2} required className="field" /></label>
        <label className="label">{luggageLabel}<input name="bags" placeholder="e.g. 3 suitcases" className="field" /></label>
        {cabinBags && (<label className="label col-span-2">Cabin Bags<input name="cabin" placeholder="e.g. 2" className="field" /></label>)}
        <label className="label col-span-2">Vehicle Preference
          <select name="veh" className="field">{vehicles.map((v) => <option key={v}>{v}</option>)}</select></label>
        {showNotes && (<label className="label col-span-2">{notesLabel}
          <textarea name="notes" rows={2} placeholder="e.g. child seats, airport pickup, elderly passengers" className="field !min-h-[72px] py-2" /></label>)}
      </div>
      <fieldset className="mt-4">
        <legend className="label">Trip Type</legend>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {["One Way", "Return"].map((t) => (
            <label key={t} className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border text-sm font-medium ${trip === t ? "border-gold bg-gold/10 text-navy" : "border-slate-300 text-muted"}`}>
              <input type="radio" name="trip" value={t} checked={trip === t} onChange={() => setTrip(t)} className="sr-only" />{t}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="btn-navy mt-5 w-full">{button}</button>
      <p className="mt-3 text-center text-xs text-muted">
        {sent ? "WhatsApp opened with your request. Send it to our team to receive your quote." : note}
      </p>
      {!compact && <p className="mt-1 text-center text-[11px] text-muted/80">This is a quote request, not an instant booking. No passport details are needed at this stage.</p>}
    </form>
  );
}
