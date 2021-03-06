import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  text: {
    color: theme.text.body.defaultColor,
    fontSize: theme.text.body.size,
  },
  bold: {
    color: theme.text.body.boldColor,
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
})
