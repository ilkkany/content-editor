import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.CONTENT_SERVER,
  cache: new InMemoryCache()
});