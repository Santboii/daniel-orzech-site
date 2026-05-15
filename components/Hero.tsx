import Link from "next/link";
import { businessInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative bg-navy-900 bg-cover bg-center min-h-[70vh] flex items-center"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-navy-900/75" />
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <p className="text-copper text-sm font-bold tracking-[3px] uppercase mb-4">
          Custom Renovations
        </p>
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
          {businessInfo.tagline}
        </h1>
        <p className="text-slate-custom text-lg md:text-xl mb-8 max-w-xl">
          {businessInfo.subline}. Serving {businessInfo.location} and the
          Chicago suburbs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-copper hover:bg-copper-light text-white font-bold py-3 px-8 tracking-wide transition-colors"
        >
          Get a Free Estimate
        </Link>
      </div>
    </section>
  );
}
