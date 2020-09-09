import React from "react"
import styled from "styled-components"
import postImg from "../../images/GWTW.jpg"
import { Link } from "gatsby"
import Img from "gatsby-image"

const TopPostWrapper = styled(Link)`
  background: white;
  padding: 1.5rem;
  width: 32%;
  h4 {
    color: black;
  }
`
const Image = styled(Img)`
  width: 100%;
  height: 250px;
`
const TopPost = props => (
  <TopPostWrapper key={props.key} to={props.path}>
    <Image fluid={props.image} />
    <h4>{props.title}</h4>
    <span>{props.date}</span>
    <p>{props.description}</p>
  </TopPostWrapper>
)
export default TopPost
