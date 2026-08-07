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
      { source: "/articles", destination: "/writing", permanent: true },
      { source: "/articles/:path*", destination: "/writing", permanent: true },
    ];
  },
};

export default nextConfig;
