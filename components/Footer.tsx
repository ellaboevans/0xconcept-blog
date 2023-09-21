import React from 'react'
import { year } from '@/utils/FooterDate'
import { overusedGrotesk } from '@/utils/Fonts'

export default function Footer() {
  return (
    <footer
      className={` py-5 flex flex-col items-center justify-center border-t ${overusedGrotesk.variable} font-overusedGrotesk text-lg`}
    >
      <h1 className="text-center ">
        Made with <span className="text-xl">&#9829;</span> by
        <span className="ml-2">
          <a href="https://github.com/ellaboevans" className="underline">
            Evans Elabo
          </a>{' '}
          - Oxconcept
        </span>
      </h1>
      <p>&copy;{year()} All Rights Reserved.</p>
    </footer>
  )
}
