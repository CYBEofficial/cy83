// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // For GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/cyb3' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cyb3/' : '',
  // Add trailing slash for better compatibility
  trailingSlash: true,
  // Skip linting during build (can be re-enabled if needed)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking during build (can be re-enabled if needed)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
