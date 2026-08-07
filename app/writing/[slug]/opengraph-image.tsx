import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getArticleBySlug, getStaticSlugs } from "@/lib/writing";

export const alt = "Facundo Franco — Writing";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  return ogImage(
    a?.title ?? "Writing",
    a?.description ?? "Essays on building AI in production, and the discipline of operating it."
  );
}
