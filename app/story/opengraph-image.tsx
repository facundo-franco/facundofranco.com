import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Building ScoutHalo — Facundo Franco";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage(
    "Building ScoutHalo.",
    "How an idea sitting in my Notes turned into the company I'm building today."
  );
}
