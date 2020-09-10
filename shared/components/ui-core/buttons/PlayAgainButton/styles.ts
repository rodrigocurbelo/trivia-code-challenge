import { StyleSheet, Dimensions } from 'react-native'

import theme from '../../../../theme'

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: theme.buttons.playAgain.height,
    justifyContent: 'center',
    backgroundColor: theme.buttons.playAgain.backgroundColor,
  },
})
