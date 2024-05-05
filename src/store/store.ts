import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/products'
import productsReducer from '../features/productsSlice'
import categoriesReducer from '../features/categoriesSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
