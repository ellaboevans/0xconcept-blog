import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

type ErrorProps = string

export const POST = async (request: any) => {
  const { username, email, password } = await request.json()

  connect()

  const SALT_FACTOR = 10

  const hashedPassword = await bcrypt.hash(password, SALT_FACTOR)

  const newUser = await new User({
    username,
    email,
    password: hashedPassword
  })
  try {
    await newUser.save()
    return new NextResponse('User created', { status: 201 })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
