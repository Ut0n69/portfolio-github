import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const context = {
    headers: {
      ...headers,
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  };
  return context;
});

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache()
});

export default client;
