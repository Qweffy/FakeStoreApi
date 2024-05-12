import React from 'react'
import { Image } from 'react-native'
import styles from './ProductDetail.styles'
import { Icon, Layout, Text } from '@ui-kitten/components'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductDetailProps } from '@pages/ProductDetail/ProductDetail.types'

export const ProductDetail = ({ route, navigation }: ProductDetailProps) => {
  const { product } = route.params
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigator navigation={navigation} />
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
          <Icon name={'minus-outline'} style={styles.icon} />
        </Layout>
      </Layout>
    </SafeAreaView>
  )
}
