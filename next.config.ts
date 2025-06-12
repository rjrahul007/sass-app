import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // give permission to use the clerk.com domain for images
 images: {
  remotePatterns: [
    {hostname: 'img.clerk.com'}
  ]
 }
};

export default nextConfig;
