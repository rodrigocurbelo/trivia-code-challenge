import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  text: {
    color: theme.text.buttonText.color,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: theme.text.buttonText.size,
  },
})
