import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './Button.types'

import styles from './Button.styles'

export const Button = ({
                         disabled = false,
                         label,
                         containerStyles = {},
                         buttonStyles = {},
                         labelStyles = {},
                         onPress,
                       }: ButtonProps) => {
  const disabledLabel = disabled ? styles.disabledLabel : {}
  const disabledButton = disabled ? styles.disabledButton : {}

  return (
    <View style={[styles.buttonContainer, containerStyles]}>
      <TouchableOpacity
        style={[styles.button, disabledButton, buttonStyles]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.buttonLabel, disabledLabel, labelStyles]}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}
