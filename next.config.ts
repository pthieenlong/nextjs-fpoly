import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3000'
    }, 
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '8000'
    }, 
    {
      protocol: 'https',
      hostname: 'placehold.co',
    }, 
  ]
  }
};

export default nextConfig;
