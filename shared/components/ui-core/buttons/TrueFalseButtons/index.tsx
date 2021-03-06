import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Animated } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import theme from '../../../../theme'
import BooleanButton from '../BooleanButton'
import { BooleanOptionType } from '../../../../enums/game'
import { getAnimatedBackground } from './helpers/animations'
import {
  animateTiming,
  getSimpleInterpolation,
} from '../../../../helpers/animations'
import {
  CLICKED_OPTION_DURATION,
  ALTERNATING_OPTIONS_DURATION,
} from '../../../../constants/MultipleOptionAnimations'

interface Props {
  onPress: (selected: string) => void
  answerForCurrentQuestion?: string
}

export default function TrueFalseButtons({
  onPress,
  answerForCurrentQuestion,
}: Props) {
  const [animatedTrueValue, animatedFalseValue] = useMemo(
    () => [new Animated.Value(0), new Animated.Value(0)],
    []
  )

  useFocusEffect(
    React.useCallback(() => {
      // Animates both buttons in parallel, potentially inverting one of them,
      // meaning (falseValue = 1 - trueValue)
      const animateBoth = (
        toValue: number,
        invertFalse: boolean,
        duration = ALTERNATING_OPTIONS_DURATION / 2
      ) => {
        return Animated.parallel([
          animateTiming(animatedTrueValue, toValue, duration),
          animateTiming(
            animatedFalseValue,
            invertFalse ? 1 - toValue : toValue,
            duration
          ),
        ])
      }

      const stopBoth = () => {
        animatedTrueValue.stopAnimation()
        animatedFalseValue.stopAnimation()
      }

      let continueAnimating = true

      const triggerRecursiveAnimation = (toValue: number) => {
        animateBoth(toValue, true).start(() => {
          // If the animation is supposed to stop, we make sure that it doesn't
          // get triggered again.
          if (continueAnimating) {
            triggerRecursiveAnimation(toValue === 1 ? 0 : 1)
          }
        })
      }

      if (continueAnimating) {
        if (answerForCurrentQuestion) {
          continueAnimating = false

          // Stop the animation and immediately go forward/backwards to
          // highlight the pressed one.
          stopBoth()
          animateBoth(
            answerForCurrentQuestion === BooleanOptionType.True ? 1 : 0,
            true,
            CLICKED_OPTION_DURATION
          ).start()
        } else {
          triggerRecursiveAnimation(0)
        }
      }

      // When the screen is no longer onFocus, we make sure that the
      // animation stops.
      return () => (continueAnimating = false)
    }, [answerForCurrentQuestion])
  )

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BooleanButton
          onPress={() => onPress(BooleanOptionType.True)}
          disabled={!!answerForCurrentQuestion}
          style={{
            transform: [
              { scale: getSimpleInterpolation(animatedTrueValue, [1, 1.1]) },
            ],
            backgroundColor: getAnimatedBackground(
              animatedTrueValue,
              theme.buttons.boolean.trueBackgroundColor
            ),
          }}
        >
          True
        </BooleanButton>
      </View>

      <View style={styles.buttonContainer}>
        <BooleanButton
          onPress={() => onPress(BooleanOptionType.False)}
          disabled={!!answerForCurrentQuestion}
          style={{
            transform: [
              { scale: getSimpleInterpolation(animatedFalseValue, [1, 1.1]) },
            ],
            backgroundColor: getAnimatedBackground(
              animatedFalseValue,
              theme.buttons.boolean.falseBackgroundColor
            ),
          }}
        >
          False
        </BooleanButton>
      </View>
    </View>
  )
}
