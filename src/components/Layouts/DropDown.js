import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const DropDown = () => (
  <DropDownWrapper>
    <li>
    <Link to="#">Room 1</Link>
    </li>
    <li>
    <Link to="#">Room 2</Link>
    </li>
    <li>
    <Link to="#">Room 3</Link>
    </li>
  </DropDownWrapper>
)
const DropDownWrapper = styled.ul`
  /* display:flex; */
  position: absolute;
  padding: 20px 30px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  top: 8%;
  border-radius: 5px;
  width: 200px;
  li{
    a {
      color: #3d3d3d;
    }
  }
  `

export default DropDown