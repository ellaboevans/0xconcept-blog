import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post'
import { ParamsProps } from '@/types/types'

export const GET = async (request: any, { params }: ParamsProps) => {
  const { slug } = params

  try {
    connect()

    const posts = await Post.findOne({ slug })
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const PUT = async (request: any, { params }: ParamsProps) => {
  const { slug } = params
  const body = await request.json()

  try {
    connect()

    await Post.updateOne({ slug }, { $set: body }, { new: true })

    return new NextResponse('Post Updated Successfully', { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const DELETE = async (request: any, { params }: ParamsProps) => {
  const { slug } = params

  try {
    connect()

    const posts = await Post.findOne({ slug })

    await posts.deleteOne()

    return new NextResponse('Post Deleted Successfully', { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
