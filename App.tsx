import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import mockData from './mockData.json'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from '@pages/Home'
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import { LoadingHandler } from '@pages/LoadingHandler/LoadingHandler'

const MyApp = () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <LoadingHandler>
            <Home/>
          </LoadingHandler>
        </Provider>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

export default MyApp
