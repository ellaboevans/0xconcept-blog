import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import Experience from '@/components/Experience'
import Project from '@/components/Project'
import Tools from '@/components/Tools'
import BlogRoute from '@/components/BlogRoute'

const Home = () => {
  return (
    <main className="transition-all duration-75 flex flex-col w-[90dvw] md:w-[68dvw] mx-auto my-6">
      <div className="space-y-3">
        <h1 className={`text-5xl md:text-7xl ${mochain.variable} font-mochain`}>
          Evans Elabo
        </h1>
        <h5
          className={`text-xl md:text-2xl tracking-widest ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Software Engineer
        </h5>
      </div>

      <div className="my-6 ">
        <p
          className={`text-left text-base md:text-xl ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Aspiring Linguistics graduate at{' '}
          <span>
            <a
              href="https://www.knust.edu.gh/"
              target="_blank"
              className="underline
            "
            >
              Kwame Nkrumah University of Science and Technology
            </a>
          </span>{' '}
          with a strong passion for Computational Linguistics and also a
          Frontend Engineer at{' '}
          <span>
            <a
              href="https://slightlytechie.com"
              target="_blank"
              className="underline"
            >
              SlightlyTechie
            </a>
          </span>{' '}
          with experience in building and designing user-friendly web
          applications. I am always looking for opportunities to learn and grow.
          <br />
          <br />
          Feel Free to explore my work and{' '}
          <span>
            <a href="mailto:ellaboevans@gmail.com" className="underline">
              reach out
            </a>
          </span>{' '}
          to me if you&apos;re interested in working with me.
        </p>
        <br />
        <p
          className={`text-left text-base md:text-xl ${overusedGrotesk.variable} font-overusedGrotesk font-semibold`}
        >
          Fun Fact: &quot;Big money awaits in coding.&quot;
        </p>
      </div>
      {/* Blog Route */}
      <BlogRoute />
      {/* Experience */}
      <Experience title="Experiences" />
      {/* Project */}
      <Project title="Projects" />
      {/* Languages and Tools */}
      <Tools title="Languages & Tools" />
    </main>
  )
}

export default Home
