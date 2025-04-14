import { GraphQLClient } from 'graphql-request';

const apiUrl = process.env.NEXT_PUBLIC_HYGRAPH_API_URL;

if (!apiUrl) {
  throw new Error('Missing NEXT_PUBLIC_HYGRAPH_API_URL environment variable');
}

const hygraph = new GraphQLClient(apiUrl);

export default hygraph;
