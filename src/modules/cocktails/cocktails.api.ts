import rootApi from '@/config/http';
import { ECocktailCode } from '@/enums/cocktail.enums';
import { ETagType } from '@/enums/tags.enums';

import { TCocktail } from './cocktails.types';

const cocktailsApi = rootApi.injectEndpoints?.({
  endpoints: (builder) => ({
    getCocktails: builder.query<{ drinks: TCocktail[] }, { s: ECocktailCode }>({
      query: (params) => ({ url: '/api/json/v1/1/search.php', params }),
      providesTags: [ETagType.Cocktails],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCocktailsQuery } = cocktailsApi;

export default cocktailsApi;
