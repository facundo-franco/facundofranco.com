import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Branded 1200×630 card in the site's palette. No web font is loaded (keeps
// generation dependency-free); the built-in sans is used.
export function ogImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090d10",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#63d9e8",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <div style={{ display: "flex", width: 44, height: 2, background: "#63d9e8" }} />
          FACUNDOFRANCO.COM
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#edf3f5",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#8b9aa1",
              marginTop: 26,
              maxWidth: 940,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", color: "#74828a", fontSize: 22, letterSpacing: 1 }}>
          Founder of ScoutHalo · AI Operator
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
