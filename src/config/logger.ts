import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

import env from './env';

const rtkQueryErrorLogger: Middleware = () => (next: (action: unknown) => unknown) => (action: unknown) => {
  if (isRejectedWithValue(action) && env.IS_DEVELOPMENT) {
    console.error('Ошибка сервера', action.payload);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
