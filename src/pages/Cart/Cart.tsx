import React from 'react'
import styles from './Cart.styles'
import { Layout, Text } from '@ui-kitten/components'
import { TopNavigator } from '@navigation/navigators/TopNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartProps } from './Cart.types'

export const Cart = ({ navigation }: CartProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigator navigation={navigation} showCart={false} />
      <Layout style={styles.expandedLayout}>
        <Text style={styles.expandedTitle}>Cart</Text>
      </Layout>
    </SafeAreaView>
  )
}
