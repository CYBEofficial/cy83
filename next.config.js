/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  // Image optimization configuration for static export
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  // For custom domain, we don't need basePath or assetPrefix
  // as we want to serve from the root of the domain
  basePath: '',
  assetPrefix: '',
  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,
  // Optional: Add environment variables for the domain
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://cybe.in',
  },
};

module.exports = nextConfig;
