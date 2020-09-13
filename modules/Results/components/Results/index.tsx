import React, { useMemo } from 'react'
import _ from 'lodash'
import he from 'he'
import {
  View,
  Animated,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'

import styles from './styles'
import Result from '../Result'
import preventGoingBack from '../../../../shared/preventGoingBack'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { RobotFeedback } from '../../../../shared/components/svg'
import { getRobotFacialExpression } from '../../../../shared/helpers/robotFacialExpressions'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { RESULTS_SCROLL_ANIMATIONS_END_IN_PX } from '../../../../shared/constants/resultsAnimations'
import {
  PlayAgainButton,
  LabelAndTitleHeader,
} from '../../../../shared/components/ui-core'
import {
  getRobotContainerAnimation,
  finishUpScrollAnimation,
  getSpeechBubbleOpacity,
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

  const numberOfCorrectAnswers = Object.values(answers).filter(
    (answer, i) => data[i].correct_answer === answer
  ).length

  const onScrollEnd = ({
    nativeEvent: { contentOffset },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    finishUpScrollAnimation(contentOffset.y, scrollY, scrollViewRef)
  }

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
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContainer}
        onMomentumScrollEnd={_.throttle(onScrollEnd, 300, { leading: true })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
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
          speechBubbleOpacity={getSpeechBubbleOpacity(scrollY)}
          facialExpressionType={getRobotFacialExpression(
            numberOfCorrectAnswers
          )}
        />
      </Animated.View>

      <PlayAgainButton
        onPress={startNewGame}
        disabled={
          stillFetchingData || !answers[Object.keys(answers).length - 1]
        }
      >
        Play again
      </PlayAgainButton>
    </View>
  )
}

export default preventGoingBack(Results)
