import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'CanDonkeys - Never Worry About Trash Day Again',
  description: 'Weekly trash and recycling can service for Bucks County homeowners, seniors, and busy families. Only $10 per week.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload LCP hero image so browser discovers it immediately */}
        <link
          rel="preload"
          href="/background/hero-bg-3.webp"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  )
}