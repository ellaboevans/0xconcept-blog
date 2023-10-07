'use client'
import React, { useEffect } from 'react'
import { mochain } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

type Props = {}

function Dashboard({}: Props) {
  const session = useSession()

  const router = useRouter()

  if (session.status === 'loading') return <p>Loading...</p>

  if (session.status === 'unauthenticated') {
    router.replace('/dashboard/login')
  }

  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <main className="max-w-[100dvw] md:max-w-[70dvw] mx-auto my-10 px-4 flex flex-col">
        <CreatePost />
      </main>
    )
  }
}

export default Dashboard
