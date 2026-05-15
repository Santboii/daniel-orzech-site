"use client";

import { useState } from "react";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "@/lib/data";
import LightboxModal from "./LightboxModal";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1
    );
  }

  function nextImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-copper text-white"
                : "bg-warm-100 text-navy-900 hover:bg-copper hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            onClick={() => openLightbox(i)}
            className="aspect-[4/3] bg-warm-100 bg-cover bg-center rounded overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            style={{ backgroundImage: `url(${item.src})` }}
            aria-label={`View ${item.alt}`}
          />
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <LightboxModal
          src={filtered[lightboxIndex].src}
          alt={filtered[lightboxIndex].alt}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
