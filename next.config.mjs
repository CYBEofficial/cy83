// @ts-check

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // For GitHub Pages

  // Use basePath for assetPrefix (static export best practice)

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
    NEXT_PUBLIC_BASE_PATH: '',
  },
  // Disable the static export directory check
  skipTrailingSlashRedirect: true,
  // Configure webpack for static export
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
