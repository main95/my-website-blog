'use client'

import axios from 'axios'
// import AddPost from './components/AddPost'
import { useQuery } from 'react-query'
// import Post from './components/Post'
import { PostType } from './types/Post'
import { name, about, bio } from 'lib/info'
import { ArrowIcon } from './components/icons/Icons'

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
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 font-mono">
        {about()}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200 font-mono">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/main95"
          >
            <ArrowIcon />
            <p className="h-7">my GitHub</p>
          </a>
        </li>
      </ul>
    </section>
    // <div>
    //   <AddPost />
    //   {data?.map((post) => {
    //     return (
    //       <Post
    //         key={post.id}
    //         id={post.id}
    //         name={post.user.name}
    //         avatar={post.user.image}
    //         postTitle={post.title}
    //         comments={post.comment}
    //       />
    //     )
    //   })}
    // </div>
  )
}
