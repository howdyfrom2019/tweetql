import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/RootReducer';
import { createWrapper } from 'next-redux-wrapper';
import { Context } from 'next-redux-wrapper/lib';

const store = configureStore({
  reducer: rootReducer
});

const makeStore = (context: Context) => store;

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})

export default wrapper;
