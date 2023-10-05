import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import nodejs from '/public/nodejs-svgrepo-com.svg'
import javascript from '/public/javascript-svgrepo-com.svg'
import typescript from '/public/typescript-svgrepo-com.svg'
import express from '/public/express-svgrepo-com.svg'
import nextjs from '/public/nextjs-svgrepo-com.svg'
import reactjs from '/public/reactjs-svgrepo-com.svg'
import tailwindcss from '/public/tailwindcss-icon-svgrepo-com.svg'
import sanity from '/public/sanity-svgrepo-com.svg'
import html from '/public/html-svgrepo-com.svg'
import css from '/public/css-3-svgrepo-com.svg'

const languages = [
  {
    id: 1,
    title: 'Node Js',
    img: nodejs
  },
  {
    id: 2,
    title: 'TypeScript',
    img: typescript
  },
  {
    id: 3,
    title: 'JavaScript',
    img: javascript
  },
  {
    id: 4,
    title: 'Express',
    img: express
  },
  {
    id: 5,
    title: 'NextJs',
    img: nextjs
  },
  {
    id: 6,
    title: 'ReactJS',
    img: reactjs
  },
  {
    id: 7,
    title: 'HTML',
    img: html
  },
  {
    id: 8,
    title: 'CSS',
    img: css
  },
  {
    id: 9,
    title: 'TailwindCSS',
    img: tailwindcss
  },
  {
    id: 10,
    title: 'SanityCMS',
    img: sanity
  }
]

const Tools = ({ title }: { title: string }) => {
  return (
    <React.Fragment>
      <h1
        className={`mt-12 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        {title}
      </h1>
      <Marquee gradient={false} speed={80} pauseOnClick={true}>
        {languages.map((language) => (
          <div
            className="flex flex-col ml-5 my-6 items-center"
            key={language.id}
          >
            <Image src={language.img} alt={language.title} width={70} />
            <h4 className={`text-base md:text-lg ${overusedGrotesk.variable} font-overusedGrotesk`}>
              {language.title}
            </h4>
          </div>
        ))}
      </Marquee>
    </React.Fragment>
  )
}

export default Tools
