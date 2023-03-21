import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/reducers/RootReducer';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore = () => store;

const Wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})

export default Wrapper;
