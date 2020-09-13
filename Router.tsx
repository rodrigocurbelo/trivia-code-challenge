import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './modules/Home'
import Results from './modules/Results'
import NoInternet from './modules/NoInternet'
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
        <Stack.Screen
          name={Routes.Home}
          component={Home}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={Routes.MultipleOption}
          component={MultipleOption}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={Routes.Results}
          component={Results}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={Routes.NoInternet}
          component={NoInternet}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
