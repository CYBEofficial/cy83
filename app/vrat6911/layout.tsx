import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VRAT 6911',
  description: 'VRAT 6911 Audio',
};

export default function Vrat6911Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
