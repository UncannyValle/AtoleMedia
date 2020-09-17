import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
  background-color: #7ff2f8;
  padding: 0.25rem 0.5rem;
  display: inline-block;
  border-radius: 10px;
  h3 {
    color: black;
    font-size: 3rem;
  }
  @media (max-width: 576px) {
    width: 90vw;
  }
`

export const Titles = ({ children }) => (
  <TitleWrapper>
    <h3>{children}</h3>
  </TitleWrapper>
)
