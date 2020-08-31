import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import AboutSection from "../components/mainPage/aboutSection"

const Text = styled.div`
  width: 100%;
  height: 100vh;
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
      <h2>Take a sip of creativity</h2>
      <h2>A blog about movies, art and videogames</h2>
    </Text>
    <AboutSection />
  </Layout>
)

export default IndexPage
