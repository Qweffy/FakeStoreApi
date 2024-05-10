import { StyleSheet, ViewStyle } from 'react-native'
import { smallSpace } from '@styles/Spacing'

type CategorySelectorStyleType = {
  container: ViewStyle
}

export default StyleSheet.create<CategorySelectorStyleType>({
  container: {
    margin: smallSpace,
  },
})
