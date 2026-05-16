"use client";

import { useEffect, useRef } from "react";

interface LightboxModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-copper transition-colors p-2"
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-copper transition-colors p-2"
        aria-label="Next image"
      >
        &#8250;
      </button>
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-copper transition-colors p-2"
        aria-label="Close lightbox"
      >
        &times;
      </button>
    </div>
  );
}
