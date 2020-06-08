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

  const rootPageSlug = '/write-for-recovery/'; // FIXME: have to hard-code this?

  const pages = await graphql(`
      query {
          allWordpressPage(filter: {path: {glob: "${rootPageSlug}**"}}) {
              edges {
                  node {
                      id
                      path
                      slug
                      title
                  }
              }
          }
      }
  `).then(result => result.data.allWordpressPage);

  if (pages.errors) throw new Error(pages.errors);

  const postTemplate = path.resolve(`./src/components/page.js`)
  pages.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  });

  // forward / to /home:
  createRedirect({
      fromPath: `/`,
      toPath: `/write-for-recovery`,
      redirectInBrowser: true,
      isPermanent: true,
  });
}