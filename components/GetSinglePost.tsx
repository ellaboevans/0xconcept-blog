import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { BsPerson, BsClock, BsArrowLeftCircle } from 'react-icons/bs'
import Image from 'next/image'
import { postProps } from '@/types/types'
import Link from 'next/link'

export default function GetSinglePost({ post }: { post: postProps }) {
  return (
    <div
      className={` transition-all duration-75 flex flex-col w-[100dvw] md:w-[70dvw] mx-auto`}
    >
      <article className="mt-10 px-4 md:px-0">
        <Link href="/blog" className="text-2xl">
          <BsArrowLeftCircle />
        </Link>
        <h1
          className={`text-3xl md:text-4xl mt-6 mb-3 font-semibold ${mochain.variable} font-mochain`}
        >
          {post.title}
        </h1>
        <div
          className={`flex items-center justify-between gap-5 border-b-2 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <h4 className="text-lg flex items-center gap-2 my-2">
            <span>
              <BsPerson />
            </span>
            <a
              href={`mailto:${post.email && post.email}`}
              className={`${post.email && 'text-[#fd6b6b]'} cursor-pointer`}
            >
              Writer 👨‍🎨
            </a>
          </h4>
          <p className="text-lg gap-2 flex items-center">
            <span>
              {' '}
              <BsClock />
            </span>{' '}
            <span>{new Date(post.createdAt).toString().slice(4, 15)}</span>
          </p>
        </div>
        {/* <div className="w-[90dvw] md:w-[70dvw] mx-auto mt-6 mb-4 bg-slate-400 rounded-xl">
          <Image
            src={`${post.image}`}
            alt="Testing"
            className="w-full h-full object-cover rounded-xl"
            width={1000}
            height={500}
            quality={90}
          />
        </div> */}
        <div className="mt-5 leading-8 tracking-normal text-left">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-lg"
          />
          <br />
        </div>
      </article>
    </div>
  )
}
