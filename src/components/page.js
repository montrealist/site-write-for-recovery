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
      <SEO title="Home" />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
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