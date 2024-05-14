import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import styles from './ProductDetail.styles'
import { Text } from '@ui-kitten/components'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { ProductDetailProps } from '@pages/ProductDetail/ProductDetail.types'
import { addItem } from '@features/cartSlice'
import { selectProductById } from '@features/productsSlice'
import { RootState } from '@store/store'
import { mediumSpace } from '@styles/Spacing'
import Button from '@components/Button'

export const ProductDetail = ({ route, navigation }: ProductDetailProps) => {
  const { productId } = route.params
  const product = useSelector((state: RootState) => selectProductById(state, productId))
  const isLoading = useSelector((state: RootState) => state.cart.isLoading)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigator navigation={navigation} />
      <ScrollView style={styles.container}>
        {product && (
          <View style={styles.contentContainer}>
            <Image source={{ uri: product.image }} style={styles.expandedImage} resizeMode={'contain'} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>$ {product.price}</Text>
            <Text style={styles.text}>{product.description}</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.label}>Category:</Text>
              <Text style={styles.value}>{product.category}</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.label}>Rating:</Text>
              <Text style={styles.value}>{product.rating.rate} ({product.rating.count} reviews)</Text>
            </View>
          </View>
        )}
      </ScrollView>
      <Button
        containerStyles={{ margin: mediumSpace }}
        label={'Add to Cart'}
        onPress={handleAddToCart}
        isLoading={isLoading}
      />
    </SafeAreaView>
  )
}
