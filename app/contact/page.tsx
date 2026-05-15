import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free estimate for your renovation project. Call 779-396-3038 or send a message. Serving Gurnee, IL and the Chicago suburbs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-custom max-w-2xl mx-auto">
            Ready to start your project? Send me a message or give me a call for
            a free estimate.
          </p>
        </div>
      </section>

      <section className="bg-warm-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <ContactForm />
            </div>
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded shadow-sm p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a
                      href={businessInfo.phoneHref}
                      className="text-navy-900 font-semibold hover:text-copper transition-colors text-lg"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-navy-900 font-semibold hover:text-copper transition-colors"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded shadow-sm p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-4">
                  Service Area
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {businessInfo.serviceArea.join(", ")}, and surrounding areas
                  in the Chicago suburbs.
                </p>
              </div>

              <div className="bg-copper rounded p-8 text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  Free Estimates
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Call now to discuss your project
                </p>
                <a
                  href={businessInfo.phoneHref}
                  className="inline-block bg-navy-900 hover:bg-navy-700 text-white font-bold py-3 px-6 tracking-wide transition-colors"
                >
                  Call {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
