import React from 'react';
import Layout from "../components/layout";
import { graphql } from "gatsby";
import he from 'he';

// FIXME: actually pull menus :)

export default (props) => {
    // console.log('posts page data ', props.data);
    return (<Layout><h1>Menus</h1>
        {
            props.data.allWordpressPost.edges.map((post) => {
                // TODO: move the decoding to the API call, and in the component just consume the value that comes from the store
                return (<p key={post.node.id}> post: { he.decode(post.node.title) } </p>)
            })
        }
    </Layout>)
};

export const query = graphql`
  query {
    allWordpressPost {
      ...allPosts
    }
  }
`