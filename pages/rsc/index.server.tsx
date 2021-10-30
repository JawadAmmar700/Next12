import React from "react"
import { Suspense } from "react"

import getAllPosts from "../../lib/get-posts"
import useData from "../../lib/use-data"

function GetPosts() {
  const posts = useData("top", () => getAllPosts())
  return (
    <>
      {posts
        .slice(0, 30)
        .map(({ id, title }: { id: number; title: string }) => {
          return (
            <Suspense fallback={"...loading"} key={id}>
              <div key={id}>
                <p>{title}</p>
              </div>
            </Suspense>
          )
        })}
    </>
  )
}

const RSC = () => {
  return (
    <div>
      <h1>hi from server component</h1>
      <Suspense fallback={<div>loading...</div>}>
        <GetPosts />
      </Suspense>
    </div>
  )
}

export default RSC
