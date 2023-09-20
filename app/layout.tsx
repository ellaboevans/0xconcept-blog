import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeContextProvider from '@/contexts/ThemeContextProvider'

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
      <body>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
