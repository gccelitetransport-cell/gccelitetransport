"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toArabic } from "@/lib/i18n";
import { NAV, waLink } from "@/lib/site";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const ar = toArabic(usePathname() || "/");
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="GCC Elite Transport home" onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap text-[13px] font-medium text-ink/80 transition-colors hover:text-gold">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={ar} hrefLang="ar" lang="ar" dir="rtl" className="hidden min-h-[40px] items-center rounded-lg px-2 font-ar text-sm font-semibold text-ocean hover:text-gold sm:inline-flex">العربية</Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-outline !min-h-[40px] !px-4 hidden sm:inline-flex"><WhatsAppIcon className="h-4 w-4 text-[#25D366]" />WhatsApp</a>
          <Link href="/#quote" className="btn-gold !min-h-[40px] !px-4 hidden sm:inline-flex">Get a Quote</Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366] text-white sm:hidden"><WhatsAppIcon /></a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-navy xl:hidden">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-200 bg-white xl:hidden">
          <ul className="container-x py-2">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3.5 text-[15px] font-medium text-navy">{n.label}</Link></li>
            ))}
            <li><Link href={ar} hrefLang="ar" lang="ar" dir="rtl" onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3.5 text-left font-ar text-[15px] font-medium text-ocean">العربية</Link></li>
            <li className="py-3"><Link href="/#quote" onClick={() => setOpen(false)} className="btn-gold w-full">Get a Quote</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
