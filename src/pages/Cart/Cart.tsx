import React from 'react'
import { ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { addItem, removeItem } from '@features/cartSlice'
import { CartProps } from '@pages/Cart/Cart.types'
import { Product } from '@models/Products'
import { RootState } from '@store/store'

export const Cart = ({ navigation }: CartProps) => {
  const { products } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId))
  }

  const handleAddItem = (product: Product) => {
    dispatch(addItem(product))
  }

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <TopNavigator navigation={navigation} />
      <Layout style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>MI COMPRA</Text>
        <ScrollView>
          {products.map((product) => (
            <Layout key={product.id} style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
              <Image source={{ uri: product.image }} style={{ width: 100, height: 100, marginRight: 10 }} />
              <Layout style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.title}</Text>
                <Text>Talle: Small</Text>
                <Layout style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => handleRemoveItem(product.id)}>
                    <Text style={{ fontSize: 20, color: '#000' }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{product.quantity}</Text>
                  <TouchableOpacity onPress={() => handleAddItem(product)}>
                    <Text style={{ fontSize: 20, color: '#000' }}>+</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {product.price.toFixed(2)}</Text>
                </Layout>
              </Layout>
            </Layout>
          ))}
        </ScrollView>
        <Layout style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Subtotal: $ {calculateTotal().toFixed(2)}</Text>
          <Text style={{ fontSize: 16 }}>Envio: GRATIS</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Total:
            $ {calculateTotal().toFixed(2)}</Text>
        </Layout>
        <Button title='Iniciar compra' onPress={() => console.log('Initiate checkout')} />
        <Button title='Seguir comprando' onPress={() => navigation.goBack()} />
      </Layout>
    </SafeAreaView>
  )
}
