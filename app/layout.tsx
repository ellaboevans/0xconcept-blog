import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/contexts/AuthProvider'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://oxconcept.vercel.app'),
  title: '0xConcept | Evans Elabo',
  description:
    'Aspiring Linguistics graduate at Kwame Nkrumah University of Science and Technology with a strong passion for Computational Linguistics and a frontend engineer at SligthlyTechie with experience in building and designing web applications with ReactJS, NextJS, TailwindCSS, HTML, CSS, JavaScript, ExpressJS, NodeJS, MongoDB, SanityCMS and other web technologies.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
