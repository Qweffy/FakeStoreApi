import React, { useEffect } from 'react'
import { Image, ImageBackground, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Spinner } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import styles from './LoadingHandler.styles'
import { LoadingHandlerProps, SplashProps } from './LoadingHandler.types'
import { useGetProductsQuery } from '../../store/services/products'
import { productsReceived } from '../../features/productsSlice'  // Asegúrate de importar la acción correcta

const Logo = require('../../assets/logo.png')
const LoadingScreenBackground = require('../../assets/loading-screen-background.png')

const Splash = ({ showSpinner }: SplashProps) => (
  <SafeAreaView style={[styles.splash, styles.contentContainer]} edges={['top', 'right', 'left']}>
    <ImageBackground source={LoadingScreenBackground} style={styles.contentContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Image source={Logo} style={{ alignSelf: 'center' }} />
      {showSpinner && <Spinner size="giant" />}
    </ImageBackground>
  </SafeAreaView>
)

export const LoadingHandler = ({ children }: LoadingHandlerProps) => {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetProductsQuery()

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(productsReceived(data))
    }
  }, [data, isLoading, dispatch])

  return (
    <View style={styles.container}>
      {children}
      {isLoading && <Splash showSpinner={true} />}
    </View>
  )
}
