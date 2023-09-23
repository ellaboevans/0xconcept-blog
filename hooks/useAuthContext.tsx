'use client'
import React, { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContextProvider'

type Props = {}

export default function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'useAuthContext must be used within the within AuthContextProvider'
    )
  }
  return context
}
