import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    minHeight: theme.general.spacing * 7,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  spacingOnTop: {
    marginTop: theme.general.spacing * 8,
  },
})
