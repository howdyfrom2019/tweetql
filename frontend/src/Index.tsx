import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import '../index.css';
import client from '../client';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
