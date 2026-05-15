import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Daniel Orzech | General Contractor | Gurnee, IL",
    template: "%s | Daniel Orzech Contractor",
  },
  description:
    "Custom residential and commercial renovations in Gurnee, IL and the Chicago suburbs. Kitchen, bathroom, and basement remodeling. Nextdoor Neighborhood Favorite 2025 & 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
