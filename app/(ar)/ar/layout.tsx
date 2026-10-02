import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { HeaderAr } from "@/components/ar/Header";
import { FooterAr } from "@/components/ar/Footer";
import { StickyBarAr } from "@/components/ar/StickyBar";
import { Analytics } from "@/components/Analytics";
import { GOOGLE_SITE_VERIFICATION, SITE } from "@/lib/site";
import { poppins, plexArabic } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "نقل بري خاص بين دول الخليج | GCC Elite Transport", template: "%s | GCC Elite Transport" },
  openGraph: { type: "website", siteName: SITE.name, locale: "ar_SA" },
  robots: { index: true, follow: true },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};
export const viewport: Viewport = { themeColor: "#0B1F33", width: "device-width", initialScale: 1 };

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${poppins.variable} ${plexArabic.variable}`}>
      <body className="font-ar">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:right-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-gold focus:px-3 focus:py-2">انتقل إلى المحتوى</a>
        <HeaderAr />
        <main id="main">{children}</main>
        <FooterAr />
        <StickyBarAr />
        <Analytics />
      </body>
    </html>
  );
}
