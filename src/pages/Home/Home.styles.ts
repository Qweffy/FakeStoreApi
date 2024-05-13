import { StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'

type HomeStyleType = {
  container: ViewStyle
}

export default StyleSheet.create<HomeStyleType>({
  container: {
    backgroundColor: PrimaryColors.White,
    flex: 1,
  },
})
