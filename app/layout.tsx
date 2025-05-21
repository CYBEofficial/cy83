import './globals.css';
import React from 'react';
import { Metadata } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/cyb3' : '';

// Use absolute URLs for production
const getAssetUrl = (path: string) => {
  if (!isProd) return path;
  // If we're in production, use the full URL
  return `https://cybe.in${basePath}${path}`;
};

// For static export, we need to ensure the manifest is in the root
const manifestPath = 'manifest.webmanifest';

export const metadata: Metadata = {
  title: 'StrogoPovjerljivo',
  description: 'Video player application',
  metadataBase: new URL(isProd ? 'https://cybe.in/cyb3' : 'http://localhost:3000'),
  manifest: manifestPath,
  icons: {
    icon: `${basePath}/favicon.ico`,
    shortcut: `${basePath}/favicon.ico`,
    apple: `${basePath}/media/cybe-logo.svg`,
  },
  openGraph: {
    title: 'StrogoPovjerljivo',
    description: 'Video player application',
    url: isProd ? 'https://cybe.in' : 'http://localhost:3000',
    siteName: 'StrogoPovjerljivo',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href={isProd ? `${basePath}${manifestPath}` : manifestPath} />
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
        <link rel="icon" type="image/x-icon" href={`${basePath}/favicon.ico`} />
        <link rel="icon" type="image/svg+xml" href={`${basePath}/media/cybe-logo.svg`} />
        <link rel="apple-touch-icon" href={`${basePath}/media/cybe-logo.svg`} />
      </head>
      <body>{children}</body>
    </html>
  )
}
