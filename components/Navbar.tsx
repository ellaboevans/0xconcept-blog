'use client'
import React from 'react'
import Link from 'next/link'
import { mochain } from '@/utils/Fonts'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

export default function Navbar() {
  return (
    <nav
      className={`flex items-center mx-auto justify-between bg-transparent transition-all duration-75 p-5 sticky top-0 backdrop-blur max-w-[80dvw] md:max-w-[70dvw] z-10`}
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
        className="flex items-center gap-5"
      >
        <SocialIcon
          url="https://github.com/ellaboevans"
          bgColor="transparent"
          fgColor="white"
        />
      </motion.div>
    </nav>
  )
}
