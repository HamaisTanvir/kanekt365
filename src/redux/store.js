import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import kanektPagesReducer from './reducers';

const store = configureStore({
  reducer: kanektPagesReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
