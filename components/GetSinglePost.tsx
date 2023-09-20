'use client'
import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import blogImage from '@/images/blog_image.jpg'
import Image from 'next/image'
import { useThemeContext } from '@/hooks/useThemeContext'
import { postProps } from '@/types/types'

export default function GetSinglePost({ post }: { post: postProps }) {
  const { isDark } = useThemeContext()
  return (
    <div
      className={` ${
        isDark ? 'dark' : 'light'
      } transition-all duration-75 flex flex-col items-center padding-container`}
    >
      <article className="pb-24">
        <div className="w-[1100px] h-[500px]  mb-4 bg-slate-400 relative">
          <Image
            src={blogImage}
            alt="Testing"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent h-1/2 z-">
            <div className="flex flex-col px-6 items-start justify-center mt-5 h-full  text-white">
              <p
                className={`text-base font-bold mb-3 tracking-wider ${overusedGrotesk.variable} font-overusedGrotesk`}
              >
                <span>{post.author} </span> &bull;{' '}
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
                  <p className={`tag ${isDark ? '' : 'card-tag-dark'}`}>
                    Test Tag
                  </p>
                )}
              </div>
            </div>
            <h1
              className={`text-4xl font-semibold ${mochain.variable} font-mochain`}
            >
              {post.title}
            </h1>
          </div>
        </div>
        <div className="mt-24 leading-8 w-[1100px]">
          <p>{post.content}</p>
          <br />
        </div>
      </article>
    </div>
  )
}
