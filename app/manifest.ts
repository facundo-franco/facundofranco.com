import type { MetadataRoute } from "next";
import { ROLE, SCOUTHALO_TAGLINE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Facundo Franco",
    short_name: "Facundo Franco",
    description: `${ROLE}. ${SCOUTHALO_TAGLINE}`,
    start_url: "/",
    display: "standalone",
    background_color: "#090d10",
    theme_color: "#090d10",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
