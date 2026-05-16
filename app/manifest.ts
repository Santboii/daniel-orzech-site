import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel Orzech - General Contractor",
    short_name: "D. Orzech",
    description:
      "Custom residential and commercial renovations in Gurnee, IL and the Chicago suburbs.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3f0",
    theme_color: "#1b2838",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
