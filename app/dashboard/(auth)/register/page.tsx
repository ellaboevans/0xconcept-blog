'use client'
import React, { FormEvent, useState } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
type Props = {}

export default function Register({}: Props) {
  const [type, setType] = useState('password')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const data = {
      username,
      email,
      password
    }

    if (data.password !== confirmPassword) {
      toast.error('Password does not match')
      return
    }

    try {
      const res = await fetch(
        'https://oxconcept.vercel.app/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      if (res.status === 400) {
        toast.error('Email already exists')
        return
      }
      if (res.ok) {
        toast.success('Account created successfully')
        router.push('/dashboard/login')
        return
      }
    } catch (error) {
      toast.error('Something went wrong')
    }

    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="max-w-[100dvw] md:max-[70dvw] mx-auto my-10 px-4">
      <form onSubmit={handleSubmit}>
        <div
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <label htmlFor="username" className="text-xl font-bold mb-2">
            Username
          </label>
          <input
            required
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
          />
        </div>
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
          className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk relative`}
        >
          <label htmlFor="confirm_password" className="text-xl font-bold mb-2">
            Confrim Password
          </label>
          <input
            required
            type={type}
            id="confirm_password"
            name="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm_password"
            className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
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
            Register
          </button>
        </div>
        <div className="max-w-[100dvw] md:max-w-[45dvw] mx-auto">
          <Link
            href="/dashboard/login"
            className={`${overusedGrotesk.variable} font-overusedGrotesk text-lg`}
          >
            Already have an account?{' '}
            <span className="underline font-semibold">Login</span>
          </Link>
        </div>
      </form>
    </div>
  )
}
