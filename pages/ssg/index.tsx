import { GetStaticProps } from "next"
import React from "react"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip")
  const date = await res.json()

  return {
    props: {
      date,
    },
  }
}

const SSG = ({ date }) => {
  return (
    <div>
      <p>{date.datetime}</p>
    </div>
  )
}

export default SSG
