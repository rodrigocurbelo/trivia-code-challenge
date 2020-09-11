import React from 'react'
import he from 'he'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import Result from '../Result'
import preventGoingBack from '../../../../shared/preventGoingBack'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import {
  LabelAndTitleHeader,
  PlayAgainButton,
} from '../../../../shared/components/ui-core'
import {
  RobotMehSvg,
  RobotHuhSvg,
  RobotGreatSvg,
} from '../../../../shared/components/svg'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function Results({ startNewGame, game: { data, answers } }: Props) {
  const numberOfCorrectAnswers = Object.values(answers).filter(
    (answer, i) => data[i].correct_answer === answer
  ).length

  const renderRobot = () => {
    if (numberOfCorrectAnswers <= 4) {
      return <RobotHuhSvg />
    }

    if (numberOfCorrectAnswers <= 6) {
      return <RobotMehSvg />
    }

    return <RobotGreatSvg />
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

      <PlayAgainButton onPress={startNewGame}>Play again</PlayAgainButton>
    </View>
  )
}

export default preventGoingBack(Results)
