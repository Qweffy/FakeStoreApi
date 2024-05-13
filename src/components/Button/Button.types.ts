import { ViewStyle } from 'react-native'

export type ButtonProps = {
  isLoading?: boolean
  mainColor?: string
  disabled?: boolean
  label: string
  containerStyles?: ViewStyle
  buttonStyles?: ViewStyle
  labelStyles?: ViewStyle
  onPress: (() => NonNullable<unknown>) | (() => void)
}

