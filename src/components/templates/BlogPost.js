import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout/layout"
import styled from "styled-components"
import SEO from "../seo"

const PostWrapper = styled.div`
  background-color: #f979767a;
  color: white;
  p {
    margin-bottom: 1.5rem;
  }
  h3 {
    width: 75%;
    margin: 1.5rem auto;
  }
  .post-title {
    width: 70%;
    margin: 0 auto;
    padding: 1.5rem 0;
    line-height: 5.5rem;
  }

  .poster {
    width: 60%;
    margin: 0 auto;
  }
  .content {
    width: 65%;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
`
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.image.childImageSharp.fluid

  // const htmlMaker = markdown => {
  //   let parser = new DOMParser()
  //   let doc = parser.parseFromString(markdown, "text/html")
  //   return doc.body
  // }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostWrapper>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <Img fluid={image} className="poster" />
        <h3> {post.frontmatter.description}</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </PostWrapper>
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
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
