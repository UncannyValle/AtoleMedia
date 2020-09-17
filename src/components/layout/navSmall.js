import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

////////Styles///////////
const Navbar = styled.nav`
  display: none;
  width: 33%;
  @media (max-width: 1024px) {
    display: block;
    transition: all 0.2s ease-in-out;
  }
`
const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5.5rem;
  left: ${({ show }) => (show ? "0" : "-30rem")};
  width: 100vw;
  justify-content: flex-end;
  transition: all 400ms ease-in-out;
  z-index: -100;
`

const Links = styled(Link)`
  padding: 1rem;
  transition: all 0.2s ease-out;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  border: 1px solid white;
  width: 100%;
  margin: 0 auto;

  &.top-name {
    border: none;
    color: black;
    background: white;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`
const Burger = styled.div`
  display: block;
  position: relative;
  left: 3rem;
  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #7ff2f8;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
 * But let's hide the middle one.
 */
  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -5px);
  }
`
const NavSmall = () => {
  //State
  const [open, setOpen] = useState(false)

  //Drop down menu logic

  const changer = () => {
    !open ? setOpen(true) : setOpen(false)
    console.log(open)
  }
  return (
    <Navbar>
      <Burger>
        <input type="checkbox" onClick={changer} checked={open} />
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <Wrapper show={open}>
        <Links to="/blog" className="top-name" onClick={changer}>
          Blog
        </Links>

        <Links to="/store" className="top-name" onClick={changer}>
          Store
        </Links>
      </Wrapper>
    </Navbar>
  )
}

export default NavSmall
