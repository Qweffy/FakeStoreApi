import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'
import { bodyRegular } from '@styles/Fonts'
import { mediumSize } from '@styles/Size'

type ButtonStyleType = {
  buttonContainer: ViewStyle
  button: ViewStyle
  disabledButton: ViewStyle
  disabledLabel: TextStyle
  buttonLabel: TextStyle
  spinner: TextStyle
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
  disabledButton: {
    backgroundColor: PrimaryColors.LightGray,
  },
  disabledLabel: {
    color: PrimaryColors.Black,
  },
  spinner: {
    color: PrimaryColors.White,
    marginRight: 8,
  },
})
