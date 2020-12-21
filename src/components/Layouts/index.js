import React from "react"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import Footer from "./Footer"

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
}
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
Layout.propTypes = propTypes
export default Layout