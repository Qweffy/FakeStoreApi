import React, { Fragment } from 'react'
import { TopNavigation, TopNavigationAction, Icon, Text } from '@ui-kitten/components'
import { NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native'
import { RootStackParamList } from '@models/navigationTypes'
import styles from './TopNavigator.styles'
import { CartBadgeProps, TopNavigatorProps } from '@navigation/navigators/TopNavigator/TopNavigator.types'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { PrimaryColors } from '@styles/Colors'
import { View, TouchableOpacity } from 'react-native'

const CartBadge = ({ cartItemCount }: CartBadgeProps) => {
  return (
    cartItemCount > 0 && (
      <View style={styles.cartContainer}>
        <Text style={styles.cartText}>{cartItemCount}</Text>
      </View>
    )
  )
}

export const TopNavigator = ({ showCart = true }: TopNavigatorProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const canGoBack = useNavigationState((state) => state.routes.length > 1)

  const navigateBack = () => canGoBack && navigation.goBack()
  const navigateToCart = () => navigation.navigate('Cart')
  const cartItemCount = useSelector((state: RootState) => state.cart.cartItemCount)

  return (
    <TopNavigation
      style={styles.container}
      accessoryLeft={
        canGoBack
          ? () => (
            <TopNavigationAction
              icon={(props) => <TouchableOpacity onPress={navigateBack} activeOpacity={0.7}><Icon {...props}
                                                                                                  name={'arrow-ios-back-outline'}
                                                                                                  fill={PrimaryColors.White}
                                                                                                  style={styles.iconBack} />
              </TouchableOpacity>}
            />
          )
          : undefined
      }
      accessoryRight={
        showCart
          ? () => (
            <TopNavigationAction
              icon={(props) => (
                <TouchableOpacity onPress={navigateToCart} activeOpacity={0.7}>
                  <Icon {...props} name={'shopping-cart-outline'} fill={PrimaryColors.White} style={styles.iconCart} />
                  <CartBadge cartItemCount={cartItemCount} />
                </TouchableOpacity>
              )}
            />
          )
          : undefined
      }
    />
  )
}
