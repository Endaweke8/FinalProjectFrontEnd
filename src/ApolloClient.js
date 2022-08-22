import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8080/v1/graphql',
  headers:{
   "x-hasura-admin-secret":"myadminsecretkey"
  }

})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
  const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient;
 