import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import cup from "../../images/home-icon.png"
// import lupa from "../../images/Icon material-search@2x.png"
import Search from "../search"
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
  z-index: 100;
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
const SearchBox = styled(Search)`
  background-color: red;
  margin-right: 5rem;
`
const Header = () => (
  <HeaderWrapper>
    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>Store</li>
    </ul>
    <Link to="/" className="cup">
      <img src={cup} alt="home logo" />
    </Link>
    <SearchBox indices={searchIndices} />
  </HeaderWrapper>
)

export default Header
