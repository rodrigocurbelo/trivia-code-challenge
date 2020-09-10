import { StyleSheet } from 'react-native'

import theme from '../../../../shared/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.layout.paddingTop,
    backgroundColor: theme.layout.backgroundColor,
  },
  imageContainer: {
    paddingTop: theme.general.spacing * 2,
    alignItems: 'center',
  },
})
