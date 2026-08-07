import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10161a",
          color: "#63d9e8",
          fontSize: 88,
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        FF
      </div>
    ),
    { ...size }
  );
}
