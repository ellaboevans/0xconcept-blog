import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { HiLink } from 'react-icons/hi2'
import Image from 'next/image'
import Link from 'next/link'
import { dataProps } from '@/types/types'

export default function BlogPost({ data }: { data: dataProps }) {
  return (
    <main
      className={`transition-all duration-75 flex flex-col items-center justify-center max-w-[80dvw] md:max-w[70dvw] mx-auto mt-5`}
    >
      <div
        className={`text-center space-y-4 mb-5 ${mochain.variable} font-mochain`}
      >
        <p className="text-lg">The Writer | The Linguist | The Coder</p>
        <h1 className="leading-[3.2rem] md:leading-none text-5xl font-semibold">
          Writings from our team
        </h1>
        <h5
          className={`${overusedGrotesk.variable} font-overusedGrotesk text-xl tracking-normal`}
        >
          The latest industry news, technologies, linguistic forums and
          resources.
        </h5>
      </div>
      <article className="flex flex-col items-center w-full md:max-w-[90dvw] overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-5 place-items-center mt-6 ">
          {data &&
            data.map((item) => (
              <Link
                href={`/${item.slug}`}
                className="md:w-[305px] md:h-[453px] relative"
                key={item._id}
              >
                <Image
                  src={`https://ox-blog-api.onrender.com/${item.image}`}
                  alt="Test"
                  className="w-full h-60 object-cover hover:grayscale transition duration-75"
                  width={305}
                  height={453}
                  quality={90}
                />
                <div className="p-3">
                  <p
                    className={`text-base flex items-center space-x-2 font-bold mb-3 tracking-wider ${overusedGrotesk.variable} font-overusedGrotesk`}
                  >
                    {item.author && (
                      <span>
                        {' '}
                        {item.author.firstName} {item.author.lastName}
                      </span>
                    )}

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
                      <p className={`tag`}>{item.tag}</p>
                    ) : (
                      <p className={`tag`}>Test Tag</p>
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
