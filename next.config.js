/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'cy83';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
