import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import cup from "../../images/home-icon.png"
import Search from "../search"
import NavBig from "./navBig"
import NavSmall from "./navSmall"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  color: #7ff2f8;
  font-size: 2rem;
  position: fixed;
  background-color: #3b2d60;
  top: 0;
  z-index: 1000;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 35vw;
    align-items: center;
  }

  .cup {
    width: 33.33vw;
    text-align: center;
    img {
      height: 5rem;
    }
  }
`

const Header = () => (
  <HeaderWrapper>
    <NavBig />
    <NavSmall />
    <Link to="/" className="cup">
      <img src={cup} alt="home logo" />
    </Link>
    <Search indices={searchIndices} />
  </HeaderWrapper>
)

export default Header
