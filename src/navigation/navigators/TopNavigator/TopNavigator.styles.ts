import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

type TopNavigatorStyleType = {
  icon: ViewStyle
  cartContainer: ViewStyle
  cartText: TextStyle
}

export default StyleSheet.create<TopNavigatorStyleType>({
  cartContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: -5,
    width: 20,
  },
  cartText: { color: 'white', fontSize: 12 },
  icon: { height: 32, marginLeft: -16, width: 32,
  },
})
