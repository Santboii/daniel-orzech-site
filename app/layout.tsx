import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { PreloadResources } from "@/components/PreloadResources";
import "./globals.css";

const BASE_URL = "https://danielorzech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Daniel Orzech | General Contractor | Crystal Lake, IL",
    template: "%s | Daniel Orzech Contractor",
  },
  description:
    "Custom residential and commercial renovations in Crystal Lake, IL and the greater Chicagoland area. Kitchen, bathroom, and basement remodeling. Nextdoor Neighborhood Favorite 2025 & 2026.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Daniel Orzech - General Contractor",
    title: "Daniel Orzech | General Contractor | Crystal Lake, IL",
    description:
      "Custom residential and commercial renovations in Crystal Lake, IL and the greater Chicagoland area. Kitchen, bathroom, and basement remodeling.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Daniel Orzech General Contractor - Renovation Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Orzech | General Contractor | Crystal Lake, IL",
    description:
      "Custom residential and commercial renovations in Crystal Lake, IL and the greater Chicagoland area.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <PreloadResources />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-copper focus:text-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <LocalBusinessJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
