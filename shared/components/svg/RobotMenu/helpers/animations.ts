import { Animated, Easing } from 'react-native'

export const animateIndividual = (
  animatedValue: Animated.Value | Animated.ValueXY,
  modifiedToValue: number | { x: number; y: number },
  duration: number,
  delay: number = 0
) => {
  return Animated.timing(animatedValue, {
    toValue: modifiedToValue,
    delay,
    easing: Easing.ease,
    duration,
    useNativeDriver: true,
  })
}

export const getEyesAnimation = (
  animatedValue: Animated.Value,
  outputRange: number[]
) => ({
  transform: [
    {
      translateY: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange,
      }),
    },
  ],
})

export const getSpeechBubbleAnimation = (
  animatedValue: Animated.Value,
  translateYOutputRange: number[]
) => ({
  opacity: animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  }),
  transform: [
    {
      translateY: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: translateYOutputRange,
      }),
    },
  ],
})
