import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostWrapper = styled(Link)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  transition: all 200ms ease-in;

  .image {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    box-shadow: 0 3px 3px 0 #f26de4;
    transition: all 200ms ease-in;
  }
  .text {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 65%;
    transition: all 200ms ease-in;
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
    box-shadow: 0 3px 3px 0 #f26de4;
    transition: all 200ms ease-in;
  }
  .content {
    background-color: white;
    color: black;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 3px 3px 0 #f26de4;
    transition: all 200ms ease-in;
  }
  .info {
    display: flex;
    justify-content: space-around;
  }
  &:hover .image {
    box-shadow: 0 14px 28px #f26de4, 0 10px 10px #f26de4;
  }
  &:hover .content {
    box-shadow: 0 14px 28px #f26de4, 0 10px 10px #f26de4;
  }
  &:hover .title {
    box-shadow: 0 14px 28px #f26de4, 0 10px 10px #f26de4;
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
