import React from 'react'
import { Layout, Text, Card } from '@ui-kitten/components'
import { Image } from 'react-native'
import styles from './ProductCard.styles'
import { ProductCardProps } from '@components/ProductCard/ProductCard.types'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '@models/navigationTypes'
import Product from '@models/Products'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToProductDetail = (product: Product) => {
    navigation.navigate('ProductDetail', { product })
  }

  return (
    <Card onPress={() => navigateToProductDetail(product)} style={styles.card}>
      <Layout style={styles.collapsedLayout}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
      </Layout>
    </Card>
  )
}
