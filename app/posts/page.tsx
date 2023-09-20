'use client'
import { useThemeContext } from '@/hooks/useThemeContext'
import React from 'react'

export default function PostsPage() {
  const { isDark } = useThemeContext()
  return (
    <div
      className={`${
        isDark ? 'dark' : 'light'
      } transition-all duration-75 h-screen padding-container`}
    >
      <h1>Posts Page</h1>
    </div>
  )
}
