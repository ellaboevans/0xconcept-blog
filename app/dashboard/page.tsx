'use client'
import React, { useEffect } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import image from '@/images/blog_image.jpg'
import Image from 'next/image'
import { MdDeleteForever } from 'react-icons/md'

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
      <main className="max-w-[100dvw] md:max-w-[70dvw] mx-auto my-10 px-4 md:gap-6 flex flex-col-reverse md:flex-row justify-between">
        <div className="max-w-2xl md:max-w-[22rem] mx-auto md:mx-0 max-h-60 md:max-h-[30rem] overflow-y-auto">
          {/* Design blog post card for here */}
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div className="flex flex-col my-3" key={i}>
              <div className="h-[12rem] w-full bg-gray-100 relative">
                <Image
                  src={image}
                  alt="blog image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex text-xl items-center justify-between gap-4 mt-3">
                <h1
                  className={` font-semibold ${overusedGrotesk.variable} font-overusedGrotesk`}
                >
                  Publish New Post &rarr; wai na we have missed you wai
                </h1>
                <span
                  className="text-3xl cursor-pointer"
                  onClick={() => console.log('post deleted!')}
                >
                  <MdDeleteForever />
                </span>
              </div>
            </div>
          ))}
        </div>
        <CreatePost />
      </main>
    )
  }
}

export default Dashboard
