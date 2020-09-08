import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  color: white;
  margin: 2rem auto;
  text-align: center;
  a {
    color: #34caef;
  }
`
const Footer = () => (
  <FooterWrapper>
    {" "}
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href="https://theuncannyvalle.tech">Julian Valle</a>
  </FooterWrapper>
)

export default Footer
