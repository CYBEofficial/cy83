import './globals.css';
import React from 'react';
import { Metadata } from 'next';

const isProd = process.env.NODE_ENV === 'production';

// Use absolute URLs for production
const getAssetUrl = (path: string) => {
  if (!isProd) return path;
  // If we're in production, use the full URL
  return `https://cybe.in${basePath}${path}`;
};

// For static export, we need to ensure the manifest is in the root
const manifestPath = '/manifest.webmanifest';

export const metadata: Metadata = {
  title: 'CYBE',
  description: 'THE DEFIANCE STARTS NOW',
  metadataBase: new URL(isProd ? 'https://cybe.in' : 'http://localhost:3000'),
  manifest: manifestPath,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/media/cybe-logo.svg',
  },
  openGraph: {
    title: 'CYBE',
    description: 'THE DEFIANCE STARTS NOW',
    url: isProd ? 'https://cybe.in' : 'http://localhost:3000',
    siteName: 'CYBE',
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
        <link rel="manifest" href={manifestPath} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/media/cybe-logo.svg" />
        <link rel="apple-touch-icon" href="/media/cybe-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
