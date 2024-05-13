import { StyleSheet, ViewStyle } from 'react-native'
import { smallSpace } from '@styles/Spacing'

type CategorySelectorStyleType = {
  container: ViewStyle
  icon: ViewStyle
}

export default StyleSheet.create<CategorySelectorStyleType>({
  container: {
    margin: smallSpace,
  },
  icon: { height: 28, width: 28 },
})
