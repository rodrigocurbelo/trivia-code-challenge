import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'

import styles from './appStyle'
import configureStore from './shared/redux/setup/store'
import Router from './Router'
import { StatusBar, View } from 'react-native'

export default function App() {
  return (
    <Provider store={configureStore()}>
      <StatusBar hidden />

      <View style={styles.container}>
        <Router />
      </View>
    </Provider>
  )
}
