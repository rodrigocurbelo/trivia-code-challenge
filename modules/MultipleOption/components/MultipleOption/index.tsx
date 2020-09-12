import React, { useMemo } from 'react'
import he from 'he'
import { View } from 'react-native'

import styles from './styles'
import preventGoingBack from '../../../../shared/preventGoingBack'
import MultipleOptionHeader, { AnswerType } from '../MultipleOptionHeader'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import { TrueFalseButtons } from '../../../../shared/components/ui-core'
import { getCurrentQuestionText } from '../../../../shared/helpers/questions'
import { amountOfQuestionsPerGame } from '../../../../shared/constants/gameSettings'
import { Routes } from '../../../../shared/enums/routes'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

function MultipleOption({
  route,
  answerQuestion,
  game: { data, answers },
  navigation: { navigate },
}: Props) {
  const questionIndex = route.params.questionIndex
  const isCurrentAnswerCorrect =
    answers[questionIndex] === data[questionIndex].correct_answer

  const onPress = (answer: string) => {
    answerQuestion(questionIndex, answer)

    setTimeout(() => {
      if (questionIndex + 1 < amountOfQuestionsPerGame) {
        navigate(Routes.MultipleOption, { questionIndex: questionIndex + 1 })
      } else {
        navigate(Routes.Results)
      }
    }, 2500)
  }

  let answerType

  if (!answers[questionIndex]) {
    answerType = AnswerType.NotAnsweredYet
  } else {
    answerType = isCurrentAnswerCorrect ? AnswerType.Correct : AnswerType.Wrong
  }

  return (
    <View style={styles.container}>
      <MultipleOptionHeader
        label={getCurrentQuestionText(questionIndex)}
        title={he.unescape(data[questionIndex].question)}
        answerType={answerType}
      />

      <TrueFalseButtons
        onPress={onPress}
        answerForCurrentQuestion={answers[questionIndex]}
      />
    </View>
  )
}

export default preventGoingBack(MultipleOption)
