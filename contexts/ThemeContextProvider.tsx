'use client'
import React, { createContext, useEffect, useState } from 'react'
import {
  ThemeContextProviderProps,
  StorageType,
  Theme,
  ThemeContextProps
} from '@/types/types'

export const ThemeContext = createContext<ThemeContextProps | null>(null)

export default function ThemeContextProvider({
  children
}: ThemeContextProviderProps) {
  const getThemeMode = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storage: StorageType = localStorage.getItem('mode')
      const converting = JSON.parse(storage) || false
      return converting
    }                                         
  }

  const [isDark, setIsDark] = useState<Theme>(getThemeMode)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(isDark))
  }, [isDark])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
