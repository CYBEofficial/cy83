import { Viewport } from 'next'

const basePath = process.env.NODE_ENV === 'production' ? '/cyb3' : ''

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also consider adding these for better PWA support
  // viewportFit: 'cover',
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#000000' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' },
  // ],
}
