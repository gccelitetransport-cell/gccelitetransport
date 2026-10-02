import type { MetadataRoute } from "next";
import { publishedRoutes } from "@/lib/routes";
import { GUIDES } from "@/lib/guides";
import { ARTICLES } from "@/lib/articles";
import { AR_PATHS, languages } from "@/lib/i18n";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";

const EN_PATHS = [
  "/", "/cross-border-transfers/", "/saudi-arabia/", "/bahrain/", "/uae/", "/kuwait/", "/qatar/", "/jordan/", "/oman/",
  "/border-guides/", ...GUIDES.map((g) => `/border-guides/${g.slug}/`),
  "/routes/", ...publishedRoutes().map((r) => `/routes/${r.slug}/`),
  "/travel-guides/", ...ARTICLES.map((a) => `/travel-guides/${a.slug}/`),
  ...["fleet", "corporate", "airport-transfers", "about", "contact", "privacy-policy", "terms", "cookie-policy"].map((p) => `/${p}/`),
];

// Pages with an Arabic version list both language URLs as hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const en = EN_PATHS.map((p) => (AR_PATHS.has(p) ? { url: `${SITE.url}${p}`, alternates: { languages: languages(p) } } : { url: `${SITE.url}${p}` }));
  const ar = [...AR_PATHS].map((p) => ({ url: `${SITE.url}/ar${p}`, alternates: { languages: languages(p) } }));
  return [...en, ...ar];
}
