// @ts-check

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/cyb3' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // For GitHub Pages
  basePath: basePath,
  // Use root-relative paths for assets
  assetPrefix: isProd ? 'https://cybe.in/cyb3' : undefined,
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Skip linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Disable the static export directory check
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
