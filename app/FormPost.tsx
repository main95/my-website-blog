"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function FormPost() {
  const [title, setTitle] = useState('')
  const router = useRouter()

  // Create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault()
    const data = await fetch('/api/createPost', {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
    const res = await data.json()
    router.refresh()
    setTitle('')
    if (!res.ok) {
      console.log(res)
    }
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type='text'
      />
      <button type='submit'>Make a new post</button>
    </form>
  )
}
