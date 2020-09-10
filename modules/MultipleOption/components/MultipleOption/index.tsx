import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { NavigationProps } from '../../../../shared/types/Navigation'
import { mapDispatchToProps, mapStateToProps } from '../..'
import {
  LabelAndTitleHeader,
  TrueFalseButtons,
} from '../../../../shared/components/ui-core'
import { getCurrentQuestionText } from '../../../../shared/helpers/questions'

interface OwnProps extends NavigationProps {}

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default function MultipleOption({
  route,
  answerQuestion,
  game: { data },
}: Props) {
  const questionIndex = route.params.questionIndex

  return (
    <View style={styles.container}>
      <LabelAndTitleHeader
        spacingOnTop
        label={getCurrentQuestionText(questionIndex)}
        title={data[questionIndex].question}
      />

      <TrueFalseButtons
        onPress={(answer) =>
          answerQuestion(
            questionIndex,
            data[questionIndex].correct_answer === answer
          )
        }
      />
    </View>
  )
}
