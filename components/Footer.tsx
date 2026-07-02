import Link from "next/link";
import { businessInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-custom">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {businessInfo.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {businessInfo.subline}. Serving {businessInfo.location} and the
              greater Chicagoland area.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer" className="flex flex-col gap-2">
              <Link href="/services" className="text-sm hover:text-copper transition-colors">Services</Link>
              <Link href="/gallery" className="text-sm hover:text-copper transition-colors">Gallery</Link>
              <Link href="/about" className="text-sm hover:text-copper transition-colors">About</Link>
              <Link href="/contact" className="text-sm hover:text-copper transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={businessInfo.phoneHref}
                className="hover:text-copper transition-colors"
              >
                {businessInfo.phone}
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="hover:text-copper transition-colors"
              >
                {businessInfo.email}
              </a>
              <a
                href="https://nextdoor.com/page/daniel-orzech-gurnee-il"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors"
              >
                Nextdoor (161 subscribers)
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-copper text-lg md:text-xl mb-3" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            <em>&ldquo;{businessInfo.motto}&rdquo;</em>
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
