import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}/` }, { url: `${SITE.url}/cross-border-transfers/` }, { url: `${SITE.url}/saudi-arabia/` }, { url: `${SITE.url}/bahrain/` }, ...PAGES.filter((p) => !p.legal).map((p) => ({ url: `${SITE.url}/${p.slug}/` }))];
}
