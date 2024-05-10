import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CollapsiblePanel from '@components/CollapsiblePanel'
import CategorySelector from '@components/CategorySelector'
import { useHome } from './useHome'
import styles from './Home.styles'

export const Home = () => {
  const { categories, displayedProducts, handleLoadMore, handleCategoryChange, selectedCategory } = useHome()

  return (
    <SafeAreaView style={styles.container}>
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
