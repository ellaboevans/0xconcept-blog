'use client'
import Link from 'next/link'
import React from 'react'
import { overusedGrotesk } from '@/utils/Fonts'
import { motion } from 'framer-motion'

const BlogRoute = () => {
  return (
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
        duration: 0.5
      }}
    >
      <Link
        href="/blog"
        className={`${overusedGrotesk.variable} font-overusedGrotesk text-base md:text-xl underline`}
      >
        Read Blog
      </Link>
    </motion.div>
  )
}

export default BlogRoute
