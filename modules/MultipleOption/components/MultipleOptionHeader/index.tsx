import React, { useEffect, useMemo } from 'react'
import { View, Dimensions, Animated, Text } from 'react-native'

import styles from './styles'
import theme from '../../../../shared/theme'
import { RobotFeedback } from '../../../../shared/components/svg'
import { FacialExpression } from '../../../../shared/enums/facialExpression'
import LabelAndTitleHeader, {
  Props as LabelAndTitleHeaderProps,
} from '../../../../shared/components/ui-core/texts/LabelAndTitleHeader'
import {
  animateTiming,
  opacityAndScaleAnimation,
  opacityAndTranslateYAnimation,
} from '../../../../shared/helpers/animations'

export enum AnswerType {
  Wrong,
  Correct,
  NotAnsweredYet,
}

interface Props extends LabelAndTitleHeaderProps {
  answerType: AnswerType
}

const windowWidth = Dimensions.get('window').width

export default function MultipleOptionHeader({ answerType, ...props }: Props) {
  const robotsXOffset = theme.robot.sizes.feedback.width - 50

  const [headerAnimatedValue, rightOrWrongAnimatedValue] = useMemo(
    () => [new Animated.Value(0), new Animated.Value(0)],
    []
  )

  const [robotWrongXAnimatedValue, robotGreatXAnimatedValue] = useMemo(
    () => [new Animated.Value(windowWidth), new Animated.Value(-robotsXOffset)],
    []
  )

  useEffect(() => {
    if (answerType !== AnswerType.NotAnsweredYet) {
      animateTiming(headerAnimatedValue, 1, 200).start(() => {
        animateTiming(rightOrWrongAnimatedValue, 1, 200, 0, true).start()
      })

      if (answerType === AnswerType.Wrong) {
        animateTiming(
          robotWrongXAnimatedValue,
          windowWidth - robotsXOffset,
          400,
          200,
          false
        ).start(() => {
          animateTiming(
            robotWrongXAnimatedValue,
            windowWidth,
            400,
            1000
          ).start()
        })
      } else if (answerType === AnswerType.Correct) {
        animateTiming(robotGreatXAnimatedValue, -50, 400, 200).start(() => {
          animateTiming(
            robotGreatXAnimatedValue,
            -robotsXOffset,
            400,
            1000
          ).start()
        })
      }
    } else {
      Animated.parallel([
        animateTiming(headerAnimatedValue, 0, 200),
        animateTiming(rightOrWrongAnimatedValue, 0, 200, 0, true),
      ]).start()
    }
  }, [answerType])

  let correctWrongText: string = ''

  if (answerType === AnswerType.Correct) {
    correctWrongText = 'Correct!'
  } else if (answerType === AnswerType.Wrong) {
    correctWrongText = 'Wrong'
  }

  return (
    <View>
      <Animated.View
        style={[
          styles.container,
          opacityAndScaleAnimation(headerAnimatedValue, [1, 0.9]),
        ]}
      >
        <LabelAndTitleHeader spacingOnTop {...props}></LabelAndTitleHeader>
      </Animated.View>

      <Animated.View
        style={[styles.robotWrong, { left: robotWrongXAnimatedValue }]}
      >
        <RobotFeedback
          facialExpressionType={FacialExpression.Wrong}
          hideSpeechBubble
        />
      </Animated.View>

      <Animated.View
        style={[styles.robotGreat, { left: robotGreatXAnimatedValue }]}
      >
        <View style={styles.robotGreatContainer}>
          <RobotFeedback
            facialExpressionType={FacialExpression.Great}
            hideSpeechBubble
          />
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.feedbackTextContainer,
          opacityAndTranslateYAnimation(rightOrWrongAnimatedValue, [35, 0]),
        ]}
      >
        <Text style={styles.feedbackText}>{correctWrongText}</Text>
      </Animated.View>
    </View>
  )
}
