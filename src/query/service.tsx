import { gql } from 'graphql-request';

export const GET_BLOG_QUERY = gql
    `
    query {
        blog {
            coverImage {
                url
            }
        title
        content
        routerLink
        latestBlog
    }
}
`