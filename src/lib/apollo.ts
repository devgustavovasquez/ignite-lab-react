import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4okwiop0aqo01yw2nni0ya7/master',
  cache: new InMemoryCache()
})
