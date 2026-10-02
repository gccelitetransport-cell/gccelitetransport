import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: { absolute: "Page Not Found | GCC Elite Transport" }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="section"><div className="container-x text-center">
      <h1 className="text-3xl font-bold text-navy">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist. These pages may help:</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-gold">Home</Link>
        <Link href="/routes/" className="btn-outline">Cross-border routes</Link>
        <Link href="/border-guides/" className="btn-outline">Border guides</Link>
        <Link href="/contact/" className="btn-outline">Contact</Link>
      </div>
    </div></section>
  );
}
