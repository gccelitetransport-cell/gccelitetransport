// English ↔ Arabic page pairs. Kept free of page content so the client header stays small.
// When an Arabic page is added under app/(ar)/ar/, add its English path here (and its slug list if it is dynamic).
const SITE_URL = "https://gccelitetransport.com";

export const AR_GUIDE_SLUGS = ["saudi-bahrain", "qatar-saudi", "uae-saudi", "oman-uae", "kuwait-saudi", "oman-saudi", "jordan-saudi"];

export const AR_PATHS = new Set<string>([
  "/",
  "/cross-border-transfers/",
  "/border-guides/",
  ...AR_GUIDE_SLUGS.map((s) => `/border-guides/${s}/`),
]);

export const hasArabic = (enPath: string) => AR_PATHS.has(enPath);
export const toArabic = (enPath: string) => (hasArabic(enPath) ? `/ar${enPath}` : "/ar/");
export const toEnglish = (arPath: string) => arPath.replace(/^\/ar(?=\/)/, "") || "/";

/** hreflang alternates for a page that exists in both languages. `enPath` is the English path, e.g. "/border-guides/". */
export const languages = (enPath: string) => ({
  en: `${SITE_URL}${enPath}`,
  ar: `${SITE_URL}/ar${enPath}`,
  "x-default": `${SITE_URL}${enPath}`,
});
export const enAlternates = (enPath: string) => ({ canonical: `${SITE_URL}${enPath}`, languages: languages(enPath) });
export const arAlternates = (enPath: string) => ({ canonical: `${SITE_URL}/ar${enPath}`, languages: languages(enPath) });
