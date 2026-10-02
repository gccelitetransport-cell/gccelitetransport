import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { Analytics } from "@/components/Analytics";
import { GOOGLE_SITE_VERIFICATION, SITE } from "@/lib/site";

import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "GCC Elite Transport | Private Cross-Border Road Travel", template: "%s | GCC Elite Transport" },
  description: "Private cross-border transportation across Saudi Arabia, Bahrain, UAE, Qatar, Kuwait and Oman. Door-to-door transfers and executive vehicles.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, url: SITE.url, title: "GCC Elite Transport | Private Cross-Border Road Travel", description: "Private cross-border transportation across Saudi Arabia, Bahrain, UAE, Qatar, Kuwait and Oman. Door-to-door transfers and executive vehicles.", images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "GCC Elite Transport" }] },
  twitter: { card: "summary_large_image", title: "GCC Elite Transport | Private Cross-Border Road Travel", description: "Private cross-border transportation across Saudi Arabia, Bahrain, UAE, Qatar, Kuwait and Oman. Door-to-door transfers and executive vehicles.", images: ["/og/home.jpg"] },
  robots: { index: true, follow: true },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};
export const viewport: Viewport = { themeColor: "#0B1F33", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-gold focus:px-3 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBar />
        <Analytics />
      </body>
    </html>
  );
}
