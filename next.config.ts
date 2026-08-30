import type { NextConfig } from "next";

// GitHub Pages project sites are served from a subpath (github.io/MCTM.MUN),
// so every asset/link is prefixed with basePath in production. Moving to a
// custom domain serves from the root instead — when that happens, delete the
// NEXT_PUBLIC_BASE_PATH line in .github/workflows/deploy.yml (or set it to an
// empty string) and this falls back to "" automatically.
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/MCTM.MUN" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

