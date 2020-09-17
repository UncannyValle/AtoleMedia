import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Post from "../components/smallComponents/post"

const BlogMovies = () => {
  const data = useStaticQuery(graphql`
    query MovieBlogPage {
      allMarkdownRemark(filter: { frontmatter: { genre: { eq: "Movies" } } }) {
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
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Movie Posts</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
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
      ))}
    </Layout>
  )
}

export default BlogMovies
