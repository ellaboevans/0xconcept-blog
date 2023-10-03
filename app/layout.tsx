import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from '@/contexts/AuthContextProvider'

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
      <body>
        <AuthContextProvider>
          <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />

          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
