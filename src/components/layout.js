/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { motion } from "framer-motion";

import Nav from "./nav";
import "../assets/scss/style.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wordpressSiteMetadata {
        name
        description
      }

    }
  `)

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const headerVariants = {
    slidUp: { top: -70 },
    slidDown: { top: 0 },
  };
  
  return (
    <>
      {/*Fixed Bg Image*/}
      <div className="fixed-bg"></div>
      <div className="fixed-bg-overlay"></div>
      {/*/Fixed Bg Image*/}

      {/*Preloader TODO: fix it? */}
      {/* <div id="pre_load" className="preloader-it">
        <div id="la_anim" className="la-anim-1"></div>
      </div> */}
      {/*/Preloader*/}

      {/*Container*/}
      <div className="container-fluid">
        <div className="row">
          <div id="vertical_nav_wrap" className="col-lg-4 col-xs-12 pad-zero vertical-nav-wrap">

            {/*Navigation*/}
            <Nav />

            {/* <nav className="navbar navbar-default vertical-nav" role="navigation">
              <div className="navbar-header">
                <button type="button" className="btn btn-default navbar-toggle" data-toggle="collapse"
                  data-target="#navbar_collapse">
                  <span className="mask"></span>
                  <span className="btn-label">
                    <span className="pe-7s-menu"></span>
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbar_collapse">
                <ul className="nav navbar-nav">
                  {navItems.map((node, index) => {
                    return (
                      <li key={index}><Link data-scroll to={"/" + node.slug}></Link><span>{he.decode(node.title)}</span></li>
                    )
                  })}
                </ul>
              </div>
            </nav> */}
            {/*/Navigation*/}

          </div>

          <div className="col-lg-8 col-xs-12 pad-zero">

            {/*Header*/}
            <motion.div
              initial="slidUp"
              animate="slidDown"
              variants={headerVariants}
              transition={{ delay: .25 }}
              className="header-wrapper-animation"
            >
            <header>
              <div className="header-wrap col-lg-10 center-div">
                <div className="float-left description">
                  <Link data-scroll to={"/home"}>
                    <span>
                      {data.wordpressSiteMetadata.description}
                    </span>
                  </Link>
                </div>

                <div className="float-right social-download-wrap">
                  {/* TODO: button to 'buy my book' */}
                  <Link className="btn btn-default float-left" to={"/book"}>
                    <span className="mask"></span>
                    <span className="btn-label">
                      <b>get the book</b>
                      <span className="icon pe-7s-download"></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="clearfix"></div>
            </header>
            </motion.div>
            {/*/Header*/}

            {/*Main Content*/}
            <motion.div 
              initial="hidden"
              animate="visible"
              transition={{ delay: .5 }}
              variants={opacityVariants} >
            <div id="main_content" className="content-block margin-top-150 margin-top-sm-70 margin-top-xs-50">

              {/*Introduction Sec*/}
              {children}
              {/* <section id="intro_content_sec" className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
                <div className="person-img margin-bottom-xs"></div>
                <h1>
                  Hiya!<span id="typed"></span>
                </h1>
                <h6>
                  about
							</h6>
                <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
                  Award winning interdisciplinary Designer & Photographer. Currently pursuing a perfect blend of style and function for a wide range of interactive graphic design. For the past 6 years I've helped global companies, organizations and start-ups reach business goals with user focused, interactive design. I enjoy bringing clarity to complex problems with a people first approach.
							</p>
                <p className="wow fadeInUp" data-wow-duration=".4s">
                  I am a complete social animal. Find my work on <a className="goto-social" href="#" target="_blank">Behance</a> & <a href="#" className="goto-social" target="_blank">Dribbble</a>. Experience my photography skills on <a href="#" className="goto-social" target="_blank">Instagram</a> & <a className="goto-social" href="#" target="_blank">Flickr</a>.

							</p>
                <div className="per-signature margin-top-sm wow fadeInUp" data-wow-duration=".4s">
                  <img className="img-responsive" src="img/signature.png" alt="signature" />
                </div>
              </section> */}
              {/*/Introduction Sec*/}

              <hr className="separater-hr" />

              {/*Footer*/}
              <footer className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
                <div className="row">
                  <div className="col-sm-6 available-wrap">
                    <span className="available-pointer"></span>
                    <span className="available-tag"><a href="https://www.specificfeeds.com/writeforrecovery">Sign up for Week Writing Prompts.</a></span>
                  </div>
                  <div className="col-sm-6">
                    <div className="social-icons-wrap float-right">
                      {/*Social Icons*/}
                      {/* <ul className="social-icons float-right">
                        <li>
                          <a href="#" className="social-icon">
                            <span className="fa" data-hover="&#xf09a;">&#xf09a;</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="social-icon">
                            <span className="fa" data-hover="&#xf099;">&#xf099;</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="social-icon">
                            <span className="fa" data-hover="&#xf16e;">&#xf16e;</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="social-icon">
                            <span className="fa" data-hover="&#xf16d;">&#xf16d;</span>
                          </a>
                        </li>
                      </ul> */}
                      {/*/Social Icons*/}
                    </div>
                    <div className="goto-top text-right float-right">
                      <a data-scroll href="#body">
                        <span data-hover="back to top">
                          back to top
											</span>
                      </a>
                    </div>
                    <div className="copywrite-wrap text-right float-right">
                      <p className="copywrite">Fabricated by Max <b>&copy; 2020.</b></p>
                    </div>
                  </div>
                </div>
              </footer>
              {/*/Footer*/}

            </div>
            </motion.div>
            {/*/Main Content*/}

          </div>
        </div>
      </div>
      {/* /Container */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
