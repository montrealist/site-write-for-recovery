/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

const pageTemplateName = 'page.js';
const pageTemplateRoot = './src/components';

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    const rootPageSlug = 'home'; // have to hard-code this!
    // TODO: to get rid of the above, look into using `gatsby-source-graphql` (WPGraphQL) instead of `gatsby-source-wordpress`:
    // https://github.com/crock/gatsby-recipe-headless-wordpress 

    const homepage = await graphql(`
        query {
            wordpressPage( slug: { eq: "home" } ) {
                id
                path
            }
        }
    `).then(result => result.data.wordpressPage);

    if (homepage.errors) throw new Error(homepage.errors);

    const rootPathString = [pageTemplateRoot, pageTemplateName].join('/');
    const rootTemplatePath = path.resolve(rootPathString);
    // create a page for "home":
    createPage({
        // will be the url for the page
        path: homepage.path,
        // specify the component template of your choice
        component: slash(rootTemplatePath),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this posts's data.
        context: {
            id: homepage.id,
        },
    });

    const childrenOfHome = await graphql(`
    query {
        allWordpressPage(
            filter: { 
                parent_element: { 
                    slug: { eq: "${rootPageSlug}" } 
                } 
            }
        ) {
            edges {
                node {
                    id
                    path
                    slug
                }
            }
        }
    }
  `).then(result => result.data);

    if (childrenOfHome.errors) throw new Error(childrenOfHome.errors);

    await Promise.all(childrenOfHome.allWordpressPage.edges.map(async (edge) => {

        const pathString = [pageTemplateRoot, rootPageSlug, edge.node.slug, pageTemplateName].join('/');
        const templatePath = path.resolve(pathString);
        // create a page for the child of "home":
        createPage({
            // will be the url for the page
            path: edge.node.path,
            // specify the component template of your choice
            component: slash(templatePath),
            // In the ^template's GraphQL query, 'id' will be available
            // as a GraphQL variable to query for this posts's data.
            context: {
                id: edge.node.id,
            },
        });

        const pagePath = edge.node.path;

        const pageObjects = await graphql(`
            query {
                allWordpressPage(
                    filter: {
                        path: {
                            glob: "${pagePath}*" 
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            path
                        }
                    }
                }
            }
        `).then(result => result.data.allWordpressPage.edges);
        if (pageObjects.errors) throw new Error(pageObjects.errors);

        const postTemplatePath = path.resolve(`./src/components${pagePath}page.js`);

        pageObjects.forEach(edge => {
            // console.log('edge.node.path', edge.node.path);
            createPage({
                // will be the url for the page
                path: edge.node.path,
                // specify the component template of your choice
                component: slash(postTemplatePath),
                // In the ^template's GraphQL query, 'id' will be available
                // as a GraphQL variable to query for this posts's data.
                context: {
                    id: edge.node.id,
                },
            })
        });
    }));

    // createRedirect({
    //     fromPath: `/`,
    //     toPath: `/home/write-for-recovery`,
    //     redirectInBrowser: true,
    //     isPermanent: true,
    // });
}