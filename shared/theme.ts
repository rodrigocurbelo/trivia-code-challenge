import Constants from 'expo-constants'
import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

export default {
  general: {
    spacing: 8, // All margins and paddings should be a multiple of this property.
  },
  layout: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1A2A3B',
  },
  text: {
    title: {
      size: 23,
      color: '#fff',
    },
    label: {
      size: 16,
      color: '#0AD1E4',
    },
    body: {
      size: 16,
      boldColor: '#fff',
      defaultColor: '#e6e6e6',
    },
    buttonText: {
      size: 18,
      color: '#fff',
    },
  },
  buttons: {
    borderRadius: 17,
    rounded: {
      backgroundColor: '#1AB2D2',
      startGame: {
        width: 180,
        height: 55,
      },
    },
    boolean: {
      width: window.width / 2 - 40,
      height: window.height / 3,
      defaultBackgroundColor: '#2E425A',
    },
  },
  result: {
    wrongAnswerBorderColor: '#D34819',
    correctAnswerBorderColor: '#2E425A',
  },
}
