/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            path
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/components/page.js`)
  result.data.allWordpressPage.edges.forEach(edge => {
    console.log('page slug', edge);
    createPage({
      // will be the url for the page
      path: edge.node.path,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  });


  // FIXME: remove 'write-for-recovery' later!
  createRedirect({
    fromPath: `/`,
    toPath: `/home/write-for-recovery`,
    redirectInBrowser: true,
    isPermanent: true,
  });
}