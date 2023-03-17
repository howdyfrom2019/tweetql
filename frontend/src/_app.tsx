import type { AppProps } from 'next/app';
import { Head } from 'next/document';
import { useApollo } from '../client';
import { ApolloProvider } from '@apollo/client';

function _app({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <title>Russel.GG:드래프트</title>
        {/*<link rel={'shortcut icon'} href={'/favicon.ico'} />*/}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default _app;
