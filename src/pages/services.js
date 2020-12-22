import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
import pic4 from '../assets/images/pic04webp.webp';
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout';
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout fullMenu>
  <div className="wrapper">
      
    <Helmet title={title} />
    <header>
        <div className="inner">
    <h1>Tags</h1>
    <section className="features">
      {group.map(tag => (
        
          <article>
          <Link className="image" to={`/tags/${kebabCase(tag.fieldValue)}/` }>
              <img src={pic4} alt="website on laptop graphic" />
              </Link>
            <h3 className="major">{tag.fieldValue}</h3>
            <p>
            ({tag.totalCount})
              </p>
            <a href="/blog/how-to-increase-website-traffic" className="special">
              Learn more
              </a>
          </article>
           
        

      ))}
    </section>
        </div>
        </header>
        </div>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`