import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import blogImage from '@/images/blog_image.jpg'
import Image from 'next/image'
import { postProps } from '@/types/types'

export default function GetSinglePost({ post }: { post: postProps }) {
  return (
    <div
      className={` transition-all duration-75 flex flex-col items-center max-w-[80dvw] md:max-w-[70dvw] mx-auto`}
    >
      <article>
        <div className="w-[80dvw] md:w-[70dvw] mx-auto mt-10 mb-4 bg-slate-400">
          <Image
            src={blogImage}
            alt="Testing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center my-5  text-white">
          <p
            className={`text-base font-bold mb-3 tracking-wider ${overusedGrotesk.variable} font-overusedGrotesk`}
          >
            <span>{post.author}</span> <span> &bull; </span>
            <span>{new Date(post.createdAt).toString().slice(4, 15)}</span>
          </p>
          <h5
            className={` text-xl ${overusedGrotesk.variable} font-overusedGrotesk`}
          >
            {post.summary}
          </h5>
          <div className="mt-3 flex items-center gap-5 ">
            {post.tag ? (
              <p className="tag">{post.tag}</p>
            ) : (
              <p className={`tag`}>Test Tag</p>
            )}
          </div>
        </div>
        <h1
          className={`text-4xl mt-10 font-semibold ${mochain.variable} font-mochain`}
        >
          {post.title}
        </h1>
        <div className="mt-5 leading-8 tracking-normal text-left">
          <p>{post.content}</p>
          <br />
        </div>
      </article>
    </div>
  )
}
