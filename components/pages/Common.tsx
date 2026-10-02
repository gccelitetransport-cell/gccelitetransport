"use client";
import { useEffect, useRef, useState } from "react";

/** Thin gold progress bar tied to scroll position (transform only). */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const h = document.documentElement; const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight); if (ref.current) ref.current.style.transform = `scaleX(${p})`; }); };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  return <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-transparent" aria-hidden="true"><div ref={ref} className="h-full origin-left bg-gold rtl:origin-right" style={{ transform: "scaleX(0)" }} /></div>;
}

/** Sticky in-page index with scroll-spy. ids must match section ids. */
export function SideIndex({ items, className = "" }: { items: [string, string][]; className?: string }) {
  const [active, setActive] = useState(items[0]?.[0]);
  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-30% 0px -60% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav aria-label="On this page" className={className}>
      <ul className="space-y-1 border-l border-slate-200 text-sm">
        {items.map(([id, label]) => (
          <li key={id}><a href={`#${id}`} className={`-ml-px block border-l-2 py-1.5 pl-4 transition-colors ${active === id ? "border-gold font-semibold text-navy" : "border-transparent text-muted hover:text-navy"}`}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
