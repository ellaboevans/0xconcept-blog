'use client'
import React, { FormEvent, useState } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
type Props = {}

export default function Login({}: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const loginUser = async (e: FormEvent) => {
    e.preventDefault()

    let loginData = {
      username,
      password
    }

    const response = await fetch(
      'https://ox-blog-api.onrender.com/api/v1/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
        credentials: 'include'
      }
    )

    if (!username) {
      toast.error('Oops👎! Username is required')
      return
    }

    if (response.status !== 200) {
      toast.error('Oops👎! Something went wrong, please try again')
    } else {
      toast.success("Yayy🎉! You're logged in successfully")
      router.push('/dashboards')
    }
    setUsername('')
    setPassword('')
  }
  return (
    <main className="max-w-[80dvw] md:max-w-[70dvw] mx-auto my-10 flex flex-col items-center">
      <h4 className={`${mochain.variable} font-mochain text-2xl mb-4`}>
        Welcome Back 🎉;
      </h4>
      <h1 className={`${mochain.variable} font-mochain text-4xl font-bold`}>
        Login
      </h1>
      {/* Login User Fields */}
      <form
        className="flex flex-col items-center justify-center gap-5 mt-10"
        onSubmit={loginUser}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-black mt-10 w-full text-white font-semibold py-3 px-6 rounded-lg ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Login
        </button>
        <div
          className={`flex items-center justify-center gap-3 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <p>Don&apos;t have an account yet?</p>
          <Link href="/auth/register" className="underline">
            Register
          </Link>
        </div>
      </form>
    </main>
  )
}
