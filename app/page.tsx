import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services, testimonials, neighborQualities } from "@/lib/data";
import Link from "next/link";

const featuredServices = services.slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Bar */}
      <section className="bg-navy-700 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white text-center">
          <a
            href="https://nextdoor.com/page/daniel-orzech-gurnee-il"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper font-bold tracking-wide hover:text-copper-light transition-colors"
          >
            Nextdoor Neighborhood Favorite 2025 &amp; 2026
          </a>
          <span className="hidden md:inline text-slate-custom">|</span>
          <a href="tel:+17793963038" className="hover:text-copper transition-colors">
            779-396-3038
          </a>
          <span className="hidden md:inline text-slate-custom">|</span>
          <span className="text-slate-custom">
            Gurnee, IL &amp; Chicago Suburbs
          </span>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-warm-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-2">
            What I Do
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Residential and commercial renovation services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-copper font-semibold hover:text-copper-light transition-colors"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            What Clients Say
          </h2>
          <p className="text-slate-custom text-center mb-10">
            Real reviews from Nextdoor neighbors
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          {/* Neighbor qualities */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-custom text-sm">Neighbors describe Daniel as:</span>
            {neighborQualities.map((q) => (
              <span
                key={q}
                className="border border-copper/40 text-copper text-sm px-4 py-1.5 rounded-full"
              >
                {q}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://nextdoor.com/page/daniel-orzech-gurnee-il"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper text-sm font-semibold hover:text-copper-light transition-colors"
            >
              See all 161 recommendations on Nextdoor &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white text-2xl md:text-3xl mb-6" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            <em>&ldquo;With God everything is possible.&rdquo;</em>
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Every job begins with prayer and ends with a handshake. Get a free
            estimate for your next renovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy-900 hover:bg-navy-700 text-white font-bold py-3 px-8 tracking-wide transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
