import React from 'react'
import { Metadata } from 'next'
import { dataProps } from '@/types/types'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { HiLink } from 'react-icons/hi2'
import { BsPerson, BsClock } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import ReadingTime from '@/components/ReadingTime'

export const metadata: Metadata = {
  title: '0xConcept | Blog',
  description:
    'A blog about my journey as a Software Engineer and my experiences as a Linguistics student as well other kinds of stories to authored by myself and many others.'
}

const getPosts = async () => {
  try {
    const res = await fetch('https://oxconcept.vercel.app/api/posts', {
      cache: 'no-store'
    })
    const posts = await res.json()
    return posts
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}

export default async function Post() {
  const output: dataProps = await getPosts()
  let stats
  console.log(output)
  return (
    <div>
      <main
        className={`transition-all duration-75 flex flex-col justify-center max-w-[100dvw] md:max-w-[70dvw] mx-auto mt-5`}
      >
        <div
          className={`text-center space-y-4 mb-5 ${mochain.variable} font-mochain`}
        >
          <p className="text-lg">The Mentor | The Linguist | The Coder</p>
          <h1 className="leading-[3.2rem] md:leading-none text-3xl md:text-5xl">
            Writings from our team
          </h1>
          <h5
            className={`${overusedGrotesk.variable} font-overusedGrotesk text-xl tracking-normal`}
          >
            The latest industry news, technologies, linguistic forums and
            resources.
          </h5>
        </div>
        <article className="w-full flex flex-col gap-10 md:gap-10 my-8 px-4">
          {output?.length < 1 ? (
            <h1>There&apos;s no posts at the moment</h1>
          ) : (
            output?.map((post) => (
              <div
                key={post._id}
                className="even:bg-[rgb(29,29,29)] px-5 py-4 transition-all duration-100 border-l-[10px] border-l-white even:border-l-[#fd6b6b]"
              >
                {/* <Image
                  width={500}
                  height={500}
                  src={`${post.image}`}
                  alt={`${post.slug}'s picture`}
                  className=" object-cover rounded-xl"
                /> */}
                <div>
                  <h1 className={`text-2xl ${mochain.variable} font-mochain`}>
                    {post.title}
                  </h1>
                  <div
                    className={`flex items-center justify-between gap-5 ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    <h4 className="text-lg flex items-center gap-2 my-3">
                      <span>
                        <BsPerson />
                      </span>
                      <a
                        href={`mailto:${post.email && post.email}`}
                        className={`${
                          post.email && 'text-[#fd6b6b]'
                        } cursor-pointer`}
                      >
                        Writer 👨‍🎨
                      </a>
                    </h4>
                    <p className="text-lg gap-2 flex items-center">
                      <span>
                        {' '}
                        <BsClock />
                      </span>{' '}
                      <span>
                        {new Date(post.createdAt).toString().slice(4, 15)}
                      </span>
                    </p>
                  </div>
                  <ReadingTime text={post.content} />
                  <p
                    className={`text-lg ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    {post.summary}
                  </p>
                  <div
                    className={`flex items-center justify-between mt-4 ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-lg "
                    >
                      <span>Read More</span>
                      <span>
                        <HiLink />
                      </span>
                    </Link>
                    <span className="text-lg mr-4 tag">{post.tag}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </article>
      </main>
    </div>
  )
}
