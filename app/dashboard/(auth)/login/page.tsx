'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

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
          <h1
            className={`${mochain.variable} font-mochain text-right text-2xl md:text-4xl`}
          >
            Login
          </h1>
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
            className="absolute top-12 right-5 z-10 cursor-pointer text-xl"
            onClick={() =>
              setType(`${type === 'password' ? 'text' : 'password'}`)
            }
          >
            {type === 'password' ? <BsEyeFill /> : <BsEyeSlashFill />}
          </h1>
        </div>
        <div
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk my-4`}
        >
          <button className="py-2 px-3 text-xl outline-none rounded-lg bg-[#111] hover:bg-[#1f1f1f] transition-all duration-100 font-semibold">
            Login
          </button>
        </div>
      </form>
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk my-4`}
      >
        <button
          onClick={() => signIn('google')}
          className="py-2 px-3 text-xl outline-none rounded-lg flex items-center gap-2 justify-center font-semibold bg-[#cecece] text-[#111] hover:bg-[#f0f0f0] transition-all duration-100"
        >
          <span>
            <FcGoogle className="text-3xl" />
          </span>
          <span>Login with Google</span>
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
