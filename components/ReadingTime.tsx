import { overusedGrotesk } from '@/utils/Fonts'
import React from 'react'

// Reading time estimation module
const readingTime = require('reading-time')

const ReadingTime = ({ text }: { text: string }) => {
  const stats = readingTime(text)
  return (
    <span
      className={`text-lg ${overusedGrotesk.variable} font-overusedGrotesk`}
    >
      {stats.text}
    </span>
  )
}

export default ReadingTime
