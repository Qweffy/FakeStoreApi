import React, { Fragment } from 'react'
import { Layout, TopNavigation, TopNavigationAction, Icon, Text } from '@ui-kitten/components'
import { NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native'
import { RootStackParamList } from '@models/navigationTypes'
import styles from './TopNavigator.styles'
import { CartBadgeProps, TopNavigatorProps } from '@navigation/navigators/TopNavigator/TopNavigator.types'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'

const CartBadge = ({ cartItemCount }: CartBadgeProps) => {
  return cartItemCount > 0 && (
    <Layout style={styles.cartContainer}>
      <Text style={styles.cartText}>{cartItemCount}</Text>
    </Layout>
  )
}
export const TopNavigator = ({ showCart = true }: TopNavigatorProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const canGoBack = useNavigationState(state => state.routes.length > 1)

  const navigateBack = () => canGoBack && navigation.goBack()
  const navigateToCart = () => navigation.navigate('Cart')
  const cartItemCount = useSelector((state: RootState) => state.cart.cartItemCount)

  return (
    <Layout>
      <TopNavigation
        alignment='center'
        accessoryLeft={canGoBack ? () => <TopNavigationAction
          icon={<Icon name={'arrow-ios-back-outline'} style={styles.icon} />} onPress={navigateBack} /> : undefined}
        accessoryRight={showCart ? () => (
          <TopNavigationAction
            icon={<Fragment>
              <Icon name={'shopping-cart-outline'} style={styles.icon} />
              <CartBadge cartItemCount={cartItemCount} />
            </Fragment>}
            onPress={navigateToCart}>

          </TopNavigationAction>
        ) : undefined}
      />
    </Layout>
  )
}
