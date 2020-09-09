import { StyleSheet } from 'react-native'

import theme from '../../../../theme'

export default StyleSheet.create({
  container: {
    width: theme.buttons.rounded.startGame.width,
    height: theme.buttons.rounded.startGame.height,
    borderRadius: theme.buttons.rounded.borderRadius,
    backgroundColor: theme.buttons.rounded.backgroundColor,
    justifyContent: 'center',
  },
})
