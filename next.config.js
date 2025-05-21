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
  // Add basePath if deploying to GitHub Pages with project name in URL
  // basePath: isProd ? '/cy83' : '',
  // assetPrefix: isProd ? '/cy83/' : '',
};

module.exports = nextConfig;
