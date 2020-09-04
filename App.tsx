import React from 'react'
import { Provider } from 'react-redux'

import Home from './components/Home'
import configureStore from './shared/redux/setup/store'

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  )
}
