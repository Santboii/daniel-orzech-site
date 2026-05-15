import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse my portfolio of completed renovation projects. Kitchen remodels, bathroom renovations, basement finishing, and more in the Chicago suburbs.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">My Work</h1>
          <p className="text-slate-custom max-w-2xl mx-auto">
            Browse my portfolio of completed projects. Click any image for a
            closer look.
          </p>
        </div>
      </section>

      <section className="bg-warm-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
