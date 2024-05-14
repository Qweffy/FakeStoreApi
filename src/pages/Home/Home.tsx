import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '@components/ProductCard'
import CategorySelector from '@components/CategorySelector'
import { useHome } from './useHome'
import styles from './Home.styles'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { HomeProps } from './Home.types'

export const Home = ({ navigation }: HomeProps) => {
  const { categories, displayedProducts, handleLoadMore, handleCategoryChange, selectedCategory } = useHome()

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigator navigation={navigation} />
      <CategorySelector categories={categories} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <FlatList
        data={displayedProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}
