import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../Layout"

const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    <Layout fullMenu>
      <div className="wrapper">
      <header>
        <div className="inner">
        
        <h2 className="major">{data.markdownRemark.frontmatter.title}</h2>
        
        <h3> {data.markdownRemark.frontmatter.description}</h3>
        <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        <p>{data.markdownRemark.rawMarkdownBody}</p>
      </div>
      </header>
      </div>
 
    </Layout>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      rawMarkdownBody

      frontmatter {
        title
     
        description
        image {
          childImageSharp {
            fixed(width: 77) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`