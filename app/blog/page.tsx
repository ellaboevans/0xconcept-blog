import BlogPost from '@/components/BlogPost'
import { dataProps } from '@/types/types'

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