import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"><div className="container-x text-center">
      <h1 className="text-3xl font-bold text-navy">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link href="/" className="btn-gold mt-6">Back to Home</Link>
    </div></section>
  );
}
