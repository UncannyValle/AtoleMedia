import React from "react"
import styled from "styled-components"
import TopPost from "./topPost"

const TopPostsWrapper = styled.section`
  width: 100%;
  .top-post-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
`

const TopPostsSection = () => {
  return (
    <TopPostsWrapper>
      <h2>Top Posts</h2>
      <div className="top-post-wrapper">
        <TopPost />
        <TopPost />
        <TopPost />
      </div>
    </TopPostsWrapper>
  )
}

export default TopPostsSection
