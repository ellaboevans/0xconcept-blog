'use client'
import React, { useState } from 'react'
import { overusedGrotesk } from '@/utils/Fonts'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { fileType } from '@/types/types'
import { modules, formats } from '@/utils/QuillModules'

/* only load and render the Quill editor when running 
in the browser*/
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [tag, setTag] = useState('')
  const [files, setFiles] = useState<fileType>('')
  const [content, setContent] = useState('')

  //Router
  const router = useRouter()

  const submitNewPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set('title', title)
    formData.set('summary', summary)
    formData.set('tag', tag)
    formData.set('image', files[0])
    formData.set('content', content)

    const response = await fetch('http://localhost:3500/api/v1/posts', {
      method: 'POST',
      credentials: 'include',
      body: formData
    })

    if (response.status === 201) {
      toast.success('Yayy🎉! You have successfully published a new post')
      router.push('/')
    } else {
      toast.error('Oops👎! Something went wrong, please try again')
    }

    setTitle('')
    setSummary('')
    setTag('')
    setFiles('')
    setContent('')
  }

  return (
    <form
      onSubmit={submitNewPost}
      className={`flex flex-col items-center w-full md:max-w-[90dvw] gap-5 overflow-x-hidden ${overusedGrotesk.variable} font-overusedGrotesk`}
    >
      <div className="flex flex-col gap-5 items-center mt-6">
        <input
          type="text"
          placeholder="Title"
          className="input-field"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Post Summary"
          className="input-field"
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="input-field"
          name="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <input
          type="file"
          className="input-field"
          name="image"
          required
          onChange={(e) => setFiles(e.target.files)}
        />
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={setContent}
          className="quill-field"
        />
      </div>
      <button
        type="submit"
        className={`bg-black mt-16 w-full md:w-[700px] text-white font-semibold py-3 px-6 rounded-lg ${overusedGrotesk.variable} font-overusedGrotesk`}
      >
        Submit
      </button>
    </form>
  )
}

export default CreatePost
