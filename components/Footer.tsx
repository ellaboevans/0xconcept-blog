import React from 'react'
import { year } from '@/utils/FooterDate'
import { overusedGrotesk } from '@/utils/Fonts'

export default function Footer() {
  return (
    <footer
      className={` py-5 flex flex-col my-20 items-center justify-center border-t ${overusedGrotesk.variable} font-overusedGrotesk text-base w-[100dvw] md:w-[70dvw] mx-auto`}
    >
      <h5 className="text-center ">
        Made with <span>❤️</span> by
        <span className="ml-2">
          <a href="https://linkedin.com/in/eelabo" className="underline">
            Evans Elabo
          </a>
          - Oxconcept 🇬🇭
        </span>
      </h5>
      <p>&copy; {year()} All Rights Reserved.</p>
    </footer>
  )
}
