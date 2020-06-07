/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import { motion } from "framer-motion";

// import Nav from "./nav";
// import "../assets/scss/style.scss";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     wordpressSiteMetadata {
  //       name
  //       description
  //     }

  //   }
  // `)
  
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
