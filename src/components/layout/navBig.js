import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 35vw;
    align-items: center;
  }
  @media (max-width: 576px) {
    display: none;
  }
`

const NavBig = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>Store</li>
      </ul>
    </Navigation>
  )
}

export default NavBig
