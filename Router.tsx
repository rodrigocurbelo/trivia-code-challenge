import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Home from './modules/Home'
import Results from './modules/Results'
import MultipleOption from './modules/MultipleOption'
import { Routes } from './shared/enums/routes'
import { navigationRef } from './shared/routerService'

const Stack = createStackNavigator()

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
}

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.MultipleOption} component={MultipleOption} />
        <Stack.Screen name={Routes.Results} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
