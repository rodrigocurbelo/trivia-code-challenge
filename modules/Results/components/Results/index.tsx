import React, { useMemo } from 'react'
import _ from 'lodash'
import he from 'he'
import { View, Animated, ScrollView } from 'react-native'

import styles from './styles'
import Result from '../Result'
import preventGoingBack from '../../../../shared/preventGoingBack'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { RobotFeedback } from '../../../../shared/components/svg'
import { getRobotFacialExpression } from '../../../../shared/helpers/robotFacialExpressions'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { RESULTS_SCROLL_ANIMATIONS_END_IN_PX } from '../../../../shared/constants/resultsAnimations'
import { getScrollEventsForHeaderAnimation } from '../../../../shared/helpers/scroll'
import {
  PlayAgainButton,
  LabelAndTitleHeader,
} from '../../../../shared/components/ui-core'
import {
  getSpeechBubbleOpacity,
  getRobotContainerAnimation,
} from '../../helpers/animations'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function Results({
  startNewGame,
  game: { stillFetchingData, data, answers },
}: Props) {
  const scrollY = useMemo(() => new Animated.Value(0), [])
  const scrollViewRef = React.createRef<ScrollView>()

  const numberOfCorrectAnswers = useMemo(
    () =>
      Object.values(answers).filter(
        (answer, i) => data[i].correct_answer === answer
      ).length,
    [answers]
  )

  return (
    <View style={styles.container}>
      <LabelAndTitleHeader
        label="You scored:"
        title={`${numberOfCorrectAnswers} / 10`}
        textContainerMinWidth={scrollY.interpolate({
          inputRange: [0, RESULTS_SCROLL_ANIMATIONS_END_IN_PX * 0.75],
          outputRange: ['100%', '10%'],
          extrapolate: 'clamp',
        })}
      />

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        {...getScrollEventsForHeaderAnimation(scrollY, scrollViewRef)}
      >
        {Object.keys(answers).map((questionIndex: string) => (
          <Result
            key={questionIndex}
            question={he.unescape(data[+questionIndex].question)}
            questionIndex={+questionIndex}
            wasItCorrect={
              answers[+questionIndex] === data[+questionIndex].correct_answer
            }
          />
        ))}
      </ScrollView>

      <Animated.View
        style={[styles.robotContainer, getRobotContainerAnimation(scrollY)]}
      >
        <RobotFeedback
          animate
          speechBubbleOpacity={getSpeechBubbleOpacity(scrollY)}
          facialExpressionType={getRobotFacialExpression(
            numberOfCorrectAnswers
          )}
        />
      </Animated.View>

      <PlayAgainButton
        onPress={startNewGame}
        disabled={
          // Disables the play again button if it was already pressed.
          stillFetchingData || !answers[Object.keys(answers).length - 1]
        }
      >
        Play again
      </PlayAgainButton>
    </View>
  )
}

export default preventGoingBack(Results)
