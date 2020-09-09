import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, Link } from "gatsby"
import Post from "../components/smallComponents/post"

const ImageWrapper = styled(Link)`
  width: 30%;
  position: relative;
  box-shadow: 0 3px 3px 0 #f26de4;
  transition: all 200ms ease-in;

  .image {
    transition: all 200ms ease-in;
  }
  .hover-text {
    font-size: 3rem;
    width: 300px;
    bottom: 40%;
    position: absolute;
    left: calc(50% - 150px);
    visibility: hidden;
    opacity: 0;
    transition: all 200ms ease-in;
  }

  &:hover .hover-text {
    visibility: visible;
    opacity: 1;
    font-size: 4.5rem;
  }
  &:hover .image {
    opacity: 0.55;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px #f26de4, 0 10px 10px #f26de4;
  }
`

const Genres = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
const Posts = styled.section``
const Blog = () => {
  const data = useStaticQuery(graphql`
    query MainBlogPage {
      art: file(relativePath: { eq: "art.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      movies: file(relativePath: { eq: "movies.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      games: file(relativePath: { eq: "games.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark {
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
      <h1>The Blog</h1>
      <Genres>
        <ImageWrapper to="/blogArt">
          <Img fluid={data.art.childImageSharp.fluid} className="image" />
          <h2 className="hover-text">Art</h2>
        </ImageWrapper>
        <ImageWrapper to="/blogMovies">
          <Img fluid={data.movies.childImageSharp.fluid} className="image" />
          <h2 className="hover-text">Movies</h2>
        </ImageWrapper>
        <ImageWrapper to="/blogGames">
          <Img fluid={data.games.childImageSharp.fluid} className="image" />
          <h2 className="hover-text">Games</h2>
        </ImageWrapper>
      </Genres>
      <Posts>
        <h2>All Posts</h2>
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
      </Posts>
    </Layout>
  )
}

export default Blog
