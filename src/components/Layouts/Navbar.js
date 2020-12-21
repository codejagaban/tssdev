import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const Navbar = () => {
  return (
    <NavWrapper>
      <div className="container">
        <NavContent>
          <div className="logo">
            <Link to="/">
              Zetta Hotels
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Rooms</Link>
              </li>
              <li>
                <Link to="/">Restaurant</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </NavContent>
    </div>
  </NavWrapper>
  )
}
const NavWrapper = styled.div`
  padding: 25px 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  div{
      a {
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 600;
        text-transform: uppercase;
        :hover {
          color: #5863F8;
        }
      }
    ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 10px;
      padding: 0 10px;
      font-size: 12px;
    }
  }
  }
`
export default Navbar
