import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import { CartProduct, Product } from '@models/Products'
import { PrimaryColors } from '@styles/Colors'
import styles from './Cart.styles'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '@features/cartSlice'
import Button from '@components/Button'
import { CartButtonsProp } from './Cart.types'

export const CartItem = ({ item }: { item: CartProduct }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId))
  }

  const handleAddItem = (product: Product) => {
    dispatch(addItem(product))
  }

  return (
    <View style={styles.cartContainer}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode={'contain'} />
      <View style={styles.contentContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.editQuantityContainer}>
            <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
              <Icon name={'minus-outline'} fill={PrimaryColors.Black} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleAddItem(item)}>
              <Icon name={'plus-outline'} fill={PrimaryColors.Black} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  )
}

export const CartFooter = ({ total }: { total: number }) => (
  <View style={styles.detailsContainer}>
    <View style={styles.totalContainer}>
      <Text style={styles.subtotalText}>Subtotal: </Text>
      <Text>$ {total.toFixed(2)}</Text>
    </View>
    <View style={styles.totalContainer}>
      <Text style={styles.subtotalText}>Shipping:</Text>
      <Text style={styles.freeShipping}>FREE</Text>
    </View>
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.totalText}>$ {total.toFixed(2)}</Text>
    </View>
  </View>
)

export const CartButtons = ({ navigation }: CartButtonsProp) => (
  <View style={styles.buttonsContainer}>
    <Button label='Start Purchase' onPress={() => console.log('Initiate checkout')} />
    <Button label='Continue Shopping' onPress={() => navigation.goBack()} />
  </View>
)

