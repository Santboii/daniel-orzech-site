import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen remodeling, bathroom renovation, basement finishing, carpentry, concrete, electrical, and painting services in Gurnee, IL and the Chicago suburbs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-custom max-w-2xl mx-auto">
            From kitchen and bathroom remodels to concrete work and electrical
            upgrades, we handle residential and commercial projects of all
            sizes.
          </p>
        </div>
      </section>

      <section className="bg-warm-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-copper py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need something not listed?
          </h2>
          <p className="text-white/80 mb-6">
            We take on a wide range of projects. Reach out and let&apos;s
            discuss your needs.
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
