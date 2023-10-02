import React from 'react'
import { ParamsProps } from '@/types/types'
import GetSinglePost from '@/components/GetSinglePost'
import { slugProps } from '@/types/types'

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
