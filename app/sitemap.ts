import type { MetadataRoute } from "next";
import { publishedRoutes } from "@/lib/routes";
import { GUIDES } from "@/lib/guides";
import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}/` }, { url: `${SITE.url}/cross-border-transfers/` }, { url: `${SITE.url}/saudi-arabia/` }, { url: `${SITE.url}/bahrain/` }, { url: `${SITE.url}/uae/` }, { url: `${SITE.url}/kuwait/` }, { url: `${SITE.url}/qatar/` }, { url: `${SITE.url}/jordan/` }, { url: `${SITE.url}/oman/` }, { url: `${SITE.url}/border-guides/` }, ...GUIDES.map((g) => ({ url: `${SITE.url}/border-guides/${g.slug}/` })), { url: `${SITE.url}/routes/` }, { url: `${SITE.url}/travel-guides/` }, ...ARTICLES.map((a) => ({ url: `${SITE.url}/travel-guides/${a.slug}/` })), ...publishedRoutes().map((r) => ({ url: `${SITE.url}/routes/${r.slug}/` })), ...["fleet", "corporate", "airport-transfers", "about", "contact", "privacy-policy", "terms", "cookie-policy"].map((p) => ({ url: `${SITE.url}/${p}/` }))];
}
