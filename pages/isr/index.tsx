import { GetStaticProps } from "next"
import React, { Suspense } from "react"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip")
  const date = await res.json()

  return {
    props: {
      date,
    },
    revalidate: 20,
  }
}

const ISR = ({ date }) => {
  return (
    <div>
      <p>{date.datetime}</p>
    </div>
  )
}

export default ISR
