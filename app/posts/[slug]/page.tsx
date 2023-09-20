'use client'
import React from 'react'
import { ParamsProps } from '@/types/types'
import { useThemeContext } from '@/hooks/useThemeContext'

export default function SinglePost({ params }: ParamsProps) {
  const { isDark } = useThemeContext()
  const { slug } = params
  console.log(slug)
  return (
    <div
      className={`${
        isDark ? 'dark' : 'light'
      } transition-all duration-75 h-screen padding-container`}
    >
      <h1>Single Post with slug name: {slug} </h1>
    </div>
  )
}
