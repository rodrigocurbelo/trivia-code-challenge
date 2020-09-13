import { StyleSheet } from 'react-native'

import theme from '../../../../shared/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: theme.layout.paddingTop,
    justifyContent: 'space-between',
    backgroundColor: theme.layout.backgroundColor,
    paddingBottom: theme.general.spacing * 10,
  },
  welcomeImage: {
    width: 200,
  },
})
