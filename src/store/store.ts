import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/products'
import productsReducer from '../features/productsSlice'
import categoriesReducer from '../features/categoriesSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
