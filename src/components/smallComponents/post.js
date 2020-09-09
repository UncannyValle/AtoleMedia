import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostWrapper = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .image {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }
  .text {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    h3,
    h4,
    p {
      color: black;
      text-align: right;
    }
    color: black;
    background-color: #7ff2f8;
    padding: 1rem;
    border-radius: 15px;
    text-align: right;
  }
  .content {
    background-color: white;
    color: black;
    padding: 1.5rem;
    border-radius: 15px;
    
  }
  .info {
    display: flex;
    justify-content: space-around;
  }
`
const Post = props => (
  <PostWrapper key={props.key} to={`/blog/${props.path}`}>
    <Img className="image" fluid={props.image} />
    <div className="text">
      <div className="title">
        <h3>{props.title}</h3>
        <h4>by {props.author}</h4>
      </div>
      <div className="content">
        <p>{props.description}</p>
        <div className="info">
          <span>{props.date}</span>
          <span>{props.time} min read</span>
          <span>Genre: {props.genre}</span>
        </div>
      </div>
    </div>
  </PostWrapper>
)

export default Post
