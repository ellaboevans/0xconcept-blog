import React from 'react'
import { mochain } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'

type Props = {}

function Dashboard({}: Props) {
  return (
    <main className="max-w-[80dvw] md:max-w-[70dvw] mx-auto my-10 flex flex-col items-center">
      <h4 className={`${mochain.variable} font-mochain text-2xl mb-4`}>
        Welcome, Evans &#128075;
      </h4>
      <h1 className={`${mochain.variable} font-mochain text-4xl font-bold`}>
        Create New Posts
      </h1>
      {/* Create New Post Fields */}
      <CreatePost />
    </main>
  )
}

export default Dashboard
