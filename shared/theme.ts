import Constants from 'expo-constants'

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
    buttonText: {
      size: 18,
      color: '#fff',
    },
  },
  buttons: {
    rounded: {
      borderRadius: 17,
      backgroundColor: '#1AB2D2',
      startGame: {
        width: 180,
        height: 55,
      },
    },
  },
}
