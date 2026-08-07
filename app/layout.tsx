import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { baseMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090d10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body>
        {/* Enables JS-only enhancements (reveal states) with no flash when JS is off. */}
        <Script id="js-class" strategy="beforeInteractive">
          {`document.documentElement.className += " js"`}
        </Script>

        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
