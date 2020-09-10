import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    height: windowHeight / 3,
  },
})
