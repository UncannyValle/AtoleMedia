import React from "react"
import styled from "styled-components"
import postImg from "../../images/GWTW.jpg"

const TopPostWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  width: 32%;
  h4 {
    color: black;
  }
`
const Image = styled.img`
  width: 100%;
`
const TopPost = () => (
  <TopPostWrapper>
    <Image src={postImg} alt="GWTW" />
    <h4>Frankly my dear, I do give a damn</h4>
    <p>
      A great movie with a glaring flaw. Scarlet O'Hara may be the most
      frustrating character of all time but that ...
    </p>
  </TopPostWrapper>
)
export default TopPost
