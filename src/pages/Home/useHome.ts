import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCategories, categoriesLoading, categoriesReceived, categoriesFailed } from '@features/categoriesSlice'
import { useGetCategoriesQuery } from '@store/services/products'
import { useProductFilter } from '@hooks/useProductFilter'
import { IndexPath } from '@ui-kitten/components'

export const useHome = () => {
  const dispatch = useDispatch()
  const { data: categoriesData, isError: isCategoriesError, error: categoriesError } = useGetCategoriesQuery()
  const categories: string[] = useSelector(selectAllCategories)
  const [displayLimit, setDisplayLimit] = useState<number>(10)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const displayedProducts = useProductFilter(selectedCategory, displayLimit)

  useEffect(() => {
    if (isCategoriesError) {
      dispatch(categoriesFailed(categoriesError?.toString() || 'Unknown error'))
    } else if (categoriesData) {
      dispatch(categoriesReceived(categoriesData))
    } else {
      dispatch(categoriesLoading())
    }
  }, [categoriesData, isCategoriesError, categoriesError, dispatch])

  const handleLoadMore = () => setDisplayLimit(limit => limit + 5)

  const handleCategoryChange = (index: IndexPath | IndexPath[]) => {
    const category = index instanceof Array ? categories[index[0].row - 1] : categories[index.row - 1]
    setSelectedCategory(category)
  }

  return {
    categories,
    displayedProducts,
    handleLoadMore,
    handleCategoryChange,
    selectedCategory,
  }
}
