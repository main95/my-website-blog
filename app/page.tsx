'use client'

import axios from 'axios'
import Link from 'next/link'
import AddPost from './components/AddPost'
import { useQuery } from 'react-query'
import Post from './components/Post'
import { PostType } from './types/Post'

const allPosts = async () => {
  const response = await axios.get('api/posts/getPosts')
  return response.data
}

export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({ queryFn: allPosts, queryKey: ['posts'] })

  if (error) {
    return (
      <div>Error</div>
    )
  }
  if (isLoading) {
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div>
      <>
        {/* <Link
          className='bg-teal-700 text-black font-medium py-2 px-4 rounded-md'
          href={'/about'}
        >
          Go to the dashboard
        </Link> */}
        <AddPost />
        {data?.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              name={post.user.name}
              avatar={post.user.image}
              postTitle={post.title}
              comments={post.comment}
            />
          )
        })}
      </>
    </div>
  )
}
