import './globals.css';
import React from 'react';
import { Metadata } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '';

// Use absolute URLs for production
const getAssetUrl = (path: string) => {
  if (!isProd) return path;
  // If we're in production, use the full URL
  return `https://cybe.in${basePath}${path}`;
};

export const metadata: Metadata = {
  title: 'StrogoPovjerljivo',
  description: 'Video player application',
  metadataBase: new URL(isProd ? 'https://cybe.in' : 'http://localhost:3000'),
  manifest: getAssetUrl('/manifest.webmanifest'),
  icons: {
    icon: getAssetUrl('/favicon.ico'),
    shortcut: getAssetUrl('/favicon.ico'),
    apple: getAssetUrl('/media/cybe-logo.svg'),
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
        <link rel="manifest" href={getAssetUrl('/manifest.webmanifest')} />
        <link rel="shortcut icon" href={getAssetUrl('/favicon.ico')} />
        <link rel="icon" type="image/x-icon" href={getAssetUrl('/favicon.ico')} />
        <link rel="icon" type="image/svg+xml" href={getAssetUrl('/media/cybe-logo.svg')} />
        <link rel="apple-touch-icon" href={getAssetUrl('/media/cybe-logo.svg')} />
      </head>
      <body>{children}</body>
    </html>
  )
}
