// Sends a conversion event to whichever analytics tool is installed (Plausible, Umami, GA4/GTM). No-op if none is.
type W = Window & { plausible?: (e: string, o?: { props?: Record<string, string> }) => void; umami?: { track: (e: string, d?: Record<string, string>) => void }; gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
export function track(event: string, props: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as W;
  try {
    w.plausible?.(event, { props });
    w.umami?.track(event, props);
    w.gtag?.("event", event, props);
    w.dataLayer?.push({ event, ...props });
  } catch { /* analytics must never break the page */ }
}
