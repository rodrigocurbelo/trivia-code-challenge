import { amountOfQuestionsPerGame } from '../constants/gameSettings'

export function getCurrentQuestionText(questionIndex: number) {
  return `${questionIndex + 1} / ${amountOfQuestionsPerGame}`
}
