import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-south-1.graphassets.com',
      },
    ],
  },
};

export default nextConfig;
