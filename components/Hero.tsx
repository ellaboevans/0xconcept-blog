'use client'
import React from 'react'
import { useThemeContext } from '@/hooks/useThemeContext'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { HiLink } from 'react-icons/hi2'
import blogImage from '../images/blog_image.jpg'
import Image from 'next/image'
import Link from 'next/link'

// const data = [
//   {
//     id: 1,
//     title: 'UX Review Presentations',
//     description:
//       'The latest industry news, technologies, linguistic forums and resources',
//     tags: ['Design', 'Research', 'Coding'],
//     img: blogImage,
//     slug: 'ux-review-presentations'
//   },
//   {
//     id: 2,
//     title: 'Linguistics and the Web',
//     description:
//       'The latest industry news, technologies, linguistic forums and resources',
//     tags: ['Design', 'Research', 'Coding'],
//     img: blogImage,
//     slug: 'linguistics-and-the-web'
//   },
//   {
//     id: 3,
//     title: 'Linguistics and the Web',
//     description:
//       'The latest industry news, technologies, linguistic forums and resources',
//     tags: ['Design', 'Research', 'Coding'],
//     img: blogImage,
//     slug: 'linguistics-and-the-web'
//   },
//   {
//     id: 4,
//     title: 'Linguistics and the Web',
//     description:
//       'The latest industry news, technologies, linguistic forums and resources',
//     tags: ['Design', 'Research', 'Coding'],
//     img: blogImage,
//     slug: 'linguistics-and-the-web'
//   },
//   {
//     id: 5,
//     title: 'Linguistics and the Web',
//     description:
//       'The latest industry news, technologies, linguistic forums and resources',
//     tags: ['Design', 'Research', 'Coding'],
//     img: blogImage,
//     slug: 'linguistics-and-the-web'
//   }
// ]
type dataProps = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  author: string
  createdAt: string
  tag: string
}
export default function Hero({ data }: any) {
  console.log(data)
  const { isDark } = useThemeContext()
  return (
    <main
      className={`${
        isDark ? 'dark' : ''
      } transition-all duration-75 flex flex-col items-center justify-center padding-container`}
    >
      <div
        className={`text-center space-y-4 mt-10 mb-5 ${mochain.variable} font-mochain`}
      >
        <p className="text-lg">The Writer | The Linguist | The Coder</p>
        <h1 className="text-5xl font-semibold">Writings from our team</h1>
        <h5
          className={`${overusedGrotesk.variable} font-overusedGrotesk text-xl tracking-normal`}
        >
          The latest industry news, technologies, linguistic forums and
          resources
        </h5>
      </div>
      <article className="flex flex-col items-center w-[90dvw]  overflow-x-hidden">
        <div className="grid grid-cols-3 mb-10 gap-5 place-items-center mt-6">
          {data &&
            data.map((item: dataProps) => (
              <Link href={`/${item.slug}`} className="w-[350px]" key={item._id}>
                <Image
                  src={blogImage}
                  alt="Test"
                  className="w-full h-60 object-cover"
                />
                <div className="p-3">
                  <p
                    className={`text-base flex items-center space-x-2 font-bold mb-3 tracking-wider ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    <span>{item.author}</span>
                    <span> &bull; </span>
                    <span>
                      {new Date(item.createdAt).toString().slice(4, 15)}
                    </span>
                  </p>
                  <div className="flex items-center justify-between">
                    <h1
                      className={`text-2xl font-semibold ${mochain.variable} font-mochain`}
                    >
                      {item.title}
                    </h1>
                    <HiLink />
                  </div>
                  <h5
                    className={` text-lg ${overusedGrotesk.variable} pr-[0.2rem] font-overusedGrotesk`}
                  >
                    {item.summary}
                  </h5>
                  <div className="mt-3 flex items-center gap-5 ">
                    {item.tag ? (
                      <p className={`tag ${isDark ? '' : 'card-tag-dark'}`}>
                        {item.tag}
                      </p>
                    ) : (
                      <p className={`tag ${isDark ? '' : 'card-tag-dark'}`}>
                        Test Tag
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </article>
    </main>
  )
}
