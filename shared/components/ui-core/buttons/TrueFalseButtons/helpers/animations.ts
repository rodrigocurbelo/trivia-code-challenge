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

export const getAnimatedTransform = (animatedValue: Animated.Value) => {
  const scaleInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  })

  return [{ scaleX: scaleInterpolation }, { scaleY: scaleInterpolation }]
}

export const animateIndividualBooleanButton = (
  animatedValue: Animated.Value,
  modifiedToValue: number,
  duration: number
) => {
  return Animated.timing(animatedValue, {
    toValue: modifiedToValue,
    duration,
    easing: Easing.ease,
    useNativeDriver: false,
  })
}
