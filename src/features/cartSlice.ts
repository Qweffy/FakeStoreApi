import { createSlice } from '@reduxjs/toolkit'
import { CartProduct } from '@models/Products'

interface CartState {
  products: CartProduct[];
  cartItemCount: number;
  isLoading: boolean;
}


const initialState: CartState = {
  products: [],
  cartItemCount: 0,
  isLoading: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.isLoading = true
      const product = action.payload
      const existingProduct = state.products.find((item) => item.id === product.id)
      if (!existingProduct) {
        state.products.push({ ...product, quantity: 1 })
      } else {
        existingProduct.quantity += 1
      }
      state.cartItemCount += 1
      state.isLoading = false
    },
    removeItem: (state, action) => {
      const productId = action.payload
      const existingProduct = state.products.find((item) => item.id === productId)
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1
      } else {
        state.products = state.products.filter((item) => item.id !== productId)
      }
      state.cartItemCount -= 1
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
