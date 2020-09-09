import React from "react"
import styled from "styled-components"
import TopPost from "./topPost"
import { useStaticQuery, graphql } from "gatsby"
const TopPostsWrapper = styled.section`
  width: 100%;
  .top-post-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
`

const TopPostsSection = () => {
  const data = useStaticQuery(graphql`
    query TopPosts {
      allMarkdownRemark(limit: 3) {
        edges {
          node {
            frontmatter {
              date(formatString: "M/ D/ YY")
              description
              title
              path
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  // const post = data.allMarkdownRemark.edges.node.frontmatter
  return (
    <TopPostsWrapper>
      <h2>Top Posts</h2>
      <div className="top-post-wrapper">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <TopPost
            key={node.key}
            path={node.frontmatter.path}
            image={node.frontmatter.image.childImageSharp.fluid}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
          />
        ))}
      </div>
    </TopPostsWrapper>
  )
}

export default TopPostsSection
