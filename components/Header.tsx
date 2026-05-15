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
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          DANIEL ORZECH
        </Link>
        <nav className="hidden md:flex gap-6">
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
