import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '0xConcept | Blog',
  description: 'A blog website for all'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
