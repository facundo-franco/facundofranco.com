import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "About — Facundo Franco";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage(
    "Facundo Franco.",
    "The path from growing up in Uruguay to operating businesses and eventually building ScoutHalo."
  );
}
