'use client'
import React, { FormEvent, useRef, useState } from 'react'
import { mochain, overusedGrotesk } from '@/utils/Fonts'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { fileType } from '@/types/types'
import { modules, formats } from '@/utils/QuillModules'

/* only load and render the Quill editor when running 
in the browser*/
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import { useSession } from 'next-auth/react'

function CreatePost({ mutating }: { mutating: any }) {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [tag, setTag] = useState('')
  // const [files, setFiles] = useState<fileType>(null)
  const [content, setContent] = useState('')

  //Ref
  const formRef = useRef<HTMLFormElement>(null)
  //Router
  const router = useRouter()
  const session = useSession()

  const submitNewPost = async (e: FormEvent) => {
    e.preventDefault()

    // const formData = new FormData()
    // formData.set('image', files[0].name)
    // const image = formData.get('image')

    const postBody = {
      title,
      summary,
      tag,
      content,
      email: session?.data?.user?.email
    }
    console.log(postBody)

    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify(postBody)
    })

    if (response.status === 201) {
      console.log(postBody)
      toast.success('Yayy🎉! You have successfully published a new post')
      //Reset form
      setTitle('')
      setSummary('')
      setTag('')
      setContent('')
      if (formRef.current) {
        formRef.current.reset()
      }
      mutating()
    } else {
      toast.error('Oops👎! Something went wrong, please try again')
    }
  }

  return (
    <form onSubmit={submitNewPost} ref={formRef}>
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        <h1
          className={`${mochain.variable} font-mochain text-right text-2xl md:text-4xl`}
        >
          Publish New Post
        </h1>
        <label htmlFor="title" className="text-xl font-bold mb-2">
          Title
        </label>
        <input
          required
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
        />
      </div>
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        <label htmlFor="summary" className="text-xl font-bold mb-2">
          Post Summary
        </label>
        <input
          required
          type="text"
          id="summary"
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Post Summary"
          className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
        />
      </div>
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        <label htmlFor="Post Category" className="text-xl font-bold mb-2">
          Post Category
        </label>
        <input
          required
          type="text"
          id="category"
          name="category"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Post Category"
          className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
        />
      </div>
      {/* <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        <label htmlFor="image" className="text-xl font-bold mb-2">
          Post Cover
        </label>
        <input
          required
          type="file"
          id="image"
          name="image"
          onChange={(e) => setFiles(e.target.files)}
          className="py-2 px-3 text-lg outline-none border rounded-lg bg-transparent mb-4"
        />
      </div> */}
      <div
        className={`flex flex-col max-w-[100dvw] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        <label htmlFor="image" className="text-xl font-bold mb-2">
          Post Content
        </label>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={setContent}
          className="text-2xl outline-none rounded-lg h-[20rem] bg-transparent mb-4"
        />
      </div>
      <div
        className={`flex flex-col max-w-[100dvw] mt-[5rem] md:mt-[4rem] md:max-w-[45dvw] mx-auto ${overusedGrotesk.variable} font-overusedGrotesk my-4`}
      >
        <button className="py-2 px-3 text-xl outline-none rounded-lg bg-[#111] hover:bg-[#1f1f1f] transition-all duration-100">
          Submit
        </button>
      </div>
    </form>
  )
}

export default CreatePost
