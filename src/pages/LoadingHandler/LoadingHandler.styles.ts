import { StyleSheet, ViewStyle } from 'react-native'

type LoadingHandlerStyles = {
  container: ViewStyle
  splash: ViewStyle
  contentContainer: ViewStyle
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
    left:0,
    position: 'absolute',
    right:0,
    top: 100,
  },
  splash: {
    zIndex: 1000,
  },
})
