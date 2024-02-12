import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { mergeDeep } from '@apollo/client/utilities';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const client = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'https://lol-draft-server.vercel.app/',
    cache: new InMemoryCache(),
  });
}

export const initializeApolloClient = (initialState: any) => {
  const _apolloClient = apolloClient ?? client();

  if (initialState) {
    const cntCache = _apolloClient.extract();
    const data = mergeDeep(initialState, cntCache);
    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApolloClient(initialState), [initialState]);
}
