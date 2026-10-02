"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Fades content in once, when it first scrolls into view. Visible by default (no-JS safe). */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setHidden(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHidden(false); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${hidden ? "rv-hidden" : ""} ${className}`}>{children}</div>;
}

/** SVG route line that draws itself the first time it is visible. */
export function DrawLine({ d, viewBox, className = "", stroke = "#C9A14A", dots = [] }: { d: string; viewBox: string; className?: string; stroke?: string; dots?: [number, number][] }) {
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} viewBox={viewBox} className={className} fill="none" aria-hidden="true">
      <path d={d} pathLength={1} stroke={stroke} strokeWidth="2.5" strokeLinecap="round" className={`draw ${on ? "on" : ""}`} />
      {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill={stroke} />)}
    </svg>
  );
}

/** Sticky KUWAIT → BORDER → SAUDI indicator; reads data-stage on page sections. */
export function JourneyBar() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStage(Number((e.target as HTMLElement).dataset.stage)); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  const items = ["Kuwait", "Border", "Saudi"];
  return (
    <div className="sticky top-16 z-30 hidden border-b border-slate-200 bg-white/90 backdrop-blur lg:block" aria-label="Journey progress">
      <div className="container-x flex items-center gap-3 py-2 text-xs font-semibold tracking-widest">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-3">
            <span className={i === stage ? "text-gold" : "text-muted"}>{t.toUpperCase()}</span>
            {i < 2 && <span className={`h-px w-10 ${i < stage ? "bg-gold" : "bg-slate-300"}`} aria-hidden="true" />}
          </span>
        ))}
      </div>
    </div>
  );
}

/** CTA that drifts a few px toward the cursor on hover (fine pointers only). */
export function MagneticLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 8}px, ${((e.clientY - r.top) / r.height - 0.5) * 6}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return <Link ref={ref} href={href} className={`${className} transition-transform duration-200`} onMouseMove={move} onMouseLeave={reset}>{children}</Link>;
}
