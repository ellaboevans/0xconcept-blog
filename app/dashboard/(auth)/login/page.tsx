'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div className="">
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login
