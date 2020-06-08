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
// import "../../../assets/scss/style.sided.scss";
import styles from "../../../assets/scss/style.sided.module.scss";

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
    <div className={styles.main}>
      <div className="columns-bg">
        {/*/ Logo & Intro */}
        <section id="logo" className="tm-section-logo">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-6">
                <div className="tm-site-name-container">
                  <div className="tm-site-name-container-inner">
                    <h1 className="text-uppercase tm-text-primary tm-site-name">
                      Sided
                    </h1>
                    <p className="tm-text-primary tm-site-description">
                      new theme just for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*/ Intro */}
        {children}

        {/*/ Our Place */}
        <section id="our_place">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 col-lg-6 tm-section-image-container tm-img-left-container"
              >
                <img src="img/forty_image_01.jpg" alt="some Imagez" className="img-fluid" />
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tm-section-text-container-2">
                  <h2
                    className="tm-text-primary tm-section-title-mb tm-sm-bg-white-alpha"
                  >
                    Our Place
                  </h2>
                  <div className="tm-text-gray">
                    <p className="mb-4">
                      Sided Bootstrap v4.2.1 template has 3 HTML pages. <a href="index.html">Index</a>, <a href="page-2.html">Page 2</a> and <a href="page-3.html">Page 3</a>.
                      You may share this Sided template or <a rel="nofollow" href="https://www.facebook.com/templatemo">our templatemo page</a> to your friends. Pellentesque commodo malesuada est.
                      </p>
                    <p className="mb-0">
                      Suspendisse porttitor sollicitudin nisi et bibendum. Donec
                      ac semper ante, non sagittis sapien. Duis hendrerit tellus
                      sit amet cursus euismod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*/ Fusce, Section 4 */}
        <section id="section_4" className="tm-section-4">
          <div className="container-fluid">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-md-12 col-lg-6 tm-text-left-container">
                <div className="tm-section-text-container-3 tm-bg-white-alpha h-100">
                  <h2 className="tm-text-accent tm-section-title-mb">
                    Fusce a porttitor augue
                  </h2>
                  <p className="mb-0">
                    Quisque rutrum dapibus odio vitae tincidunt. Etiam
                    sollicitudin augue non porta interdum. Pellentesque placerat
                    orci at libero ornare, nec viverra justo lobortis. Phasellus
                    venenatis eros non.
                  </p>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 tm-section-image-container tm-img-right-container"
              >
                <img
                  src="img/forty_image_02.jpg"
                  alt="some Imagez"
                  className="img-fluid tm-img-right"
                />
              </div>
            </div>
          </div>
        </section>

        {/*/ Beautiful Rollovers */}
        <section id="gallery">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 tm-section-title-mb tm-gallery-title-col">
                <h2 className="tm-section-title-2">Beautiful Rollovers</h2>
                <hr className="tm-section-title-underline" />
              </div>

              <div className="col-12">
                <div className="grid">
                  <figure className="effect-duke mb-3">
                    <img
                      src="img/forty_image_11.jpg"
                      alt="some Imagez"
                      className="img-fluid"
                    />
                    <figcaption>
                      <h2>Messy <span>Duke</span></h2>
                      <p>When he looks at the sky, he feels to run.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                  <figure className="effect-duke">
                    <img
                      src="img/forty_image_12.jpg"
                      alt="some Imagez"
                      className="img-fluid"
                    />
                    <figcaption>
                      <h2>Messy <span>Duke</span></h2>
                      <p>When he looks at the sky, he feels to run.</p>
                      <a href="page-2.html">View more</a>
                    </figcaption>
                  </figure>
                  <figure className="effect-duke mb-3">
                    <img
                      src="img/forty_image_13.jpg"
                      alt="some Imagez"
                      className="img-fluid"
                    />
                    <figcaption>
                      <h2>Messy <span>Duke</span></h2>
                      <p>When he looks at the sky, he feels to run.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                  <figure className="effect-duke">
                    <img
                      src="img/forty_image_14.jpg"
                      alt="some Imagez"
                      className="img-fluid"
                    />
                    <figcaption>
                      <h2>Messy <span>Duke</span></h2>
                      <p>When he looks at the sky, he feels to run.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="col-md-6 tm-section-col-4">
                <div className="tm-section-text-container-4">
                  <p className="tm-text-secondary mb-0">
                    Description text for beautiful rollovers using text color code
                    #999 for this line. Quisque pharetra mauris in libero vaius
                    tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*/ Contact */}
        <section id="contact" className="tm-section-contact">
          <div className="row tm-contact-section">
            <div className="col-md-6 px-0">
              <div className="tm-bg-white-alpha tm-contact-left">
                <div className="media mb-5">
                  <a href="#" className="tm-contact-link">
                    <span className="tm-contact-icon-container">
                      <span className="tm-contact-icon-container-inner">
                        <i className="fas fa-phone tm-contact-icon tm-phone-icon"></i>
                      </span>
                    </span>
                    <span className="media-body"> 010-020-0340 </span>
                  </a>
                </div>
                <div className="media mb-5">
                  <a href="mailto:" className="tm-contact-link">
                    <span className="tm-contact-icon-container">
                      <span className="tm-contact-icon-container-inner">
                        <i className="fas fa-envelope tm-contact-icon"></i>
                      </span>
                    </span>
                    <span className="media-body"> info@company.com </span>
                  </a>
                </div>
                <div className="media">
                  <a href="" className="tm-contact-link">
                    <span className="tm-contact-icon-container">
                      <span className="tm-contact-icon-container-inner">
                        <i className="fas fa-map-marker-alt tm-contact-icon"></i>
                      </span>
                    </span>
                    <span className="media-body">
                      6120 Suspendisse ultricies<br />Scelerisque tellus, ID
                      10260<br />Magna aliquet porttitor
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="tm-contact-form-container">
                <form action="index.html" method="POST" className="tm-contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      id="contact_name"
                      name="contact_name"
                      className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="contact_email"
                      name="contact_email"
                      className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      rows="4"
                      id="contact_message"
                      name="contact_message"
                      className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn tm-btn-submit rounded-0">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="outro">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="tm-section-text-container-5 tm-text-white">
                  <p>
                    Fusce a porttitor augue. Phasellus nec faucibus erat, vitae
                    sagittis arcu. Quisque viverra dui purus, at rutrum nibh
                    suscipit ut.
                  </p>
                  <i
                    >&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Duis cursus ac mauris maximus auctor.&rdquo;</i
                  >
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="tm-section-text-container-6">
                  <a className="tm-social-icon-container">
                    <span className="tm-social-icon-container-inner">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </a>
                  <a className="tm-social-icon-container">
                    <span className="tm-social-icon-container-inner">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </a>
                  <a className="tm-social-icon-container">
                    <span className="tm-social-icon-container-inner">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </a>
                  <a className="tm-social-icon-container">
                    <span className="tm-social-icon-container-inner">
                      <i className="fab fa-google-plus-g"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <footer className="col-sm-12 col-md-6 offset-md-6 px-md-0">
                <p className="tm-copyright-text mb-0 tm-text-primary">
                  Copyright &copy; 2019 Company Name 
                  
                  - Design: <a rel="nofollow" href="https://www.facebook.com/templatemo">TemplateMo</a>
                </p>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
