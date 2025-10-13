import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Enable pages directory alongside app directory
  reactStrictMode: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Configure trailing slash for static export
  trailingSlash: true,
};

export default nextConfig;