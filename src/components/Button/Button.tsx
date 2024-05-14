import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Spinner } from '@ui-kitten/components'
import { ButtonProps } from './Button.types'
import styles from './Button.styles'

export const Button = ({
                         label,
                         containerStyles = {},
                         buttonStyles = {},
                         labelStyles = {},
                         onPress,
                         isLoading = false,
                       }: ButtonProps) => {
  return (
    <View style={[styles.buttonContainer, containerStyles]}>
      <TouchableOpacity
        style={[styles.button, buttonStyles]}
        onPress={onPress}>
        {isLoading ? (
          <Spinner size='small' status='basic' />
        ) : (
          <Text style={[styles.buttonLabel, labelStyles]}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}
