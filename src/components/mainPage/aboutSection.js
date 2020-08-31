import React from "react"
import styled from "styled-components"
import { Titles } from "../smallComponents/titles"
import { useStaticQuery } from "gatsby"

const AboutWrapper = styled.section``
const Bio = styled.div`
  display:flex;
  flex-direction: row;

`
const Selfie = styled.Img`

`
const AboutSection = () => (
  <AboutWrapper>
    <h1>About Us</h1>
    <Titles>Lena the Artist</Titles>
  </AboutWrapper>
)



export default AboutSection
