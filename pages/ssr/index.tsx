import React from "react"
import getAllPosts from "../../lib/get-posts"

export const getServerSideProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

const SSR = ({ posts }: { posts: Array<Object> }) => {
  return (
    <div>
      {posts.slice(0, 30).map(({ id, title }) => {
        return (
          <div key={id}>
            <p>{title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SSR
