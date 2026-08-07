import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Facundo Franco — Founder & CEO of ScoutHalo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage("Facundo Franco", "Founder of ScoutHalo. Building and operating AI in production.");
}
