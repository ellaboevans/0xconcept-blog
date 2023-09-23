'use client'
import React, { createContext, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}
type Auth = string
type AuthContextProps = {
  username: Auth
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export default function AuthContextProvider({ children }: Props) {
  const [username, setUsername] = useState<Auth>('')

  useEffect(() => {
    const getUsername = async () => {
      const response = await fetch(
        'http://localhost:3500/api/v1/auth/profile',
        {
          credentials: 'include'
        }
      )
      const userData = await response.json()
      setUsername(userData.firstName)
    }
    getUsername()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
