import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import he from 'he';

import Layout from "../../layout"
import SEO from "../../seo"

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
        <section id="intro_content_sec" className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
            <h1>Template 1 - {he.decode(page.title)}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
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