import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  // Intrinsic size of the screenshot; the frame takes this aspect ratio so the
  // image is shown whole — never cropped or stretched.
  width?: number;
  height?: number;
  href?: string;
};

// Framed preview of a social post, in the same frame style as the hero portrait.
// Without `src`, the frame renders as an empty placeholder.
export default function PostPreview({ src, alt = "", width, height, href }: Props) {
  const frame = (
    <div
      className="post-preview-frame"
      style={src && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 720px) 90vw, 460px" quality={90} />
      ) : (
        <span className="post-preview-label" aria-hidden="true">
          Post preview
        </span>
      )}
    </div>
  );

  return (
    <figure className="post-preview">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="post-preview-link">
          {frame}
        </a>
      ) : (
        frame
      )}
    </figure>
  );
}
