import {
  ApolloClient,
  ApolloError,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { relayStylePagination } from '@apollo/client/utilities';
import { toastError } from '../components/DataDisplay/Toast';

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  toastError({
    content: (
      <div>
        {networkError && <p>{networkError.message}</p>}
        <ul>
          {graphQLErrors?.map(({ message }) => {
            return <li>{message}</li>;
          })}
        </ul>
      </div>
    ),
  });
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listGamePagination: relayStylePagination(),
      },
    },
  },
});
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache: cache,
  });
};

export const initializeApollo = () => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: PageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
  }

  return pageProps;
}
