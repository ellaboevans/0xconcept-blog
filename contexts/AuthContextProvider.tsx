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
      try {
        const response = await fetch(
          'https://ox-blog-api.onrender.com/api/v1/auth/profile',
          {
            // credentials: 'include'
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const userData = await response.json()
          console.log(userData)
          setUsername(userData.firstName)
        } else {
          throw new Error('Response is not in JSON format')
        }
      } catch (error) {
        console.error('Error:', error)
        // Handle the error, e.g., display an error message to the user
      }
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
