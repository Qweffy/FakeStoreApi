import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '@models/Products'
import { RootState } from '../store/store'
interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsLoading: (state) => {
      state.status = 'loading'
    },
    productsReceived: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
      state.status = 'succeeded'
    },
    productsFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed'
      state.error = action.payload
    }
  }
})

export const { productsLoading, productsReceived, productsFailed } = productsSlice.actions

export default productsSlice.reducer

export const selectAllProducts = (state: RootState) => state.products.products
export const selectProductsStatus = (state: RootState) => state.products.status
export const selectProductsError = (state: RootState) => state.products.error
