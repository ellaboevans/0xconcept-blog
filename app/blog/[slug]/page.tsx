import React from 'react'
import { ParamsProps } from '@/types/types'
import GetSinglePost from '@/components/GetSinglePost'
import { slugProps } from '@/types/types'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params
}: ParamsProps): // parent: ResolvingMetadata
Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const post = await fetch(
    `https://ox-blog-api.onrender.com/api/v1/posts/${slug}`
  ).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  return {
    title: `0xConcept | ${post.title}`,
    description: post.description,
    openGraph: {
      images: [`/${post.image}`]
    }
  }
}

const getSinglePost = async (slug: slugProps) => {
  const post = await fetch(
    `https://ox-blog-api.onrender.com/api/v1/posts/${slug}`,
    {
      cache: 'no-store'
    }
  )
  const singlePost = await post.json()
  return singlePost
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
