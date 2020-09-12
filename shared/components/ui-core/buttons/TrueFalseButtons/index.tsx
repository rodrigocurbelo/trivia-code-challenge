import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Animated } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import theme from '../../../../theme'
import BooleanButton from '../BooleanButton'
import { BooleanOptionType } from '../../../../enums/game'
import { animateTiming } from '../../../../helpers/animations'
import {
  CLICKED_OPTION_DURATION,
  ALTERNATING_OPTIONS_DURATION,
} from '../../../../constants/MultipleOptionAnimations'
import {
  getAnimatedInterpolation,
  getAnimatedBackground,
} from './helpers/animations'

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
          if (continueAnimating) {
            triggerRecursiveAnimation(toValue === 1 ? 0 : 1)
          }
        })
      }

      if (continueAnimating) {
        if (answerForCurrentQuestion) {
          continueAnimating = false

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
            transform: [{ scale: getAnimatedInterpolation(animatedTrueValue) }],
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
              { scale: getAnimatedInterpolation(animatedFalseValue) },
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
