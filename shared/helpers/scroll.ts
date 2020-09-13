import _ from 'lodash'
import {
  Animated,
  ScrollView,
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'

import { RESULTS_SCROLL_ANIMATIONS_END_IN_PX } from '../constants/resultsAnimations'

const finishUpScrollAnimation = _.debounce(
  (
    offsetY: number,
    scrollY: Animated.Value,
    scrollViewRef: React.RefObject<ScrollView>
  ): void => {
    if (offsetY < RESULTS_SCROLL_ANIMATIONS_END_IN_PX) {
      console.log('finishUpScrollAnimation')

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
  },
  500,
  { leading: true }
)

let ignoreNextMomentumEndEvent = false

export function getScrollEventsForHeaderAnimation(
  scrollY: Animated.Value,
  scrollViewRef: React.RefObject<ScrollView>
) {
  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    finishUpScrollAnimation(
      event?.nativeEvent?.contentOffset?.y,
      scrollY,
      scrollViewRef
    )
  }

  return {
    onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (ignoreNextMomentumEndEvent) {
        ignoreNextMomentumEndEvent = false
      } else {
        // console.log(event)
        console.log(
          Platform.OS,
          'triggered from onMomentumScrollEnd.',
          Date.now()
        )
        onScrollEnd(event)
      }
    },
    onMomentumScrollBegin: () => {
      console.log('CALLED.')
    },
    onScrollEndDrag: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (Platform.OS === 'ios') {
        if (event.nativeEvent.velocity?.y === 0) {
          onScrollEnd(event)
          console.log(
            Platform.OS,
            'triggered from onScrollEndDrag.',
            Date.now()
          )
        } else {
          ignoreNextMomentumEndEvent = true
          console.log(Platform.OS, 'propagation stopped')
        }
      }
    },
    onScroll: Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: false }
    ),
  }
}
