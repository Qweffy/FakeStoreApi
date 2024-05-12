import React from 'react'
import { Image, ScrollView } from 'react-native'
import styles from './ProductDetail.styles'
import { Button, Layout, Text } from '@ui-kitten/components'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { ProductDetailProps } from '@pages/ProductDetail/ProductDetail.types'
import { addItem } from '@features/cartSlice'
import { selectProductById } from '@features/productsSlice'
import { RootState } from '@store/store'

export const ProductDetail = ({ route, navigation }: ProductDetailProps) => {
  const { productId } = route.params
  const product = useSelector((state: RootState) => selectProductById(state, productId))
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TopNavigator navigation={navigation} />
        {product && (
          <Layout style={styles.expandedLayout}>
            <Image source={{ uri: product.image }} style={styles.expandedImage} resizeMode={'contain'} />
            <Text style={styles.expandedTitle}>{product.title}</Text>
            <Text category={'h3'}>$ {product.price}</Text>
            <Text style={styles.text}>{product.description}</Text>
            <Layout style={styles.detailContainer}>
              <Text style={styles.label}>Category:</Text>
              <Text style={styles.value}>{product.category}</Text>
            </Layout>
            <Layout style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Layout style={styles.detailContainer}>
                <Text style={styles.label}>Rating:</Text>
                <Text style={styles.value}>{product.rating.rate} ({product.rating.count} reviews)</Text>
              </Layout>
            </Layout>
            <Button onPress={handleAddToCart}>Add to Cart</Button>
          </Layout>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
