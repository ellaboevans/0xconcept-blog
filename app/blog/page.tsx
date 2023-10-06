import { Metadata } from 'next'
import { dataProps } from '@/types/types'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: '0xConcept | Blog',
  description:
    'A blog about my journey as a Software Engineer and my experiences as a Linguistics student as well other kinds of stories to authored by myself and many others.'
}

const getPosts = async () => {
  const res = await fetch('https://ox-blog-api.onrender.com/api/v1/posts', {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts
}

export default async function Post() {
  const output: dataProps = await getPosts()
  return (
    <div>
      <BlogPost data={output} />
    </div>
  )
}
