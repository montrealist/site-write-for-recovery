import React from "react"
import { graphql } from "gatsby"
// import he from 'he';

import Layout from "./layout"
import SEO from "./seo"

const Page = (props) => {
    const page = props.data.wordpressPage;
    console.log('page', page);
    return (
      <>
    <Layout>
      <SEO title={page.title} />
      <section id="intro_content_sec" className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
          <div className="person-img margin-bottom-xs"></div>
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </section>

    </Layout>
      </>
    )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`