import type { AppProps } from 'next/app';
import { useApollo } from '../../client';
import { ApolloProvider } from '@apollo/client';
import 'tailwindcss/tailwind.css';
import '../../index.css';
import { Provider } from 'react-redux';
import store from '@/store/store';

function _app({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default _app;
