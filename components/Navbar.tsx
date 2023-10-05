'use client'
import React from 'react'
import Link from 'next/link'
import { mochain } from '@/utils/Fonts'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import toast from 'react-hot-toast'
import useAuthContext from '@/hooks/useAuthContext'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { username } = useAuthContext()

  const router = useRouter()

  // const handleLogout = async () => {
  //   const response = await fetch(
  //     'https://ox-blog-api.onrender.com/api/v1/auth/logout',
  //     {
  //       method: 'POST',
  //       credentials: 'include'
  //     }
  //   )

  //   if (response.status === 200) {
  //     toast.success('Logout successful')
  //     router.push('/')
  //   } else {
  //     toast.error('Logout failed')
  //   }
  // }

  return (
    <nav
      className={`flex items-center mx-auto justify-between bg-transparent transition-all duration-75 p-5 sticky top-0 backdrop-blur max-w-[100dvw] md:max-w-[70dvw] z-10`}
    >
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
      >
        <Link
          href="/"
          className={`font-bold text-xl ${mochain.variable} font-mochain`}
        >
          OxConcept
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://github.com/ellaboevans"
          bgColor="transparent"
          fgColor="white"
        />
        <>
          {/* {username ? (
            <button onClick={handleLogout} className="underline">
              Logout
            </button>
          ) : (
            <Link href="/auth/login" className="underline">
              Login
            </Link>
          )} */}
        </>
      </motion.div>
    </nav>
  )
}
