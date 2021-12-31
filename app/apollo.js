import { setClient } from 'glimmer-apollo';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { getOwner } from '@ember/application';

export default function setupApolloClient(context) {
  const session = context.lookup('service:session');

  const getHeaders = () => {
    let headers = {};

    if (!session.isAuthenticated) {
      return headers;
    }

    const { access_token } = session.data?.authenticated || {};

    headers.Authorization = `Bearer ${access_token}`;

    return headers;
  };

  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
  });

  const authLink = setContext(() => {
    return getHeaders();
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  // Set default apollo client for Glimmer Apollo
  setClient(context, apolloClient);
}
