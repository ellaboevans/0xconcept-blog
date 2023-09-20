'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useThemeContext } from '@/hooks/useThemeContext'
import { mochain } from '@/utils/Fonts'

export default function Navbar() {
  const { isDark, changeTheme } = useThemeContext()
  return (
    <nav
      className={`flex items-center ${
        isDark ? 'dark' : ''
      } transition-all duration-75 nav-container`}
    >
      <Link
        href="/"
        className={`float-right font-bold text-2xl flex-1 ${mochain.variable} font-mochain`}
      >
        OxConcept
      </Link>
      <div className="flex items-center space-x-5">
        <button
          className={`flex items-center justify-center text-xl w-9 h-9 rounded-full  ${
            isDark ? 'light' : 'dark'
          }`}
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => changeTheme()}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  )
}
