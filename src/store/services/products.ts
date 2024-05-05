import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from '@models/Products'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
})

export const { useGetProductsQuery } = productsApi