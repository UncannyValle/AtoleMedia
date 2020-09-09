import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Post from "../components/smallComponents/post"

const BlogArt = () => {
  const data = useStaticQuery(graphql`
    query ArtBlogPage {
      allMarkdownRemark(filter: { frontmatter: { genre: { eq: "Art" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              author
              path
              genre
              date(formatString: "MMM D, YYYY")
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            timeToRead
          }
        }
      }
    }
  `)
  //  const front = data.allMarkdownRemark.edges.node.frontmatter
  console.log(data.allMarkdownRemark.edges.length)
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Art Posts</h2>

      {data.allMarkdownRemark.edges.length > 0 ? (
        data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Post
              key={node.key}
              title={node.frontmatter.title}
              image={node.frontmatter.image.childImageSharp.fluid}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              path={node.frontmatter.path}
              time={node.timeToRead}
              genre={node.frontmatter.genre}
            />
          )
        })
      ) : (
        <h2>Nothin' to see here folks</h2>
      )}
    </Layout>
  )
}

export default BlogArt
