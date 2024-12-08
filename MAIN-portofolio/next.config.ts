import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use this for static export
  output: "export",
  
  // Specify the base path if your GitHub repo is under a subdirectory
  basePath: '/MAIN-portofolio',
  
  // Optional: to handle images correctly if you're using them
  images: {
    unoptimized: true, // This will avoid Next.js optimizing images, which is useful for GitHub Pages
  },
};

export default nextConfig;
