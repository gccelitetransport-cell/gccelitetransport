"use client";
import Script from "next/script";
import { useEffect } from "react";
import { CF_ANALYTICS_TOKEN } from "@/lib/site";
import { track } from "@/lib/track";

/** Cookieless Cloudflare Web Analytics beacon (when a token is set) + click tracking for WhatsApp, phone and quote CTAs. */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;
      if (href.includes("wa.me/")) track("whatsapp_click", { page });
      else if (href.startsWith("tel:")) track("phone_click", { page });
      else if (href.endsWith("#quote") || href === "/contact/") track("quote_cta_click", { page, label: (a.textContent || "").trim().slice(0, 60) });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  if (!CF_ANALYTICS_TOKEN) return null;
  return <Script src="https://static.cloudflareinsights.com/beacon.min.js" strategy="afterInteractive" data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })} />;
}
