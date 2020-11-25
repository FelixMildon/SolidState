import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Picture07() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pic07.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}