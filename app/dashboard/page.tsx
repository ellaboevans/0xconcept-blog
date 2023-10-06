'use client'
import React from 'react'
import { mochain } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'

import { useSession } from 'next-auth/react'

type Props = {}

function Dashboard({}: Props) {
  const session = useSession()
  console.log(session)
  return (
    <main className="max-w-[80dvw] md:max-w-[70dvw] mx-auto my-10 flex flex-col items-center">
      <CreatePost />
    </main>
  )
}

export default Dashboard
