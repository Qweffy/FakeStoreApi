import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface CategoriesState {
  categories: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
  error: null
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesLoading: state => {
      state.status = 'loading'
    },
    categoriesReceived: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
      state.status = 'succeeded'
    },
    categoriesFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.status = 'failed'
    }
  }
})

export const { categoriesLoading, categoriesReceived, categoriesFailed } = categoriesSlice.actions

export default categoriesSlice.reducer

export const selectAllCategories = (state: RootState) => state.categories.categories
export const selectCategoriesStatus = (state: RootState) => state.categories.status
export const selectCategoriesError = (state: RootState) => state.categories.error
