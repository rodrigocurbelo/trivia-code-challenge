import { StyleSheet } from 'react-native'

import theme from '../../../../shared/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.layout.paddingTop,
    backgroundColor: theme.layout.backgroundColor,
  },
  scrollView: {
    marginTop: 10,
  },
  scrollViewContainer: {
    paddingTop: 220,
  },
  robotContainer: {
    position: 'absolute',
    alignItems: 'center',
    paddingTop: theme.general.spacing * 2,
  },
})
