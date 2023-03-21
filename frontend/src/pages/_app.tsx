import type { AppProps } from 'next/app';
import { useApollo } from '@/client';
import { ApolloProvider } from '@apollo/client';
import Wrapper from '@/store/store';
import 'tailwindcss/tailwind.css';
import '../../index.css';
import { Provider } from 'react-redux';

function _app({ Component, ...rest }: AppProps) {
  const apolloClient = useApollo(rest.pageProps.initialApolloState);
  const { store, props } = Wrapper.useWrappedStore(rest);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default _app;
