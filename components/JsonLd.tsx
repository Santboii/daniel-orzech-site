import { businessInfo, services, testimonials } from "@/lib/data";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Daniel Orzech - General Contractor",
    description:
      "Custom residential and commercial renovations in Gurnee, IL and the Chicago suburbs. Kitchen, bathroom, and basement remodeling.",
    url: "https://danielorzech.com",
    telephone: "+17793963038",
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurnee",
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3703,
      longitude: -87.9392,
    },
    areaServed: businessInfo.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "161",
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
      datePublished: `${t.year}-01-01`,
    })),
    image: "https://danielorzech.com/images/hero.jpg",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
