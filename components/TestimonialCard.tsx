import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <blockquote className="bg-white p-6 rounded shadow-sm">
      <p className="text-gray-700 italic leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="text-sm">
        <span className="font-semibold text-navy-900">
          {testimonial.author}
        </span>
        <span className="text-gray-500"> &mdash; {testimonial.location}</span>
      </footer>
    </blockquote>
  );
}
