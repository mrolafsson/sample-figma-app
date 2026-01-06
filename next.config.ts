import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment at mrolafsson.github.io/sample-figma-app/
  basePath: isProd ? "/sample-figma-app" : "",
  assetPrefix: isProd ? "/sample-figma-app" : "",
};

export default nextConfig;
