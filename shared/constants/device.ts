import { Dimensions, Platform } from 'react-native'

const window = Dimensions.get('window')

export const isIPhoneX =
  (Platform.OS === 'ios' && window.height > 800) || window.width > 800
