import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { Body } from '../../../../shared/components/ui-core'
import { amountOfQuestionsPerGame } from '../../../../shared/constants/gameSettings'

interface Props {
  question: string
  wasItCorrect: boolean
  questionIndex: number
}

export default function Result({
  question,
  wasItCorrect,
  questionIndex,
}: Props) {
  return (
    <View style={[styles.container, wasItCorrect && styles.correct]}>
      <Body center bold>
        {questionIndex + 1} / {amountOfQuestionsPerGame}
      </Body>
      <Body>{question}</Body>
    </View>
  )
}
