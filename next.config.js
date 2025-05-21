/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // For custom domain, we don't need basePath or assetPrefix
  basePath: '',
  assetPrefix: '',
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://cybe.in',
  },
};

module.exports = nextConfig;
