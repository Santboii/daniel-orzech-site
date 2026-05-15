import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Daniel Orzech, a trusted general contractor serving Gurnee, IL and the Chicago suburbs. Nextdoor Neighborhood Favorite 2025 & 2026.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Daniel Orzech
          </h1>
          <p className="text-slate-custom max-w-2xl mx-auto">
            Trusted contractor serving the Chicago suburbs
          </p>
        </div>
      </section>

      <section className="bg-warm-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img
              src="/images/logo-dark.svg"
              alt="Daniel Orzech - General Contractor"
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <div className="bg-white rounded shadow-sm p-8 md:p-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              Built on Faith, Driven by Craft
            </h2>
            <p className="text-copper text-lg mb-6" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              <em>&ldquo;With God everything is possible.&rdquo;</em>
            </p>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I put God first in everything I do. Before every job, I pray
                over the work, the home, and the people who live in it. That&apos;s
                not just something I say &mdash; it&apos;s how I start every
                single project. My faith is the foundation of my business, and
                it shapes the way I treat every client and every home.
              </p>
              <p>
                I&apos;m a general contractor based in Gurnee, Illinois,
                specializing in custom residential and commercial renovations.
                With hands-on experience across kitchens, bathrooms, basements,
                carpentry, concrete, electrical, and painting, I bring a
                full-service approach to every project.
              </p>
              <p>
                I go beyond the task list &mdash; walking you through your
                options, explaining the work, and making sure every detail is
                right. I treat every home like my own and every client like a
                neighbor, because that&apos;s what they are.
              </p>
              <p>
                That commitment to service has earned me the{" "}
                <span className="font-semibold text-copper">
                  Nextdoor Neighborhood Favorite
                </span>{" "}
                award two years running &mdash; in 2025 and 2026 &mdash; voted
                by the neighbors and community members I serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-navy-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-copper text-4xl font-bold mb-1">2025</div>
              <div className="text-white text-sm font-semibold">
                Neighborhood Favorite
              </div>
              <div className="text-slate-custom text-xs">Nextdoor</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-navy-700" />
            <div className="text-center">
              <div className="text-copper text-4xl font-bold mb-1">2026</div>
              <div className="text-white text-sm font-semibold">
                Neighborhood Favorite
              </div>
              <div className="text-slate-custom text-xs">Nextdoor</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-navy-700" />
            <div className="text-center">
              <div className="text-copper text-4xl font-bold mb-1">161</div>
              <div className="text-white text-sm font-semibold">
                Nextdoor Subscribers
              </div>
              <a
                href="https://nextdoor.com/page/daniel-orzech-gurnee-il"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper text-xs hover:text-copper-light transition-colors"
              >
                View Profile &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-warm-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Service Area
          </h2>
          <p className="text-gray-700 mb-6">
            I proudly serve the following communities and surrounding areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessInfo.serviceArea.map((area) => (
              <span
                key={area}
                className="bg-white px-4 py-2 rounded shadow-sm text-sm font-medium text-navy-900"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-copper hover:bg-copper-light text-white font-bold py-3 px-8 tracking-wide transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
