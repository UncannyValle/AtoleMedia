/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import styled from "styled-components"
import Header from "./header"
import reset from "styled-reset"
import lines from "../../images/background.jpg"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
 ${"" /* @import url("https://use.typekit.net/wbi1epd.css"); */}

  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-family: costa, sans-serif;

    }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    height:auto;
    background-color: #3B2D60;
  }
  main{
    max-width: 1068px; 
    text-align:center;
    margin: 6rem auto 0; 
  }
  h1{
    font-family: continuo, sans-serif;
    font-size: 7rem;
     color: #7FF2F8;

  }
  h2{
    font-family: continuo, sans-serif;
    font-size: 5rem;
    color: #7FF2F8;
  }
  h3{
     font-family: pinecone-mvb, sans-serif;
     font-size: 2.5rem;
     color: #7FF2F8;

  }
  h4 {
    font-family: pinecone-mvb, sans-serif;
    font-size: 1.5rem;
    color: #7FF2F8;

  }
  a {
    text-decoration: none ;
    color:#7FF2F8;
    font-family: costa, sans-serif;
 }  
  a:hover {
   cursor:pointer;
 }
 ul{
   margin: 0;
   padding:0;
 }
 p {
   text-align: justify;
   font-size: 20px;
   line-height:30px;
 }
`
const Background = styled.img`
  width: 100vw;
  bottom: 0;
  height: 90vh;
  position: fixed;
  overflow: hidden;
  z-index: -10;
`
const theme = {
  foreground: "#7FF2F8",
  background: "black",
  faded: "#888",
}
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Background src={lines} alt="background" />
      <Header />

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
