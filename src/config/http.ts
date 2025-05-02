import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { stringify as queryStringify } from 'qs';

import { ETagType } from '@/enums/tags.enums';

import env from './env';

const paramsSerializer = (params: Record<string, unknown>): string => queryStringify(params, { arrayFormat: 'repeat' });

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = fetchBaseQuery({
  baseUrl: env.APP_API + '/',
  paramsSerializer,
});

export default createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: Object.values(ETagType),
  endpoints: () => ({}),
});
