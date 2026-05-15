import Link from "next/link";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div
        className="h-48 bg-warm-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="text-copper font-semibold text-sm hover:text-copper-light transition-colors"
        >
          Get a Quote &rarr;
        </Link>
      </div>
    </div>
  );
}
