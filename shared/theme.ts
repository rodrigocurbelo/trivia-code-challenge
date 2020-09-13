import Constants from 'expo-constants'
import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

const primaryColor = '#1AB2D2'
const secondaryColor = '#2E425A'

export default {
  general: {
    spacing: 8, // All margins and paddings should be a multiple of this property.
  },
  layout: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1A2A3B',
  },
  robot: {
    headColor: primaryColor,
    headShadowColor: '#007B95',
    neckAndEarsColor: secondaryColor,
    facialFeaturesColor: '#19141E',
    speechBubblesTextColor: '#212121',
    speechBubblesBackgroundColor: '#fff',
    sizes: {
      menu: {
        width: window.width,
        height: window.width - 100,
      },
      feedback: {
        width: 200,
        height: 183,
      },
    },
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
      backgroundColor: primaryColor,
      startGame: {
        width: 180,
        height: 55,
      },
    },
    boolean: {
      width: window.width / 2 - 40,
      height: window.height / 2.8,
      defaultBackgroundColor: secondaryColor,
      trueBackgroundColor: primaryColor,
      falseBackgroundColor: '#D34819',
    },
    playAgain: {
      height: 60,
      backgroundColor: primaryColor,
    },
  },
  result: {
    wrongAnswerBorderColor: '#D34819',
    correctAnswerBorderColor: secondaryColor,
  },
}
