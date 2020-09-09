import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    height: theme.general.spacing * 7,
    justifyContent: 'space-between',
  },
  spacingOnTop: {
    marginTop: theme.general.spacing * 8,
  },
})
