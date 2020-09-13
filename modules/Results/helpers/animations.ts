import { ScrollView, Dimensions, Animated } from 'react-native'
import { RESULTS_SCROLL_ANIMATIONS_END_IN_PX } from '../../../shared/constants/resultsAnimations'

const windowWidth = Dimensions.get('window').width

export function getRobotContainerAnimation(scrollY: Animated.Value) {
  return {
    top: scrollY.interpolate({
      inputRange: [0, RESULTS_SCROLL_ANIMATIONS_END_IN_PX],
      outputRange: [90, -65],
      extrapolate: 'clamp',
    }),
    left: scrollY.interpolate({
      inputRange: [0, RESULTS_SCROLL_ANIMATIONS_END_IN_PX],
      outputRange: [windowWidth / 2 - 100, windowWidth - 160],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: scrollY.interpolate({
          inputRange: [0, RESULTS_SCROLL_ANIMATIONS_END_IN_PX],
          outputRange: [1, 0.6],
          extrapolate: 'clamp',
        }),
      },
    ],
  }
}

export function getSpeechBubbleOpacity(
  scrollY: Animated.Value
): Animated.AnimatedInterpolation {
  return scrollY.interpolate({
    inputRange: [
      0,
      RESULTS_SCROLL_ANIMATIONS_END_IN_PX * 0.5,
      RESULTS_SCROLL_ANIMATIONS_END_IN_PX * 0.75,
    ],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  })
}

export function finishUpScrollAnimation(
  offsetY: number,
  scrollY: Animated.Value,
  scrollViewRef: React.RefObject<ScrollView>
): void {
  if (offsetY < RESULTS_SCROLL_ANIMATIONS_END_IN_PX) {
    scrollY.stopAnimation(() => {
      scrollViewRef.current?.scrollTo({
        animated: true,
        x: 0,
        y:
          offsetY < RESULTS_SCROLL_ANIMATIONS_END_IN_PX / 2
            ? 0
            : RESULTS_SCROLL_ANIMATIONS_END_IN_PX,
      })
    })
  }
}
