import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { store, persistor } from '@store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { LoadingHandler } from '@pages/LoadingHandler/LoadingHandler'
import { AppNavigator } from './src/navigation'

const MyApp = () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LoadingHandler>
              <AppNavigator />
            </LoadingHandler>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

export default MyApp
