import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post'
// import multer from 'multer'

export const GET = async (request: any) => {
  const url = new URL(request.url)

  const email: string | null = url.searchParams.get('email')

  try {
    connect()

    const filter = email ? { email } : {}

    const posts = await Post.find(filter).sort({ createdAt: -1 })

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// // Set up multer storage engine
// const multerStorage = multer.diskStorage({
//   destination: (request, file, callback) => {
//     callback(null, 'public/uploads')
//   },
//   filename: (request, file, callback) => {
//     const extension = file.mimetype.split('/')[1]
//     callback(null, `/post-${file.fieldname}-${Date.now()}.${extension}`)
//   }
// })

// // Set up multer upload middleware
// const upload = multer({ storage: multerStorage })

export const POST = async (request: any) => {
  const body = await request.json()

  try {
    connect()

    const post = await new Post(body)

    await post.save()

    return new NextResponse('Post has been created', { status: 201 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
