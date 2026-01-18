/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.gstatic.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV !== "production",
    },
  },
  productionBrowserSourceMaps: false, // 👈 Tắt sourcemap cho frontend
};

module.exports = nextConfig;
