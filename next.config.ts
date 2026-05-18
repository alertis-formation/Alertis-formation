import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alertisformation.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // WordPress category archive
      {
        source: "/category/articles_d_actualite",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/category/articles_d_actualite/:path*",
        destination: "/articles",
        permanent: true,
      },
      // WordPress tag/category generic archives that may be indexed
      {
        source: "/category/:slug*",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/qui-sommes-nous",
        permanent: true,
      },
      // WordPress date-based archives
      {
        source: "/:year(\\d{4})",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})",
        destination: "/articles",
        permanent: true,
      },
      // WP feed endpoints → our RSS
      {
        source: "/feed",
        destination: "/feed.xml",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/feed.xml",
        permanent: true,
      },
      // WP admin / login bots — redirect to home (avoid 404 spam in search console)
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
