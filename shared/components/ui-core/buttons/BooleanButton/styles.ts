import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    width: theme.buttons.boolean.width,
    height: theme.buttons.boolean.height,
    alignItems: 'center',
    borderRadius: theme.buttons.borderRadius,
    justifyContent: 'center',
    backgroundColor: theme.buttons.boolean.defaultBackgroundColor,
  },
})
