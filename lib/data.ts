export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  year: number;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

export const businessInfo = {
  name: "Daniel Orzech",
  phone: "708-770-0300",
  phoneHref: "tel:+17087700300",
  email: "danielorzech@ymail.com",
  location: "Gurnee, IL",
  tagline: "Hands-on craft. Real results.",
  motto: "With God everything is possible.",
  subline: "Residential & Commercial Custom Renovations",
  serviceArea: [
    "Gurnee",
    "Niles",
    "Morton Grove",
    "Libertyville",
    "Lake Bluff",
    "Chicago",
  ],
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen renovations from layout redesign to finish work. Custom cabinetry, countertops, backsplashes, and appliance installation.",
    image: "/images/gallery/kitchen-1.jpg",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Full bathroom remodels including tile work, vanities, fixtures, and plumbing. From half-baths to master suite transformations.",
    image: "/images/gallery/bathroom-1.jpg",
  },
  {
    slug: "basement-remodeling",
    title: "Basement Remodeling",
    description:
      "Transform unfinished basements into livable spaces. Framing, drywall, flooring, lighting, and custom layouts for entertainment or living areas.",
    image: "/images/gallery/basement-1.jpg",
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    description:
      "Custom woodwork, built-ins, shelving, trim work, and structural carpentry. Precision craftsmanship for both functional and decorative projects.",
    image: "/images/gallery/carpentry-1.jpg",
  },
  {
    slug: "concrete-installation",
    title: "Concrete Installation",
    description:
      "Driveways, patios, walkways, and foundations. Professional concrete work with proper grading, reinforcement, and finishing.",
    image: "/images/gallery/concrete-1.jpg",
  },
  {
    slug: "electrical-work",
    title: "Electrical Work",
    description:
      "Electrical panel upgrades, new circuits, lighting installation, outlet additions, and fixture replacements for residential and commercial properties.",
    image: "/images/gallery/electrical-1.jpg",
  },
  {
    slug: "house-painting",
    title: "House Painting",
    description:
      "Interior and exterior painting with proper surface prep, priming, and quality finishes. Color consultation and wallpaper removal available.",
    image: "/images/gallery/painting-1.jpg",
  },
  {
    slug: "door-window-trim",
    title: "Door & Window Trim",
    description:
      "Installation and replacement of doors, windows, and surrounding trim work. Improving energy efficiency, curb appeal, and interior aesthetics.",
    image: "/images/gallery/trim-1.jpg",
  },
  {
    slug: "general-contracting",
    title: "Home Building & General Contracting",
    description:
      "Full-scope project management for new construction and large-scale renovations. Coordinating trades, permits, and timelines from start to finish.",
    image: "/images/gallery/general-1.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Daniel was great to work with. He came all the way out to Niles to help us out.",
    author: "T.F.",
    location: "Morton Grove, IL",
    year: 2020,
  },
  {
    quote:
      "Daniel came to my house to give me a quote for several projects. He provided me with great advice.",
    author: "M.C.",
    location: "Libertyville, IL",
    year: 2021,
  },
  {
    quote:
      "Dan came to my rescue and removed and installed the new dishwasher at a reasonable price! Extremely knowledgeable, professional and expedient!",
    author: "K.M.",
    location: "Gurnee, IL",
    year: 2023,
  },
];

export const galleryCategories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Basement",
  "Exterior",
  "General",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/kitchen-1.jpg", alt: "Modern kitchen renovation with custom cabinetry", category: "Kitchen" },
  { src: "/images/gallery/kitchen-2.jpg", alt: "Kitchen countertop and backsplash installation", category: "Kitchen" },
  { src: "/images/gallery/kitchen-3.jpg", alt: "Open concept kitchen remodel", category: "Kitchen" },
  { src: "/images/gallery/bathroom-1.jpg", alt: "Master bathroom remodel with tile shower", category: "Bathroom" },
  { src: "/images/gallery/bathroom-2.jpg", alt: "Bathroom vanity and mirror installation", category: "Bathroom" },
  { src: "/images/gallery/basement-1.jpg", alt: "Finished basement with entertainment area", category: "Basement" },
  { src: "/images/gallery/basement-2.jpg", alt: "Basement remodel with custom lighting", category: "Basement" },
  { src: "/images/gallery/exterior-1.jpg", alt: "Exterior concrete driveway installation", category: "Exterior" },
  { src: "/images/gallery/exterior-2.jpg", alt: "Exterior house painting", category: "Exterior" },
  { src: "/images/gallery/general-1.jpg", alt: "Custom carpentry built-in shelving", category: "General" },
  { src: "/images/gallery/general-2.jpg", alt: "Door and window trim installation", category: "General" },
  { src: "/images/gallery/general-3.jpg", alt: "Electrical panel upgrade", category: "General" },
];
