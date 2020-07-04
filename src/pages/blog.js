import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const blogs = data.allContentfulBlogPost.edges

  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <p>Post will show up here at a later time</p>
        <ol className={blogStyles.posts}>
          {blogs.map(blog => {
            return (
              <li className={blogStyles.post}>
                <Link to={blog.node.slug}>
                  <h2>{blog.node.title}</h2>
                  <p>{blog.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
