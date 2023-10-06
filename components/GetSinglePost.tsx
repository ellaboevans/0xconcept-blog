import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { BsPerson, BsClock, BsArrowLeftCircle } from 'react-icons/bs'
import Image from 'next/image'
import { postProps } from '@/types/types'
import Link from 'next/link'

export default function GetSinglePost({ post }: { post: postProps }) {
  return (
    <div
      className={` transition-all duration-75 flex flex-col items-center max-w-[100dvw] md:max-w-[70dvw] mx-auto`}
    >
      <article className="mt-10">
        <Link href="/blog" className="text-2xl">
          <BsArrowLeftCircle />
        </Link>
        <h1
          className={`text-4xl mt-6 font-semibold ${mochain.variable} font-mochain`}
        >
          {post.title}
        </h1>
        <div
          className={`flex items-center justify-between gap-5 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <h4 className="text-lg flex items-center gap-2 my-2">
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
            <span>{new Date(post.createdAt).toString().slice(4, 15)}</span>
          </p>
        </div>
        <div className="w-[90dvw] md:w-[70dvw] mx-auto mt-6 mb-4 bg-slate-400 rounded-xl">
          <Image
            src={`https://ox-blog-api.onrender.com/${post.image}`}
            alt="Testing"
            className="w-full h-full object-cover rounded-xl"
            width={1000}
            height={500}
            quality={90}
          />
        </div>
        <div className="mt-5 leading-8 tracking-normal text-left">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <br />
        </div>
      </article>
    </div>
  )
}
