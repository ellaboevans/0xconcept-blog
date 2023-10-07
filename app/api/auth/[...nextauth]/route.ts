import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connect from '@/utils/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        connect()

        try {
          const user = await User.findOne({ email: credentials?.email })

          if (user) {
            //checkPassword
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password!,
              user.password
            )

            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Incorrect password')
            }
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message)
          } else {
            throw new Error('An unknown error occurred')
          }
        }
      }
    })
  ],
  pages: {
    error: '/dashboard/login'
  }
})

export { handler as GET, handler as POST }
