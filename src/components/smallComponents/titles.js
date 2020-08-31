import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
  background-color: #7ff2f8;
  padding: 0.5rem 1rem;
  display: inline-block;
  border-radius: 10px;
  h2 {
    color: black;
  }
`

export const Titles = ({ children }) => (
  <TitleWrapper>
    <h2>{children}</h2>
  </TitleWrapper>
)
