import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container notfound-inner">
        <p className="eyebrow">404</p>
        <h1>Nothing here.</h1>
        <Link href="/" className="product-link">
          Back home →
        </Link>
      </div>
    </main>
  );
}
