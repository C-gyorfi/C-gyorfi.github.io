import React from "react"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import "../style/common.scss"

export default function Home({ data }) {
  return (
    <>
      <Hero data={data} />
    </>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        aboutMe
      }
    }
    image: file(base: { eq: "code.jpg" }) {
      publicURL
    }
  }
`
