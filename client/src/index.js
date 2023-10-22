import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { APOLLO_SERVER_URL} from './utils/constents'

import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri : APOLLO_SERVER_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
