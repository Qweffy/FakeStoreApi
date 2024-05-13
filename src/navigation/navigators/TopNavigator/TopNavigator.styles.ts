import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'

type TopNavigatorStyleType = {
  container: ViewStyle
  iconBack: ViewStyle
  iconCart: ViewStyle
  cartContainer: ViewStyle
  cartText: TextStyle
}

export default StyleSheet.create<TopNavigatorStyleType>({
  cartContainer: {
    alignItems: 'center',
    backgroundColor: PrimaryColors.Danger,
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
    width: 20,
  },
  cartText: { color: PrimaryColors.White, fontSize: 12 },
  container: { backgroundColor: PrimaryColors.Black },
  iconBack: { height: 28, width: 28 },
  iconCart: { height: 28, width: 28 },
})
