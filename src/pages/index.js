import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import AboutSection from "../components/mainPage/aboutSection"
import TopPostsSection from "../components/mainPage/topPostsSection"

const Text = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text>
      <h1>Atole Media</h1>
      <h3>Take a sip of creativity</h3>
      <h4>A blog about movies, art and videogames</h4>
    </Text>
    <AboutSection />
    <TopPostsSection />
  </Layout>
)

export default IndexPage
