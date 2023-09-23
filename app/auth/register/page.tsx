'use client'
import React, { FormEvent, useState } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
type Props = {}

export default function Register({}: Props) {
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const registerUser = async (e: FormEvent) => {
    e.preventDefault()

    const userData = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    }

    //Checking for passwords length
    if (password.length < 8) {
      toast.error('Oops👎! Password must be at least 8 characters')
      return
    }

    //Checking for Password Match
    if (password !== confirmPassword) {
      toast.error('Oops👎! Passwords do not match')
      return
    }
    //Sending Registration Data
    const response = await fetch(
      'http:///localhost:3500/api/v1/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    )

    if (response.status !== 201) {
      toast.error('Oops👎! Something went wrong, please try again')
    } else {
      toast.success('Yayy🎉! You have successfully registered for an account')
      router.push('/auth/login')
    }
    setfirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <main className="max-w-[80dvw] md:max-w-[70dvw] mx-auto my-10 flex flex-col items-center">
      <h4 className={`${mochain.variable} font-mochain text-2xl mb-4`}>
        We are happy to have you 🎉;
      </h4>
      <h1
        className={`${mochain.variable} font-mochain text-4xl text-center font-bold`}
      >
        Register to have an account
      </h1>
      {/* Register User Fields */}
      <form
        className="flex flex-col items-center justify-center gap-5 mt-10"
        onSubmit={registerUser}
      >
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="input-field"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="input-field"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-black mt-10 w-full text-white font-semibold py-3 px-6 rounded-lg ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Register
        </button>
        <div
          className={`flex items-center justify-center gap-3 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <p>Already have an account with us?</p>
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </div>
      </form>
    </main>
  )
}
