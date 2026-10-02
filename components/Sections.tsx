import Link from "next/link";
import {
  BOOKING, CORPORATE_FOR, CORPORATE_SERVICES, COUNTRIES, DISCLAIMER, FAQS, FLEET, GUIDES, ROUTES, SERVICES, STEPS, WHY, waLink,
} from "@/lib/site";
import { CountryScene, HeroScene, Vehicle } from "./Art";
import { Flag } from "./Flag";
import { ArrowIcon, CheckIcon, PlusIcon, WhatsAppIcon } from "./Icons";
import { QuoteForm } from "./QuoteForm";

const Head = ({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) => (
  <div className="max-w-2xl">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className={`h2 ${light ? "!text-white" : ""}`}>{title}</h2>
    {text && <p className={`mt-4 leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{text}</p>}
  </div>
);
const Link2 = ({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) => (
  <Link href={href} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${light ? "text-gold" : "text-ocean"} hover:text-gold`}>{children}<ArrowIcon /></Link>
);

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/35 to-transparent" />
      <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
        <div className="text-white">
          <p className="eyebrow">GCC Elite Transport</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Cross the GCC.<br />Travel Privately.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Private cross-border transportation between GCC countries, with pre-booked vehicles, professional drivers and route-specific travel coordination.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#quote" className="btn-gold">Get a Cross-Border Quote</Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp Us</a>
          </div>
          <p className="mt-5 text-sm text-white/70">Private vehicles • Door-to-door options • One-way &amp; return journeys</p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

export function Highlights() {
  const items = ["Six GCC countries", "Pre-booked private vehicles", "Route-specific planning", "Quote before travel"];
  return (
    <section aria-label="Highlights" className="border-b border-slate-200 bg-white">
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
        <Head eyebrow="Regional network" title="One Transport Partner Across the GCC" text="From short international crossings to long-distance road journeys, GCC Elite Transport coordinates private transportation across the Gulf." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <article key={c.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
              <div className="relative h-40"><CountryScene hue={c.hue} />
                <div className="absolute left-4 top-4"><Flag id={c.id} className="h-7 w-10" /></div></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-navy">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                <div className="mt-4"><Link2 href={c.href}>Explore Routes</Link2></div>
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
        <Head eyebrow="Services" title="Built Around Cross-Border Travel" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="rounded-2xl border border-slate-200 bg-paper p-6 sm:p-8">
              <span className="text-sm font-semibold text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              <div className="mt-5"><Link2 href={s.href}>Learn more</Link2></div>
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Head eyebrow="Routes" title="Popular GCC Cross-Border Routes" text="Examples of corridors we plan journeys on. Each route is confirmed individually before booking." />
          <Link2 href="/routes/">All routes</Link2>
        </div>
        <ul className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {ROUTES.map((r) => (
            <li key={r.from + r.to} className="w-[82%] shrink-0 snap-start rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:w-auto">
              <p className="flex items-center gap-2 text-lg font-semibold text-navy">{r.from} <span className="text-gold">↔</span> {r.to}</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">Corridor</dt><dd className="text-ink">{r.corridor}</dd></div>
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">Vehicles</dt><dd className="text-ink">{r.vehicles}</dd></div>
                <div className="flex gap-2"><dt className="w-20 shrink-0 text-muted">Trip</dt><dd className="text-ink">{r.trip}</dd></div>
              </dl>
              <div className="mt-4"><Link2 href="/routes/">View Route</Link2></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Explainer() {
  return (
    <section className="section bg-navy text-white" id="border-travel">
      <div className="container-x">
        <Head light eyebrow="How it works on the road" title="A Border Crossing Is Part of the Journey" text="International road travel isn't simply a longer taxi ride. Vehicle permissions, passenger documents, border procedures and route conditions can vary by crossing. GCC Elite Transport plans each journey around the specific route instead of treating every trip the same." />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-3xl font-bold text-gold">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-white/50">Passenger entry and visa eligibility remain subject to official requirements.</p>
      </div>
    </section>
  );
}

export function PrivateJourney() {
  const pts = ["Private vehicle", "No shared passengers", "Door-to-door pickup", "Luggage space", "Dedicated journey"];
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <Head eyebrow="Private by design" title="Your Journey, Not a Shared Taxi" text="When the selected route supports a continuous private vehicle journey, your group travels together instead of sharing the vehicle with unrelated passengers. The route determines whether a vehicle or driver change is required, and we confirm this before you travel." />
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
        <Head eyebrow="Fleet" title="Choose the Vehicle for Your Journey" text="Vehicle models and capacity vary. Final vehicle availability is confirmed for your route." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((v) => (
            <article key={v.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="flex h-40 items-center justify-center bg-gradient-to-b from-slate-100 to-white px-6"><div className="h-24 w-full max-w-[280px]"><Vehicle id={v.id} w={v.w} h={v.h} /></div></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
                <p className="mt-1 text-sm text-ink">{v.pax}</p>
                <p className="text-sm text-muted">{v.bags}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.use}</p>
                <Link href="/#quote" className="btn-outline mt-5 w-full">Request This Vehicle</Link>
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
        <Head eyebrow="Why us" title="Designed for GCC Road Travel" />
        <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
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
          <Head light eyebrow="Corporate" title="GCC Transportation for Business" text="Transportation for people who need to be in another GCC market on a fixed schedule." />
          <ul className="mt-6 flex flex-wrap gap-2">{CORPORATE_FOR.map((c) => <li key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">{c}</li>)}</ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/corporate/" className="btn-gold">Request Corporate Transportation</Link>
            <a href={waLink("Hello GCC Elite Transport, I would like to discuss corporate transportation.")} target="_blank" rel="noopener noreferrer" className="btn-ghost">Talk to Our Transport Team</a>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CORPORATE_SERVICES.map((s) => (
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
          <Head eyebrow="Families & groups" title="Travel Together Across the GCC" text="Keep your group together from pickup to destination. Choose a vehicle based on passenger count, luggage and the requirements of your route." />
          <Link href="/#quote" className="btn-navy mt-7">Plan a Group Journey</Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm font-semibold text-navy">
          {["Families & children", "Groups", "Luggage planning", "Private vehicles", "Long-distance comfort", "Door-to-door travel"].map((t) => (
            <li key={t} className="rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Airport() {
  const items = ["Airport → Hotel", "Hotel → Airport", "Airport → Airport connections", "Cross-border airport journeys", "Private family transfers", "Corporate airport transportation"];
  return (
    <section className="section bg-white" id="airport">
      <div className="container-x">
        <Head eyebrow="Airports" title="Airport Transfers Across the GCC" text="Arrivals and departures at major airports in Saudi Arabia, Bahrain, the UAE, Qatar, Kuwait and Oman." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => <li key={i} className="rounded-xl border border-slate-200 bg-paper px-4 py-4 text-sm font-medium text-navy">{i}</li>)}
        </ul>
        <Link href="/airport-transfers/" className="btn-outline mt-8">View Airport Transfers</Link>
      </div>
    </section>
  );
}

export function Guides() {
  return (
    <section className="section" id="guides">
      <div className="container-x">
        <Head eyebrow="Border guides" title="GCC Border Crossing Guides" text="Border requirements can vary by country, vehicle type, nationality and travel purpose. Our guides explain the practical details passengers should check before booking." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <article key={g.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-navy">{g.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{g.countries}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">Check: </span>{g.check}</p>
              <div className="mt-4"><Link2 href="/border-guides/">Read Border Guide</Link2></div>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4 text-xs leading-relaxed text-ink">{DISCLAIMER}</p>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Head eyebrow="Booking" title="From Quote to Arrival" />
          <ol className="mt-8 space-y-6">
            {BOOKING.map((b) => (
              <li key={b.n} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">{b.n}</span>
                <div><h3 className="font-semibold text-navy">{b.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{b.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="h-fit rounded-2xl border border-slate-200 bg-paper p-6">
          <h3 className="text-lg font-semibold text-navy">Before You Book</h3>
          <p className="mt-2 text-sm text-muted">Passengers may need to provide:</p>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            {["Passport / ID information where required", "Visa or entry eligibility", "Passenger count", "Luggage details", "Pickup and destination details", "Vehicle requirements"].map((i) => (
              <li key={i} className="flex gap-2"><span className="text-gold"><CheckIcon /></span>{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">We only ask for what is needed to price and arrange the trip in the first quote request.</p>
        </aside>
      </div>
    </section>
  );
}

export function Travelers() {
  const pts = [
    ["Fewer moving parts", "One booking point instead of arranging separate transport on each side of a border."],
    ["A vehicle for your group", "Private transfers are reserved for your passengers and luggage."],
    ["Details agreed beforehand", "Route, pickup point and price are confirmed before departure."],
  ];
  return (
    <section className="section">
      <div className="container-x">
        <Head eyebrow="Why travelers book" title="Why Travelers Book Private Cross-Border Transport" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pts.map(([t, d]) => (<div key={t} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></div>))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section bg-white" id="faq">
      <div className="container-x max-w-3xl">
        <Head eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f) => (
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-ocean to-navy" />
      <div className="container-x max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Tell Us Where You&apos;re Going</h2>
        <p className="mt-4 leading-relaxed text-white/75">Share your pickup location, destination, travel date and passenger details. We&apos;ll review the route and send you the available transportation options.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/#quote" className="btn-gold">Get a Cross-Border Quote</Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon className="h-5 w-5" />WhatsApp GCC Elite Transport</a>
        </div>
      </div>
    </section>
  );
}
