'use client'
import React, { useEffect } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import CreatePost from '@/components/CreatePost'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import image from '@/images/blog_image.jpg'
import Image from 'next/image'
import { MdDeleteForever } from 'react-icons/md'
import useSWR from 'swr'
import toast from 'react-hot-toast'
type Props = {}

interface PostData {
  // Define the structure of your post data here
  // For example:
  title: string
  summary: string
  tag: string
  image: string
  content: string
}

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function Dashboard({}: Props) {
  const session = useSession()

  const router = useRouter()

  const fetchUrl = session?.data?.user?.email
    ? `http://localhost:3000/api/posts?email=${session.data.user.email}`
    : ''

  const { data, mutate, error, isLoading } = useSWR(fetchUrl, fetcher)

  console.log(data)

  const handleDelete = async (slug: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        toast.error('Network response was not ok')
      } else {
        toast.success('Post deleted successfully')
        mutate()
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (session.status === 'loading') return <p>Loading...</p>

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <main className="w-[100dvw] md:w-[70dvw] mx-auto my-10 px-4 md:gap-6 flex flex-col-reverse md:flex-row justify-between">
        <div className="max-w-2xl md:max-w-[22rem] mx-auto md:mx-0 max-h-60 md:max-h-[30rem] overflow-y-auto">
          {/* Design blog post card for here */}
          {isLoading ? (
            <p>Loading...</p>
          ) : data?.length === 0 ? (
            <p>There is no posts for {session?.data?.user?.email}</p>
          ) : (
            data?.map((post: any) => (
              <div
                className="flex flex-col my-3 w-[20rem] pr-2 "
                key={post._id}
              >
                <div className="h-[12rem] bg-gray-100 relative">
                  <Image
                    src={image}
                    alt="blog image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex text-xl items-center justify-between gap-4 mt-3 ">
                  <h1
                    className={` font-semibold ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    {post.title}
                  </h1>
                  <span
                    className="text-3xl cursor-pointer"
                    onClick={() => handleDelete(post.slug)}
                  >
                    <MdDeleteForever />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        <CreatePost mutating={mutate} />
      </main>
    )
  }
}

export default Dashboard
