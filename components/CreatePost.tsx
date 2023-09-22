'use client'
import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { mochain, overusedGrotesk } from '@/utils/Fonts'

type Props = {}

function CreatePost({}: Props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const [tag, setTag] = useState('')
  const [files, setFiles] = useState<any>('')
  const [content, setContent] = useState('')

  const submitNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set('title', title)
    formData.set('author', author)
    formData.set('summary', summary)
    formData.set('tag', tag)
    formData.set('image', files[0])
    formData.set('content', content)

    fetch('http://localhost:3500/api/v1/posts', {
      method: 'POST',
      body: formData
    })
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
          placeholder="Author"
          className="input-field"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
          onChange={(e) => setFiles(e.target.files)}
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="quill-field"
        />
      </div>
      <button
        type="submit"
        className={`bg-black mt-10 text-white font-semibold py-3 px-6 rounded-lg ${mochain.variable} font-mochain`}
      >
        Submit
      </button>
    </form>
  )
}

export default CreatePost
