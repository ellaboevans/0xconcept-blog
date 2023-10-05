import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { BsLink45Deg } from 'react-icons/bs'
const projects = [
  {
    id: 1,
    title: 'CHEESA-KNUST',
    url: 'https://cheesa.vercel.app/',
    description:
      "Official webiste for the Chemical Engineering Students' Association, Kwame Nkrumah University & Technology."
  },
  {
    id: 2,
    title: 'Chemical Engineering E-Library',
    url: 'https://cheesa.netlify.app/',
    description:
      'The Chemical Engineering E-Library is a digital platform that provides students with access to a wide range of resources to aid their learning. These resources include textbooks, articles, and other useful materials'
  },
  {
    id: 3,
    title: 'Personal Blog API',
    url: 'https://github.com/ellaboevans/personal-blog-api',
    description:
      "The Personal Blog API is a RESTful API that allows users to create, read, update, and delete blog posts. It's built with NodeJS, ExpressJS, and MongoDB."
  }
]

const Project = ({ title }: { title: string }) => {
  return (
    <React.Fragment>
      <h1
        className={`mt-7 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        {title}
      </h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`mt-6 space-y-2 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <a
            href={project.url}
            className={`text-lg md:text-2xl flex items-center `}
          >
            <span className="text-4xl mr-2">&bull;</span>{' '}
            <span className="transition-all duration-100 hover:underline">
              {' '}
              {project.title}{' '}
            </span>{' '}
            <span>
              {' '}
              <BsLink45Deg className="text-[#7c7c7c]" />{' '}
            </span>
          </a>
          <p className="text-base md:text-xl text-left">
            {project.description}
          </p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Project
