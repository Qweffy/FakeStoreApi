import { StyleSheet, ViewStyle } from 'react-native'

type LoadingHandlerStyles = {
  container: ViewStyle
  splash: ViewStyle
  contentContainer: ViewStyle
}

export default StyleSheet.create<LoadingHandlerStyles>({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  splash: {
    zIndex: 1000,
  },
})
