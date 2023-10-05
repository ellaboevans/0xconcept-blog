import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { BsLink45Deg } from 'react-icons/bs'
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
const experience = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'SlightlyTechie',
    url: 'https://slightlytechie.com/',
    date: 'August, 2023 - Present',
    description:
      "Collaborated with cross-functional teams to develop user-centric educational apps, seamlessly integrating payment systems like Paystack. My expertise spans frontend technologies like ReactJS and Tailwind CSS, and I've created dynamic progress tracking systems. I've also improved user experiences through automated certificate generation. Join me on my journey!"
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'Freelance',
    date: 'June, 2023 - August, 2023',
    description:
      'collaborated closely with a Frontend Engineer to create a website and electronic library platform, benefiting over 500 students. I seamlessly integrated SanityCMS with the frontend, ensuring efficient data management. Additionally, I designed API endpoints using GROQ queries for streamlined data retrieval. My contributions extended to frontend enhancements with ReactJS and Styled Components, enhancing user experience and interface design.'
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'FixedByte',
    url: 'https://fixedbyte.com',
    date: 'January, 2023 - February, 2023',
    description:
      'Assisted senior software developers in conducting workshops with class sizes averaging 30+ participants. My role involved providing mentorship and guidance to beginners, ensuring their understanding and progress in a supportive environment. I created a beginner-friendly atmosphere tailored to the diverse needs of learners. Responsively addressing questions and concerns, I fostered inclusivity and support. Throughout the journey, I offered consistent assistance to over 30 learners, promoting their growth and confidence.'
  }
]

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
    url: 'https://cheesa-knust.vercel.app/',
    description:
      "The Personal Blog API is a RESTful API that allows users to create, read, update, and delete blog posts. It's built with NodeJS, ExpressJS, and MongoDB."
  }
]

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

const Home = () => {
  return (
    <main className="transition-all duration-75 flex flex-col max-w-[80dvw] md:max-w[70dvw] mx-auto my-6">
      <div className="space-y-3">
        <h1 className={`text-5xl md:text-3xl ${mochain.variable} font-mochain`}>
          Evans Elabo
        </h1>
        <h5
          className={`text-xl md:text-4xl tracking-widest ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Frontend Engineer
        </h5>
      </div>

      <div className="my-6 ">
        <p
          className={`text-left text-base md:text-xl ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          Aspiring Linguistics graduate at Kwame Nkrumah University of Science
          and Technology with a strong passion for Computational Linguistics and
          a frontend engineer at{' '}
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
          Feel Free to explore my work and reach out to me if you&apos;re
          interested in working with me.
        </p>
      </div>
      <h1
        className={`mt-7 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        Experience
      </h1>
      {experience.map((item) => (
        <>
          <div className="my-6 space-y-2" key={item.id}>
            <h5
              className={`text-lg md:text-4xl ${overusedGrotesk.variable} font-overusedGrotesk flex items-center`}
            >
              <span className="text-4xl mr-2">&bull;</span> {item.title} -{' '}
              <span>
                <a href={item.url} className={`${item.url ? 'underline' : ''}`}>
                  {item.company}
                </a>
              </span>
            </h5>
            <h6>{item.date}</h6>
          </div>
          <div className="mb-5">
            <p
              className={`text-left text-base md:text-xl ${overusedGrotesk.variable} font-overusedGrotesk`}
            >
              {item.description}
            </p>
          </div>
        </>
      ))}
      <h1
        className={`mt-7 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        Projects
      </h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`mt-6 space-y-2 ${overusedGrotesk.variable} font-overusedGrotesk`}
        >
          <a
            href={project.url}
            className={`text-lg md:text-4xl flex items-center`}
          >
            <span className="text-4xl mr-2">&bull;</span>{' '}
            <span> {project.title} </span>{' '}
            <span>
              {' '}
              <BsLink45Deg className="text-[#7c7c7c]" />{' '}
            </span>
          </a>
          <p className="text-base text-left">{project.description}</p>
        </div>
      ))}
      <h1
        className={`mt-7 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        Languages & Tools
      </h1>
      <Marquee gradient={false} speed={90} pauseOnClick={true}>
        {languages.map((language) => (
          <div
            className="flex flex-col ml-5 my-6 items-center"
            key={language.id}
          >
            <Image src={language.img} alt={language.title} width={70} />
            <h4>{language.title}</h4>
          </div>
        ))}
      </Marquee>
    </main>
  )
}

export default Home
