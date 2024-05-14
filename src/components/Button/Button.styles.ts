import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'
import { bodyRegular } from '@styles/Fonts'
import { mediumSize } from '@styles/Size'

type ButtonStyleType = {
  buttonContainer: ViewStyle
  button: ViewStyle
  buttonLabel: TextStyle
}

export default StyleSheet.create<ButtonStyleType>({
  button: {
    alignItems: 'center',
    backgroundColor: PrimaryColors.Black,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 56,
    paddingVertical: mediumSize,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonLabel: {
    ...bodyRegular,
    color: PrimaryColors.White,
  },
})
