import React from 'react'
import he from 'he'
import { View } from 'react-native'

import styles from './styles'
import preventGoingBack from '../../../../shared/preventGoingBack'
import MultipleOptionHeader from '../MultipleOptionHeader'
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

  const onPress = (answer: string) => {
    answerQuestion(questionIndex, answer)

    setTimeout(() => {
      if (questionIndex + 1 < amountOfQuestionsPerGame) {
        navigate(Routes.MultipleOption, { questionIndex: questionIndex + 1 })
      } else {
        navigate(Routes.Results)
      }
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <MultipleOptionHeader
        label={getCurrentQuestionText(questionIndex)}
        title={he.unescape(data[questionIndex].question)}
      />

      <TrueFalseButtons
        onPress={onPress}
        answerForCurrentQuestion={answers[questionIndex]}
      />
    </View>
  )
}

export default preventGoingBack(MultipleOption)
