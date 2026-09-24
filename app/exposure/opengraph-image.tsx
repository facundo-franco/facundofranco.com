import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Exposure — Facundo Franco";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage("Exposure.", "Talks, interviews and features with Facundo Franco and ScoutHalo.");
}
