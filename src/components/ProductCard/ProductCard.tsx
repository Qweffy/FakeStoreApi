import React from 'react'
import { Layout, Text, Card } from '@ui-kitten/components'
import { Image } from 'react-native'
import styles from './ProductCard.styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@models/navigationTypes'
import { ProductCardProps } from '@components/ProductCard/ProductCard.types'

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetail', { productId: product.id })
  }

  return (
    <Card onPress={navigateToProductDetail} style={styles.card}>
      <Layout style={styles.collapsedLayout}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
      </Layout>
    </Card>
  )
}
