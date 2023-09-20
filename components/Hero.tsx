'use client'
import React from 'react'
import { useThemeContext } from '@/hooks/useThemeContext'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { HiLink } from 'react-icons/hi2'
import blogImage from '../images/blog_image.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { isDark } = useThemeContext()
  return (
    <main
      className={`${
        isDark ? 'dark' : ''
      } transition-all duration-75 flex flex-col items-center justify-center padding-container`}
    >
      <div
        className={`text-center space-y-4 mb-5 ${mochain.variable} font-mochain`}
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
        {
          <Link
            href="https://google.com"
            className="w-[995px h-[500px] mb-4 bg-slate-400 relative"
          >
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
                  <span>Evans Elabo </span> &bull; <span>19 Sep 2023</span>
                </p>
                <h1
                  className={`text-4xl font-semibold ${mochain.variable} font-mochain`}
                >
                  UX Review Presentations
                </h1>
                <h5
                  className={` text-xl ${overusedGrotesk.variable} font-overusedGrotesk`}
                >
                  The latest industry news, technologies, linguistic forums and
                  resources
                </h5>
                <div className="mt-3 flex items-center gap-5 ">
                  <p className="tag">Design</p>
                  <p className="tag">Research</p>
                  <p className="tag">Coding</p>
                </div>
              </div>
            </div>
          </Link>
        }
        <div className="grid grid-cols-3 mb-10 gap-5 place-items-center mt-6">
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <Link href="https://localhost" className="w-[350px]" key={index}>
              <Image
                src={blogImage}
                alt="Test"
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <p
                  className={`text-base flex items-center space-x-2 font-bold mb-3 tracking-wider ${overusedGrotesk.variable} font-overusedGrotesk`}
                >
                  <span>Evans Elabo </span>
                  <span> &bull; </span>
                  <span>19 Sep 2023</span>
                </p>
                <div className="flex items-center justify-between">
                  <h1
                    className={`text-2xl font-semibold ${mochain.variable} font-mochain`}
                  >
                    UX Review Presentations
                  </h1>
                  <HiLink />
                </div>
                <h5
                  className={` text-lg ${overusedGrotesk.variable} pr-[0.2rem] font-overusedGrotesk`}
                >
                  The latest industry news, technologies, linguistic forums and
                  resources
                </h5>
                <div className="mt-3 flex items-center gap-5 ">
                  <p className={`tag ${isDark ? '' : 'card-tag-dark'}`}>
                    Design
                  </p>
                  <p className={`tag ${isDark ? '' : 'card-tag-dark'}`}>
                    Research
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </main>
  )
}
