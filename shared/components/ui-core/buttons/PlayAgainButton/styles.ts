import { StyleSheet, Dimensions } from 'react-native'

import theme from '../../../../theme'
import { isIPhoneX } from '../../../../constants/device'

const windowWidth = Dimensions.get('window').width

const paddingBottom = isIPhoneX ? 15 : 0

export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: theme.buttons.playAgain.height + paddingBottom,
    paddingBottom,
    justifyContent: 'center',
    backgroundColor: theme.buttons.playAgain.backgroundColor,
  },
})
