import { GetStaticProps } from "next"
import React from "react"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:4000/posts")
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

const ISR = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default ISR
