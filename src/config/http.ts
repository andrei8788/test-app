import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { stringify as queryStringify } from 'qs';

import { ETagTypes } from '@/enums/tags.enums';

import env from './env';

const paramsSerializer = (params: Record<string, unknown>): string => queryStringify(params, { arrayFormat: 'repeat' });

const baseQuery = fetchBaseQuery({
  baseUrl: env.APP_API + '/',
  paramsSerializer,
});

export default createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: Object.values(ETagTypes),
  endpoints: () => ({}),
});
