// 'use client'
import React from 'react'
import { ParamsProps } from '@/types/types'
// import { useThemeContext } from '@/hooks/useThemeContext'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import blogImage from '@/images/blog_image.jpg'
import Image from 'next/image'

export default async function SinglePost({ params }: ParamsProps) {
  const { slug } = params
  const getSinglePost = async () => {
    const post = await fetch(`http://localhost:3500/api/v1/posts/${slug}`, {
      cache: 'no-store'
    })
    const singlePost = await post.json()
    return singlePost
  }
  const post = await getSinglePost()
  // const { isDark } = useThemeContext()
  return (
    <div
      className={`transition-all duration-75 flex flex-col items-center padding-container`}
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
                {post.tag ? <p className="tag">{post.tag}</p> : ''}
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eveniet distinctio ex culpa modi perferendis quod dolore rerum
            mollitia tenetur ipsa optio, accusantium iusto facilis blanditiis
            voluptas! Harum unde magnam maxime repudiandae qui. Impedit, harum
            quas fuga commodi qui magnam illo blanditiis suscipit? Eligendi sint
            eveniet distinctio illo labore similique dignissimos earum in dicta,
            obcaecati neque placeat reiciendis voluptates architecto doloribus
            fugit. Quod dignissimos sapiente aliquam molestiae quam
            exercitationem praesentium, cupiditate, ducimus animi accusamus illo
            iusto veniam tempora quos perspiciatis nostrum quidem a dolorem,
            nulla aut officiis recusandae quis. Vel, omnis. Numquam excepturi
            vel earum nesciunt eaque porro ducimus a.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eveniet distinctio ex culpa modi perferendis quod dolore rerum
            mollitia tenetur ipsa optio, accusantium iusto facilis blanditiis
            voluptas! Harum unde magnam maxime repudiandae qui. Impedit, harum
            quas fuga commodi qui magnam illo blanditiis suscipit? Eligendi sint
            eveniet distinctio illo labore similique dignissimos earum in dicta,
            obcaecati neque placeat reiciendis voluptates architecto doloribus
            fugit. Quod dignissimos sapiente aliquam molestiae quam
            exercitationem praesentium, cupiditate, ducimus animi accusamus illo
            iusto veniam tempora quos perspiciatis nostrum quidem a dolorem,
            nulla aut officiis recusandae quis. Vel, omnis. Numquam excepturi
            vel earum nesciunt eaque porro ducimus a.
          </p>
        </div>
      </article>
    </div>
  )
}
