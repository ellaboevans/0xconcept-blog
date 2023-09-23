'use client'
import React from 'react'
import { mochain } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'

import useAuthContext from '@/hooks/useAuthContext'

type Props = {}

function Dashboard({}: Props) {
  const { username } = useAuthContext()

  return (
    <main className="max-w-[80dvw] md:max-w-[70dvw] mx-auto my-10 flex flex-col items-center">
      <h4
        className={`${mochain.variable} capitalize font-mochain text-2xl mb-4`}
      >
        Hi, {username ? username : 'Writer'} &#128075;
      </h4>
      <h1 className={`${mochain.variable} font-mochain text-4xl font-bold`}>
        Publish New Posts
      </h1>
      <CreatePost />
    </main>
  )
}

export default Dashboard
