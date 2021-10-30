import { GetStaticProps } from "next"
import React from "react"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Beirut")
  const date = await res.json()

  return {
    props: {
      date,
    },
  }
}

const SSG = ({ date }) => {
  return <div>
     <p>{date.datetime}</p>
    }</div>
}

export default SSG
