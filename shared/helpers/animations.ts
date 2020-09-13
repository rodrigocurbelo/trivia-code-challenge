import { Animated, Easing } from 'react-native'

export const animateTiming = (
  animatedValue: Animated.Value | Animated.ValueXY,
  toValue: number | { x: number; y: number },
  duration: number,
  delay: number = 0,
  useNativeDriver = false
) => {
  return Animated.timing(animatedValue, {
    toValue,
    delay,
    easing: Easing.ease,
    duration,
    useNativeDriver,
  })
}

export const opacityAndTranslateYAnimation = (
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

export const opacityAndScaleAnimation = (
  animatedValue: Animated.Value,
  scaleOutputRange: number[]
) => ({
  opacity: animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  }),
  transform: [
    {
      scale: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: scaleOutputRange,
      }),
    },
  ],
})

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

export const getSimpleInterpolation = (
  animatedValue: Animated.Value,
  outputRange: number[]
) => {
  return animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: outputRange,
    extrapolate: 'clamp',
  })
}

export const getTranslateXStyles = (
  animatedValue: Animated.Value,
  outputRange: number[]
) => {
  return {
    transform: [
      { translateX: getSimpleInterpolation(animatedValue, outputRange) },
    ],
  }
}

// In order to roll the eyes, we need to have several break points around
// the circumference (In this case, the robot's eyes). If we only had the
// bare minimum (4, one on each side) the animation would look unnatural.
export const getMehPupilsTransform = (animatedValue: Animated.Value) => {
  const radius = 4
  // With this radius, 7 break points makes it look natural enough.
  const numberOfPointsInCircumference = 7

  const inputRange = []
  const outputXRange = []
  const outputYRange = []

  for (
    let breakPointIndex = 0;
    breakPointIndex <= numberOfPointsInCircumference;
    ++breakPointIndex
  ) {
    // The inputs for both axis are distributed equally.
    const inputValue = breakPointIndex / numberOfPointsInCircumference

    inputRange.push(inputValue)
    outputXRange.push(-Math.sin(inputValue * Math.PI * 2) * radius)
    outputYRange.push(Math.cos(inputValue * Math.PI * 2) * radius - 3)
  }

  return [
    {
      translateX: animatedValue.interpolate({
        inputRange: inputRange,
        outputRange: outputXRange,
      }),
    },
    {
      translateY: animatedValue.interpolate({
        inputRange: inputRange,
        outputRange: outputYRange,
      }),
    },
  ]
}
