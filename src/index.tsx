import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import client from '@/graphql/client';
import { ApolloProvider } from '@apollo/react-hooks';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
