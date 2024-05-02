import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import mockData from './mockData.json'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from '@pages/Home'

const MyApp = () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Home products={mockData}/>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

export default MyApp
