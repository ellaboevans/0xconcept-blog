import React from 'react'
import { ParamsProps } from '@/types/types'
import GetSinglePost from '@/components/GetSinglePost'
import { slugProps } from '@/types/types'

import type { Metadata, ResolvingMetadata } from 'next'

const getSinglePost = async (slug: slugProps) => {
  const post = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store'
  })
  const singlePost = await post.json()
  return singlePost
}

export async function generateMetadata({
  params
}: ParamsProps): // parent: ResolvingMetadata
Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const post = await getSinglePost(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  return {
    title: `${post.title} | 0xConcept`,
    description: post.description,
    openGraph: {
      images: [`/${post.image}`]
    }
  }
}
export default async function SinglePost({ params }: ParamsProps) {
  const { slug } = params
  const post = await getSinglePost(slug)
  return (
    <>
      <GetSinglePost post={post} />
    </>
  )
}
