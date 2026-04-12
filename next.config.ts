import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "utfs.io",
      "uploadthing.com",
      "img.clerk.com",
      "subdomain",
      "files.stripe.com",
    ],
  },
};

export default nextConfig;
