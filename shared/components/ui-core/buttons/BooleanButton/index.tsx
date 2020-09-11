import React, { ReactNode } from 'react'

import styles from './styles'
import ButtonText from '../../texts/ButtonText'
import { TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native'

interface Props {
  // There is no defined type for Animated.View styles.
  // StyleProp<ViewStyle> won't cover transform.
  style: StyleProp<ViewStyle | any>
  onPress: () => void
  disabled: boolean
  children: ReactNode
}

export default function BooleanButton({
  style,
  onPress,
  children,
  disabled,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Animated.View style={[styles.container, style]}>
        <ButtonText>{children}</ButtonText>
      </Animated.View>
    </TouchableOpacity>
  )
}
