import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'computing.psu.ac.th',
        pathname: '/**',
      }
    ]
  },
};

export default nextConfig;
