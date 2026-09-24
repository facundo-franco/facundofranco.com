/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },

  // Preserve SEO equity from the previous static site's URLs.
  async redirects() {
    return [
      // Browsers hard-request /favicon.ico regardless of the SVG icon link.
      { source: "/favicon.ico", destination: "/icon.svg", permanent: false },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      // Writing is hidden for now; old writing URLs go home. Temporary, so a
      // writing index can come back later without cached redirects in the way.
      { source: "/articles", destination: "/", permanent: false },
      { source: "/articles/:path*", destination: "/", permanent: false },
      { source: "/writing", destination: "/", permanent: false },
    ];
  },

  // Security headers applied to every route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
