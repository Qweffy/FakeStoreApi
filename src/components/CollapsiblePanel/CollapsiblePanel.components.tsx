import React from 'react'
import { Icon, IconProps } from '@ui-kitten/components'

export const ArrowIcon = ({ expanded, ...props }: IconProps & { expanded: boolean }) => {
  return expanded ? <Icon {...props} name='minus-outline' /> : <Icon {...props} name='plus-outline' />
}

ArrowIcon.displayName = 'ArrowIcon'

