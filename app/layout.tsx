import './globals.css';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StrogoPovjerljivo',
  description: 'Video player application',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/media/cybe-logo.svg',
  },
  themeColor: '#000000',
  openGraph: {
    title: 'StrogoPovjerljivo',
    description: 'Video player application',
    url: 'https://cybe.in',
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/media/cybe-logo.svg" />
        <link rel="apple-touch-icon" href="/media/cybe-logo.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
