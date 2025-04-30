import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';

import rootApi from './http';
import rtkQueryErrorLogger from './logger';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(rootApi.middleware, rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store.getState;
