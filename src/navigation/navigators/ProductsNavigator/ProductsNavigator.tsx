import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@pages/Home'
import ProductDetail from '@pages/ProductDetail'
import { RootStackParamList } from '@models/navigationTypes'
import Cart from '@pages/Cart'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const ProductsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='ProductDetail' component={ProductDetail} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
)
