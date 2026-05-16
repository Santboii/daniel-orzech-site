import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-navy-900 border-b-2 border-copper">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="block">
          <img
            src="/images/logo.svg"
            alt="Daniel Orzech - General Contractor"
            className="h-16 md:h-[4.5rem] w-auto"
          />
        </Link>
        <nav aria-label="Main" className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-custom text-sm tracking-wide hover:text-copper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
