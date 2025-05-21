/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Ensure we're using the correct base path for GitHub Pages
const basePath = '';
const assetPrefix = basePath;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // For custom domain, we don't need basePath or assetPrefix
  basePath,
  assetPrefix,
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://cybe.in',
  },
  // Skip linting during build (can be re-enabled if needed)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking during build (can be re-enabled if needed)
  typescript: {
    ignoreBuildErrors: true,
  },
};

// For GitHub Pages deployment
if (isProd) {
  nextConfig.assetPrefix = basePath;
}

module.exports = nextConfig;
