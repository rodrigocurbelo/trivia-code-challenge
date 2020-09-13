import React from 'react'
import { View, Animated } from 'react-native'

import styles from './styles'
import Title from '../Title'
import Label from '../Label'

export interface Props {
  title: string
  label: string
  spacingOnTop?: boolean
  textContainerMinWidth?: string | number | Animated.AnimatedInterpolation
}

export default function LabelAndTitleHeader({
  title,
  label,
  spacingOnTop,
  textContainerMinWidth = '100%',
}: Props) {
  return (
    <View style={[styles.container, spacingOnTop && styles.spacingOnTop]}>
      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={{ minWidth: textContainerMinWidth }}>
          <Label>{label}</Label>
        </Animated.View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Animated.View style={{ minWidth: textContainerMinWidth }}>
          <Title>{title}</Title>
        </Animated.View>
      </View>
    </View>
  )
}
