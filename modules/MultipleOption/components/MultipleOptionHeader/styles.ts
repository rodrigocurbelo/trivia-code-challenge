import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    height: windowHeight / 3,
  },
  robotHuh: {
    top: 0,
    position: 'absolute',
    transform: [{ rotate: 100 }],
  },
  robotGreatContainer: {
    transform: [
      {
        scaleX: -1,
      },
    ],
  },
  robotGreat: {
    top: 0,
    position: 'absolute',
    transform: [{ rotate: -100 }],
  },
  feedbackTextContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
