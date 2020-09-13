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
