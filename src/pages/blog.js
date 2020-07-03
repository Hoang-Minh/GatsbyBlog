import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.edges

  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <p>Post will show up here at a later time</p>
        <ol>
          {blogs.map(blog => {
            return (
              <li>
                <Link to={blog.node.fields.slug}>
                  <h2>{blog.node.frontmatter.title}</h2>
                </Link>
                <p>{blog.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
