import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './shared/redux/setup/store'
import Router from './Router'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <Provider store={configureStore()}>
      <StatusBar hidden />

      <Router />
    </Provider>
  )
}
