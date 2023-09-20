'use client'
import { ThemeContext } from '@/contexts/ThemeContextProvider'
import React, { useContext } from 'react'

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeContext must be used within the ThemeContextProvider'
    )
  }
  return context
}
