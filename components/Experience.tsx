import React from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
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
      'Collaborated closely with a Frontend Engineer to create a website and electronic library platform, benefiting over 500 students. I seamlessly integrated SanityCMS with the frontend, ensuring efficient data management. Additionally, I designed API endpoints using GROQ queries for streamlined data retrieval. My contributions extended to frontend enhancements with ReactJS and Styled Components, enhancing user experience and interface design.'
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

const Experience = ({ title }: { title: string }) => {
  return (
    <React.Fragment>
      <h1
        className={`mt-7 text-4xl md:text-3xl ${mochain.variable} font-mochain`}
      >
        {title}
      </h1>
      {experience.map((item) => (
        <div key={item.id}>
          <div className="my-6 space-y-2">
            <h5
              className={`text-lg md:text-2xl ${overusedGrotesk.variable} font-overusedGrotesk flex items-center`}
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
        </div>
      ))}
    </React.Fragment>
  )
}

export default Experience
