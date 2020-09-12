import { Animated, Easing } from 'react-native'

import theme from '../../../../../theme'

export const getAnimatedBackground = (
  animatedValue: Animated.Value,
  animateTo: string
) => {
  return animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.buttons.boolean.defaultBackgroundColor, animateTo],
  })
}

export const getAnimatedInterpolation = (animatedValue: Animated.Value) => {
  return animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  })
}
