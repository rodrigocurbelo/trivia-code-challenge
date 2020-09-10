import { StyleSheet } from 'react-native'

import theme from '../../../../shared/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.general.spacing,
    padding: theme.general.spacing * 2,
    borderWidth: 4,
    borderColor: theme.result.wrongAnswerBorderColor,
    borderRadius: theme.buttons.borderRadius,
  },
  correct: {
    borderColor: theme.result.correctAnswerBorderColor,
  },
})
