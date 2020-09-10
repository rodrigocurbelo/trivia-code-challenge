import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.general.spacing,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
