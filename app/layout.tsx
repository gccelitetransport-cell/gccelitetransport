import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { SITE } from "@/lib/site";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "GCC Cross-Border Transport | Private GCC Transfers", template: "%s | GCC Elite Transport" },
  description: "Private cross-border transportation across Saudi Arabia, Bahrain, UAE, Qatar, Kuwait and Oman. Door-to-door transfers, executive vehicles and GCC road travel.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, url: SITE.url, title: "GCC Cross-Border Transport | Private GCC Transfers", description: "Private road transportation between GCC countries." },
  robots: { index: true, follow: true },
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
      </body>
    </html>
  );
}
