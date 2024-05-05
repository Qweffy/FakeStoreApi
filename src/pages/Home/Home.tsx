import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CollapsiblePanel from '@components/CollapsiblePanel'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCategories, categoriesLoading, categoriesReceived, categoriesFailed } from '@features/categoriesSlice'
import CategorySelector from '@components/CategorySelector'
import { useProductFilter } from '@hooks/useProductFilter'
import { IndexPath } from '@ui-kitten/components'
import Product from '@models/Products'
import { useGetCategoriesQuery } from '@store/services/products'

export const Home = () => {
  const dispatch = useDispatch()
  const { data: categoriesData, isError: isCategoriesError, error: categoriesError } = useGetCategoriesQuery()
  const categories: string[] = useSelector(selectAllCategories)
  const [displayLimit, setDisplayLimit] = useState<number>(5)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const displayedProducts: Product[] = useProductFilter(selectedCategory, displayLimit)

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
    if (Array.isArray(index)) {
      const firstIndex = index[0]
      setSelectedCategory(firstIndex.row === 0 ? null : categories[firstIndex.row - 1])
    } else {
      setSelectedCategory(index.row === 0 ? null : categories[index.row - 1])
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CategorySelector categories={categories} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <FlatList
        data={displayedProducts}
        renderItem={({ item }) => <CollapsiblePanel product={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

