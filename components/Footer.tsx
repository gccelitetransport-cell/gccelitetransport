import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

const cols = [
  { t: "Services", l: [["Cross-Border Transfers", "/cross-border-transfers/"], ["Routes", "/routes/"], ["Fleet", "/fleet/"], ["Corporate Travel", "/corporate/"], ["Airport Transfers", "/airport-transfers/"], ["Border Guides", "/border-guides/"], ["Travel Guides", "/travel-guides/"]] },
  { t: "Company", l: [["About", "/about/"], ["Contact", "/contact/"], ["FAQ", "/#faq"]] },
  { t: "Countries", l: [["Saudi Arabia", "/saudi-arabia/"], ["Bahrain", "/bahrain/"], ["UAE", "/uae/"], ["Qatar", "/qatar/"], ["Kuwait", "/kuwait/"], ["Oman", "/oman/"], ["Jordan (regional)", "/jordan/"]] },
  { t: "Legal", l: [["Privacy Policy", "/privacy-policy/"], ["Terms & Conditions", "/terms/"], ["Cookie Policy", "/cookie-policy/"]] },
];

export function Footer() {
  return (
    <footer className="bg-[#07131f] pb-24 pt-14 text-white/70 sm:pb-10">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-4 text-sm">{SITE.tagline}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><a className="hover:text-gold" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp: {SITE.phoneDisplay}</a></li>
              <li><a className="hover:text-gold" href={`tel:${SITE.phoneTel}`}>Phone: {SITE.phoneDisplay}</a></li>
              {SITE.email && <li><a className="hover:text-gold" href={`mailto:${SITE.email}`}>Email: {SITE.email}</a></li>}
            </ul>
          </div>
          {cols.map((c) => (
            <nav key={c.t} aria-label={c.t}>
              <h3 className="text-sm font-semibold text-white">{c.t}</h3>
              <ul className="mt-3 space-y-2 text-sm">{c.l.map(([n, h]) => <li key={n}><Link className="hover:text-gold" href={h}>{n}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>Transportation availability, border procedures, vehicle permissions and travel requirements vary by route. Confirm current requirements before travel.</p>
          <p className="mt-2">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
