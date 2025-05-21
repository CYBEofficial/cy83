import './globals.css';
import React from 'react';

export const metadata = {
  title: 'StrogoPovjerljivo',
  description: 'Video player application',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
