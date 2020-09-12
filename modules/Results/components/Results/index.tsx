import React from 'react'
import he from 'he'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import Result from '../Result'
import preventGoingBack from '../../../../shared/preventGoingBack'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { RobotFeedback } from '../../../../shared/components/svg'
import { FacialExpression } from '../../../../shared/components/svg/RobotFeedback'
import {
  LabelAndTitleHeader,
  PlayAgainButton,
} from '../../../../shared/components/ui-core'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function Results({
  startNewGame,
  game: { stillFetchingData, data, answers },
}: Props) {
  const playAgainDisabled =
    stillFetchingData || !answers[Object.keys(answers).length - 1]
  const numberOfCorrectAnswers = Object.values(answers).filter(
    (answer, i) => data[i].correct_answer === answer
  ).length

  const renderRobot = () => {
    if (numberOfCorrectAnswers <= 4) {
      return <RobotFeedback facialExpressionType={FacialExpression.Huh} />
    }

    if (numberOfCorrectAnswers <= 6) {
      return <RobotFeedback facialExpressionType={FacialExpression.Meh} />
    }

    return <RobotFeedback facialExpressionType={FacialExpression.Great} />
  }

  return (
    <View style={styles.container}>
      <LabelAndTitleHeader
        label="You scored:"
        title={`${numberOfCorrectAnswers} / 10`}
      />

      <View style={styles.imageContainer}>{renderRobot()}</View>

      <ScrollView>
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

      <PlayAgainButton disabled={playAgainDisabled} onPress={startNewGame}>
        Play again
      </PlayAgainButton>
    </View>
  )
}

export default preventGoingBack(Results)
