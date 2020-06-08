import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import he from 'he';

import Layout from "./layout"
import SEO from "../../seo"
// console.log('styles', styles);
const Page = (props) => {
    const page = props.data.wordpressPage;
    return (
      <Layout>
          {page.acf.hero_image && (
            <Helmet>
            <style type="text/css">
              {`
              .fixed-bg {
                background-image: url(${page.acf.hero_image.localFile.url});
              }
            `}
            </style>
          </Helmet>)
        }

        <SEO title={page.title} />
        <section id="intro" className="tm-p-1-section-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="tm-section-text-container">
                  <h1>Template 1 - {he.decode(page.title)}</h1>
                  <i className="tm-text-white">
                    <p className="mb-0">
                      <span dangerouslySetInnerHTML={{ __html: page.content }} />
                    </p>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        hero_image {
          title
          localFile {
            url
          }
        }
      }
    }
  }
`