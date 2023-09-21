import Hero from '@/components/Hero'
import { dataProps } from '@/types/types'

const getPosts = async () => {
  const res = await fetch('http://localhost:3500/api/v1/posts', {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts
}

export default async function Home() {
  const output: dataProps = await getPosts()
  return (
    <div>
      <Hero data={output} />
    </div>
  )
}
