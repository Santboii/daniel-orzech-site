import Link from "next/link";
import { businessInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 min-h-[75vh] flex items-center">
      <img
        src="/images/hero.jpg"
        alt="Custom renovation work by Daniel Orzech"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-navy-900/20" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="max-w-xl">
          <p className="text-copper text-xl md:text-2xl mb-6 leading-relaxed" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            <em>{businessInfo.motto}</em>
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {businessInfo.tagline}
          </h1>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            {businessInfo.subline}. Serving {businessInfo.location} and the
            greater Chicagoland area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-copper hover:bg-copper-light text-white font-semibold py-3.5 px-8 tracking-wide transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="inline-block border-2 border-white/70 text-white font-semibold py-3.5 px-8 tracking-wide hover:bg-white/10 hover:border-white transition-colors"
            >
              Get a Quote: {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
