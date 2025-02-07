import type { NextConfig } from "next";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "defaultDataset";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

