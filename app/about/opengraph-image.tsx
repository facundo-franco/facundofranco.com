import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "About Facundo Franco — Founder & CEO of ScoutHalo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage(
    "Facundo Franco",
    "Founder of ScoutHalo. I build AI products, and research the emerging AI Operator category."
  );
}
