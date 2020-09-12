import React, { ReactNode, useEffect, useMemo } from 'react'
import { TouchableOpacity, Animated } from 'react-native'

import styles from './styles'
import ButtonText from '../../texts/ButtonText'
import { animateTiming } from '../../../../helpers/animations'

interface Props {
  onPress: () => void
  children: ReactNode
  disabled?: boolean
}

export default function StartButton({ children, disabled, onPress }: Props) {
  const buttonScaleAnimatedValue = useMemo(() => new Animated.Value(0), [])

  useEffect(() => {
    const triggerScaleAnimation = (toValue: number = 0) => {
      animateTiming(buttonScaleAnimatedValue, toValue, 300, 0, true).start(() =>
        triggerScaleAnimation(toValue === 0 ? 1 : 0)
      )
    }

    triggerScaleAnimation()
  }, [])

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: buttonScaleAnimatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.02],
            }),
          },
        ],
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        disabled={disabled}
      >
        <ButtonText>{children}</ButtonText>
      </TouchableOpacity>
    </Animated.View>
  )
}
