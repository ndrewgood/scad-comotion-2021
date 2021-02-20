/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Nav from '../components/nav'

const Layout = ({ children }) => {

  return (
    <>
    <Nav />
    {children}
    </>
  )
}

export default Layout
