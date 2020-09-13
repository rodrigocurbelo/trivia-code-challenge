import { FacialExpression } from '../enums/facialExpression'

export function getRobotFacialExpression(numberOfCorrectAnswers: number) {
  let robotFacialExpression

  if (numberOfCorrectAnswers <= 4) {
    robotFacialExpression = FacialExpression.Wrong
  } else if (numberOfCorrectAnswers <= 6) {
    robotFacialExpression = FacialExpression.Meh
  } else {
    robotFacialExpression = FacialExpression.Great
  }

  return robotFacialExpression
}
