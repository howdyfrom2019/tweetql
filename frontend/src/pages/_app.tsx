import type { AppProps } from 'next/app';
import { useApollo } from '../../client';
import { ApolloProvider } from '@apollo/client';
import wrapper from '@/store/store';
import 'tailwindcss/tailwind.css';
import '../../index.css';

function _app({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default wrapper.withRedux(_app);
