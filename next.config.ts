import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;