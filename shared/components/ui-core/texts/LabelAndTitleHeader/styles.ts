import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    minHeight: 50,
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  spacingOnTop: {
    marginTop: theme.general.spacing * 8,
  },
})
