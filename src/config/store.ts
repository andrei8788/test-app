import { combineReducers, configureStore } from '@reduxjs/toolkit';

import rootApi from './http';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware) as never,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store.getState;
