import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { HiLink } from 'react-icons/hi2'
import { BsPerson, BsClock } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { dataProps } from '@/types/types'

export default function BlogPost({ data }: { data: dataProps }) {
  return (
    <main
      className={`transition-all duration-75 flex flex-col justify-center max-w-[100dvw] md:max-w-[70dvw] mx-auto mt-5`}
    >
      <div
        className={`text-center space-y-4 mb-5 ${mochain.variable} font-mochain`}
      >
        <p className="text-lg">The Writer | The Linguist | The Coder</p>
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
      <article className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10 md:gap-6 my-8 px-4">
        {data &&
          data.map((post) => (
            <React.Fragment key={post._id}>
              <Image
                width={500}
                height={500}
                src={`https://ox-blog-api.onrender.com/${post.image}`}
                alt={`${post.slug}'s picture`}
                className=" object-cover rounded-xl"
              />
              <div>
                <h1 className={`text-2xl ${mochain.variable} font-mochain`}>
                  {post.title}
                </h1>
                <div
                  className={`flex items-center gap-5 ${overusedGrotesk.variable} font-overusedGrotesk`}
                >
                  <h4 className="text-lg flex items-center gap-2 my-3">
                    <span>
                      <BsPerson />
                    </span>
                    {post.author && (
                      <span>
                        {post.author.firstName} {post.author.lastName}
                      </span>
                    )}
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
            </React.Fragment>
          ))}
      </article>
    </main>
  )
}
