import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Railway deployment optimizations
  output: 'standalone',
  experimental: {
    // Optimize CSS loading
    optimizeCss: true,
  },
  // Force CSS rebuilds - ARENA FYSIO DIRECT FIX
  generateBuildId: async () => {
    return `arenafysio-fixed-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },
  /* config options here */
};

export default nextConfig;
