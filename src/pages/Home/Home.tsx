import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  CollapsiblePanel  from '@components/CollapsiblePanel'
import Product from '@models/Products'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { selectAllProducts } from '@features/productsSlice'


export const Home = () => {
  const products = useSelector((state: RootState) => selectAllProducts(state))
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
