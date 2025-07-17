import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'navneetdwivedi.github.io',
        pathname: '/Logo_Slider/**',
      },
    ],
  },
};

export default nextConfig;
