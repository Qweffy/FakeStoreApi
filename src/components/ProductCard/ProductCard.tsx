import React from 'react'
import { Text, Card } from '@ui-kitten/components'
import { Image, View } from 'react-native'
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
    <Card onPress={navigateToProductDetail} style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
      </View>
    </Card>
  )
}
