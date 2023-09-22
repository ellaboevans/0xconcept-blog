import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

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
    <html lang="en">
      <body className="bg-[rgb(36,36,36)] text-white">
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
