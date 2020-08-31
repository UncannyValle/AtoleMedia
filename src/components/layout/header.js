import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import cup from "../../images/home-icon.png"
import lupa from "../../images/Icon material-search@2x.png"
const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: #7ff2f8;
  font-size: 2rem;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 45vw;
  }
  .cup {
    height: 4rem;
  }
`
const Search = styled.button`
  border: none;
  background: none;
  width: 45vw;
  display: flex;
  text-align: center;
  justify-content: center;
  #search-blog {
    height: 2rem;
    margin: 0 1rem;
  }
  .lupa {
    height: auto;
    width: 2rem;
  }
`
const Header = () => (
  <HeaderWrapper>
    <ul>
      <li>Blog</li>
      <li>Store</li>
    </ul>
    <Link to="/">
      <img src={cup} alt="home logo" className="cup" />
    </Link>

    <Search>
      <input
        type="search"
        name="search-blog"
        id="search-blog"
        placeholder="Search Blogs"
      />{" "}
      <img src={lupa} alt="search icon" className="lupa" />
    </Search>
  </HeaderWrapper>
)

export default Header
