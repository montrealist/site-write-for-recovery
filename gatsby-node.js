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

  const childrenOfHome = await graphql(`
    query {
      allWordpressPage(filter: {parent_element: {title: {}, slug: {eq: "home"}}}) {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `).then(result => result.data);

  if (childrenOfHome.errors) throw new Error(childrenOfHome.errors);

  // console.log('childrenOfHome: ', childrenOfHome.allWordpressPage.edges);

  await Promise.all(childrenOfHome.allWordpressPage.edges.map(async (edge) => {
    const pagePath = edge.node.path;
    console.log('edge: ', pagePath);
    const res = await graphql(`
      query {
        allWordpressPage(filter: {path: {glob: "${pagePath}*"}}) {
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
    // TODO: generate pages with a different template:

    console.log('result for subquery: ', res.data.allWordpressPage.edges);

    console.log('path', `./src/components${pagePath}page.js`);
    const postTemplate = path.resolve(`./src/components${pagePath}page.js`);

    console.log('postTemplate', postTemplate);

    res.data.allWordpressPage.edges.forEach(edge => {
      console.log('edge.node.path', edge.node.path);
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
  }));

  // const result = await graphql(`
  //   query {
  //     allWordpressPage {
  //       edges {
  //         node {
  //           id
  //           slug
  //           path
  //         }
  //       }
  //     }
  //   }
  // `);

  // const postTemplate = path.resolve(`./src/components/page.js`)
  // result.data.allWordpressPage.edges.forEach(edge => {
  //   // console.log('page slug', edge);
  //   createPage({
  //     // will be the url for the page
  //     path: edge.node.path,
  //     // specify the component template of your choice
  //     component: slash(postTemplate),
  //     // In the ^template's GraphQL query, 'id' will be available
  //     // as a GraphQL variable to query for this posts's data.
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // });

  // FIXME: remove 'write-for-recovery' later!
  createRedirect({
    fromPath: `/`,
    toPath: `/home/write-for-recovery`,
    redirectInBrowser: true,
    isPermanent: true,
  });
}