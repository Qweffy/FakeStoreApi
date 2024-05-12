import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ProductsNavigator } from '@navigation/navigators/ProductsNavigator'

export const AppNavigator = () => (
  <NavigationContainer>
    <ProductsNavigator />
  </NavigationContainer>
)
