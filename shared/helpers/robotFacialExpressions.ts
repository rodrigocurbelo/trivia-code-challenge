import { FacialExpression } from '../enums/facialExpression'

export function getRobotFacialExpression(numberOfCorrectAnswers: number) {
  let robotFacialExpression

  if (numberOfCorrectAnswers <= 4) {
    robotFacialExpression = FacialExpression.Huh
  } else if (numberOfCorrectAnswers <= 6) {
    robotFacialExpression = FacialExpression.Meh
  } else {
    robotFacialExpression = FacialExpression.Great
  }

  return FacialExpression.Huh
  return robotFacialExpression
}
