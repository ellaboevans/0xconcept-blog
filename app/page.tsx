import Hero from '@/components/Hero'

const getPosts = async () => {
  const res = await fetch('http://localhost:3500/api/v1/posts', {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts
}

type dataProps = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  createdAt: string
}[]

export default async function Home() {
  const output: dataProps = await getPosts()
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Hero data={output} />
    </div>
  )
}
