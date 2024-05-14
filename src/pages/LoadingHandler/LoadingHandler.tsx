import React, { useEffect, useState } from 'react'
import { Image, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Spinner, Modal, Button, Card, Text } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import styles from './LoadingHandler.styles'
import { LoadingHandlerProps, SplashProps } from './LoadingHandler.types'
import { useGetProductsQuery } from '@store/services/products'
import { productsFailed, productsReceived } from '@features/productsSlice'
import { getErrorMessage } from '@pages/LoadingHandler/LoadingHandler.utils'
import Logo from '@assets/logo.png'

const Splash = ({ showSpinner }: SplashProps) => (
  <SafeAreaView style={[styles.splash, styles.contentContainer]} edges={['top', 'right', 'left']}>
    <StatusBar barStyle={'dark-content'} />
    <Image source={Logo} style={styles.logoStyle} />
    {showSpinner && <Spinner size='giant' status='danger' />}
  </SafeAreaView>
)

export const LoadingHandler = ({ children }: LoadingHandlerProps) => {
  const dispatch = useDispatch()
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isProductsError,
    error: productsError,
  } = useGetProductsQuery()

  useEffect(() => {
    if (products && !isLoadingProducts && !isProductsError) {
      dispatch(productsReceived(products))
    } else if (isProductsError && productsError) {
      dispatch(productsFailed(getErrorMessage(productsError)))
      setErrorModalVisible(true)
    }
  }, [products, isLoadingProducts, isProductsError, productsError, dispatch])

  return (
    <View style={styles.container}>
      {children}
      {isLoadingProducts && <Splash showSpinner={true} />}
      <Modal
        visible={errorModalVisible}
        backdropStyle={styles.modalStyle}
        onBackdropPress={() => setErrorModalVisible(false)}>
        <Card disabled={true}>
          <Text category='h6' status='danger'>Error</Text>
          <Text>{getErrorMessage(productsError)}</Text>
          <Button onPress={() => setErrorModalVisible(false)}>
            <Text>Dismiss</Text>
          </Button>
        </Card>
      </Modal>
    </View>
  )
}

export default LoadingHandler
