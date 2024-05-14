import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { productsApi } from './services/products'
import productsReducer from '../features/productsSlice'
import categoriesReducer from '../features/categoriesSlice'
import cartReducer from '../features/cartSlice'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
})

const persistor = persistStore(store)

export { store, persistor }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
