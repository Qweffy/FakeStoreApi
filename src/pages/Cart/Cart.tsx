// Cart.tsx
import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { CartProps } from '@pages/Cart/Cart.types'
import { CartProduct } from '@models/Products'
import { RootState } from '@store/store'
import styles from './Cart.styles'
import { CartItem, CartFooter, CartButtons } from './Cart.components'

export const Cart = ({ navigation }: CartProps) => {
  const { products } = useSelector((state: RootState) => state.cart)

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  const renderItem: ListRenderItem<CartProduct> = ({ item }) => <CartItem item={item} />

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigator navigation={navigation} />
      <View style={styles.contentContainer}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <CartFooter total={calculateTotal()} />}
          contentContainerStyle={styles.content}
        />
      </View>
      <CartButtons navigation={navigation} />
    </SafeAreaView>
  )
}

export default Cart
