import type { NextPage } from "next"
import Links from "../components/Links.server"
import { Suspense } from "react"

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello Next 12 is talking</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Links />
      </Suspense>
    </div>
  )
}

export default Home
