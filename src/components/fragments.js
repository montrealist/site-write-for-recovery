import { graphql } from 'gatsby';

export const fragments = graphql`
    fragment allPosts on wordpress__POSTConnection {
        edges {
            node {
                categories {
                    id
                    slug
                }
                id
                slug
                title
                excerpt
                date
            }
        }
    }
`;