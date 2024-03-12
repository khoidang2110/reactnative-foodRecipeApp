import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseCategories, ResponseMeal } from './Type';


export const FoodAPI = createApi({
  reducerPath: 'FoodAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    getTrendingMeal: builder.query<ResponseMeal, void>({
      query: () => 'search.php?s=a'
    }),
    getCategories: builder.query<ResponseCategories, void>({
      query: () => 'categories.php'
    }),
    getDetailMeal:builder.query<ResponseMeal, string>({
      query: (id) => `lookup.php?i=${id}`
    }),
    searchMealByName:builder.query<ResponseMeal, string>({
      query: (meal) => `search.php?s=${meal}`
    }),
  }),
});



export const {useGetTrendingMealQuery,
  useGetCategoriesQuery,
  useGetDetailMealQuery,
  useSearchMealByNameQuery
} = FoodAPI;
