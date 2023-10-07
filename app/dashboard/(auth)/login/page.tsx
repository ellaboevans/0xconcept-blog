'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { overusedGrotesk } from '@/utils/Fonts'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const session = useSession()

  const [type, setType] = useState('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const data = {
      email,
      password
    }

    signIn('credentials', data, {
      redirect: 'true'
    }).then((res) => {
      if (res?.error) {
        toast.error('Something went wrong')
        return
      }
      toast.success('Logged in successfully')
    })
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [session.status, router])

  return (
    <div className="max-w-[100dvw] md:max-[70dvw] mx-auto my-16 md:my-10 px-4">
      <form onSubmit={handleSubmit}>
        <div
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <label htmlFor="email" className="text-xl font-bold mb-2">
            Email Address
          </label>
          <input
            autoComplete="false"
            required
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
          />
        </div>
        <div
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk relative`}
        >
          <label htmlFor="password" className="text-xl font-bold mb-2">
            Password
          </label>
          <input
            required
            type={type}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4 "
          />
          <h1
            className="absolute top-12 right-5 z-10 cursor-pointer"
            onClick={() =>
              setType(`${type === 'password' ? 'text' : 'password'}`)
            }
          >
            {type === 'password' ? 'Show' : 'Hide'}
          </h1>
        </div>
        <div
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk my-4`}
        >
          <button className="py-2 px-3 text-xl outline-none rounded-lg bg-[#111] hover:bg-[#1f1f1f] hover:border transition-all duration-100">
            Login
          </button>
        </div>
      </form>
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk my-4`}
      >
        <button
          onClick={() => signIn('google')}
          className="py-2 px-3 text-xl outline-none rounded-lg bg-[#111] hover:bg-[#1f1f1f] hover:border transition-all duration-100"
        >
          Login with Google
        </button>
      </div>
      <div className="max-w-[100dvw] md:max-w-[45dvw] mx-auto">
        <Link
          href="/dashboard/register"
          className={`${overusedGrotesk.variable} font-overusedGrotesk text-lg`}
        >
          Don&apos;t have an account yet?{' '}
          <span className="underline font-semibold">Register</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
