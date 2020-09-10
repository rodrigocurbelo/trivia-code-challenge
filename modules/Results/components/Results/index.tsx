import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import Result from '../Result'
import {
  RobotMehSvg,
  RobotHuhSvg,
  RobotGreatSvg,
} from '../../../../shared/components/svg'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { LabelAndTitleHeader } from '../../../../shared/components/ui-core'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function Results({ game: { data, answers } }: Props) {
  const numberOfCorrectAnswers = Object.values(answers).filter((v) => v).length

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
            question={data[+questionIndex].question}
            wasItCorrect={answers[+questionIndex]}
            questionIndex={+questionIndex}
          />
        ))}
      </ScrollView>
    </View>
  )
}
