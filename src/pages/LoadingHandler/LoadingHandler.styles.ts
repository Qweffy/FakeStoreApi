import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'

type LoadingHandlerStyles = {
  container: ViewStyle
  splash: ViewStyle
  contentContainer: ViewStyle
  modalStyle: ViewStyle
  logoStyle: ImageStyle
}

export default StyleSheet.create<LoadingHandlerStyles>({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 100,
  },
  logoStyle: { alignSelf: 'center', width: 300 },
  modalStyle: { backgroundColor: PrimaryColors.Shadow },
  splash: {
    zIndex: 1000,
  },
})
