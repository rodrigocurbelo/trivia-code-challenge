import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  text: {
    color: theme.text.label.color,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.text.label.size,
  },
})
