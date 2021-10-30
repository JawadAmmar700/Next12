import React, { Suspense, useEffect, useState } from "react"
import getAllPosts from "../../lib/get-posts"

const CSR = () => {
  const [posts, setPosts] = useState<Array<Object>>([])

  useEffect(() => {
    getAllPosts().then(posts => setPosts(posts))
  }, [])

  return (
    <div>
      <Suspense fallback={"...loading"}>
        {posts.slice(0, 30).map(({ id, title }) => {
          return (
            <div key={id}>
              <p>{title}</p>
            </div>
          )
        })}
      </Suspense>
    </div>
  )
}

export default CSR
