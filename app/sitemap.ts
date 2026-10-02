import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { publishedRoutes } from "@/lib/routes";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}/` }, { url: `${SITE.url}/cross-border-transfers/` }, { url: `${SITE.url}/saudi-arabia/` }, { url: `${SITE.url}/bahrain/` }, { url: `${SITE.url}/uae/` }, { url: `${SITE.url}/kuwait/` }, { url: `${SITE.url}/qatar/` }, { url: `${SITE.url}/jordan/` }, { url: `${SITE.url}/oman/` }, { url: `${SITE.url}/border-guides/` }, { url: `${SITE.url}/routes/` }, ...publishedRoutes().map((r) => ({ url: `${SITE.url}/routes/${r.slug}/` })), ...PAGES.filter((p) => !p.legal).map((p) => ({ url: `${SITE.url}/${p.slug}/` }))];
}
