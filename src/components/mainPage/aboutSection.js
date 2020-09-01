import React from "react"
import styled from "styled-components"
import { Titles } from "../smallComponents/titles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutWrapper = styled.section`
  width: 100%;
  z-index: -10;
`
const Bio = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin: 1.5rem 0;
  p {
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
  }
  span {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Selfie = styled(Img)`
  width: 30%;
  border-radius: 50%;
  z-index: -5;
`
const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      lena: file(relativePath: { eq: "lena-selfie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      julian: file(relativePath: { eq: "julian-selfie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <AboutWrapper>
      <h2>About Us</h2>
      <Bio>
        <span>
          {" "}
          <Titles>Lena the Artist</Titles>
          <p>
            A creative in the most pure sense of the word. Lena is always
            finding the artistic side of everything. She believes that when we
            see a film we are transported into another universe, a universe of
            celluloid and metaphors. When she isn't watching movies you can find
            her drawing, taking gorgeous photos of forests, or figuring out how
            to befriend penguins and Boston terriers.
          </p>
        </span>
        <Selfie fluid={data.lena.childImageSharp.fluid} />
      </Bio>
      <Bio>
        <Selfie fluid={data.julian.childImageSharp.fluid} />
        <span>
          <Titles>Julian the Nerd</Titles>
          <p>
            Loves watching movies, playing videogames and eating tacos. Has
            encyclopedic knowledge of movie quotes, even movies he hasn't seen.
            Is constantly building or learning something new, like making
            kombucha, or making a robot, or drawing penguins.
          </p>{" "}
        </span>
      </Bio>
    </AboutWrapper>
  )
}

export default AboutSection
