import _ from 'lodash'
import {
  Animated,
  ScrollView,
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'

import { RESULTS_SCROLL_ANIMATIONS_END_IN_PX } from '../constants/resultsAnimations'

// We keep track of this, because we don't want to abruptly ref.scrollTo when the
// user is in the middle of scrolling.
let isBeingDragged = false

// On Android, onMomentumScrollEnd will be triggered every time the scroll stops,
// which makes it the best place to decide if we need to finish up the animation.
// However, on iOS, onMomentumScrollEnd will only be called if
// event.nativeEvent.velocity.y >= 0 at the moment that onScrollEndDrag gets
// triggered. So, if on iOS, we need to call finishUpScrollAnimation, when velocity
// is 0, and cancel the next onMomentumScrollEnd.
let ignoreNextMomentumEndEvent = false

// In this context, "finishing up the animation" means not leaving the scroll
// between y = 0 and y = RESULTS_SCROLL_ANIMATIONS_END_IN_PX, but scrolling to
// whichever end is nearest once the ScrollView stopped scrolling.
const finishUpScrollAnimation = _.debounce(
  (
    offsetY: number,
    scrollY: Animated.Value,
    scrollViewRef: React.RefObject<ScrollView>
  ): void => {
    if (offsetY < RESULTS_SCROLL_ANIMATIONS_END_IN_PX && !isBeingDragged) {
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

// This function will return the props we can pass to a <ScrollView> in order to
// trigger the header animation.
export function getScrollEventsForHeaderAnimation(
  scrollY: Animated.Value,
  scrollViewRef: React.RefObject<ScrollView>
) {
  // As the magic happens inside a callback that we passed to _.debounce (which its
  // returned value is on finishUpScrollAnimation), we won't be able to read event
  // without event.persist(). Which would affect performance.
  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    finishUpScrollAnimation(
      event?.nativeEvent?.contentOffset?.y,
      scrollY,
      scrollViewRef
    )
  }

  return {
    // According to https://reactnative.dev/docs/0.51/scrollview#scrolleventthrottle
    // "You will not notice a difference between values set between 1-16 as the
    // JS run loop is synced to the screen refresh rate"
    scrollEventThrottle: 16,
    onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (ignoreNextMomentumEndEvent) {
        ignoreNextMomentumEndEvent = false
      } else {
        onScrollEnd(event)
      }
    },
    onScrollBeginDrag: () => {
      isBeingDragged = true
    },
    onScrollEndDrag: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      isBeingDragged = false

      if (Platform.OS === 'ios') {
        if (event.nativeEvent.velocity?.y === 0) {
          // if velocity.y === 0 && ios, onMomentumScrollEnd won't be triggered.
          onScrollEnd(event)
        } else {
          // Otherwise, we don't want to trigger finishUpScrollAnimation twice.
          ignoreNextMomentumEndEvent = true
        }
      }
    },
    // This will automatically update scrollY with the position of the scroll.
    onScroll: Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      // Some of the properties we use on this animation do not support using
      // the native driver.
      { useNativeDriver: false }
    ),
  }
}
