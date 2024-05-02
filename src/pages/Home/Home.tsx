import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  CollapsiblePanel  from '@components/CollapsiblePanel'


export const Home = ({ products }: { products: Product[] }) => {
  console.log('products', products)

  const renderItem = ({ item }: { item: Product }) => (
    <CollapsiblePanel product={item}/>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}
