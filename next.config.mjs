// @ts-check

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/cyb3' : '';

// Get the current module's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  assetPrefix: isProd ? 'https://cybe.in' : undefined,
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
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Disable the static export directory check
  skipTrailingSlashRedirect: true,
  // Webpack configuration to copy static files
  webpack: (config, { isServer }) => {
    // Copy files from public to out directory
    if (!isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: 'public',
              to: join(__dirname, 'out'),
              globOptions: {
                ignore: ['**/.DS_Store', '**/public/**'],
              },
              noErrorOnMissing: true,
            },
          ],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
